$(document).ready(function() {
    var check = true;
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
        // boolean check = true;
        $('input').each(function() {
            var inputValue = $(this).val().trim();
            var inputId = $(this).attr('id');
            var regex;
            switch (inputId) {
                case 'txtHT':
                    regex = /^([A-ZÀ-Ỹ][a-zà-ỹ]+)(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)*$/; // Chỉ chấp nhận ký tự chữ và khoảng trắng
                    break;
                case 'txtNS':
                    regex = /^\d{4}-\d{2}-\d{2}$/; // Định dạng ngày sinh yyyy-mm-dd
                    break;
                case 'txtDN':
                    regex = /^[a-zA-Z0-9_]+$/; // Chỉ chấp nhận ký tự chữ, số và dấu gạch dưới
                    break;
                case 'txtMK':
                    regex = /^.{6,}$/; // Ít nhất 6 ký tự
                    break;
                case 'txtXNMK':
                    var password = $('#txtMK').val().trim();
                    regex = new RegExp('^' + password + '$'); // Xác nhận mật khẩu trùng khớp
                    break;
                case 'txtemail':
                    regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email hợp lệ
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
            alert('Đăng ký thành công!');
        }
    });
});