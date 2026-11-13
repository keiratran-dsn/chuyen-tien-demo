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

Sau khi có người nhận: nhập số tiền (`500000`, `500k`, `1tr`…) → block xác nhận kiểu LPBank với chip [Sửa số tiền] [Sửa nội dung] [Sửa nguồn tiền] → [Tiếp tục] → bottom sheet Xác nhận chuyển tiền (Gate 9) → [Xác thực giao dịch] → bubble “Xác nhận chuyển tiền” + bill kết quả (Chia sẻ / Lịch sử GD / Lưu người nhận), chip [Thực hiện lại] [Chuyển tiền mới]. Mỗi lúc chỉ hiển thị 1 block chính, block cũ ẩn đi.

Đang dở luồng (đang hỏi số tiền hoặc ở block xác nhận) mà gõ một người nhận mới (ví dụ `0987 654 321`) → app hỏi “Bạn đang chuyển tiền cho … Bạn có muốn đổi người nhận sang … không?” với 2 lựa chọn [Đổi người nhận] / [Tiếp tục với …]. Đổi → tra lại người nhận mới, giữ số tiền và nội dung đã nhập. Dòng người nhận trên thẻ không còn icon > (không sửa trực tiếp).

## Luồng gõ chữ / tên

Panel bên trái có tab **Gõ chữ / tên** để bấm thử nhanh.

| Gõ | Kết quả |
|---|---|
| `Nguyễn Văn A` | Danh sách người nhận trùng tên, dòng cuối [Ngân hàng khác] |
| `Trần Thị Hương` | Khớp 1 người — vẫn hiện danh sách 1 dòng để chọn |
| `Vietcombank` → `Nguyễn Thị Linh` | Gõ ngân hàng trước → hỏi người nhận → tìm theo tên trong NH đó, dòng cuối [Nhập số tài khoản]; không khớp → hỏi STK |
| `Phạm Minh Khôi` | Tên không khớp ai → hỏi ngân hàng → hỏi STK ở NH đó |
| `dfgh ??? kk` | Không tìm thấy thông tin, mời nhập lại |
| `nguyenvana` | Liền không dấu khớp tên → danh sách |
| `tuanpham88` | Liền không dấu khớp tài khoản định danh → thẻ thông tin |
| `Nguyễn Văn A 19033456789` | Chữ + số → ưu tiên STK → thẻ thông tin |
| `Minh 0912345678 0451000456789` | 2 dãy số → hỏi chuyển đến số nào |
| `chuyển 200k cho Vy` | Tách số tiền + tên → chọn Vy nào → tự điền 200.000đ, vào thẳng block xác nhận |

## Dán / Tải ảnh / Chụp ảnh (AI)

Theo section Figma `3 · Dán / Tải ảnh / Chụp ảnh (AI) - Luồng chi tiết` (node 158:12163).

- **Dán**: lần đầu hỏi quyền dán (pop-up iOS) → nội dung mẫu tự gửi, không cần bấm gửi. Dán bằng thao tác hệ thống (Cmd/Ctrl+V) đoạn dài vào ô chat rồi gửi cũng đi luồng AI.
- **Tải ảnh**: mở thư viện ảnh mẫu → chọn xong ảnh tự gửi.
- **Chụp ảnh**: lần đầu hỏi quyền Camera → khung chụp → chụp xong ảnh tự gửi.
- Khi AI đọc: hệ thống gửi bubble “…” phát sáng xanh tím nhấp nháy. Kết quả trả về dạng tin nhắn trong chat:
  - đủ STK + ngân hàng + số tiền → block xác nhận;
  - thiếu số tiền → thẻ Thông tin chuyển tiền + hỏi số tiền;
  - thiếu ngân hàng → hỏi ngân hàng (giữ số tiền đã đọc);
  - thiếu người nhận → báo phần đã đọc được, hỏi STK/số thẻ ở ngân hàng đó (chỉ có số tiền thì hỏi người nhận);
  - không đọc được → tin nhắn hướng dẫn, chip vẫn ở dưới để thử lại.
- Tên người nhận lấy từ tra cứu, không lấy tên trong văn bản/ảnh.
- Thử nhanh: tab **Dán / Ảnh (AI)** trong “Thử nhanh các case”.

## Chuyển tiền thường (CITAD)

Thử nhanh ở tab **Chuyển tiền thường** trong bảng "Thử nhanh".

| Luồng | Cách thử | Diễn biến |
|---|---|---|
| 1 · NH chỉ hỗ trợ chuyển tiền thường | Gõ `1902 1304 7615 4611 HSBC` (hoặc gõ STK rồi chọn HSBC trong danh sách — có icon đồng hồ) | Bottom sheet "Giao dịch chuyển tiền thường" → **Đã hiểu**: hỏi tên chủ tài khoản (tự chuyển in hoa, không dấu) → thông tin + cảnh báo → số tiền → xác nhận (phí 3.000đ, cảnh báo, chip Sửa tên người nhận). **Quay lại**: hỏi lại "Bạn muốn chuyển tiền cho ai?" |
| 2 · Chọn lại từ Gần đây | Case C → Gần đây → NGUYEN VAN B · HSBC | Sheet → Đã hiểu → "Tên người nhận lấy từ giao dịch trước…" → thông tin → hỏi số tiền (chip Sửa tên người nhận) |
| 3 · Napas lỗi → gợi ý chuyển tiền thường | `0451 000 456 789 MBBank` (bảo trì), `…788` (không tìm thấy qua chuyển nhanh), `…787` (truy vấn lỗi) | Sheet lỗi → **Chuyển tiền thường**: hỏi tên như luồng 1; **Quay lại**: hỏi lại người nhận |
| 4 · Tài khoản rủi ro | `0868 999 888 777 Techcombank` → nhập số tiền | Chặn giao dịch → Xem chi tiết (lý do) / Chọn người nhận khác |

Nguồn tiền của chuyển tiền thường cố định là ViettelPay; tổng thanh toán = số tiền + 3.000đ.
