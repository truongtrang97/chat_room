import { Avatar, Typography } from 'antd';
import { formatRelative } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    margin-bottom: 10px;
    .author {
        margin-left: 5px;
        font-weight: bold;
    }
    .date {
        margin-left: 18px;
        font-size: 11px;
        color: #a7a7a7;
    }
    .content {
        margin-left: 30px;
    }
`;
export default function Message({ text, displayName, createdAt, photoUrl }) {
    const formatDate = (seconds) => {
        let formattedDate = '';
        if (seconds) {
            // formatRelative funtion này sẽ lấy giây hiện tại so sánh với giây truyền vào và format lại thời gian để hiển thị cho đúng.
            formattedDate = formatRelative(new Date(seconds * 1000), new Date());
            // Ghi hoa kí tự đầu tiên
            formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        }
        return formattedDate;
    };
    return (
        <WrapperStyled>
            <div>
                <Avatar size="small" src={photoUrl}>
                    {photoUrl ? '' : displayName.charAt(0)?.toUpperCase()}
                </Avatar>
                <Typography.Text className="author">{displayName}</Typography.Text>
                <Typography.Text className="date">{formatDate(createdAt?.seconds)}</Typography.Text>
            </div>
            <div>
                <Typography.Text className="content">{text}</Typography.Text>
            </div>
        </WrapperStyled>
    );
}
