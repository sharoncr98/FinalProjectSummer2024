$(document).ready(function() {
    $(function () {
        $("#head").load("meta.html");
        $(".header").load("header.html");
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
//mouse enter & mouse leave for the Shop link page
    $(document).ready(function () {
        $("#shop").hover(
            function () {
                $(this).css("background-color", "#5b2d89");
                $(this).css("color", "#C8ACD6");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "#auto");
            }
        );
    });
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
//mouse enter & mouse leave for the Game boy Grey link page
    $(document).ready(function () {
        $("#p1").hover(
            function () {
                $(this).css("background-color", "#A9A9A9");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("cursor", "#auto");
            }
        );
    });
//mouse enter & mouse leave for the Game boy Yellow link page
    $(document).ready(function () {
        $("#p2").hover(
            function () {
                $(this).css("background-color", "#FFFF00");
                $(this).css("color", "#0e0e0e");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "#auto");
            }
        );
    });
//mouse enter & mouse leave for the Game boy black link page
    $(document).ready(function () {
        $("#p3").hover(
            function () {
                $(this).css("background-color", "#0e0e0e");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("cursor", "#auto");
            }
        );
    });
    $(document).ready(function () {
        $("#home").hover(
            function () {
                $(this).css("background-color", "#5b2d89");
                $(this).css("color", "#C8ACD6");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "#auto");
            }
        );
    });
    $(document).ready(function () {
        $("#contact").hover(
            function () {
                $(this).css("background-color", "#5b2d89");
                $(this).css("color", "#C8ACD6");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "#auto");
            }
        );
    });
    $(document).ready(function () {
        $("#about").hover(
            function () {
                $(this).css("background-color", "#5b2d89");
                $(this).css("color", "#C8ACD6");
                $(this).css("cursor", "pointer");
            },
            function () {
                $(this).css("background-color", "#663399");
                $(this).css("color", "#fefefe");
                $(this).css("cursor", "#auto");
            }
        );
    });
});


