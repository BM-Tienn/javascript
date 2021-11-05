$(document).ready(function () {
  var index = 1;
  var totalImg = $('.slideshow img').length;
  $('.slideshow img').hide();
  //   $('#img-' + index).show();
  $('.slideshow img')
    .eq(index - 1)
    .show();

  $('.btn-container button').click(function () {
    index = Number($(this).text());
    showImage();
  });

  $('.prev-btn').click(function () {
    index = index == 1 ? totalImg : index - 1;
    showImage();
  });

  $('.next-btn').click(function () {
    index = index == totalImg ? 1 : index + 1;
    showImage();
  });

  function showImage() {
    $('.btn-container button').removeClass('active');
    // $('#btn-' + index).addClass('active');
    $('.btn-container button')
      .eq(index - 1)
      .addClass('active');
    $('.slideshow img').hide();
    // $('#img-' + index).fadeIn(1000);
    $('.slideshow img')
      .eq(index - 1)
      .fadeIn(1000);
  }

  // ------------------------------------------------------------------------------
  // Game

  var images = ['./image/beach.svg', './image/robot.svg', './image/space.svg'];
  var total = images.length;
  var randomImages = shuffleArray(images);
  var clickedNum = 0; // số lần click mở cửa
  var currentStreak = 0; // số lần thắng liên tiếp
  var bestStreak = 0; // số lần thắng liên tiếp cao nhất
  var isLose = false; // thua?

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function showResult() {
    bestStreak = bestStreak > currentStreak ? bestStreak : currentStreak;
    $('#current-streak').text(currentStreak);
    $('#best-streak').text(bestStreak);
  }

  $('.door-container img').click(function () {
    clickedNum = clickedNum + 1;
    // chỉ xử lý khi chưa có kết quả thua/thắng
    if (clickedNum <= total && !isLose) {
      const url = randomImages[$(this).index()];
      $(this).attr('src', url);
      if (url === './image/robot.svg' && clickedNum < total) {
        // thua
        isLose = true;
        currentStreak = 0;
        $('.play-button button').html('Game over!</br>Play again?');
        showResult();
      }
      if (url === './image/robot.svg' && clickedNum === total) {
        // thắng
        currentStreak += 1;
        $('.play-button button').html('You win!</br>Play again?');
        showResult();
      }
    }
  });

  $('.play-button button').click(function () {
    isLose = false;
    $('.door-container img').attr('src', './image/closed_door.svg');
    $('.play-button button').html('Good luck!');
    randomImages = shuffleArray(images);
    clickedNum = 0;
  });

  // ------------------------------------------------------------------------------
  // Accordion
  $('.acc-collapse').eq(1).show();
  $('.acc-header').click(function () {
    const content = $(this).next('.acc-collapse');
    const button = $(this).find('.acc-button');
    if (content.hasClass('show')) {
      content.removeClass('show').slideUp(200);
      button.removeClass('open');
    } else {
      $('.acc-collapse').removeClass('show').slideUp(200);
      $('.acc-button').removeClass('open');
      content.addClass('show').slideDown(200);
      button.addClass('open');
    }
  })

  // ------------------------------------------------------------------------------
  // Ajax
  var tBody = $("#myTable tbody");

  function getTableData() {
    $.ajax({
      url: 'http://localhost:3000/posts',
      type: 'get',
      success: function (result, status, xhr) {
        setTimeout(() => {
          $('#overlay').removeClass('overlay');
          $('#loading').removeClass('loading');
          if (status === 'success' && result.length > 0) {
            tableLength = result.length;
            result.forEach(item => {
              let tr = `
                <tr id="${item.id}">
                  <td>${item.id}</td>
                  <td class="title">${item.title}</td>
                  <td class="body">${item.body}</td>
                  <td class="action">
                    <button class="edit">Sửa</button>
                    <button class="delete">Xóa</button>
                  </td>
                </tr>
              `;
              tBody.append(tr);
            })
            deleteItem();
            editItem();
          }
        }, 500);
      }
    })
  }
  $('#overlay').addClass('overlay');
  $('#loading').addClass('loading');
  getTableData();

  $('#add-btn').click(function() {
    $('#overlay').addClass('overlay');
    $('#loading').addClass('loading');
    $.ajax({
      url: 'http://localhost:3000/posts',
      type: 'post',
      data: {
        "title": $("#tieude").val(),
        "body": $("#noidung").val()
      },
      success: function (result, status, xhr) {
        if (status === 'success') {
          $("#myTable tbody").empty();
          getTableData();
        }
      }
    });
  });

  function deleteItem() {
    $('td.action button.delete').click(function() {
      $('#overlay').addClass('overlay');
      $('#loading').addClass('loading');
      const id = $(this).parent().parent().attr('id');
      $.ajax({
        url: 'http://localhost:3000/posts/' + id,
        type: 'delete',
        success: function (result, status, xhr) {
          if (status === 'success') {
            $("#myTable tbody").empty();
            getTableData();
          }
        }
      });
    });
  }

  function editItem() {
    $('td.action button.edit').click(function() {
      const tr = $(this).parent().parent();
      const id = tr.attr('id');
      $("#tieude").val(tr.find('.title').text());
      $("#noidung").val(tr.find('.body').text());
    });
  }
});

//json-server --watch db.json khởi chạy máy chủ json