$(document).ready(function () {
    console.log("ready!");

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
        }

        if (fo == "a" || fo == "b") {
            good.push("פירות");
        } else if (fo == "c") {
            bad.push("פירות");
            prcounter++;
        }

        if (fi == "a" || fi == "b") {
            good.push("דגנים");
        } else {
            bad.push("דגנים");
            dgcounter++;
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
            message += "\n. כדי לקבל עזרה והצעות בנושא נא לשתף את התוצאות עם הרופא";
        } else if (bad.length > 0) {
            message = `לפי השאלון נראה שניתן לשפר את צריכת ה${bad.join(", ")}\n. `
            message += "\n. כדי לקבל עזרה והצעות בנושא נא לשתף את התוצאות עם הרופא";
        } else if (good.length > 0) {
            message = `כל הכבוד! נראה שהרגלי התזונה שלך מאוד טובים.\n`
        }


        $(".modal-body").html(message);
        $("#resultsModal").modal("show");
    });


    $(".about").click(function () {
        $("#aboutModal").modal();
    });

    $("#grains").click(function () {
        $('html, body').animate({
            scrollTop: $("#grainsSection").offset().top
        }, 600);
    });

    $("#vegs").click(function () {
        $('html, body').animate({
            scrollTop: $("#vegsSection").offset().top
        }, 600);
    });

    $("#fruits").click(function () {
        $('html, body').animate({
            scrollTop: $("#fruitsSection").offset().top
        }, 600);
    });
    $("#legumes").click(function () {
        $('html, body').animate({
            scrollTop: $("#legumesSection").offset().top
        }, 600);
    });
    $("#seeds").click(function () {
        $('html, body').animate({
            scrollTop: $("#seedsSection").offset().top
        }, 600);
    });
    $("#nuts").click(function () {
        $('html, body').animate({
            scrollTop: $("#nutsSection").offset().top
        }, 600);
    });

    $(".backtotop").click(function () {
        $('html, body').animate({
            scrollTop: $(".food-plate").offset().top
        }, 600);
    });


    $(".orange-sct-1").mouseenter(function () {
        $(this).css("background-color", "#f8e8d9");
    });
    $(".orange-sct-1").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-2").mouseenter(function () {
        $(this).css("background-color", "#f8d9db");
    });
    $(".orange-sct-2").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-3").mouseenter(function () {
        $(this).css("background-color", "#d9f8da");
    });
    $(".orange-sct-3").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-4").mouseenter(function () {
        $(this).css("background-color", "#f9e4ad");
    });
    $(".orange-sct-4").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-5").mouseenter(function () {
        $(this).css("background-color", "#f8f7d9");
    });
    $(".orange-sct-5").mouseleave(function () {
        $(this).css("background-color", "");
    });

    $(".orange-sct-6").mouseenter(function () {
        $(this).css("background-color", "#f8eed9");
    });
    $(".orange-sct-6").mouseleave(function () {
        $(this).css("background-color", "");
    });

});

