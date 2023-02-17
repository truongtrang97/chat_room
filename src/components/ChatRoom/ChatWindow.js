import { UserAddOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input, Tooltip } from 'antd';
import React, { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/service';
import useFirestore from '../../hooks/useFirestore';
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
    const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);
    const {
        user: { uid, photoURL, displayName },
    } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState('');

    const [form] = Form.useForm();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleOnSubmit = () => {
        // Lưu giữ liệu message lên db
        addDocument('messages', {
            text: inputValue,
            uid,
            photoURL,
            displayName,
            roomId: selectedRoom.id,
        });
        form.resetFields(['mes']);
    };

    // Lấy dữ liệu message của room hiện tại hiển thị lên chat window
    const condition = useMemo(() => {
        return {
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom.id,
        };
    }, [selectedRoom.id]);

    const messages = useFirestore('messages', condition);
    console.log('messages: ', messages);
    return (
        <WrapperStyled>
            {selectedRoom.id ? (
                <>
                    <HeaderStyled>
                        <div className="header__info">
                            <p className="header__title">{selectedRoom.name}</p>
                            <span className="header_des">{selectedRoom.description}</span>
                        </div>
                        <ButtonGroupStyled>
                            <Button
                                icon={<UserAddOutlined />}
                                type="text"
                                onClick={() => setIsInviteMemberVisible(true)}
                            >
                                Mời
                            </Button>
                            <Avatar.Group size="small" maxCount={2}>
                                {members.map((member) => {
                                    return (
                                        <Tooltip title={member?.displayName} key={member.id}>
                                            <Avatar src={member?.photoURL}>
                                                {member.photoURL ? '' : member.displayName?.charAt(0)?.toUpperCase()}
                                            </Avatar>
                                        </Tooltip>
                                    );
                                })}
                            </Avatar.Group>
                        </ButtonGroupStyled>
                    </HeaderStyled>

                    <ContentStyled>
                        <MessageListStyled>
                            {messages.map((message) => {
                                console.log(message);
                                return (
                                    <Message
                                        key={message.id}
                                        text={message.text}
                                        displayName={message.displayName}
                                        createdAt={message.createdAt}
                                        photoUrl={message.photoURL}
                                    />
                                );
                            })}
                        </MessageListStyled>
                        <FormStyled form={form}>
                            <Form.Item name="mes">
                                <Input
                                    onChange={handleInputChange}
                                    onPressEnter={handleOnSubmit}
                                    placeholder="Nhập tin nhắn ..."
                                    bordered={false}
                                    autoComplete="off"
                                />
                            </Form.Item>
                            <Button type="primary" onClick={handleOnSubmit}>
                                Gửi
                            </Button>
                        </FormStyled>
                    </ContentStyled>
                </>
            ) : (
                <Alert message="Hãy chọn phòng" type="info" showIcon style={{ margin: 5 }} closable />
            )}
        </WrapperStyled>
    );
}
