import styled from 'styled-components';

// Basic
const SideBarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
`;
//  Khi chương trình biên dịch gặp component `SideBarStyled` sẽ hiển thị thẻ div trên DOM có tên class tự sinh ra từ thư viện `styled-components` và ăn các styled như trên.

const WrapperStyled = styled.div`
    display: flex;
    .usename {
        color: white;
    }
`;

// Css cho classname usename là style của component con được bao bởi WrapperStyled
