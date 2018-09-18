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
    $("#aria11").hide();
    $("#aria12").hide();

    function durationSlider() {
        var listItems = 12;
        var count = 1;

        setInterval(function () {;

            if (count != 12) {
                $("#aria" + count).hide();
                $("#aria" + (count + 1)).fadeIn(300);
            } else if (count == 12) {
                $("#aria12").hide()
                $("#aria1").fadeIn(300);
            }
            console.log("Oculte" + count);
            console.log("Mostre" + (count + 1));
            console.log("Count es" + count);

            // console.log(count);

            count += 1;
            if (count > listItems) {
                count = 1;
            }
        }, 4000);

    }

    durationSlider();

});