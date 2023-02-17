import { Modal, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/service';

export default function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const {
        user: { uid },
    } = useContext(AuthContext);
    const [form] = Form.useForm();
    const handelOk = () => {
        // add new room to firestore
        console.log(form.getFieldValue());
        addDocument('rooms', { ...form.getFieldValue(), members: [uid] });
        // Reset form value
        form.resetFields();
        setIsAddRoomVisible(false);
    };
    const handleCancel = () => {
        // Reset form value
        form.resetFields();
        setIsAddRoomVisible(false);
    };
    return (
        <div>
            <Modal title="Tạo Phòng" visible={isAddRoomVisible} onOk={handelOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên Phòng" name="name">
                        <Input placeholder="Nhập tên phòng..." />
                    </Form.Item>
                    {/* Đặt tên  name="description" cho đúng, description chính là key của object trả về từ form.getFieldValue()*/}
                    <Form.Item label="Mô tả" name="description">
                        <Input placeholder="Nhập mô tả..." />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
