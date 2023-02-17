import { Avatar, Button, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../Context/AuthProvider';
import { auth } from '../../firebase/config';

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
    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);
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
