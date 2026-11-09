# Chuyển tiền — Demo 3 trạng thái người dùng

Prototype HTML (Viettel Money) mô phỏng luồng: Home → bấm **Chuyển tiền** ở tab bar → màn chuyển tiền dạng chat, theo 3 trạng thái người dùng:

- **A · Vào lần đầu** — tooltip giới thiệu 2 bước (ô nhập → quét QR)
- **B · Đã vào nhưng chưa chuyển cho ai** — danh sách theo danh bạ; chạm ô chat để mở bàn phím
- **C · Đã từng chuyển** — danh sách đã lưu + gần đây

Mở trực tiếp case bằng hash: `#A`, `#B`, `#C`.

Static site, không cần build: `index.html`, `styles.css`, `app.js`, `assets/`.
Nguồn thiết kế: Figma "Chuyển tiền" (rGqOFsIydzTZRfybd7tZHn) — section Điểm chạm (25:20204) và 3 trạng thái (27:877).
