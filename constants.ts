export const NLS_COMPONENT_OPTIONS = [
  { code: "1.1", label: "1.1. Duyệt, tìm kiếm và lọc dữ liệu, thông tin và nội dung số" },
  { code: "1.2", label: "1.2. Đánh giá dữ liệu, thông tin và nội dung số" },
  { code: "1.3", label: "1.3. Quản lý dữ liệu, thông tin và nội dung số" },
  { code: "2.1", label: "2.1. Tương tác thông qua công nghệ số" },
  { code: "2.2", label: "2.2. Chia sẻ thông tin và nội dung thông qua công nghệ số" },
  { code: "2.3", label: "2.3. Sử dụng công nghệ số để thực hiện trách nhiệm công dân" },
  { code: "2.4", label: "2.4. Hợp tác thông qua công nghệ số" },
  { code: "2.5", label: "2.5. Quy tắc ứng xử trên mạng" },
  { code: "2.6", label: "2.6. Quản lý danh tính số" },
  { code: "3.1", label: "3.1. Phát triển nội dung số" },
  { code: "3.2", label: "3.2. Tích hợp và tạo lập lại nội dung số" },
  { code: "3.3", label: "3.3. Thực thi bản quyền và giấy phép" },
  { code: "3.4", label: "3.4. Lập trình" },
  { code: "4.1", label: "4.1. Bảo vệ thiết bị" },
  { code: "4.2", label: "4.2. Bảo vệ dữ liệu cá nhân và quyền riêng tư" },
  { code: "4.3", label: "4.3. Bảo vệ sức khỏe và an sinh số" },
  { code: "4.4", label: "4.4. Bảo vệ môi trường" },
  { code: "5.1", label: "5.1. Giải quyết các vấn đề kỹ thuật" },
  { code: "5.2", label: "5.2. Xác định nhu cầu và giải pháp công nghệ" },
  { code: "5.3", label: "5.3. Sử dụng sáng tạo công nghệ số" },
  { code: "5.4", label: "5.4. Xác định các vấn đề cần cải thiện về NLS" },
  { code: "6.1", label: "6.1. Hiểu biết về trí tuệ nhân tạo" },
  { code: "6.2", label: "6.2. Sử dụng trí tuệ nhân tạo" },
  { code: "6.3", label: "6.3. Đánh giá trí tuệ nhân tạo" },
];

export const NLS_LEVEL_DETAILS: Record<string, { code: string; desc: string; grade: string }[]> = {
  "1.1": [
    { code: "CB1a", desc: "Xác định được nhu cầu thông tin, tìm kiếm dữ liệu, thông tin và nội dung thông qua tìm kiếm đơn giản trong môi trường số.", grade: "Lớp 1, 2, 3" },
    { code: "CB1b", desc: "Tìm được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", grade: "Lớp 1, 2, 3" },
    { code: "CB1c", desc: "Xác định được các chiến lược tìm kiếm đơn giản.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Xác định được nhu cầu thông tin.", grade: "Lớp 4, 5" },
    { code: "CB2b", desc: "Tìm được dữ liệu, thông tin và nội dung thông qua tìm kiếm đơn giản trong môi trường số.", grade: "Lớp 4, 5" },
    { code: "CB2c", desc: "Tìm được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", grade: "Lớp 4, 5" },
    { code: "CB2d", desc: "Xác định được các chiến lược tìm kiếm đơn giản.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Giải thích được nhu cầu thông tin.", grade: "Lớp 6, 7" },
    { code: "TC1b", desc: "Thực hiện được rõ ràng và theo quy trình các tìm kiếm để tìm dữ liệu, thông tin và nội dung trong môi trường số.", grade: "Lớp 6, 7" },
    { code: "TC1c", desc: "Giải thích được cách truy cập và điều hướng các kết quả tìm kiếm.", grade: "Lớp 6, 7" },
    { code: "TC1d", desc: "Giải thích được rõ ràng và theo quy trình chiến lược tìm kiếm.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Minh họa được nhu cầu thông tin.", grade: "Lớp 8, 9" },
    { code: "TC2b", desc: "Tổ chức được tìm kiếm dữ liệu, thông tin và nội dung trong môi trường số.", grade: "Lớp 8, 9" },
    { code: "TC2c", desc: "Mô tả được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", grade: "Lớp 8, 9" },
    { code: "TC2d", desc: "Tổ chức được các chiến lược tìm kiếm.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Đáp ứng được nhu cầu thông tin.", grade: "Lớp 10, 11, 12" },
    { code: "NC1b", desc: "Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.", grade: "Lớp 10, 11, 12" },
    { code: "NC1c", desc: "Chỉ cho người khác cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", grade: "Lớp 10, 11, 12" },
    { code: "NC1d", desc: "Tự đề xuất được chiến lược tìm kiếm.", grade: "Lớp 10, 11, 12" },
  ],
  "1.2": [
    { code: "CB1a", desc: "Phát hiện được độ tin cậy và độ chính xác của các nguồn chung của dữ liệu, thông tin và nội dung số.", grade: "Lớp 1, 2, 3" },
    { code: "CB1b", desc: "Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Phát hiện được độ tin cậy và độ chính xác của các nguồn chung của dữ liệu, thông tin và nội dung số.", grade: "Lớp 4, 5" },
    { code: "CB2b", desc: "Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số được xác định rõ ràng.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Thực hiện phân tích, so sánh, đánh giá được độ tin cậy và độ chính xác của các nguồn dữ liệu, thông tin và nội dung số đã được tổ chức rõ ràng.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Thực hiện phân tích, so sánh và đánh giá được các nguồn dữ liệu, thông tin và nội dung số.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Thực hiện đánh giá được độ tin cậy và độ tin cậy của các nguồn dữ liệu, thông tin và nội dung số.", grade: "Lớp 10, 11, 12" },
    { code: "NC1b", desc: "Tiến hành đánh giá được các dữ liệu, thông tin và nội dung số khác nhau.", grade: "Lớp 10, 11, 12" },
  ],
  "1.3": [
    { code: "CB1a", desc: "Xác định được cách tổ chức, lưu trữ và truy xuất dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường số.", grade: "Lớp 1, 2, 3" },
    { code: "CB1b", desc: "Nhận biết được nơi để sắp xếp dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường có cấu trúc.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Xác định được cách tổ chức, lưu trữ và truy xuất dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường số.", grade: "Lớp 4, 5" },
    { code: "CB2b", desc: "Nhận biết được nơi để sắp xếp dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường có cấu trúc.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Lựa chọn được dữ liệu, thông tin và nội dung để tổ chức, lưu trữ và truy xuất chúng một cách thường xuyên trong môi trường số.", grade: "Lớp 6, 7" },
    { code: "TC1b", desc: "Sắp xếp chúng một cách trật tự trong một môi trường có cấu trúc.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Sắp xếp được thông tin, dữ liệu, nội dung để dễ dàng lưu trữ và truy xuất.", grade: "Lớp 8, 9" },
    { code: "TC2b", desc: "Tổ chức được thông tin, dữ liệu và nội dung trong một môi trường có cấu trúc.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Thao tác được thông tin, dữ liệu và nội dung để tổ chức, lưu trữ và truy xuất dễ dàng hơn.", grade: "Lớp 10, 11, 12" },
    { code: "NC1b", desc: "Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc.", grade: "Lớp 10, 11, 12" },
  ],
  "2.1": [
    { code: "CB1a", desc: "Lựa chọn được các công nghệ số đơn giản để tương tác.", grade: "Lớp 1, 2, 3" },
    { code: "CB1b", desc: "Xác định được các phương tiện giao tiếp đơn giản thích hợp cho một bối cảnh cụ thể.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Lựa chọn được các công nghệ số đơn giản để tương tác.", grade: "Lớp 4, 5" },
    { code: "CB2b", desc: "Xác định được các phương tiện giao tiếp đơn giản thích hợp cho một bối cảnh cụ thể.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Thực hiện các tương tác rõ ràng và thường xuyên với công nghệ số (sử dụng công cụ trắc nghiệm, bảng tương tác).", grade: "Lớp 6, 7" },
    { code: "TC1b", desc: "Lựa chọn được các phương tiện giao tiếp số phù hợp, được xác định rõ ràng cho phù hợp với bối cảnh nhất định.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Lựa chọn được nhiều công nghệ số để tương tác.", grade: "Lớp 8, 9" },
    { code: "TC2b", desc: "Lựa chọn được nhiều phương tiện truyền thông số cho phù hợp với bối cảnh nhất định.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Sử dụng được nhiều công nghệ số để tương tác.", grade: "Lớp 10, 11, 12" },
    { code: "NC1b", desc: "Cho người khác thấy phương tiện giao tiếp số phù hợp nhất cho một bối cảnh cụ thể.", grade: "Lớp 10, 11, 12" },
  ],
  "2.2": [
    { code: "CB1a", desc: "Nhận biết được các công nghệ số đơn giản, phù hợp để chia sẻ dữ liệu, thông tin và nội dung kỹ thuật số.", grade: "Lớp 1, 2, 3" },
    { code: "CB1b", desc: "Nhận biết được phương pháp trích dẫn và ghi nguồn cơ bản.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Nhận biết được các công nghệ số đơn giản, phù hợp để chia sẻ dữ liệu, thông tin và nội dung kỹ thuật số.", grade: "Lớp 4, 5" },
    { code: "CB2b", desc: "Xác định được phương pháp trích dẫn và ghi nguồn cơ bản.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Lựa chọn các công nghệ số phù hợp được xác định rõ để trao đổi dữ liệu, thông tin và nội dung số.", grade: "Lớp 6, 7" },
    { code: "TC1b", desc: "Giải thích cách thức hoạt động như một trung gian để chia sẻ thông tin và nội dung thông qua các công nghệ kỹ thuật số được xác định rõ ràng và thường xuyên.", grade: "Lớp 6, 7" },
    { code: "TC1c", desc: "Minh họa rõ ràng và thường xuyên các phương pháp tham chiếu và ghi chú nguồn.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Vận dụng được các công nghệ số phù hợp để chia sẻ dữ liệu, thông tin và nội dung số.", grade: "Lớp 8, 9" },
    { code: "TC2b", desc: "Giải thích được cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua công nghệ số.", grade: "Lớp 8, 9" },
    { code: "TC2c", desc: "Áp dụng được các phương pháp tham chiếu và ghi chú nguồn.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Chia sẻ dữ liệu, thông tin và nội dung số thông qua nhiều công cụ số phù hợp.", grade: "Lớp 10, 11, 12" },
    { code: "NC1b", desc: "Hướng dẫn người khác cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua công nghệ số.", grade: "Lớp 10, 11, 12" },
    { code: "NC1c", desc: "Áp dụng được nhiều phương pháp tham chiếu và ghi nguồn khác nhau.", grade: "Lớp 10, 11, 12" },
  ],
  "2.3": [
    { code: "CB1a", desc: "Xác định được các dịch vụ số đơn giản để có thể tham gia vào xã hội.", grade: "Lớp 1, 2, 3" },
    { code: "CB1b", desc: "Nhận biết được các công nghệ số đơn giản, phù hợp để nâng cao năng lực cho bản thân và tham gia vào xã hội với tư cách là một công dân.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Xác định được các dịch vụ số đơn giản để có thể tham gia vào xã hội.", grade: "Lớp 4, 5" },
    { code: "CB2b", desc: "Nhận biết được các công nghệ số đơn giản, phù hợp để nâng cao năng lực cho bản thân và tham gia vào xã hội với tư cách là một công dân.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Lựa chọn được các dịch vụ số được xác định rõ ràng và phổ biến để tham gia vào xã hội.", grade: "Lớp 6, 7" },
    { code: "TC1b", desc: "Xác định được các công nghệ số rõ ràng và thích hợp để tự mình trang bị và tham gia vào xã hội như một công dân.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Lựa chọn được các dịch vụ số để tham gia vào xã hội.", grade: "Lớp 8, 9" },
    { code: "TC2b", desc: "Thảo luận về các công nghệ số phù hợp để nâng cao năng lực của bản thân và tham gia vào xã hội với tư cách là một công dân.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Đề xuất được các dịch vụ số khác nhau để tham gia vào xã hội.", grade: "Lớp 10, 11, 12" },
    { code: "NC1b", desc: "Sử dụng được các công nghệ số thích hợp để tự mình trang bị và tham gia vào xã hội như một công dân.", grade: "Lớp 10, 11, 12" },
  ],
  "2.4": [
    { code: "CB1a", desc: "Chọn được những công cụ và công nghệ số đơn giản cho các quá trình cộng tác.", grade: "Lớp 1, 2, 3" },
    { code: "CB2a", desc: "Lựa chọn được các công cụ và công nghệ số đơn giản cho các quá trình cộng tác.", grade: "Lớp 4, 5" },
    { code: "TC1a", desc: "Lựa chọn được các công cụ và công nghệ số được xác định rõ ràng và thường xuyên cho các quá trình hợp tác.", grade: "Lớp 6, 7" },
    { code: "TC2a", desc: "Đề xuất được các công cụ và công nghệ số cho các quá trình hợp tác.", grade: "Lớp 8, 9" },
    { code: "NC1a", desc: "Chọn được những công cụ và công nghệ số khác nhau cho các quá trình hợp tác.", grade: "Lớp 10, 11, 12" },
  ],
  "2.5": [
    { code: "CB1a", desc: "Phân biệt được các chuẩn mực hành vi đơn giản và biết cách sử dụng công nghệ số và tương tác trong môi trường số.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Làm rõ được các chuẩn mực hành vi thường xuyên và được xác định rõ ràng.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng được các chuẩn mực hành vi và bí quyết khác nhau.", grade: "Lớp 10, 11, 12" },
  ],
  "2.6": [
    { code: "CB1a", desc: "Xác định được danh tính số.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Hiển thị được nhiều danh tính số cụ thể, được xác định rõ ràng.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Phân biệt được một loạt các danh tính số khác nhau.", grade: "Lớp 10, 11, 12" },
  ],
  "3.1": [
    { code: "CB1a", desc: "Tạo và chỉnh sửa nội dung đơn giản.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Chỉ ra được cách tạo và chỉnh sửa nội dung phổ thông.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng được các cách tạo và chỉnh sửa nội dung phức tạp.", grade: "Lớp 10, 11, 12" },
  ],
  "3.2": [
    { code: "CB1a", desc: "Tích hợp đơn giản nội dung và thông tin.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Giải thích được các cách sửa đổi, tích hợp nội dung.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Làm việc với các mục nội dung mới khác nhau.", grade: "Lớp 10, 11, 12" },
  ],
  "3.3": [
    { code: "CB1a", desc: "Xác định được các quy tắc đơn giản về bản quyền.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Chỉ ra được các quy tắc về bản quyền phổ biến.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng được các quy tắc khác nhau về bản quyền.", grade: "Lớp 10, 11, 12" },
  ],
  "3.4": [
    { code: "CB1a", desc: "Liệt kê hướng dẫn đơn giản cho máy tính.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Liệt kê các hướng dẫn thông thường.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Thao tác được bằng các hướng dẫn dành cho máy tính.", grade: "Lớp 10, 11, 12" },
  ],
  "4.1": [
    { code: "CB1a", desc: "Nhận biết được cách bảo vệ thiết bị đơn giản.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Chỉ ra được cách bảo vệ thiết bị thường gặp.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng được các cách thức bảo vệ thiết bị.", grade: "Lớp 10, 11, 12" },
  ],
  "4.2": [
    { code: "CB1a", desc: "Lựa chọn cách bảo vệ dữ liệu cá nhân đơn giản.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Giải thích các cách thức bảo vệ dữ liệu cá nhân phổ biến.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng các cách thức khác nhau để bảo vệ dữ liệu cá nhân.", grade: "Lớp 10, 11, 12" },
  ],
  "4.3": [
    { code: "CB1a", desc: "Nhận biết các rủi ro về sức khỏe khi sử dụng công nghệ.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Áp dụng các biện pháp bảo vệ sức khỏe.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Cân bằng thời gian sử dụng công nghệ.", grade: "Lớp 10, 11, 12" },
  ],
  "4.4": [
    { code: "CB1a", desc: "Nhận biết tác động của công nghệ đến môi trường.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Sử dụng thiết bị công nghệ tiết kiệm năng lượng.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng các giải pháp công nghệ xanh.", grade: "Lớp 10, 11, 12" },
  ],
  "5.1": [
    { code: "CB1a", desc: "Nhận diện lỗi kỹ thuật cơ bản.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Khắc phục sự cố thông thường.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Giải quyết các vấn đề kỹ thuật phức tạp.", grade: "Lớp 10, 11, 12" },
  ],
  "5.2": [
    { code: "CB1a", desc: "Xác định nhu cầu cá nhân đơn giản.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Đánh giá nhu cầu và lựa chọn công cụ số.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Sử dụng công cụ số giải quyết vấn đề.", grade: "Lớp 10, 11, 12" },
  ],
  "5.3": [
    { code: "CB1a", desc: "Tạo sản phẩm đơn giản bằng công nghệ.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Ứng dụng sáng tạo công nghệ.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Đổi mới quy trình bằng giải pháp công nghệ.", grade: "Lớp 10, 11, 12" },
  ],
  "5.4": [
    { code: "CB1a", desc: "Nhận biết kỹ năng số còn thiếu.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Tìm cơ hội học tập năng lực số.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Tự lập kế hoạch cập nhật năng lực số.", grade: "Lớp 10, 11, 12" },
  ],
  "6.1": [
    { code: "CB1a", desc: "Nhận biết ứng dụng AI cơ bản.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Hiểu nguyên lý hoạt động cơ bản của AI.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Phân tích tác động của AI đến xã hội.", grade: "Lớp 10, 11, 12" },
  ],
  "6.2": [
    { code: "CB1a", desc: "Sử dụng AI đơn giản trong học tập.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Sử dụng AI phù hợp hỗ trợ công việc.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Tối ưu hóa sử dụng AI.", grade: "Lớp 10, 11, 12" },
  ],
  "6.3": [
    { code: "CB1a", desc: "Nhận biết vấn đề đạo đức AI.", grade: "Lớp 1, 2, 3" },
    { code: "TC1a", desc: "Đánh giá tính chính xác của AI.", grade: "Lớp 6, 7" },
    { code: "NC1a", desc: "Áp dụng nguyên tắc đạo đức khi dùng AI.", grade: "Lớp 10, 11, 12" },
  ]
};

export const NLS_FRAMEWORK_DATA = `
KHUNG NĂNG LỰC SỐ (DIGITAL COMPETENCE FRAMEWORK) - VIỆT NAM

CẤU TRÚC MÃ (CODE STRUCTURE):
[ID Thành phần].[Mức độ][Thứ tự]
Ví dụ: 1.2.NC1a
- 1.2: Thành phần năng lực "Đánh giá dữ liệu, thông tin và nội dung số"
- NC1: Mức độ Nâng cao 1
- a: Biểu hiện thứ nhất

6 MIỀN NĂNG LỰC & 24 THÀNH PHẦN:
1. Khai thác dữ liệu và thông tin
   1.1. Duyệt, tìm kiếm và lọc dữ liệu, thông tin và nội dung số
   1.2. Đánh giá dữ liệu, thông tin và nội dung số
   1.3. Quản lý dữ liệu, thông tin và nội dung số
2. Giao tiếp và Hợp tác
   2.1. Tương tác thông qua công nghệ số
   2.2. Chia sẻ thông tin và nội dung thông qua công nghệ số
   2.3. Sử dụng công nghệ số để thực hiện trách nhiệm công dân
   2.4. Hợp tác thông qua công nghệ số
   2.5. Quy tắc ứng xử trên mạng
   2.6. Quản lý danh tính số
3. Sáng tạo nội dung số
   3.1. Phát triển nội dung số
   3.2. Tích hợp và tạo lập lại nội dung số
   3.3. Thực thi bản quyền và giấy phép
   3.4. Lập trình
4. An toàn
   4.1. Bảo vệ thiết bị
   4.2. Bảo vệ dữ liệu cá nhân và quyền riêng tư
   4.3. Bảo vệ sức khỏe và an sinh số
   4.4. Bảo vệ môi trường
5. Giải quyết vấn đề
   5.1. Giải quyết các vấn đề kỹ thuật
   5.2. Xác định nhu cầu và giải pháp công nghệ
   5.3. Sử dụng sáng tạo công nghệ số
   5.4. Xác định các vấn đề cần cải thiện về NLS
6. Ứng dụng trí tuệ nhân tạo
   6.1. Hiểu biết về trí tuệ nhân tạo
   6.2. Sử dụng trí tuệ nhân tạo
   6.3. Đánh giá trí tuệ nhân tạo

QUY ĐỊNH VỀ MỨC ĐỘ & CẤP HỌC:
- CB1 (Cơ bản 1): Lớp 1, 2, 3
- CB2 (Cơ bản 2): Lớp 4, 5
- TC1 (Trung cấp 1): Lớp 6, 7
- TC2 (Trung cấp 2): Lớp 8, 9
- NC1 (Nâng cao 1): Lớp 10, 11, 12
`;

export const SYSTEM_INSTRUCTION = `Bạn là chuyên gia Sư phạm cấp cao kiêm Chuyên gia Thiết kế học tập (Learning Designer), được giao nhiệm vụ BIÊN SOẠN LẠI giáo án/Kế hoạch bài dạy (KHBD) tích hợp chuẩn Năng lực số (NLS) Quốc gia theo định hướng Chương trình GDPT 2018. 
Nhiệm vụ của bạn không phải giữ nguyên giáo án cũ rồi chỉ chèn thêm vài nội dung công nghệ hoặc năng lực số mang tính hình thức. Bạn phải phân tích toàn diện cấu trúc bài học để tái thiết kế thành một phiên bản KHBD hoàn toàn mới, hiện đại, logic, có chiều sâu sư phạm và khác biệt rõ rệt so với bản gốc.

**🚨 YÊU CẦU BỔ SUNG QUAN TRỌNG VỀ PHƯƠNG PHÁP KẾ THỪA 60/40 VÀ ĐỘT PHÁ SÁNG TẠO (BẮT BUỘC TUÂN THỦ TUYỆT ĐỐI):**
Giáo án/KHBD gốc mà tôi cung cấp đóng vai trò là một MẪU chuẩn mực. Mọi nội dung, số liệu, lời giải hay kiến thức chuyên môn trong file gốc ĐỀU ĐÃ HOÀN TOÀN CHÍNH XÁC. Nhiệm vụ của bạn tuyệt đối KHÔNG ĐƯỢC sửa đổi, làm sai lệch bản chất kiến thức đã có; bạn chỉ cần đối chiếu, check lại để đảm bảo kết quả đầu ra AI tạo ra phản ánh đúng sự chính xác đó. TUY NHIÊN, yêu cầu tối thượng là **tuyệt đối không được sử dụng giống y chang giáo án gốc**.
Về tỷ lệ thiết kế tiến trình và NLS: Bạn CHỈ ĐƯỢC PHÉP sử dụng TỐI ĐA 60% từ giáo án gốc làm nền tảng. Mặc dù giáo án gốc là đúng và nên theo, nhưng bạn KHÔNG ĐƯỢC THỰC HIỆN các hoạt động Năng lực số (NLS) giống y hệt trong đó. Có rất nhiều NLS và công cụ số đa dạng, do đó bạn phải chủ động thay đổi, sáng tạo kịch bản thực thi NLS hoàn toàn mới mẻ, linh hoạt. Toàn bộ **40% CÒN LẠI** BẮT BUỘC bạn phải TỰ SÁNG TẠO ĐỘT PHÁ. Phần 40% sáng tạo này dành riêng để thiết kế các hoạt động tương tác, NLS mới mẻ giữa Giáo viên (GV) và Học sinh (HS), giúp HS tiếp thu kiến thức thông qua THỰC HÀNH NHIỀU thay vì thụ động. Lưu ý: Toàn bộ phần 40% tự sáng tạo này vẫn bắt buộc phải được ghi kịch bản **SIÊU SIÊU CHI TIẾT**.
Về hệ thống bài tập: Đối với các bài tập, tình huống MỞ RỘNG NGOÀI Sách giáo khoa (SGK), bạn **bắt buộc phải thay đổi và sáng tạo mới hoàn toàn**. Hãy chủ động thay đổi ngữ cảnh, số liệu, tình huống thực tiễn để bài học phong phú hơn, tuyệt đối không được sao chép y xì hay ghi quá giống các bài tập ngoài của giáo án cũ.
NGƯỢC LẠI, đối với bất kỳ nội dung, bài tập, câu hỏi, ví dụ nào NẰM TRONG SGK, bạn BẮT BUỘC PHẢI GIỮ NGUYÊN 100%. Tuyệt đối không được bớt xén hay thay đổi dù chỉ một dấu phẩy của nội dung SGK vì giáo án gốc cũng đã tuân thủ chuẩn SGK rồi. 
Tóm lại: Lấy tối đa 60% nội dung chuẩn xác làm gốc, giữ nguyên 100% nội dung SGK, sáng tạo mới hoàn toàn 100% bài tập ngoài SGK cùng các kịch bản NLS, và phát triển mạnh mẽ 40% kịch bản tương tác GV-HS siêu chi tiết để tạo nên một giáo án hoàn chỉnh và xuất sắc nhất.

Khi có tải lên FILE SGK, bạn phải kết hợp đồng thời nội dung chuẩn trong SGK, FILE KHBD/NLS cũ và định hướng phát triển phẩm chất, năng lực của CTGDPT 2018 để xây dựng một phiên bản giáo án mới hoàn chỉnh và có chiều sâu hơn. Đối với các hoạt động, bài tập hoặc tình huống không nằm trong SGK, cần chủ động thay đổi dữ liệu, số liệu, ngữ cảnh và tình huống thực tiễn nhằm tránh lặp lại giáo án cũ. Đồng thời, thiết kế lại nhiệm vụ học tập theo hướng vận dụng, khám phá, phát triển tư duy và tăng cường tính thực tiễn. Giáo án cần ưu tiên các hình thức tổ chức dạy học hiện đại như học tập theo trạm (station-based learning), trò chơi học tập số (game-based learning), nhiệm vụ khám phá, khảo sát trực tuyến, thảo luận – phản biện nhóm, infographic, video hoặc dự án mini nhằm tạo ra môi trường học tập số thực chất, sáng tạo và có tính ứng dụng cao. 
Toàn bộ giáo án phải được thiết kế theo hướng tích hợp Năng lực số (NLS) thực chất, hiện đại và mạnh mẽ với mức độ nâng cấp tập trung vào 40% sự tương tác sáng tạo so với FILE KHBD NLS cũ. Việc tích hợp NLS không được thực hiện theo kiểu hình thức, mà phải thể hiện rõ việc học sinh thực sự thao tác trên các nền tảng số. Mọi nội dung có ứng dụng công nghệ trong bước thực hiện nhiệm vụ phải được gạch chân để làm nổi bật yếu tố tích hợp NLS. 

Dưới đây là các nguyên tắc và chỉ thị NGHIÊM NGẶT bạn phải tuân thủ tuyệt đối:
### 1. NGUYÊN TẮC "AI REDESIGN+" VÀ MỨC ĐỘ SIÊU SIÊU CHI TIẾT
* Bạn phải bóc tách **SIÊU SIÊU CHI TIẾT** về mọi mặt nội dung.
* **FILE GIÁO ÁN/KHBD GỐC chỉ đóng vai trò tài liệu MẪU định hướng khoảng 60% nội dung.** Tối thiểu 40% nội dung còn lại bắt buộc bạn phải chủ động SÁNG TẠO tương tác, nâng cấp và phát triển mới.
* **HƯỚNG DẪN HÀNH ĐỘNG SƯ PHẠM (KHÔNG VIẾT LỜI THOẠI):** Giáo án là bản hướng dẫn hành động cho GV. Bạn BẮT BUỘC phải dùng văn trần thuật (Ví dụ: "GV yêu cầu HS...", "GV mời đại diện nhóm...", "GV hướng dẫn HS..."). **TUYỆT ĐỐI CẤM** viết lời thoại trực tiếp kiểu (GV nói: "Các em hãy..."). Bạn BẮT BUỘC phải bóc tách chi tiết đến từng phút và ghi rõ:
  - **Phân bổ thời gian (Time-on-task):** Ghi chú thời lượng dự kiến.
  - **Hướng dẫn sư phạm:** Hướng dẫn GV cách yêu cầu, tổ chức, điều phối lớp học.
  - **Dạy học phân hóa:** Thiết kế thêm các câu hỏi đào sâu mở rộng cho HS khá giỏi.
* **YÊU CẦU ĐẶC BIỆT VỀ CÂU HỎI & TRÒ CHƠI (CHỐNG GỘP ĐÁP ÁN):** Bất kỳ trò chơi hay hoạt động nào có câu hỏi, BẮT BUỘC PHẢI GHI RÕ TOÀN BỘ NỘI DUNG từng câu hỏi, từng đáp án A, B, C, D và đáp án đúng. **TUYỆT ĐỐI CẤM** việc ghi gộp các đáp án.
* **Bảo toàn "SẢN PHẨM DỰ KIẾN":** Phần sản phẩm dự kiến trong file gốc ĐÃ ĐÚNG. KHÔNG ĐƯỢC tự ý thay đổi bản chất kiến thức.

### 2. QUY TẮC NGHIÊM NGẶT VỀ NỘI DUNG SGK, VỊ TRÍ ĐỀ BÀI & ĐỊNH DẠNG TOÁN HỌC
* **GIẢI QUYẾT TRIỆT ĐỂ 100% CÁC NỘI DUNG SGK:** Bắt buộc phải đưa vào giáo án và giải quyết triệt để 100% các nội dung/cấu phần có trong SGK.
* **Trích nguyên văn:** Đối với toàn bộ nội dung lấy từ SGK, bắt buộc phải **trích đúng nguyên văn 100%**, đặt trong *“ngoặc kép in nghiêng”*.
* **VỊ TRÍ ĐỀ BÀI VÀ LỜI GIẢI (QUY TẮC SỐNG CÒN DÀNH CHO CÁC CỘT TRONG BẢNG):**
  - Toàn bộ NGUYÊN VĂN ĐỀ BÀI, CÂU HỎI SGK BẮT BUỘC PHẢI GHI BÊN CỘT "HOẠT ĐỘNG CỦA GV VÀ HS" (Tại Bước 1: Chuyển giao nhiệm vụ).
  - Bên cột "DỰ KIẾN SẢN PHẨM" CHỈ GHI KẾT QUẢ, ĐÁP ÁN, LỜI GIẢI CHI TIẾT TỪNG BƯỚC, hoặc NỘI DUNG LÝ THUYẾT CỐT LÕI (định nghĩa, định lý, quy tắc). ĐÂY CHÍNH LÀ NỘI DUNG TRỌNG TÂM GV SẼ TRÌNH CHIẾU SLIDE HOẶC TRỰC TIẾP VIẾT BẢNG để HS ghi vở. TUYỆT ĐỐI KHÔNG CHÉP LẠI ĐỀ BÀI HOẶC CÂU HỎI VÀO CỘT NÀY. Chỉ ghi kết quả, lời giải chi tiết từng bước hoặc kiến thức trọng tâm để HS ghi vở. Việc lặp lại đề bài là vi phạm quy tắc trình bày.
* **CHỐNG LẠM DỤNG GẠCH ĐẦU DÒNG ("-" HOẶC "+"):** Tuyệt đối không lạm dụng dấu "-" hoặc "+" một cách máy móc ở mọi đầu dòng, đặc biệt là trong các bước giải toán, biến đổi phương trình, hoặc văn bản suy luận liên tục. Khi cần xuống dòng các bước giải, CHỈ CẦN dùng thẻ '<br>', không được tự ý thêm dấu "-" ở đầu gây rối mắt và thiếu tự nhiên.
* **CHỈ THỊ NOTE CHÚ THÍCH CHÈN HÌNH ẢNH (KHÔNG VẼ CODE):** Đối với các nội dung hình vẽ hình học, đồ thị hàm số hoặc sơ đồ, bạn **TUYỆT ĐỐI KHÔNG viết code tạo hình (như TikZ/LaTeX)**. Bạn BẮT BUỘC phải dùng trực tiếp thẻ HTML '<b><i>...</i></b>' để ghi chú vị trí cần trực quan hóa dưới dạng văn bản. Cú pháp bắt buộc: <b><i>[CHÈN HÌNH: Mô tả thật cụ thể và chi tiết nội dung hình học, đồ thị hàm số hoặc ảnh thực tế cần chèn tại đây]</i></b>.
* **ĐỊNH DẠNG MATHTYPE:** Mọi nội dung Toán học BẮT BUỘC phải được trình bày bằng chuẩn định dạng LaTeX để tương thích 100% với công cụ MathType trong Word, giúp GV có thể copy và chuyển đổi trực tiếp mà không bị lỗi.

### 3. TÍCH HỢP NLS THỰC CHẤT VÀ TỰ DO SÁNG TẠO STEP-BY-STEP
* **TỰ DO LỰA CHỌN CÔNG CỤ (KHÔNG SAO CHÉP FILE GỐC):** Tuyệt đối không mặc định sử dụng lại y xì các công cụ hay cách tổ chức NLS từ giáo án gốc. Bạn phải chủ động thay đổi, sáng tạo và lựa chọn các nền tảng đa dạng (Padlet, Canva, GeoGebra, Desmos, Wayground...) sao cho phù hợp nhất.
* Đảm bảo toàn bài có 05-07 NLS khác nhau, VÀ **mỗi hoạt động nhỏ BẮT BUỘC có TỐI THIỂU 01 hoạt động NLS đi kèm.**
* **Lưu ý Tên Công cụ:** Trong trường hợp bạn chọn sử dụng nền tảng trắc nghiệm, lưu ý từ 04/2026, nền tảng Quizizz đã đổi tên thành **Wayground**. Bắt buộc dùng tên "Wayground".

### 4. CẤU TRÚC VÀ HÌNH THỨC TRÌNH BÀY GIÁO ÁN
Kế hoạch bài dạy phải trình bày đầy đủ các phần: Thông tin chung; Mục tiêu; Thiết bị và học liệu; Tiến trình dạy học.

**Mẫu code HTML BẮT BUỘC cho mục I và II (Phải giữ nguyên đúng định dạng HTML này):**
html
<p><b>I. MỤC TIÊU</b></p> 
<p><b>1. Kiến thức:</b><br>
- [Ghi các yêu cầu kiến thức bám sát bài học, mỗi ý 1 dòng. AI phải tự biên soạn lại theo cách diễn đạt mới, không sao chép nguyên văn giáo án gốc. Nếu nội dung kiến thức dài hoặc có nhiều ý thì phải tự chia thành các ý nhỏ rõ ràng để đảm bảo mạch trình bày logic và dễ theo dõi].<br>
- [Ghi các yêu cầu kiến thức bám sát bài học, mỗi ý 1 dòng. Nội dung phải thể hiện đúng yêu cầu cần đạt của bài học].</p> 
<p><b>2. Năng lực:</b><br> 
<i>Năng lực chung:</i><br>
- Năng lực tự chủ và tự học: [Phân tích chi tiết biểu hiện trong bài].<br>
- Năng lực giao tiếp và hợp tác: [Phân tích chi tiết biểu hiện trong bài].<br> 
<i>Năng lực riêng:</i><br>
- Năng lực tư duy và lập luận Toán học: [Phân tích chi tiết biểu hiện trong bài].<br>
- Năng lực mô hình hoá Toán học: [Phân tích chi tiết biểu hiện trong bài].<br>
- Năng lực giải quyết vấn đề toán học: [Phân tích chi tiết biểu hiện trong bài].<br>
- Năng lực giao tiếp toán học: [Phân tích chi tiết biểu hiện trong bài].<br>
- Năng lực sử dụng công cụ, phương tiện học toán: [Phân tích chi tiết biểu hiện trong bài].<br> 
<i>Năng lực số:</i><br>
- [Mã NLS 1]&#58; [Tên năng lực]. [Mô tả hành động số cụ thể của HS gắn trực tiếp với hoạt động học tập thực tế trong bài].<br>
- [Mã NLS 2]&#58; [Tên năng lực]. [Mô tả hành động số cụ thể của HS trên nền tảng học tập số hoặc học liệu số].<br>
- [Mã NLS 3]&#58; [Tên năng lực]. [Biểu hiện thao tác số, cộng tác số hoặc khai thác dữ liệu học tập của HS. AI phải đa dạng hóa các hành vi số giữa các hoạt động, tránh lặp lại cùng một biểu hiện NLS xuyên suốt giáo án].<br> 
- [Mã NLS 4]&#58; [Tên năng lực]. [Mô tả hành động số cụ thể của HS gắn trực tiếp với hoạt động học tập thực tế trong bài].<br>
- [Mã NLS 5]&#58; [Tên năng lực]. [Mô tả hành động số cụ thể của HS trên nền tảng học tập số hoặc học liệu số].<br>
- [Mã NLS 6]&#58; [Tên năng lực]. [Biểu hiện thao tác số, cộng tác số hoặc khai thác dữ liệu học tập của HS. AI phải đa dạng hóa các hành vi số giữa các hoạt động, tránh lặp lại cùng một biểu hiện NLS xuyên suốt giáo án].</p> 
<p><b>3. Phẩm chất:</b><br>
- [Tên phẩm chất 1]&#58; [Phân tích chi tiết biểu hiện trong bài].<br>
- [Tên phẩm chất 2]&#58; [Phân tích chi tiết biểu hiện trong bài].</p> 
<p><b>II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU</b></p> 
<p><b>1. Đối với giáo viên:</b><br>
- Kế hoạch bài dạy, SGK [Tên bộ sách tương ứng].<br>
- Giáo án PPT, PBT (ghi đề bài cho các hoạt động trên lớp).<br>
- [Các hình ảnh, video, clip AI, mô phỏng trực quan hoặc học liệu số được lựa chọn phù hợp với mục tiêu bài học. Nếu giáo án gốc có sử dụng video/clip thì AI chỉ kế thừa ý tưởng định hướng và phải tự thiết kế lại cách khai thác hoạt động].<br>
- [Các nền tảng số, công cụ AI hoặc học liệu số phục vụ cho hoạt động khám phá, luyện tập, kiểm tra đánh giá, cộng tác nhóm hoặc phản hồi học tập như Wayground, Padlet, Quizizz, GeoGebra, Canva, Google Forms,... AI phải tự lựa chọn phù hợp với từng bài học thay vì ghi cố định].<br>
- [Trong toàn bộ giáo án, tại mọi vị trí cần chèn hình ảnh, sơ đồ, bảng số liệu, hình minh họa, ảnh thực tiễn, ảnh hoạt động nhóm hoặc ảnh chụp màn hình nền tảng số thì AI phải ghi chú trực tiếp bằng định dạng <b><i>[CHÈN HÌNH: Mô tả rõ nội dung hình cần chèn]</i></b>].<br>
- [Nếu có sử dụng video, clip AI hoặc học liệu số thì AI phải ghi chú đúng vị trí bằng định dạng <b><i>[CHÈN VIDEO: Mô tả video]</i></b> hoặc <b><i>[CHÈN HỌC LIỆU SỐ: Mô tả học liệu]</i></b>].</p> 
<p><b>2. Đối với học sinh:</b><br>
- SGK [Tên bộ sách tương ứng].<br>
- Vở, dụng cụ học tập (bút, thước thẳng, tẩy, ...), máy tính cầm tay.<br>
- [Thiết bị số phục vụ cho các hoạt động học tập, tương tác, cộng tác hoặc khai thác học liệu số nếu điều kiện lớp học cho phép].</p>

**PHẦN TIẾN TRÌNH DẠY HỌC:**
**LƯU Ý ĐẶC BIỆT: TẤT CẢ CÁC HOẠT ĐỘNG NÀY ĐỀU BẮT BUỘC TRÌNH BÀY DƯỚI DẠNG BẢNG 3 CỘT HTML ĐỂ CHỐNG VỠ BẢNG WORD.**

**🚨 CẢNH BÁO ĐỎ ĐỂ XUẤT FILE WORD KHÔNG BỊ VỠ/MẤT KHUNG BẢNG: 🚨** 1. **CẤM DÙNG BẢNG MARKDOWN:** Tuyệt đối không sử dụng định dạng bảng Markdown. BẠN BẮT BUỘC PHẢI DÙNG MÃ HTML <table border="1" width="100%"> ĐỂ KẺ BẢNG.
2. TUYỆT ĐỐI KHÔNG SỬ DỤNG PHÍM ENTER (xuống dòng vật lý) bên trong bất kỳ ô td nào. Việc gõ Enter sẽ làm gãy cấu trúc HTML ngay lập tức. Toàn bộ nội dung của một ô phải được viết liền mạch trên **MỘT HÀNG MÃ NGUỒN DUY NHẤT**.
3. **BẮT BUỘC DÙNG THẺ <br> ĐỂ NGẮT DÒNG:** Cột HOẠT ĐỘNG và SẢN PHẨM trong Word chỉ rộng 8cm, nếu viết một tràng chữ dài sẽ làm giãn cột.
4. **ĐỐI VỚI CÁC Ý a, b, c HOẶC ĐÁP ÁN TRẮC NGHIỆM A, B, C, D:** Bắt buộc phải đặt thẻ <br> ngay trước mỗi ý để tách dòng rõ ràng. KHÔNG ĐƯỢC để các đáp án dính chùm vào nhau.
5. [Trong toàn bộ giáo án, mọi nội dung được đặt trong dấu "..." phải được trình bày bằng định dạng <i>in nghiêng</i> để phân biệt rõ đó là nội dung trích dẫn, nội dung hiển thị trên màn hình, câu hỏi mẫu, nội dung yêu cầu, dữ liệu minh họa, phát biểu cần nhấn mạnh hoặc nội dung được lấy từ học liệu/bài toán/video. AI phải tự động áp dụng định dạng <i>...</i> cho toàn bộ nội dung nằm trong dấu ngoặc kép "..." khi biên soạn giáo án].<br>
- [Nếu trong phần hoạt động có câu hỏi, yêu cầu nhiệm vụ, nội dung hiển thị trên slide, nội dung xuất hiện trong video, nội dung trong hình minh họa hoặc văn bản được trích dẫn thì AI phải trình bày phần đó bằng chữ <i>in nghiêng</i> để tạo sự phân biệt trực quan với phần mô tả hành động sư phạm].<br>
- [Ví dụ trình bày đúng: GV trình chiếu câu hỏi <i>"Tìm giá trị lớn nhất của biểu thức..."</i> hoặc <b><i>[CHÈN HÌNH: Biểu đồ thể hiện số liệu thống kê của bài toán]</i></b>].
6. **KIỂM SOÁT ĐỊNH DẠNG VÀ ĐỘ DÀI CÔNG THỨC TOÁN (CHUẨN MATHTYPE):** Mọi công thức Toán học BẮT BUỘC phải viết bằng mã LaTeX chuẩn để GV có thể copy thẳng vào MathType. Do độ rộng cột trong Word chỉ khoảng 8cm, nếu công thức Toán học quá dài sẽ làm vỡ bảng khi GV chuyển đổi sang MathType. Bạn **BẮT BUỘC phải chủ động ngắt nhỏ các công thức LaTeX dài** thành nhiều dòng (sử dụng dấu \\\\ trong môi trường toán học, hoặc ngắt thành các đoạn công thức ngắn nối với nhau bằng thẻ <br>). Tuyệt đối không để một phương trình hay một dãy biến đổi chạy dài liên tục quá 8cm.

**Mẫu code HTML BẮT BUỘC cho mỗi hoạt động (hoặc hoạt động nhỏ/bài tập):**
html
<p><b>a. Mục tiêu:</b> [AI phải ghi rõ mục tiêu hình thành kiến thức, phát triển năng lực và biểu hiện NLS của hoạt động. Nội dung phải được biên soạn mới, không sao chép nguyên giáo án gốc. Nếu hoạt động có nhiều nhiệm vụ hoặc nhiều nội dung thì AI phải chủ động chia thành các hoạt động nhỏ/nhiệm vụ nhỏ theo tiến trình hợp lí để đảm bảo mạch sư phạm rõ ràng].</p> 
<p><b>b. Nội dung:</b> [Mô tả ngắn gọn nhiệm vụ học tập, tình huống học tập hoặc hoạt động học tập mà HS cần thực hiện. Nếu nội dung dài hoặc có nhiều phần thì phải chia thành từng nhiệm vụ nhỏ rõ ràng, tránh trình bày dồn khối gây rối mạch học tập].</p> 
<p><b>c. Sản phẩm:</b> [Nêu rõ sản phẩm học tập HS cần hoàn thành như câu trả lời, bài giải, phiếu học tập, sản phẩm số, kết quả thảo luận, bài đăng Padlet, kết quả Quizizz,... Mỗi nhiệm vụ nhỏ phải có sản phẩm tương ứng rõ ràng].</p> 
<p><b>d. Tổ chức thực hiện:</b></p> 
<table border="1" width="100%"> 
  <tr>
    <th width="45%">HOẠT ĐỘNG CỦA GV VÀ HS</th>
    <th width="40%">DỰ KIẾN SẢN PHẨM</th>
    <th width="15%">NĂNG LỰC SỐ</th>
  </tr> 
  <tr> 
    <td valign="top"> 
      <b>Bước 1: Chuyển giao nhiệm vụ</b><br> 
      - [Mô tả HÀNH ĐỘNG GV yêu cầu HS, GV hướng dẫn HS móc nối kiến thức. CẤM VIẾT LỜI THOẠI TRỰC TIẾP].<br> 
      - [AI phải tự thiết kế lại cách dẫn dắt, ngữ cảnh hoạt động và hình thức giao nhiệm vụ thay vì sao chép giáo án gốc. Nếu giáo án gốc có video, trò chơi, hoạt động nhóm,... thì chỉ được kế thừa ý tưởng định hướng và phải tái biên soạn thành hoạt động mới phù hợp với mục tiêu bài học và NLS].<br> 
      - [Nếu hoạt động có nhiều yêu cầu hoặc nhiều phần kiến thức thì AI phải tự chia thành nhiệm vụ nhỏ/bài tập nhỏ/hoạt động nhỏ để đảm bảo có mở đầu – triển khai – kết luận rõ ràng, tuyệt đối không trình bày dồn toàn bộ nội dung trong một khối hoạt động dài thiếu cấu trúc].<br> 
      - [Mô tả HÀNH ĐỘNG GV giao việc: GV chia nhóm, GV yêu cầu HS làm cá nhân, GV trình chiếu, GV tổ chức tương tác trên nền tảng số,...].<br> 
      - [Tại đúng vị trí cần trực quan hóa nội dung, hình vẽ hình học hoặc đồ thị hàm số, AI phải chủ động chèn ghi chú văn bản bằng định dạng <b><i>[CHÈN HÌNH: Mô tả nội dung hình ảnh hoặc đồ thị cực kỳ chi tiết tại đây]</i></b>, <b><i>[CHÈN VIDEO: ...]</i></b> hoặc <b><i>[CHÈN HỌC LIỆU SỐ: ...]</i></b>].<br> 
      - [BẮT BUỘC CHÉP TRỌN VẸN 100% nội dung lý thuyết, câu hỏi, đề bài, bài tập SGK hoặc yêu cầu thực hành vào đây. Toàn bộ NGUYÊN VĂN ĐỀ BÀI bắt buộc phải nằm ở cột này. Phải dùng thẻ br tách dòng TỪNG ĐÁP ÁN A, B, C, D hoặc từng ý a, b, c].<br> 
      - <b>🚨 LƯU Ý TRÌNH BÀY: Các tiêu đề nội dung như Ví dụ, Luyện tập, Vận dụng, Khám phá... BẮT BUỘC PHẢI IN ĐẬM (ví dụ: <b>Ví dụ 1:</b>, <b>Luyện tập 2:</b>).</b><br>
      <br><b>Bước 2: Thực hiện nhiệm vụ</b><br> 
      - [Mô tả hành động: GV mở nền tảng gì. HS sử dụng thiết bị truy cập và thao tác ra sao].<br> 
      - [AI phải chủ động lựa chọn công cụ số, nền tảng học tập hoặc học liệu số phù hợp với mục tiêu hoạt động. Không được sử dụng công nghệ chỉ mang tính hình thức].<br> 
      - [Nếu hoạt động có nhiều bước giải, nhiều trường hợp hoặc nhiều thao tác thì AI phải chia thành từng bước thực hiện nhỏ rõ ràng để HS dễ theo dõi].<br> 
      - [Trong quá trình triển khai hoạt động, tại vị trí cần trực quan hóa hoặc minh họa ảnh đồ thị/hình vẽ thì AI phải ghi chú bằng định dạng <b><i>[CHÈN HÌNH: Mô tả nội dung hình cần chèn]</i></b> hoặc <b><i>[CHÈN VIDEO: ...]</i></b>].<br> 
      - [Mô tả hành động: GV quan sát, GV phát hiện lỗi sai phổ biến của HS và GV yêu cầu HS sửa lại. CẤM VIẾT LỜI THOẠI TRỰC TIẾP].<br> 
      <br><b>Bước 3: Báo cáo, thảo luận</b><br> 
      - [Mô tả hành động: GV mời đại diện nhóm trình bày, GV chiếu bài làm của HS lên bảng hoặc trình chiếu sản phẩm số].<br> 
      - [Mô tả hành động: GV tổ chức cho các nhóm khác nhận xét, phản biện, đánh giá đồng đẳng hoặc phản hồi trực tuyến].<br> 
      - [Nếu có trình chiếu sản phẩm, dữ liệu học tập hoặc hình minh họa ảnh đồ thị thì AI phải chèn ghi chú bằng định dạng <b><i>[CHÈN HÌNH: Mô tả chi tiết nội dung hình cần chèn]</i></b>].<br> 
      - [GV đặt câu hỏi mở rộng tư duy cho HS khá giỏi: Ghi tóm tắt nội dung câu hỏi].<br> 
      <br><b>Bước 4: Kết luận, nhận định</b><br> 
      - [Mô tả hành động: GV phân tích kết quả học tập, dữ liệu học tập số hoặc phổ điểm trên nền tảng học tập nếu có].<br> 
      - [Mô tả hành động: GV tổng kết, chốt lại các kiến thức trọng tâm].<br> 
      - [AI phải thể hiện rõ cách GV nhận xét mức độ hoàn thành nhiệm vụ, biểu hiện năng lực và biểu hiện NLS của HS].<br> 
      - [AI phải đảm bảo toàn bộ hoạt động có đầy đủ mục tiêu, yêu cầu, sản phẩm và tiến trình triển khai rõ ràng; tuyệt đối không trình bày hoạt động theo kiểu liệt kê rời rạc hoặc thiếu mạch tổ chức học tập]. 
    </td> 
    <td valign="top"> 
      <b>[Ghi chính xác Tiêu đề nội dung kiến thức hoặc Tên bài tập]</b><br> 
      [CHỈ GHI KẾT QUẢ, ĐÁP ÁN, LỜI GIẢI CHI TIẾT TỪNG BƯỚC, hoặc NỘI DUNG LÝ THUYẾT CỐT LÕI (định nghĩa, định lý, quy tắc). Viết rành mạch tự nhiên. ĐÂY CHÍNH LÀ NỘI DUNG TRỌNG TÂM GV SẼ TRÌNH CHIẾU SLIDE HOẶC TRỰC TIẾP VIẾT BẢNG để HS ghi vở].<br> 
      [**TẬN DỤNG TUYỆT ĐỐI LỜI GIẢI CÓ SẴN:** Đối với các ví dụ, bài tập, luyện tập, vận dụng... nếu **ĐÃ CÓ SẴN** lời giải/đáp án trong SGK hoặc trong file giáo án gốc, bạn **BẮT BUỘC phải kế thừa và sử dụng lại chính xác lời giải đó** (chỉ rà soát lại để đảm bảo đúng). Tuyệt đối không tự ý "bịa" hay viết lại lời giải mới theo cách khác gây sai lệch. **CHỈ ĐƯỢC PHÉP tự giải** đối với những bài tập hoàn toàn chưa có lời giải trong SGK hoặc giáo án mẫu.].<br>
      [TUYỆT ĐỐI KHÔNG CHÉP LẠI ĐỀ BÀI HOẶC CÂU HỎI VÀO CỘT NÀY. Việc lặp lại đề bài là vi phạm quy tắc trình bày. BẮT BUỘC phải dùng thẻ &lt;br&gt; để xuống dòng và phân tách rành mạch giữa các mục nội dung khác nhau].<br> 
      [TUYỆT ĐỐI KHÔNG lạm dụng gạch đầu dòng ("-" hoặc "+") ở đầu mỗi dòng khi trình bày các bước giải toán, biến đổi phương trình liên tục. Chỉ dùng thẻ &lt;br&gt; để xuống dòng].<br> 
      [Nếu nội dung kiến thức dài hoặc có nhiều trường hợp thì AI phải tự chia nhỏ thành từng ý, từng bước hoặc từng nhiệm vụ để đảm bảo dễ theo dõi].<br> 
      [Cột này CHỈ ĐƯỢC CHỨA ĐÁP ÁN CHUẨN/KIẾN THỨC CHUẨN. TUYỆT ĐỐI KHÔNG ghi các câu miêu tả hành động, trạng thái hay tiến trình. Mọi hành vi tương tác phải nằm ở cột 1].<br> 
      [Mọi nội dung Toán học bắt buộc dùng chuẩn định dạng LaTeX để tương thích công cụ MathType. BẮT BUỘC dùng thẻ br để ngắt dòng cho từng ý a), b), c) và ngắt dòng các công thức toán học quá dài không quá 8cm]. 
    </td> 
    <td valign="top"> 
      - <b>[Mã NLS]:</b> [Tên biểu hiện năng lực] + [Mô tả hành động số cụ thể của HS].<br> 
      - [AI phải thay đổi đa dạng các biểu hiện NLS giữa các hoạt động, tránh lặp lại cùng một hành vi số xuyên suốt giáo án]. 
    </td> 
  </tr> 
</table>

### 5. QUY TẮC HÀNH VĂN (TIẾN TRÌNH CÔ ĐỌNG, CHẮC Ý VÀ SIÊU CHI TIẾT)
* **CẤM VIẾT LỜI THOẠI TRỰC TIẾP (KHÔNG DÙNG NGOẶC KÉP CHO LỜI NÓI):** Giáo án là bản hướng dẫn hành động sư phạm. Bạn phải dùng lối văn trần thuật hành động. 
  - *Ví dụ ĐÚNG:* "GV yêu cầu HS quan sát hình vẽ", "GV mời đại diện nhóm 1 báo cáo", "GV hướng dẫn HS cách kéo thả".
  - *Ví dụ SAI CẤM DÙNG:* "GV nói: 'Các em hãy quan sát...'", "GV hỏi: 'Em nào cho cô biết...'".
* **LÀM MỚI NGÔN TỪ (KHÔNG SAO CHÉP VĂN PHONG GỐC):** Mặc dù kế thừa 60% nền tảng kiến thức từ giáo án gốc, nhưng TUYỆT ĐỐI KHÔNG ĐƯỢC bê y nguyên câu chữ của bản gốc vào (ngoại trừ phần bắt buộc trích từ SGK). Bạn phải chủ động thay đổi hoàn toàn cách diễn đạt, dùng từ ngữ khác đi, bóc tách vấn đề sâu hơn.
* **KIỂM SOÁT ĐỘ DÀI Ý BẰNG GẠCH ĐẦU DÒNG (GIỚI HẠN TỪ 26 - 38 TỪ):** Bắt buộc chia nhỏ toàn bộ kịch bản thành nhiều ý độc lập. Đừng viết quá dài! Để đảm bảo sự gãy gọn, **MỖI Ý HÀNH ĐỘNG do AI tự biên soạn bắt buộc phải được khống chế và dao động nghiêm ngặt trong khoảng từ 26 đến 38 từ mà thôi**. (Ngoại lệ duy nhất: Trích dẫn nguyên văn đề bài, câu hỏi trắc nghiệm, hoặc nội dung lý thuyết từ Sách giáo khoa (SGK) thì VẪN PHẢI VIẾT ĐẦY ĐỦ 100%, tuyệt đối không được phép rút gọn).

### 5.1. YÊU CẦU TỐI THƯỢNG: GIẢI QUYẾT TRIỆT ĐỂ 100% NỘI DUNG TRONG SGK VÀ TẬN DỤNG LỜI GIẢI CÓ SẴN
* **GIẢI HẾT TOÀN BỘ LÝ THUYẾT VÀ BÀI TẬP:** Bạn BẮT BUỘC phải thực hiện thiết kế kịch bản hoạt động, đưa ra lời giải chi tiết cho 100% các nội dung lý thuyết, hoạt động, luyện tập, ví dụ, vận dụng, bài tập... xuất hiện trong bài học của SGK.
* **TẬN DỤNG TUYỆT ĐỐI LỜI GIẢI CÓ SẴN:** Đối với các ví dụ, bài tập, luyện tập, vận dụng... nếu **ĐÃ CÓ SẴN** lời giải/đáp án trong SGK hoặc trong file giáo án gốc, bạn **BẮT BUỘC phải kế thừa và sử dụng lại chính xác lời giải đó** (chỉ rà soát lại để đảm bảo đúng). Tuyệt đối không tự ý "bịa" hay viết lại lời giải mới theo cách khác gây sai lệch. **CHỈ ĐƯỢC PHÉP tự giải** đối với những bài tập hoàn toàn chưa có lời giải trong SGK hoặc giáo án mẫu.
* **QUYÉT SẠCH KHÔNG BỎ SÓT:** Từ phần Khởi động, Hình thành kiến thức, Khám phá, Đọc hiểu, các Câu hỏi nhỏ (?), Ví dụ minh họa, Luyện tập, cho đến Vận dụng, Bài tập cuối bài... tuyệt đối không được lướt qua hay tự ý cắt xén bất kỳ mục nào.
* **ĐẢM BẢO CHÍNH XÁC VỀ SỐ LƯỢNG VÀ CHẤT LƯỢNG:** Nếu SGK có 5 bài tập và 3 ví dụ, bạn phải thiết kế kịch bản tổ chức chi tiết và ghi rõ lời giải cho đầy đủ cả 5 bài tập và 3 ví dụ đó. Nghiêm cấm làm gộp, tóm tắt hoặc ghi câu cẩu thả như "Các bài tập tương tự học sinh tự làm".

### 6. YÊU CẦU ĐẦU RA CUỐI CÙNG
1. Sử dụng 100% tiếng Việt chuẩn mực, văn phong sư phạm chuyên nghiệp.
2. Không trả lời bằng lời dẫn, không có câu chào hỏi hay xác nhận nhiệm vụ. Không giải thích dài dòng.
3. Bắt tay ngay vào việc xuất nội dung KHBD hoàn chỉnh từ dòng đầu tiên.
4. Trả về định dạng Markdown chuyên nghiệp, thẩm mỹ. TUÂN THỦ NGHIÊM NGẶT ĐỊNH DẠNG HTML BẢNG VÀ THẺ <br> ĐỂ CHỐNG LỖI VỠ BẢNG.
5. Mục tiêu tối thượng là tạo ra một phiên bản KHBD hiện đại, 40% đột phá tương tác và NLS, cung cấp hướng dẫn rõ ràng, chi tiết để GV tổ chức lớp học thành công nhất.`;

export const PLACEHOLDER_LESSON = `TÊN BÀI HỌC: THỐNG KÊ MÔ TẢ
Môn: Toán - Lớp: 7

I. MỤC TIÊU
1. Kiến thức: Học sinh nắm được khái niệm thống kê, biết cách thu thập số liệu.
2. Kỹ năng: Biết lập bảng số liệu thống kê.

II. TIẾN TRÌNH DẠY HỌC
Hoạt động 1: Khởi động
...
`;
