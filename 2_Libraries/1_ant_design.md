# Ant design

-   Grid chia bố cục 24 cột.
-   Xác định có bao nhiêu row, mỗi row có bao nhiêu col sau đó chia span cho col để đặt được kích thước mong muốn.
-   Tổng số span của col trên mỗi row phải bằng 24.

## Các component hay sử dụng

-   `Title`

    -   ` <Title style={{ textAlign: 'center' }} level={3}>`: level 3 giống như heading 3.

-   `Col`

    -   ` <Col span={8}>`: 8/24 col của antd => chiếm 1/3 chiều ngang.

-   `Typography`:

    -   Text:

-   `Collapse`:

    -   Collapse: `<Collapse defaultActiveKey={['1']}>` : mặc định sẽ mở Panel có key là 1
    -   Panel: `<Panel header="Danh sách các phòng" key={['1']}>`: một collapse sẽ có nhiều Panel đánh dấu theo key

-   `Button`:
    -   `<Button ghost>Đăng xuất</Button>`: ghost - màu background cho button trong suốt.
