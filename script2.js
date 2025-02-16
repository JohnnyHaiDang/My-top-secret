document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    
    noButton.addEventListener("click", function() {
        this.parentElement.querySelector('label[for="no"]').textContent = "Có ❤️";
        this.checked = false;  // Bỏ chọn "Không"
        document.getElementById("yes").checked = true;
    });
});
