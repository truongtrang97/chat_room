import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const WrapperStyled = styled.div`
    // Chiều cao chatwindow chiếm hết màn hình
    height: 100vh;
`;

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
const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;
const ContentStyled = styled.div`
    // chiều cao bằng chatwindow -header
    height: calc(100% - 56px);
    display: flex;
    // chiếm hết chiều ngang window
    flex-direction: column;
    // nội dung từ dưới lên trên
    justify-content: flex-end;
    padding: 11px;
`;
const MessageListStyled = styled.div`
    max-height: 100%;
    // Tạo thanh scoll khi height vượt quá chiều cao content
    overflow-y: auto;
`;
const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;
    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

export default function ChatWindow() {
    return (
        <WrapperStyled>
            <HeaderStyled>
                <div className="header__info">
                    <p className="header__title">Name</p>
                    <span className="header_des">Mo ta</span>
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} type="text">
                        Mời
                    </Button>
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
                </ButtonGroupStyled>
            </HeaderStyled>

            <ContentStyled>
                <MessageListStyled>
                    <Message text="test" displayName="Vuong" createAt={1233} photoUrl={null} />
                    <Message text="test1" displayName="Vuong" createAt={1233} photoUrl={null} />
                    <Message text="test2" displayName="Vuong" createAt={1233} photoUrl={null} />
                </MessageListStyled>
                <FormStyled>
                    <Form.Item>
                        <Input placeholder="Nhập tin nhắn ..." bordered={false} autoComplete="off" />
                    </Form.Item>
                    <Button type="primary">Gửi</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    );
}
