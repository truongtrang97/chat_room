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

-   `Collapse`: A content area which can be collapsed and expanded.

    -   Collapse: `<Collapse defaultActiveKey={['1']}>` : mặc định sẽ mở Panel có key là 1
    -   Panel: `<Panel header="Danh sách các phòng" key={['1']}>`: một collapse sẽ có nhiều Panel đánh dấu theo key
        -   Các class có sẵn của Panel trong antd:

-   `Button`:

    -   `Props`:
        -   ghost: `<Button ghost>Đăng xuất</Button>`: ghost - màu background cho button trong suốt.
        -   type: `<Button icon={<UserAddOutlined />} type="text">`: type = text để không có border phía ngoài

-   `Avatar`:

    -   `Avatar.Group`: `<Avatar.Group size="small" maxCount={2}>`: size kích thước avatar, maxCount số lượng avatar hiển thị còn lại sẽ ẩn.
    -   Avatar: `<Avatar>A</Avatar>`

-   `Tooltip`:

    -   Hover vào avatar sẽ hiện lên: ` <Tooltip title="A"><Avatar>A</Avatar> </Tooltip>`

-   `Form`:

    -   Props:
        -   layout: `<Form form={form} layout="vertical">`: để chỉnh các Form.Item nằm theo chiều dọc .
    -   `Form.Item`: thêm item bên trong form. `Form.Item label="Tên Phòng" name="name"`
        -   `Props:`:
    -   Form Item: `ant-form-item` css cho item
    -   Lấy dữ liệu trong form:
        -   `const form = Form.useForm() <Form form={form}>`: dùng để lấy dữ liệu từ các Item trong form
    -   Reset value tất cả các Form.Item: `form.resetFields();`: reset dữ liệu trong form.
    -   Reset dữ liệu các form Item dựa vàofield name của Form.Item: `form.resetFields(['mes']);`

-   `Input`:

    -   Bỏ border: `<Input bordered={false} autoComplete="off" />`
    -   `Input.TextArea`:

-   `Modal`:

    -   Props: `<Modal title="Tạo Phòng" visible={isAddRoomVisible} onOk={handelOk} onCancel={handleCancel}>`

-   `Alert`:

    -   Props: `<Alert message="Hãy chọn phòng" type="info" showIcon style={{ margin: 5 }} closable />`
        -   message
        -   type
        -   showIcon
        -   closale

-   `Select`:

    -   Props: `<Select labelInValue filterOption={false} onSearch={debounceFetcher} notFoundContent={fetching ? <Spin size="small" /> : null} />;`

        -   labelInValue
        -   filterOption={false}: để tránh filter lại khi đã filter thông qua api
        -   onSearch
        -   notFoundContent

        -   mode="multiple"
        -   Label="Tên các thành viên"
        -   value={value}
        -   placeholder="Nhập tên thành viên"

    -   `<Select.Option>`: <Select.Option value={opt.value} title={opt.label}>
        -   props:
            -   value:
            -   title:
