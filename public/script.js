$(document).ready(function() {
    // Adicionar nova tarefa
    $('#add-task').click(function() {
        var taskText = $('#new-task').val();
        if (taskText !== '') {
            var taskItem = $('<li></li>').text(taskText);
            var deleteButton = $('<button></button>').text('Excluir');
            deleteButton.click(function() {
                $(this).parent().remove();
            });
            taskItem.append(deleteButton);
            taskItem.click(function() {
                $(this).toggleClass('completed');
            });
            $('#task-list').append(taskItem);
            $('#new-task').val('');
        }
    });

    // Permitir adicionar tarefa ao pressionar Enter
    $('#new-task').keypress(function(e) {
        if (e.which == 13) {
            $('#add-task').click();
        }
    });
});
