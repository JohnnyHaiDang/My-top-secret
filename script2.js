document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    
    noButton.addEventListener("click", function() {
        this.parentElement.querySelector('label[for="no"]').textContent = "Có ❤️";
        this.checked = false;
        document.getElementById("yes").checked = true;
    });
});
