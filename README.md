# Chuyển tiền — Demo 3 trạng thái người dùng

Prototype HTML (Viettel Money) mô phỏng luồng: Home → bấm **Chuyển tiền** ở tab bar → màn chuyển tiền dạng chat, theo 3 trạng thái người dùng:

- **A · Vào lần đầu** — tooltip giới thiệu 2 bước (ô nhập → quét QR)
- **B · Đã vào nhưng chưa chuyển cho ai** — danh sách theo danh bạ; chạm ô chat để mở bàn phím
- **C · Đã từng chuyển** — danh sách đã lưu + gần đây

Mở trực tiếp case bằng hash: `#A`, `#B`, `#C`.

Static site, không cần build: `index.html`, `styles.css`, `app.js`, `assets/`.
Nguồn thiết kế: Figma "Chuyển tiền" (rGqOFsIydzTZRfybd7tZHn) — section Điểm chạm (25:20204) và 3 trạng thái (27:877).

## Luồng “Gõ dãy số” (tương tác thật)

Gõ vào ô chat rồi gửi (Enter / nút gửi), hoặc bấm các dòng mẫu ở bảng bên trái:

| Dãy số | Kết quả |
|---|---|
| `0912 345 678` | SĐT có trong lịch sử → danh sách gộp + [Ngân hàng khác] |
| `0987 654 321` | SĐT chưa có giao dịch → hỏi ngân hàng (bottom sheet) |
| `0071000312345` | STK có trong lịch sử |
| `19036688202401` | STK chưa có giao dịch → hỏi ngân hàng |
| `9704 3661 2345 6789` | Thẻ khớp BIN → thẻ Thông tin chuyển tiền ngay |
| `21510000123457` + BIDV | Không tìm thấy TK hợp lệ (không tồn tại / đã đóng / nhầm NH) → [Chọn ngân hàng khác] hoặc nhập lại STK |
| `12345` | Không ra kết quả |
| `21510000123456` | Tra cứu quá lâu → icon gửi lại trên tin cũ |

Sau khi có người nhận: nhập số tiền (`500000`, `500k`, `1tr`…) → block xác nhận kiểu LPBank với chip [Sửa số tiền] [Sửa nội dung] [Sửa nguồn tiền] → [Tiếp tục] → bottom sheet Xác nhận chuyển tiền (Gate 9). Mỗi lúc chỉ hiển thị 1 block chính, block cũ ẩn đi.

Đang dở luồng (đang hỏi số tiền hoặc ở block xác nhận) mà gõ một người nhận mới (ví dụ `0987 654 321`) → app hỏi “Bạn đang chuyển tiền cho … Bạn có muốn đổi người nhận sang … không?” với 2 lựa chọn [Đổi người nhận] / [Tiếp tục với …]. Đổi → tra lại người nhận mới, giữ số tiền và nội dung đã nhập. Dòng người nhận trên thẻ không còn icon > (không sửa trực tiếp).
