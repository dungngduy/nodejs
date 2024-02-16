// Làm việc với chuỗi
// IndexOf: tìm vị trí của mảng
// lastIndexOf: tìm vị trí cuối của mảng
// slice: in ra mảng từ vị trí thứ n. Ví dụ Nguyễn Duy Dũng slice(6) => Duy Dũng
// slice(n, l): n vị trí bắt đầu, l: vị trí kết thúc
// toLowerCase: viết thường
// toUpperCase: viết hoa
// trim: loại bỏ khoảng trắng ở đầu và cuối chuỗi
// replace(cái cần thay, cái muốn thay): thay thế kiểu trong mảng. Ví dụ , => .
// includes, startWith, every: ktra phần tử trả về true or false. Every khác some ở chỗ nó kiểm tra tổng hết các phần tử
// rồi mới xét đk và trả về true or false. Ví dụ [-3, 3, 5] nếu arr.every(arr => arr > 0) => false vì có -3 là âm 

// filter: lọc mảng (trả về mảng)
// map: dùng để tạo mảng mới (trả về object)
// flat: gộp mảng. Ví dụ đa mảng thành 1 mảng. 
// Ví dụ flat(1): [[1, 2, 3], [4, 5, 6], 7, 8] ouput: [1, 2, 3, 4, 5, 6, 7, 8]
// flat(2): [[[1, 2], 3], [[4, 5], 6], 7, 8] ouput: [1, 2, 3, 4, 5, 6, 7, 8]
// flat dựa theo cấp độ để gộp
// some: trả về true or false
// math.trunc: làm tròn
// Math.abs: render số > 0 Ví dụ: -3 => 3
// sort: sắp xếp chỉ với chuỗi. Ví dụ sort((a, b), a - b: lớn dần, b - a: nhỏ dần)
// pathStart: thêm khoảng trắng <> pathEnd
// flatMap: kết hợp 2 hàm map và flat
// Ví dụ kết hợp: 
const passenger = 'DuNg';
const passengerLower = passenger.toLowerCase();
const passengerUpper = passenger.toUpperCase();
const name = passengerLower[0].toUpperCase() + passengerLower.slice(1);