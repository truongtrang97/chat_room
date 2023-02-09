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

    -   Text: `<Typography.Text className="usename">User Name</Typography.Text>`
    -   Link:

-   `Collapse`:

    -   Collapse: `<Collapse defaultActiveKey={['1']}>` : mặc định sẽ mở Panel có key là 1
    -   Panel: `<Panel header="Danh sách các phòng" key={['1']}>`: một collapse sẽ có nhiều Panel đánh dấu theo key
        -   Các class có sẵn của Panel trong antd:

-   `Button`:

    -   ghost: `<Button ghost>Đăng xuất</Button>`: ghost - màu background cho button trong suốt.
    -   type: `<Button icon={<UserAddOutlined />} type="text">`: type = text để không có border phía ngoài

-   `Avatar`:

    -   Group: `<Avatar.Group size="small" maxCount={2}>`: size kích thước avatar, maxCount số lượng avatar hiển thị còn lại sẽ ẩn.
    -   Avatar: `<Avatar>A</Avatar>`

-   `Tooltip`:

    -   Hover vào avatar sẽ hiện lên: ` <Tooltip title="A"><Avatar>A</Avatar> </Tooltip>`

-   `Form`:
    -   Form Item: `ant-form-item` css cho item
-   `Input`:
    -   Bỏ border: `<Input bordered={false} autoComplete="off" />`
