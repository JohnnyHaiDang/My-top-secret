document.getElementById("responseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const response = document.querySelector('input[name="response"]:checked').value;
    const date = document.getElementById("date").value || "không xác định";
    const time = document.getElementById("time").value || "không xác định";
    const location = document.getElementById("location").value || "không xác định";

    const message = `
        Cô ấy đã trả lời: ${response}
        Ngày hẹn: ${date}
        Thời gian: ${time}
        Địa điểm: ${location}
    `;

    const telegramBotToken = "7945521557:AAFprrhQ_aEZoN1Omp3aImbxWhIV0f7lUuE"; // Thay bằng mã token của bot
    const chatId = "6184952852"; // Thay bằng mã chat ID của bạn

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => {
            if (response.ok) {
                document.getElementById("message").innerText = "Cảm ơn bé đã trả lời! Anh đã nhận được thông báo.";
            } else {
                document.getElementById("message").innerText = "Có lỗi xảy ra, vui lòng thử lại sau.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("message").innerText = "Có lỗi xảy ra, vui lòng thử lại sau.";
        });
});

