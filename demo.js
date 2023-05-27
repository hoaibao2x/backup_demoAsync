// Đồng bộ Synchronous
// Thứ tự code và thứ tự thực thi code của trình duyệt giống nhau

console.log("Đồng bộ");
console.log("Bắt gà 🐔 lấy trứng 🥚");
console.log("Chiên trứng 🍳 🔥");
console.log("Ăn thoi 🍽️");


// Bất đồng bộ Asynchronous
// Trình duyệt sẽ ưu tiên thực thi các câu lệnh không yêu cầu chờ đợi
// Sau đó mới thực hiện các lệnh đã hết thời gian chờ

console.log("Bất đồng bộ");
console.log("Bắt gà 🐔 lấy trứng 🥚");
setTimeout(function () {
console.log("Chiên trứng 🍳 🔥");
}, 1000)
console.log("Ăn thoi 🍽️");