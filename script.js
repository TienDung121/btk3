/* Hàm upDate: Chạy khi di chuột vào ảnh (onmouseover) */
function upDate(previewPic) {
  // 3a. Kiểm tra xem sự kiện có kích hoạt không
  console.log("Sự kiện hover được kích hoạt!");

  // 3b. In thông tin alt và source của previewPic ra console
  console.log("Alt text: " + previewPic.alt);
  console.log("Source: " + previewPic.src);

  // Lấy phần tử có id là "image"
  let imageDiv = document.getElementById("image");

  // 3c. Thay đổi văn bản của phần tử id="image" thành nội dung alt của previewPic
  imageDiv.innerHTML = previewPic.alt;

  // 3e. Thay đổi hình nền của phần tử id="image" thành nguồn src của previewPic
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Hàm unDo: Chạy khi rời chuột khỏi ảnh (onmouseout) */
function unDo() {
  console.log("Sự kiện chuột rời đi kích hoạt!");

  // Lấy phần tử có id là "image"
  let imageDiv = document.getElementById("image");

  // 4a. Cập nhật url hình nền trở lại giá trị rỗng ban đầu url('')
  imageDiv.style.backgroundImage = "url('')";

  // 4b. Cập nhật văn bản của div trở lại câu gốc
  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}