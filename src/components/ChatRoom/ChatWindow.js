import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 16px;
    border-bottom: 1px solid rgb(230, 230, 230);
    .header {
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__title {
            margin: 0;
            font-weight: bold;
        }
        &_des {
            font-size: 12px;
        }
    }
`;
const ContentStyled = styled.div``;

export default function ChatWindow() {
    return (
        <div>
            <HeaderStyled>
                <div className="header__info">
                    <p className="header__title">Name</p>
                    <span className="header_des">Mo ta</span>
                </div>
                <div>
                    <Button icon={<UserAddOutlined />}>Mời</Button>
                    <Avatar.Group size="small" maxCount={2}>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="B">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="C">
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="D">
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </HeaderStyled>
            <ContentStyled></ContentStyled>
        </div>
    );
}
