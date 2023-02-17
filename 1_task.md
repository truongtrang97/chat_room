# 1 Login bằng facebook thông qua firebase

# 2 Config routing bằng react-router-dom

-   Sau khi login điều hướng người dùng vào giao diện chatroom:
    -   Kiểm tra user hợp lệ sẽ điều hướng từ trang login sang trang chat room.
        -   Cấu hình router cho App component.
            -   vào `/login` thì vào component Login
            -   vào `/` thì vào component chatroom.
        -   Tạo component chatroom.
            -   Tạo index.js trong ChatRoom
        -   Dùng history.push để điều hướng sang trang chatroom

# 3 Dùng context API

-   Sử dụng context API để thông tin user có thể sử dụng ở tất cả các component.
    -   Tạo provider AuthProvider trong Context.
    -   Đưa cấu hình router history và biến user vào AuthProvider.
    -   Dùng clean up function của useEffect để hủy đăng kí khi component unmount.
    -   Bọc App của chúng ta bằng AuthProvider

# Build UI với antd và style-components

-   Set max height và tạo thanh scroll cho meassage List
    -   max-height: 100%;
    -   overflow-y: auto; // Tạo thanh scoll khi height vượt quá chiều cao content

# Task tomorow

-   style syntax: styled-component.
-   Các component của antd.

# Làm phần hiển thị tin nhắn (cuối: 2:02 -> hết)

-   Cần lấy dữ liệu từ thẻ Input và khi người dùng nhấn nút gửi sẽ lưu dữ liệu lên DB
-   Sau đó lấy dữ liệu từ db và hiển thị lại tin nhắn.
