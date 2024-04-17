$(document).ready(function() {
    // Kiểm tra khi rời khỏi ô input
    $('input').blur(function() {
        var inputValue = $(this).val().trim();
        if (inputValue === '') {
            $(this).next('span').text('Bắt buộc nhập!!!').addClass('mauDo');
        } else {
            $(this).next('span').text('').removeClass('mauDo');
        }
    });

    // Kiểm tra khi nhấn button type submit
    $('#btnSbt').click(function(event) {
        var check = true; // Reset biến kiểm tra

        $('input').each(function() {
            var inputValue = $(this).val().trim();
            var inputId = $(this).attr('id');
            var regex;
            switch (inputId) {
                case 'name':
                    regex = /^([A-ZÀ-Ỹ][a-zà-ỹ]+)(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)*$/; // Chỉ chấp nhận ký tự chữ và khoảng trắng
                    break;
                case 'email':
                    regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email hợp lệ
                    break;
                case 'phone':
                    regex = /^\d{10}$/; // Định dạng số điện thoại hợp lệ
                    break;
                case 'food':
                    regex = /.*/; // Mặc định chấp nhận bất kỳ ký tự nào
                    break;
                default:
                    regex = /.*/; // Mặc định chấp nhận bất kỳ ký tự nào
            }
            if (!regex.test(inputValue)) {
                $('#' + inputId).next('span').text('Biểu mẫu nhập không hợp lệ').addClass('mauDo');
                event.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
                check = false;
            } else {
                $('#' + inputId).next('span').text('').removeClass('mauDo');
            }
        });

        if (check) {
            alert('Đơn hàng của bạn đã được gửi thành công!');
        }
    });
});