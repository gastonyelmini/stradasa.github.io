$(document).ready(function ($) {

    $("#aria2").hide();
    $("#aria3").hide();
    $("#aria4").hide();
    $("#aria5").hide();

    function durationSlider() {
        var listItems = 5;
        var count = 1;

        setInterval(function () {;

            if (count != 5) {
                $("#aria" + count).hide();
                $("#aria" + (count + 1)).fadeIn(300);
            } else if (count == 5) {
                $("#aria5").hide()
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