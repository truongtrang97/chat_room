import { PlusSquareOutlined } from '@ant-design/icons';
import { Collapse, Typography, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
    /* &&& tăng độ ưu tiên cho 3 class viết liền nhau như sass */
    &&& {
        .ant-collapse-header,
        p {
            color: white;
        }
        .ant-collapse-content-box {
            padding: 0 40px;
        }
        .add_room {
            color: white;
            padding: 0;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    padding: 0;
`;

export default function RoomList() {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách các phòng" key={['1']}>
                <LinkStyled>Room1</LinkStyled>
                <LinkStyled>Room2</LinkStyled>
                <Button type="text" icon={<PlusSquareOutlined />} className="add_room">
                    Thêm Phòng
                </Button>
            </PanelStyled>
        </Collapse>
    );
}
