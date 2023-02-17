import styled from 'styled-components';
import { Collapse, Typography, Button } from 'antd';

//  Khi chương trình biên dịch gặp component `SideBarStyled` sẽ hiển thị thẻ div trên DOM có tên class tự sinh ra từ thư viện `styled-components` và ăn các styled như trên.
// Basic
const SideBarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
`;

// Css cho classname usename là style của component con được bao bởi WrapperStyled
const WrapperStyled = styled.div`
    display: flex;
    .usename {
        color: white;
    }
`;

//
const HeaderStyled = styled.div`
    display: flex;
    .header {
        &__info {
            display: flex;
        }
        &__title {
            margin: 0;
        }
        &_des {
            font-size: 12px;
        }
    }
`;
<HeaderStyled>
    <div className="header__info">
        <p className="header__title">Name</p>
        <span className="header_des">Mo ta</span>
    </div>
</HeaderStyled>;

// Style lại component khác
// &&&:
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
