// Làm việc với chuỗi
// IndexOf: tìm vị trí của mảng
// lastIndexOf: tìm vị trí cuối của mảng
// slice: in ra mảng từ vị trí thứ n. Ví dụ Nguyễn Duy Dũng slice(6) => Duy Dũng
// slice(n, l): n vị trí bắt đầu, l: vị trí kết thúc
// toLowerCase: viết thường
// toUpperCase: viết hoa
// trim: loại bỏ khoảng trắng ở đầu và cuối chuỗi
// replace(cái cần thay, cái muốn thay): thay thế kiểu trong mảng. Ví dụ , => .
// includes, startWith: ktra phần tử trả về true or false
// pathStart: thêm khoảng trắng <> pathEnd
// Ví dụ kết hợp: 
const passenger = 'DuNg';
const passengerLower = passenger.toLowerCase();
const passengerUpper = passenger.toUpperCase();
const name = passengerLower[0].toUpperCase() + passengerLower.slice(1);