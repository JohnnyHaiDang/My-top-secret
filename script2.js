// Đợi DOM tải xong
document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử nút "Không"
    const noButton = document.getElementById("no");
    
    // Lắng nghe sự kiện khi nút "Không" được nhấn
    noButton.addEventListener("click", function() {
        // Thay đổi văn bản của nút "Không" thành "Có"
        this.parentElement.querySelector('label[for="no"]').textContent = "Có ❤️";
        this.checked = false;  // Bỏ chọn "Không"
        document.getElementById("yes").checked = true;  // Tự động chọn "Có"
    });
});
