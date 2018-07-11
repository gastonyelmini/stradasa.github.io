var tpj = jQuery;
var revapi1;
tpj(document).ready(function () {
    if (tpj("#rev_slider_1_2").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1_2");
    } else {
        revapi1 = tpj("#rev_slider_1_2").show().revolution({
            sliderType: "hero",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {},
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: 1240,
            gridheight: 868,
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "spinner2",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    }
});
/*]]>*/