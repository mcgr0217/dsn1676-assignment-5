var $form = $('.form');
var $todo = $('.todo');
var $list = $('.list');
var $button = $('.button');

$form.on('submit', function (e) {
    e.preventDefault();
    var $li = $('<li>');
    var $button = $('<button>');
    $button.html('X');
    $button.addClass ('check');
    $button.on('click' function () {
    $li.remove();
    });    
    
    var $toDoH2 = $('<h2>').html($todo.val());
    $toDoH2.append($button);
    
    $todo
});