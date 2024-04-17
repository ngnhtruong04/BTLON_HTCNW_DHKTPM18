$(document).ready(function() {
    // Khi form được gửi đi
    $('#foodOrderForm').submit(function(event) {
        event.preventDefault();

        // Lấy thông tin từ form
        var contributionData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            food: $('#food').val(),
            description: $('#description').val(),
            image: $('#imagePreview img').attr('src') || ''
        };

        // Hiển thị bài viết mới
        displayContribution(contributionData);

        // Xóa dữ liệu trong form sau khi gửi
        $('#foodOrderForm')[0].reset();
    });

    // Hiển thị bài viết mới
    function displayContribution(contributionData) {
        var blogsContainer = $('#blogsContainer');
        var newContribution = $('<div class="contribution"></div>');
        newContribution.html(`
            <h3>${contributionData.name}</h3>
            <p><strong>Email:</strong> ${contributionData.email}</p>
            <p><strong>Số Điện Thoại:</strong> ${contributionData.phone}</p>
            <p><strong>Tên Món Ăn:</strong> ${contributionData.food}</p>
            <p><strong>Mô Tả Món Ăn:</strong> ${contributionData.description}</p>
            <img src="${contributionData.image}" alt="Ảnh món ăn">
        `);
        blogsContainer.prepend(newContribution);
    }
});