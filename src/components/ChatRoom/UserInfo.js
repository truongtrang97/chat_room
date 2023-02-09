import { Avatar, Button, Typography } from 'antd';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../Context/AuthProvider';
import { auth, db } from '../../firebase/config';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);
    .usename {
        color: white;
        margin-left: 5px;
    }
`;

export default function UserInfo() {
    // useEffect(() => {
    //     //  event listner onSnapshot sẽ lắng nghe khi có sự thay đổi dữ liệu ở collection users và call back trong onSnapshot sẽ được thực thi
    //     // snapshot.docs: dữ liệu của tất cả document trong collection users,
    //     // doc.data: dữ liệu của từng document trong collection users
    //     db.collection('users').onSnapshot((snapshot) => {
    //         const data = snapshot.docs.map((doc) => ({
    //             // data()đây là một hàm có sẵn trong file firestore dùng để lấy và convert dữ liệu document từ db ra object javascripts.
    //             ...doc.data(),
    //             id: doc.id,
    //         }));
    //     });
    // });
    console.log(useContext(AuthContext));
    const { displayName, photoURL } = useContext(AuthContext);
    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0).toUpperCase()}</Avatar>
                <Typography.Text className="usename">{displayName}</Typography.Text>
            </div>
            <Button ghost onClick={() => auth.signOut()}>
                Đăng xuất
            </Button>
        </WrapperStyled>
    );
}
