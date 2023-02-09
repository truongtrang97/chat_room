# Giới thiệu

-   `Firebase` là một nền tảng để phát triển ứng dụng di động và trang web, bao gồm các API đơn giản và mạnh mẽ mà không cần backend hay server.
-   Firebase là dịch vụ cơ sở dữ liệu hoạt động trên nền tảng đám mây – cloud.
-   Kèm theo đó là hệ thống máy chủ cực kỳ mạnh mẽ của Google.
-   Chức năng chính là giúp người dùng lập trình ứng dụng bằng cách đơn giản hóa các thao tác với cơ sở dữ liệu.

-   Firebase hiện nay bao gồm các hoạt động như:

    -   `Firebase Realtime Database`: cho phép người dùng lưu trữ và đồng bộ dữ liệu theo thời gian thực. Dịch vụ này được lưu trữ trực tiếp trên iCloud. Trong trường hợp thiết bị của bạn ngoại tuyến thì chúng sẽ sử dụng tới bộ nhớ của thiết bị và tự động đồng bộ lên server khi thiết bị online. Do đó bạn hoàn toàn có thể yên tâm về độ tương tác.
    -   `Freebase Authentication`: cung cấp cho ứng dụng của bạn một số phương pháp xác thực thông qua email, mật khẩu, số điện thoải, tài khoản Google, tài khoản Facebook… Với tính năng này, người dùng sẽ dễ dàng xây dựng login mà không cần sử dụng dữ liệu đăng ký riêng
    -   `Firebase Hosting`: Đây là một hoạt động được phân phối thông qua tiêu chuẩn công nghệ bảo mật SSl từ hệ thống mạng CDN.
    -   `Firebase cloud messaging`:Bởi thế Firebase cloud messaging (FCM) là tính năng cơ bản nhất của nền tảng này, nó cho phép người dùng xây dựng ứng dụng chat và đẩy thông báo tới nhiều thiết bị khác nhau như web,Android, iOS… Điểm nổi bật của dịch vụ này là hầu như không có bất kỳ mã hóa nào liên quan!

-   https://wiki.matbao.net/firebase-la-gi-giai-phap-lap-trinh-khong-can-backend-tu-google/
-   https://viblo.asia/p/tim-hieu-so-luoc-ve-firebase-Eb85oeOmZ2G

# Firebase anthentication với fb hoặc google

## Facebook

-   Tạo project trên firebase
-   Kết nối project trên firebase với project của chúng ta.
    -   Vào Project setting chọn web app , copy info firebase SDK,
    -   Tạo thư mục firebase trong src, tạo file config.js pass thông tin firebase project trên firebase vào.
-   Tại component kết nối tới firebase bằng `signInWithPopup`.
-   Cấu hình firebase và facebook để chúng kết hợp với nhau.
    -   Vào Anthentication của firebase -> Get Started -> enable Facebook.
    -   Vào https://developers.facebook.com/ tạo ứng dụng mới -> chọn người tiêu dùng -> tạo app -> chọn đăng nhập bằng facebook -> copy URI từ Authentication của firebase qua-> save. Vào cài đặt copy ID và ID secret của facebook qua firebase -> Save -> Xong.

# Sử dụng database trên firebase với FireStore(realtime database)

-   Vào firebase chọn project chat-room -> chọn Build chọn FireStore -> chọn vùng.
-   Tạo thành công sẽ vào giao diện sau : https://console.firebase.google.com/project/chat-room-26b3d/firestore/data/~2F

## Đọc ghi dữ liệu lên firestore.

-   Add: `db.collection(collection_name).add({data})`

    -   `Uncaught (in promise) FirebaseError: Missing or insufficient permissions.`: Lỗi không add được dữ liệu lên firestore: https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions

-   `Một ưu điểm của firestore là realtime database`:
    -   Giúp chúng ta có thể lắng nghe sự kiện khi có collection có sự thay đổi thêm hay xóa dữ liệu.
    -   Firebase cung cấp cho chúng ta một sự kiện là onSnapshot(event listioner), khi có sự thay đổi thì callback trong onSnapshot sẽ được gọi ngay, giống onClick.

# Firebase Local Emulator Suite. Giả lập firebase dưới local

-   Cài đặt và sử dụng các tính năng trên firebase dưới local.
-   https://firebase.google.com/docs/emulator-suite
    -   Tạo thư mục emulator cd tới
    -   Cài đặt firebase command line: `sudo npm i -g firebase-tools`
    -   Login dưới local: `firebase login`
    -   Tạo firebase dưới local: `firebase init`. Dùng `space` để chọn enter để đi tiếp. - Sau khi cài đặt giả lập thành công sẽ xuất hiện các file cấu hình trong thư mục emulators.
-   Run firebase emulator bằng: `firebase emulators:start`
-   Cấu hình trong project React để trỏ tới các server emulators:
    -   `auth.useEmulator('http://localhost:9099')`
    -   `db.useEmulator('localhost', '8080')`
    -   Check server có phải đang chạy ở localhost hay không: `if (window.location.hostname === 'localhost')`
    -   Sau khi reset lại server sẽ tự logout và sử dụng server dưới localhost.

# Ref

-   `const auth = firebase.auth();` // https://firebase.google.com/docs/auth/web/facebook-login#web-version-8_4
-   ` const db = firebase.firestore();` // https://firebase.google.com/docs/firestore/quickstart#web-version-8
