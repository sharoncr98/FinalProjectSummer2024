//Global Header, Head And Footer
$(document).ready(function() {
    $(function () {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

//click button event to trigger an alert
    $(document).ready(function () {
        $("#BUY").on("click", function () {
            alert("Item Added, Thank You For Your Purchase!");
        });
    });
//click button event to trigger an alert
    $(document).ready(function () {
        $("#submit").on("click", function () {
            alert("You have joined the Newsletter");
        });
    });
    //Hover effect in the shop page for first product
    $(document).ready(function () {
        $("#propage1").hover(
            function () {
                $(this).css("background-color", "#C8ACD6");
                $(this).css("color", "#663399");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#A9A9A9");
                $(this).css("color", "#663399");
                $(this).css("cursor", "#auto");
            }
        );
    });
    //Hover effect in the shop page for second product
    $(document).ready(function () {
        $("#propage2").hover(
            function () {
                $(this).css("background-color", "#FFFF00");
                $(this).css("color", "#663399");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#A9A9A9");
                $(this).css("color", "#663399");
                $(this).css("cursor", "#auto");
            }
        );
    });
    //Hover effect in the shop page for third product
    $(document).ready(function () {
        $("#propage3").hover(
            function () {
                $(this).css("background-color", "#0e0e0e");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#A9A9A9");
                $(this).css("color", "#663399");
                $(this).css("cursor", "#auto");
            }
        );
    });
});


