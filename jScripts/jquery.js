$(document).ready(function () {
    console.log("ready!");





    var dgcounter = 0;
    var yrcounter = 0;
    var prcounter = 0;
    var ktcounter = 0;
    var allcounter = 0;
    document.getElementById("yerakotdiv").style.display = "none";
    document.getElementById("dganimdiv").style.display = "none";
    document.getElementById("peirotdiv").style.display = "none";
    document.getElementById("kitniotdiv").style.display = "none";
    document.getElementById("emptystate").style.display = "block";
    var url = window.location.href;

    var target = url.split("#")[1];
    if (target) {
        $('#' + target).tab('show');
    }


    // קוד לדף מטופל
    $(".about").click(function () {
        $("#aboutModal").modal();
    });

    $("#grains").click(function () {
        $('html, body').animate({
            scrollTop: $("#grainsSection").offset().top
        }, 2000);
    });

    $("#vegs").click(function () {
        $('html, body').animate({
            scrollTop: $("#vegsSection").offset().top
        }, 2000);
    });

    $("#fruits").click(function () {
        $('html, body').animate({
            scrollTop: $("#fruitsSection").offset().top
        }, 2000);
    });
    $("#legumes").click(function () {
        $('html, body').animate({
            scrollTop: $("#legumesSection").offset().top
        }, 2000);
    });
    $("#seeds").click(function () {
        $('html, body').animate({
            scrollTop: $("#seedsSection").offset().top
        }, 2000);
    });
    $("#nuts").click(function () {
        $('html, body').animate({
            scrollTop: $("#nutsSection").offset().top
        }, 2000);
    });

    $(".backtotop").click(function () {
        $('html, body').animate({
            scrollTop: $(".food-plate").offset().top
        }, 2000);
    });


    $(".orange-sct-1").mouseenter(function () {
        $(this).css("background-color", "olive");
    });
    $(".orange-sct-1").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-2").mouseenter(function () {
        $(this).css("background-color", "orangered");
    });
    $(".orange-sct-2").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-3").mouseenter(function () {
        $(this).css("background-color", "forestgreen");
    });
    $(".orange-sct-3").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-4").mouseenter(function () {
        $(this).css("background-color", "saddlebrown");
    });
    $(".orange-sct-4").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-5").mouseenter(function () {
        $(this).css("background-color", "darkgoldenrod");
    });
    $(".orange-sct-5").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-6").mouseenter(function () {
        $(this).css("background-color", "darkred");
    });
    $(".orange-sct-6").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $("button").click(function () {

        //פונקציות לחיצה על כפתור הצ'ק ליסט- כל לחיצה מסמנת את הרכיב כבוצע
        if ($(this).hasClass("dganim_check_button")) {
            var x = $(this).attr("id");
            var res = parseInt(x.charAt(2));
            var name = "d" + res;
            console.log(name);
            $("#" + name).prop('checked', true);
        }
        if ($(this).hasClass("yerakot_check_button")) {
            var x = $(this).attr("id");
            var res = parseInt(x.charAt(2));
            var name = "y" + res;
            console.log(name);
            $("#" + name).prop('checked', true);
        }
        if ($(this).hasClass("peirot_check_button")) {
            var x = $(this).attr("id");
            var res = parseInt(x.charAt(2));
            var name = "p" + res;
            console.log(name);
            $("#" + name).prop('checked', true);
        }
        if ($(this).hasClass("kitniot_check_button")) {
            var x = $(this).attr("id");
            var res = parseInt(x.charAt(2));
            var name = "k" + res;
            console.log(name);
            $("#" + name).prop('checked', true);
        }

        if ($(this).hasClass("end-questions")) {
            $('#v-pills-offers-tab').trigger('click');
        }
       
    });

    //פילטור השלב השני- לחיצה אחת מציגה את הסוג הרלוונטי ולחיצה שנייה מעלימה 
    $("#dg").click(function () {
        if (dgcounter == 0) {
            document.getElementById("dganimdiv").style.display = "flex";
            dgcounter++;
            document.getElementById("emptystate").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("dg").classList.add("clickedFilter");
        }
        else {
            dgcounter = 0;
            document.getElementById("dganimdiv").style.display = "none";
            // הסר עיצוב כפתור לחיץ
            document.getElementById("dg").classList.remove("clickedFilter");
        }
    });
    $("#kt").click(function () {
        if (ktcounter == 0) {
            ktcounter++;
            document.getElementById("kitniotdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("kt").classList.add("clickedFilter");
        }
        else {
            ktcounter = 0;
            document.getElementById("kitniotdiv").style.display = "none";
            document.getElementById("emptystate").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("kt").classList.remove("clickedFilter");
        }
    });
    $("#pr").click(function () {
        if (prcounter == 0) {
            prcounter++;
            document.getElementById("peirotdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("pr").classList.add("clickedFilter");

        }
        else {
            prcounter = 0;
            document.getElementById("peirotdiv").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("pr").classList.remove("clickedFilter");
        }
    });
    $("#yr").click(function () {
        if (yrcounter == 0) {
            yrcounter++;
            document.getElementById("yerakotdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("yr").classList.add("clickedFilter");
        }
        else {
            yrcounter = 0;
            document.getElementById("yerakotdiv").style.display = "none";
            // הסר עיצוב כפתור לחיץ
            document.getElementById("yr").classList.remove("clickedFilter");
        }
    });
    $("#all").click(function () {
        if (allcounter == 0) {
            allcounter++;
            document.getElementById("yerakotdiv").style.display = "flex";
            document.getElementById("kitniotdiv").style.display = "flex";
            document.getElementById("peirotdiv").style.display = "flex";
            document.getElementById("dganimdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            // הוסף עיצוב כפתור לחיץ
            document.getElementById("all").classList.add("clickedFilter");

        }
        else {
            allcounter = 0;
            document.getElementById("yerakotdiv").style.display = "none";
            document.getElementById("dganimdiv").style.display = "none";
            document.getElementById("peirotdiv").style.display = "none";
            document.getElementById("kitniotdiv").style.display = "none";
            // הסר עיצוב כפתור לחיץ
            document.getElementById("all").classList.remove("clickedFilter");
        }
    });

    var dgcounter = 0;
    var yrcounter = 0;
    var prcounter = 0;
    var ktcounter = 0;
    var allcounter = 0;

    // Form Page
    $("#questions").submit(function (event) {
        event.preventDefault();
        var f = $("input[name='f']:checked").val();
        var s = $("input[name='s']:checked").val();
        var t = $("input[name='t']:checked").val();
        var fo = $("input[name='fo']:checked").val();
        var fi = $("input[name='fi']:checked").val();
        var si = $("input[name='si']:checked").val();
        var se = $("input[name='se']:checked").val();

        const good = [];
        const bad = [];

        if (f == "a" || f == "b") {
            good.push("קטניות");
        } else {
            bad.push("קטניות");
            ktcounter++;
            document.getElementById("kitniotdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            document.getElementById("kt").classList.add("clickedFilter");
        }

        if (s == "a" || s == "b") {
            good.push("בשר");
        } else {
            bad.push("בשר");
        }

        if (t == "a" || s == "b") {
            good.push("ירקות");
        } else {
            bad.push("ירקות");
            yrcounter++;
            document.getElementById("yerakotdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            document.getElementById("yr").classList.add("clickedFilter");
        }

        if (fo == "a" || fo == "b") {
            good.push("פירות");
        } else if (fo == "c") {
            bad.push("פירות");
            prcounter++;
            document.getElementById("peirotdiv").style.display = "flex";
            document.getElementById("emptystate").style.display = "none";
            document.getElementById("pr").classList.add("clickedFilter");
        }

        if (fi == "a" || fi == "b") {
            good.push("דגנים");
        } else {
            bad.push("דגנים");
            document.getElementById("dganimdiv").style.display = "flex";
            dgcounter++;
            document.getElementById("emptystate").style.display = "none";
            document.getElementById("dg").classList.add("clickedFilter");
        }

        if (si == "a" || si == "b") {
            good.push("בשר מעובד");
        } else {
            bad.push("בשר מעובד");
        }

        if (se == "a" || se == "b") {
            good.push("מזון מעובד");
        } else {
            bad.push("מזון מעובד");
        }

        let message = "";
        if (bad.length > 0 && good.length > 0) {
            message = `לפי השאלון אתה צורך ${good.join(", ")} בצורה טובה, אך ניתן לשפר את צריכה ה${bad.join(", ")}\n`
        } else if (bad.length > 0) {
            message = `לפי השאלון נראה שניתן לשפר את צריכת ה${bad.join(", ")}\n. `
        } else if (good.length > 0) {
            message = `כל הכבוד! נראה שהרגלי התזונה שלך מאוד טובים.\n`
        }
        message += "\n. עבור לשלב הבא בכדי לקבל המלצות בנוגע לתוצאות של השאלון";


        $(".modal-body").html(message);
        $("#resultsModal").modal("show");
    });



    // Tooltip tool
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    //tab selection with a dropdown list for small devices
    $('#tab_selector').on('change', function (e) {
        $('.stepsMenu a').eq($(this).val()).tab('show');
    });


});

