$(document).ready(function ($) {

    $("#aria2").hide();
    $("#aria3").hide();
    $("#aria4").hide();
    $("#aria5").hide();
    $("#aria6").hide();
    $("#aria7").hide();
    $("#aria8").hide();
    $("#aria9").hide();
    $("#aria10").hide();

    function durationSlider() {
        var listItems = 10;
        var count = 1;

        setInterval(function () {

            if (count != 10) {
                $("#aria" + count).hide();
                $("#aria" + (count + 1)).fadeIn(300);
            } else if (count == 10) {
                $("#aria10").hide()
                $("#aria1").fadeIn(300);
            }

            count += 1;
            if (count > listItems) {
                count = 1;
            }
        }, 4000);

    }

    durationSlider();

});