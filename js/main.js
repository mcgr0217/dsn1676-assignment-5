var $form = $('.form');
var $add = $('#todo');
var $new = $('.list');

$form.on('submit', function (e) {
    var $li = $('<li>');
    e.preventDefault();
    $li.append($todo.val());
    $list.append($li);
    $li.on('click', function () {
    $li.remove();
    });
});