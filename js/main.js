$(document).ready(function () {
    // время и дата

    /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function time() {
        var current_datetime = new Date();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return hours + ":" + minutes
    }

    function date() {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth() + 1);
        var year = current_datetime.getFullYear();

        return day + "." + month + '.' + year
    }


    setInterval(function () {
        $(".header-line__time").text(time());
        $('.header-line__date').text(date)
    }, 1000);
});