import React, { createContext, useContext, useMemo, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    // quản lí đóng mở modal thêm phòng.
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    // quản lí đóng mở modal thêm thành viên.
    const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
    // tìm room user đang chọn để hiển thị thông tin cho đúng.
    const [selectedRoomId, setSelectedRoomId] = useState('');

    // Dùng context api để lấy dữ liệu uid user từ AuthContext
    const {
        user: { uid },
    } = useContext(AuthContext);

    // Logic chỉ hiển thị những rooms mà user hiện tại đang login có uid bên trong.
    /**Cấu trúc dữ liệu trong một document của collection rooms
     * name: 'room name'
     * description: 'mo ta'
     * members: [uid1, uid2, ...]
     */

    // Ở đây ta dùng useMemo để mỗi lần component RoomList re-render thì sẽ không tạo mới một object khác(kiểu tham chiếu
    // sẽ tạo địa chỉ mới), vì khi tạo địa chỉ object mới thì condition trong useEffect của useFirestore sẽ chạy lại
    // và lấy lại room mới những thực tế chỉ cần chạy lại lấy các room mới khi uid thay đổi.
    const roomsCondition = useMemo(
        () => ({
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        }),
        [uid],
    );

    // Sẽ có nhiều component cần data room này và mỗi component sẽ đều gọi useFirestore và
    // query data , làm như vậy sẽ lặp lại các câu lệnh query mỗi khi gọi useFirestore nên ta
    // đưa vào context API để dùng chung cho mọi component.
    // Mọi component khi truy cập nên rooms đều nhận dữ liệu mới nhất.
    // console.log('roomsCondition: ', roomsCondition);
    const rooms = useFirestore('rooms', roomsCondition);

    const selectedRoom = useMemo(() => rooms.find((room) => room.id === selectedRoomId) || {}, [rooms, selectedRoomId]);

    // Lấy thông tin những members có trong room hiện tại
    const userCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members,
        };
    }, [selectedRoom.members]);

    const members = useFirestore('users', userCondition);

    return (
        <AppContext.Provider
            value={{
                rooms,
                selectedRoom,
                members,
                isAddRoomVisible,
                setIsAddRoomVisible,
                selectedRoomId,
                setSelectedRoomId,
                isInviteMemberVisible,
                setIsInviteMemberVisible,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
