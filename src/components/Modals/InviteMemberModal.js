import { Modal, Form, Avatar, Select, Spin } from 'antd';
import { debounce } from 'lodash';
import React, { useContext, useMemo, useState } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { db } from '../../firebase/config';

// Thực hiện chức năng tìm kiếm người dùng có trong database với key search
// sẽ thực hiện một debounceSelect
function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
    /**
     * fetchOptions: truyền vào một api để khi gõ từ để select sẽ gọi api này để lấy ra danh sách user tương ứng với từ nhập
     * debounceTimeout: để set một khoảng thời gian mới gọi api chứ không gọi api liên tục mỗi khi gõ kí tự
     * props: props phía bên ngoài vào
     * @returns
     */

    // một cờ để biết có đang lấy dữ liệu từ database hay không
    const [fetching, setFetching] = useState(false);
    // options để lưu các user đã chọn sau khi gọi api và filter theo search
    const [options, setOptions] = useState([]);

    // debounceFetcher: Dùng để gọi api lấy dữ liệu
    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            // trước khi load options mới reset options cũ về mảng rỗng
            setOptions([]);
            setFetching(true);

            // gọi api lấy options mới
            fetchOptions(value, props.currentMembers).then((newOptions) => {
                setOptions(newOptions);
                setFetching(false);
            });
        };
        // dùng debounce từ lodash => thay vì tự viết hook debounce
        return debounce(loadOptions, debounceTimeout);
    }, [debounceTimeout, fetchOptions, props.currentMembers]);

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {/* Sau khi gọi api ta sẽ custom để có dữ liệu options theo format sau
            [{label(displayName), value(uid), photoURL }]
            */}
            {options.map((opt) => {
                return (
                    <Select.Option key={opt.value} value={opt.value} title={opt.label}>
                        <Avatar src={opt.photoURL} size="small">
                            {opt.photoURL ? '' : opt.label?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        {`${opt.label}`}
                    </Select.Option>
                );
            })}
        </Select>
    );
}

export default function InviteMemberModal() {
    const { isInviteMemberVisible, setIsInviteMemberVisible, selectedRoomId, selectedRoom } = useContext(AppContext);

    // value sẽ là mảng chứa thông tin những user được chọn
    // chính là options của DebounceSelect khi onSearch
    const [value, setValue] = useState([]);

    const [form] = Form.useForm();
    const handelOk = () => {
        form.resetFields();

        // update members in current room
        // Lấy ra room có id là selectedRoomId , room đang chọn
        const roomRef = db.collection('rooms').doc(selectedRoomId);

        roomRef.update({
            // ...selectedRoom.members giữ lại những member hiện tại
            members: [...selectedRoom.members, ...value.map((val) => val.value)],
        });

        setIsInviteMemberVisible(false);
    };
    const handleCancel = () => {
        // Reset form value
        form.resetFields();
        setIsInviteMemberVisible(false);
    };

    const fetchUserList = async (search, currentMembers) => {
        return (
            db
                .collection('users')
                .where('keywords', 'array-contains', search)
                .orderBy('displayName')
                // Lấy tối đa 20 user
                .limit(20)
                .get()
                // Hàm này trả về một promise
                .then((snapshot) => {
                    return snapshot.docs
                        .map((doc) => {
                            // trả về format cho object  option như định nghĩa ở DebounceSelect
                            return {
                                label: doc.data().displayName,
                                value: doc.data().uid,
                                photoURL: doc.data().photoURL,
                            };
                        })
                        .filter((opt) => {
                            // cần loại bỏ currentMembers hiện tại đã có trong phòng không hiển thị lên select
                            return !currentMembers.includes(opt.value);
                        });
                })
        );
    };
    console.log('value: ', value);
    return (
        <div>
            <Modal title="Tạo Phòng" visible={isInviteMemberVisible} onOk={handelOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <DebounceSelect
                        mode="multiple"
                        label="Tên các thành viên"
                        value={value}
                        placeholder="Nhập tên thành viên"
                        fetchOptions={fetchUserList}
                        onChange={(newValue) => setValue(newValue)}
                        style={{ width: '100%' }}
                        currentMembers={selectedRoom.members}
                    ></DebounceSelect>
                </Form>
            </Modal>
        </div>
    );
}
