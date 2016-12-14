$(function () {
  $('#login').on('click', function () {
    $.ajax({
      url: 'login',
      data: {
        account: $('#account').val(),
        password: $('#password').val()
      },
      type: 'post',
      dataType:'json',
      success: function (data, status, xhr) {
        if (data.message == 'OK') {
          alert('login');
          window.location.href = 'index.html';
        } else {
          alert('账号或密码错误');
        }
      },
      error: function (xhr, status, data) {
        console.log(data);
        alert('服务器错误');
      }
    });
  });
});
