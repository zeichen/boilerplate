function firstAnimate() {
    setSection_00_in(), $(".bigDrop").click(function() {
        isSectionAni || (myPre = 0, myNow = 0, myClick = 1, autoAniCount())
    }), $(document).on("mousewheel", mwEvent), $("ul#nav li").on("click", menuEvent), $("#absorb .btn").on("click", absorbPopup), $("#absorb .info").hover(function() {
        $(this).stop().animate({
            opacity: "0"
        }, 500), $("#absorb .after").stop().animate({
            opacity: "1"
        }, 500)
    }, function() {
        $(this).stop().animate({
            opacity: "1"
        }, 500), $("#absorb .after").stop().animate({
            opacity: "0"
        }, 500)
    }), $(".circle.one img").hover(function() {
        TweenMax.to(".circle.one img", .3, {
            scale: 1.1
        })
    }, function() {
        TweenMax.to(".circle.one img", .3, {
            scale: 1
        })
    }), $(".circle.two img").hover(function() {
        TweenMax.to(".circle.two img", .3, {
            scale: 1.1
        })
    }, function() {
        TweenMax.to(".circle.two img", .3, {
            scale: 1
        })
    }), $(".circle.three img").hover(function() {
        TweenMax.to(".circle.three img", .3, {
            scale: 1.1
        })
    }, function() {
        TweenMax.to(".circle.three img", .3, {
            scale: 1
        })
    }), $(".label1 a").on("click", label1Popup), $(".label2 a").on("click", label2Popup), $("#popup2 .close").on("click", labelClose), $(".btnWrap .type1").on("click", bloggerListChange), $(".btnWrap .type3").on("click", bloggerListChange), $(".scrollDown").on("click", sdClick), $(".clickArea").on("click", clickArea);
    var e = "api/ClickCount." + (location.hostname.indexOf("localhost") >= 0 ? "html" : "ashx");
    $.ajax({
        url: e,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {}
    }).success(function(e) {
        $.each(e.data, function(e, t) {
            $("#productSet" + t.id + "Num").text(parseInt(t.count, 10) + 200)
        })
    }).error(function() {
        alert("網路傳輸失敗，請稍後再試。")
    });
    var t, o = !1,
        a = 0;
    $(".productSet").click(function() {
        if (1 == $(this).hasClass("one") ? (a = 1, t = "http://www.beautymate.com.tw/product.php?pid_for_show=3293&category_sn=533", ga("send", "event", "promotion", "click", "深層美白組")) : 1 == $(this).hasClass("two") ? (a = 2, t = "http://www.beautymate.com.tw/product.php?pid_for_show=3292&category_sn=533", ga("send", "event", "promotion", "click", "極速鎖水組")) : 1 == $(this).hasClass("three") && (a = 3, t = "http://www.beautymate.com.tw/product.php?pid_for_show=3299&category_sn=533", ga("send", "event", "promotion", "click", "黃金七天速效組")), o) return !1;
        o = !0;
        var e = "api/SaveClick." + (location.hostname.indexOf("localhost") >= 0 ? "html" : "ashx"),
            n = {
                ProductID: a,
                current_url: location.href,
                referrer_url: document.referrer,
                target_url: t
            };
        $.ajax({
            url: e,
            type: "post",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data: n
        }).success(function(e) {
            o = !1, console.log(e), e && e.error_message && alert(e.error_message)
        }).error(function() {
            o = !1, alert("網路傳輸失敗，請稍後再試。")
        })
    }), $("#indexBtn, #go").click(function() {
        ga("send", "event", "Menu", "click", "100%導入關鍵立即看")
    }), $("#importingBtn").click(function() {
        ga("send", "event", "Menu", "click", "微晶導入")
    }), $("#absorbBtn").click(function() {
        ga("send", "event", "Menu", "click", "全面吸收")
    }), $("#bloggersBtn").click(function() {
        ga("send", "event", "Menu", "click", "達人見證")
    }), $("#stepsBtn").click(function() {
        ga("send", "event", "Menu", "click", "美麗教學")
    }), $("#buyBtn").click(function() {
        ga("send", "event", "Menu", "click", "促銷單元")
    }), $("#absorb .btn img").click(function() {
        ga("send", "event", "product2", "click", "何謂生物纖維面膜")
    }), $("#bloggers .btnWrap a.type1").click(function() {
        ga("send", "event", "blogger", "click", "人氣網模")
    }), $("#bloggers .btnWrap a.type3").click(function() {
        ga("send", "event", "blogger", "click", "保養達人")
    }), $("#bloggers .productWrap .label1 a img").click(function() {
        ga("send", "event", "blogger", "click", "FG_保濕試用報告")
    }), $("#bloggers .productWrap .label2 a img").click(function() {
        ga("send", "event", "blogger", "click", "FG_美白試用報告")
    }), $(".bloggerContainer").click(function() {
        ga("send", "event", "blogger", "click", "外連瀏覽部落客")
    })
}

function first_set() {
    TweenMax.set(".index_title", {
        opacity: 0,
        y: -30
    }), TweenMax.set(".bigDrop", {
        opacity: 0
    }), TweenMax.set(".smallDrops", {
        y: 300
    }), TweenMax.set(".sb1", {
        x: 40,
        y: 140,
        scale: 0
    }), TweenMax.set(".sb2", {
        x: -70,
        y: 190,
        scale: 0
    }), TweenMax.set(".sb3", {
        x: 0,
        y: 90,
        scale: 0
    }), TweenMax.set(".sb4", {
        x: -70,
        y: 50,
        scale: 0
    }), TweenMax.set(".sb5", {
        x: -70,
        y: 0,
        scale: 0
    }), TweenMax.set(".sb6", {
        x: 100,
        y: 40,
        scale: 0
    }), TweenMax.set(".sb7", {
        x: 50,
        y: 0,
        scale: 0
    }), TweenMax.set(".sb8", {
        x: -30,
        y: 0,
        scale: 0
    }), TweenMax.set(".sb9", {
        x: 60,
        y: -50,
        scale: 0
    }), TweenMax.set(".sb10", {
        x: -10,
        y: -60,
        scale: 0
    }), TweenMax.set(".sb11", {
        x: -50,
        y: -100,
        scale: 0
    }), TweenMax.set(".sb12", {
        x: 70,
        y: -100,
        scale: 0
    }), TweenMax.set(".sb13", {
        x: 30,
        y: -110,
        scale: 0
    }), TweenMax.set(".topWave", {
        opacity: 0,
        scale: 0,
        x: -435,
        y: -220
    }), TweenMax.set(".bottomWave", {
        opacity: 0,
        scale: 0,
        y: 820
    }), TweenMax.set(".circle1Img", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".circle2Img", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".circle3Img", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".triangleImg", {
        opacity: 0,
        scale: 0,
        rotation: 180
    }), TweenMax.set(".triangleInfo", {
        opacity: 0,
        y: 20
    }), TweenMax.set(".circle1.text", {
        opacity: 0,
        y: 20
    }), TweenMax.set(".circle2.text", {
        opacity: 0,
        y: 20
    }), TweenMax.set(".circle3.text", {
        opacity: 0,
        y: 20
    }), TweenMax.set(".zoomInBg", {
        opacity: 0,
        x: 20
    }), TweenMax.set(".info", {
        opacity: 0,
        x: 20
    }), TweenMax.set(".after", {
        opacity: 0,
        x: 20
    }), TweenMax.set("#absorb .text", {
        opacity: 0,
        x: -20
    }), TweenMax.set("#absorb .btn", {
        opacity: 0,
        x: 20
    }), TweenMax.set("#bloggers h1", {
        x: -100,
        opacity: 0
    }), TweenMax.set(".bloggerList.active .bloggerContainer", {
        x: -100,
        opacity: 0
    }), TweenMax.set(".productWrap .title", {
        x: 100,
        opacity: 0
    }), TweenMax.set(".productWrap .label1", {
        scale: 0,
        opacity: 0
    }), TweenMax.set(".productWrap .label2", {
        scale: 0,
        opacity: 0
    }), TweenMax.set(".productWrap .fg1", {
        scale: 0,
        opacity: 0
    }), TweenMax.set(".productWrap .fg2", {
        scale: 0,
        opacity: 0
    }), TweenMax.set("#bloggers .btnWrap", {
        y: -50,
        opacity: 0
    }), TweenMax.set("#steps .leftColumn h1", {
        opacity: 0,
        x: -20
    }), TweenMax.set("#steps .leftColumn .mask", {
        opacity: 0,
        x: -20
    }), TweenMax.set("#steps .leftColumn .label.one", {
        opacity: 0,
        scale: 0
    }), TweenMax.set("#steps .leftColumn .label.two", {
        opacity: 0,
        scale: 0
    }), TweenMax.set("#steps .leftColumn .label.three", {
        opacity: 0,
        scale: 0
    }), TweenMax.set("#steps .rightColumn", {
        opacity: 0,
        scale: 0,
        x: 100
    }), TweenMax.set("#steps .rightColumn .step1", {
        opacity: 0
    }), TweenMax.set("#steps .rightColumn .step2", {
        opacity: 0
    }), TweenMax.set("#steps .rightColumn .step3", {
        opacity: 0
    }), TweenMax.set("#steps .rightColumn .note", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".productSet.one", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.two", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.three", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.one .sale", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".productSet.two .sale", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".productSet.three .sale", {
        opacity: 0,
        scale: 0
    }), TweenMax.set(".shoppingCart", {
        opacity: 0,
        x: -30
    }), TweenMax.set("#buy h1", {
        opacity: 0,
        y: -30
    })
}

function setSection_00_in() {
    0 === myNow && 1 === myPre ? (TweenMax.to(".smallDrops", .5, {
        delay: 3.2,
        y: 300
    }), TweenMax.to(".sb1", .5, {
        delay: 3.2,
        x: 40,
        y: 140,
        scale: 0
    }), TweenMax.to(".sb2", .5, {
        delay: 3.2,
        x: -70,
        y: 190,
        scale: 0
    }), TweenMax.to(".sb3", .5, {
        delay: 3.2,
        x: 0,
        y: 90,
        scale: 0
    }), TweenMax.to(".sb4", .5, {
        delay: 3.2,
        x: -70,
        y: 50,
        scale: 0
    }), TweenMax.to(".sb5", .5, {
        delay: 3.2,
        x: -70,
        y: 0,
        scale: 0
    }), TweenMax.to(".sb6", .5, {
        delay: 3.2,
        x: 100,
        y: 40,
        scale: 0
    }), TweenMax.to(".sb7", .5, {
        delay: 3.2,
        x: 50,
        y: 0,
        scale: 0
    }), TweenMax.to(".sb8", .5, {
        delay: 3.2,
        x: -30,
        y: 0,
        scale: 0
    }), TweenMax.to(".sb9", .5, {
        delay: 3.2,
        x: 60,
        y: -50,
        scale: 0
    }), TweenMax.to(".sb10", .5, {
        delay: 3.2,
        x: -10,
        y: -60,
        scale: 0
    }), TweenMax.to(".sb11", .5, {
        delay: 3.2,
        x: -50,
        y: -100,
        scale: 0
    }), TweenMax.to(".sb12", .5, {
        delay: 3.2,
        x: 70,
        y: -100,
        scale: 0
    }), TweenMax.to(".sb13", .5, {
        delay: 3.2,
        x: 30,
        y: -110,
        scale: 0
    }), TweenMax.to(".bigDrop", .3, {
        delay: 3.5,
        opacity: 1,
        scale: 1
    })) : (isSectionAni = !0, TweenMax.to(".index_title", 1, {
        opacity: 1,
        y: 0
    }), TweenMax.to(".bigDrop", 1, {
        opacity: 1,
        delay: 1,
        onComplete: function() {
            isSectionAni = !1
        }
    })), myPre = 0
}

function setSection_00_out() {
    TweenMax.to(".bigDrop", .5, {
        opacity: 0,
        scale: 0
    }), TweenMax.to(".sb1", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb2", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb3", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb4", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb5", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb6", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb7", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb8", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb9", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb10", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb11", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb12", .5, {
        x: 0,
        y: 0,
        scale: 1
    }), TweenMax.to(".sb13", .5, {
        x: 0,
        y: 0,
        scale: 1,
        onComplete: function() {
            TweenMax.to(".smallDrops", 1, {
                y: 0,
                ease: Expo.easeInOut
            }), sectionMove()
        }
    })
}

function setSection_01_in() {
    1 === myNow && 0 === myPre && (TweenMax.to(".sb13", .5, {
        delay: 1.5,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb12", .5, {
        delay: 1.6,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb11", .5, {
        delay: 1.7,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb10", .5, {
        delay: 1.8,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb9", .5, {
        delay: 1.9,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb8", .5, {
        delay: 2,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb7", .5, {
        delay: 2.1,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb6", .5, {
        delay: 2.2,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb5", .5, {
        delay: 2.3,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb4", .5, {
        delay: 2.4,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb3", .5, {
        delay: 2.5,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb2", .5, {
        delay: 2.6,
        opacity: 0,
        y: 20
    }), TweenMax.to(".sb1", .5, {
        delay: 2.7,
        opacity: 0,
        y: 20
    }), TweenMax.to(".topWave", .5, {
        delay: 1.5,
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0
    }), TweenMax.to(".bottomWave", .5, {
        delay: 1.5,
        opacity: 1,
        scale: 1,
        y: 0
    }), TweenMax.to(".triangleImg", .5, {
        delay: 2,
        opacity: 1,
        scale: 1,
        rotation: 0
    }), TweenMax.to(".circle1Img", .5, {
        delay: 2.5,
        opacity: 1,
        scale: 1
    }), TweenMax.to(".circle2Img", .5, {
        delay: 2.5,
        opacity: 1,
        scale: 1
    }), TweenMax.to(".circle3Img", .5, {
        delay: 2.5,
        opacity: 1,
        scale: 1
    }), TweenMax.to(".triangleInfo", 1, {
        delay: 2.5,
        opacity: 1,
        y: 0
    }), TweenMax.to(".circle1.text", 1, {
        delay: 2.5,
        opacity: 1,
        y: 0
    }), TweenMax.to(".circle2.text", 1, {
        delay: 2.5,
        opacity: 1,
        y: 0
    }), TweenMax.to(".circle3.text", 1, {
        delay: 2.5,
        opacity: 1,
        y: 0,
        onComplete: function() {
            myPre = 1
        }
    })), 1 === myNow && 2 === myPre && (myPre = 1)
}

function setSection_01_out() {
    0 === myNow && (TweenMax.to(".triangleInfo", 1, {
        opacity: 0,
        y: 20
    }), TweenMax.to(".circle1.text", 1, {
        opacity: 0,
        y: 20
    }), TweenMax.to(".circle2.text", 1, {
        opacity: 0,
        y: 20
    }), TweenMax.to(".circle3.text", 1, {
        opacity: 0,
        y: 20
    }), TweenMax.to(".circle1Img", .5, {
        opacity: 0,
        scale: 0
    }), TweenMax.to(".circle2Img", .5, {
        opacity: 0,
        scale: 0
    }), TweenMax.to(".circle3Img", .5, {
        opacity: 0,
        scale: 0
    }), TweenMax.to(".triangleImg", .5, {
        delay: 1,
        opacity: 0,
        scale: 0,
        rotation: 180
    }), TweenMax.to(".topWave", .5, {
        delay: 1.5,
        opacity: 0,
        scale: 0,
        x: -435,
        y: -220
    }), TweenMax.to(".bottomWave", .5, {
        delay: 1.5,
        opacity: 0,
        scale: 0,
        y: 820
    }), TweenMax.to(".sb13", .5, {
        delay: .3,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb12", .5, {
        delay: .4,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb11", .5, {
        delay: .5,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb10", .5, {
        delay: .6,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb9", .5, {
        delay: .7,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb8", .5, {
        delay: .8,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb7", .5, {
        delay: .9,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb6", .5, {
        delay: 1,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb5", .5, {
        delay: 1.1,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb4", .5, {
        delay: 1.2,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb3", .5, {
        delay: 1.3,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb2", .5, {
        delay: 1.4,
        opacity: 1,
        y: 0
    }), TweenMax.to(".sb1", .5, {
        delay: 1.5,
        opacity: 1,
        y: 0,
        onComplete: function() {
            TweenMax.to(".smallDrops", 1, {
                y: 300,
                ease: Expo.easeInOut
            }), sectionMove()
        }
    })), 2 === myNow && (TweenMax.set("#importing .mask1", {
        opacity: 0
    }), TweenMax.set(".mainObjMask1", {
        opacity: 1
    }), sectionMove())
}

function setSection_02_in() {
    2 === myNow && 1 === myPre && (TweenMax.to(".mainObjMask1", 1, {
        ease: Expo.easeInOut,
        rotation: -25,
        x: -60,
        y: -160,
        opacity: 0
    }), TweenMax.to(".mainObjMask2", 1, {
        delay: .5,
        opacity: .5
    }), TweenMax.to(".zoomInBg", .5, {
        delay: 1,
        opacity: 1,
        x: 0
    }), TweenMax.to(".info", .5, {
        delay: 1,
        opacity: 1,
        x: 0
    }), TweenMax.to("#absorb .text", .5, {
        delay: 1,
        opacity: 1,
        x: 0
    }), TweenMax.to("#absorb .btn", .5, {
        delay: 1.5,
        opacity: 1,
        x: 0,
        onComplete: function() {
            myPre = 2
        }
    })), 2 === myNow && 3 === myPre && (myPre = 2)
}

function setSection_02_out() {
    1 === myNow && (TweenMax.to("#absorb .text", .5, {
        opacity: 0,
        x: -20
    }), TweenMax.to("#absorb .btn", .5, {
        opacity: 0,
        x: 20
    }), TweenMax.to(".zoomInBg", .5, {
        delay: .5,
        opacity: 0,
        x: 20
    }), TweenMax.to(".info", .5, {
        delay: .5,
        opacity: 0,
        x: 20
    }), TweenMax.to(".after", .5, {
        delay: .5,
        opacity: 0,
        x: 20
    }), TweenMax.to(".mainObjMask2", .5, {
        delay: .5,
        opacity: 0,
        onComplete: function() {
            sectionMove(), TweenMax.to(".mainObjMask1", 1, {
                ease: Expo.easeInOut,
                rotation: 0,
                x: 0,
                y: 0,
                opacity: 1,
                onComplete: function() {
                    TweenMax.set("#importing .mask1", {
                        opacity: 1
                    }), TweenMax.set(".mainObjMask1", {
                        opacity: 0
                    })
                }
            })
        }
    })), 3 === myNow && (TweenMax.to(".mainObjMask2", .5, {
        opacity: 0,
        delay: .5
    }), sectionMove())
}

function setSection_03_in() {
    3 === myNow && 2 === myPre && (TweenMax.to("#bloggers h1", .3, {
        delay: 1,
        x: 0,
        opacity: 1,
        onComplete: function() {
            bh1timer = setTimeout("bh1Animate()", 100)
        }
    }), TweenMax.staggerTo(".bloggerList.active .bloggerContainer", .5, {
        delay: 1.3,
        x: 0,
        opacity: 1
    }, .2), TweenMax.to(".productWrap .title", .5, {
        delay: 1.3,
        x: 0,
        opacity: 1
    }), TweenMax.to(".productWrap .label1", .3, {
        delay: 1.3,
        scale: 1,
        opacity: 1
    }), TweenMax.to(".productWrap .label2", .3, {
        delay: 1.3,
        scale: 1,
        opacity: 1
    }), TweenMax.to(".productWrap .fg1", .3, {
        delay: 1.3,
        scale: 1,
        opacity: 1
    }), TweenMax.to(".productWrap .fg2", .3, {
        delay: 1.3,
        scale: 1,
        opacity: 1
    }), TweenMax.to("#bloggers .btnWrap", .5, {
        delay: 2.4,
        y: 0,
        opacity: 1
    })), myPre = 3
}

function bh1Animate() {
    clearTimeout(bh1timer), bh1Num > -30 ? (bh1Num--, $(window).height() < 780 ? $("#bloggers h1").css("background-position-y", 90 * bh1Num) : $("#bloggers h1").css("background-position-y", 120 * bh1Num)) : bh1Num = 0, bh1timer = setTimeout("bh1Animate()", 100)
}

function setSection_03_out() {
    2 === myNow && ($("#popup2 .close").trigger("click"), TweenMax.to("#bloggers .btnWrap", .5, {
        y: -50,
        opacity: 0
    }), TweenMax.to(".productWrap .label1", .3, {
        delay: .5,
        scale: 0,
        opacity: 0
    }), TweenMax.to(".productWrap .label2", .3, {
        delay: .5,
        scale: 0,
        opacity: 0
    }), TweenMax.to(".productWrap .fg1", .3, {
        delay: .5,
        scale: 0,
        opacity: 0
    }), TweenMax.to(".productWrap .fg2", .3, {
        delay: .5,
        scale: 0,
        opacity: 0
    }), TweenMax.to(".productWrap .title", .5, {
        delay: .5,
        x: 100,
        opacity: 0
    }), TweenMax.staggerTo(".bloggerList.active .bloggerContainer", .5, {
        delay: .5,
        x: -100,
        opacity: 0
    }, .2), TweenMax.to("#bloggers h1", .3, {
        delay: 1.6,
        x: -100,
        opacity: 0,
        onComplete: function() {
            TweenMax.to(".mainObjMask2", .5, {
                opacity: .5,
                delay: .5
            }), sectionMove()
        }
    })), 4 === myNow && (TweenMax.set(".productSet.one", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.two", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.three", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".shoppingCart", {
        opacity: 0,
        x: -30
    }), TweenMax.set("#buy h1", {
        opacity: 0,
        y: -30
    }), $("#productPack").css({
        display: "block",
        opacity: "0"
    }), TweenMax.to("#productPack", 1, {
        opacity: 1,
        onComplete: function() {
            $("#productPack").animate({
                width: "126px",
                left: "90px",
                "margin-top": "-172px"
            }, 1e3, "easeInOutExpo", function() {
                TweenMax.to("#productPack", .5, {
                    opacity: 0
                })
            }), sectionMove()
        }
    }))
}

function setSection_04_in() {
    4 === myNow && 3 === myPre && (TweenMax.to(".productSet.one", 0, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        onComplete: function() {}
    }), TweenMax.to(".productSet.two", 0, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        onComplete: function() {}
    }), TweenMax.to(".productSet.three", 0, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        onComplete: function() {}
    }), TweenMax.to(".shoppingCart", 1, {
        delay: 1.5,
        opacity: 1,
        x: -20
    }), TweenMax.to("#buy h1", .5, {
        delay: 1,
        opacity: 1,
        y: 0
    }), TweenMax.to(".scrollDown", 1, {
        delay: 1.5,
        opacity: 0
    })), 4 === myNow && 5 === myPre && (TweenMax.to("#productPack", .5, {
        delay: 2,
        opacity: 0
    }), TweenMax.to("#steps .rightColumn", .5, {
        delay: 2,
        opacity: 1,
        scale: 1,
        x: 0
    })), myPre = 4
}

function setSection_04_out() {
    3 === myNow && (TweenMax.to(".scrollDown", 1, {
        opacity: 1
    }), TweenMax.to(".productSet.three", .5, {
        opacity: 0,
        y: -20
    }), TweenMax.to(".productSet.two", .5, {
        opacity: 0,
        y: -20
    }), TweenMax.to(".productSet.one", .5, {
        opacity: 0,
        y: -20
    }), TweenMax.to(".shoppingCart", .5, {
        delay: .5,
        opacity: 0,
        x: -30
    }), TweenMax.to("#buy h1", .5, {
        delay: .5,
        opacity: 0,
        y: -30
    }), TweenMax.to("#productPack", 1, {
        opacity: 1,
        onComplete: function() {
            sectionMove(), $("#productPack").animate({
                width: "202px",
                left: "48px",
                "margin-top": "-133px"
            }, 1e3, "easeInOutExpo", function() {
                TweenMax.to("#productPack", .5, {
                    opacity: 0
                })
            })
        }
    })), 5 === myNow && (TweenMax.set(".productSet.one", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.two", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".productSet.three", {
        opacity: 0,
        y: -20
    }), TweenMax.set(".shoppingCart", {
        opacity: 0,
        x: -30
    }), TweenMax.set("#buy h1", {
        opacity: 0,
        y: -30
    }), TweenMax.to("#steps .rightColumn", .5, {
        opacity: 0,
        scale: 0,
        x: 100
    }), TweenMax.to("#productPack", 1, {
        opacity: 1,
        onComplete: function() {
            $("#productPack").animate({
                width: "126px",
                left: "90px",
                "margin-top": "-172px"
            }, 1e3, "easeInOutExpo", function() {
                TweenMax.to("#productPack", .5, {
                    opacity: 0
                })
            }), sectionMove()
        }
    }))
}

function setSection_05_in() {
    5 === myNow && 4 === myPre && (TweenMax.to(".productSet.one", .5, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        onComplete: function() {}
    }), TweenMax.to(".productSet.two", .5, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        onComplete: function() {}
    }), TweenMax.to(".productSet.three", .5, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        onComplete: function() {}
    }), TweenMax.to(".shoppingCart", 1, {
        delay: 2,
        opacity: 1,
        x: -20
    }), TweenMax.to("#buy h1", 1, {
        delay: 1,
        opacity: 1,
        y: 0
    }), TweenMax.to(".scrollDown", 1, {
        delay: 1,
        opacity: 0
    })), myPre = 5
}

function setSection_05_out() {
    4 === myNow && (TweenMax.to(".scrollDown", 1, {
        opacity: 1
    }), TweenMax.to(".productSet.three", .5, {
        opacity: 0,
        y: -20
    }), TweenMax.to(".productSet.two", .5, {
        opacity: 0,
        y: -20
    }), TweenMax.to(".productSet.one", .5, {
        opacity: 0,
        y: -20
    }), TweenMax.to(".shoppingCart", .5, {
        delay: .5,
        opacity: 0,
        x: -30
    }), TweenMax.to("#buy h1", .5, {
        delay: .5,
        opacity: 0,
        y: -30
    }), TweenMax.to("#productPack", 1, {
        opacity: 1,
        onComplete: function() {
            sectionMove(), $("#productPack").animate({
                width: "202px",
                left: "48px",
                "margin-top": "-133px"
            }, 1e3, "easeInOutExpo")
        }
    }))
}

function inAni() {
    0 === myNow && (setSection_01_out(), setSection_00_in()), 1 === myNow && myNow > myPre ? (setSection_00_out(), setSection_01_in()) : 1 === myNow && myPre > myNow && (setSection_02_out(), setSection_01_in()), 2 === myNow && myNow > myPre ? (setSection_01_out(), setSection_02_in()) : 2 === myNow && myPre > myNow && (setSection_03_out(), setSection_02_in()), 3 === myNow && myNow > myPre ? (setSection_02_out(), setSection_03_in()) : 3 === myNow && myPre > myNow && (setSection_04_out(), setSection_03_in()), 4 === myNow && myNow > myPre ? (setSection_03_out(), setSection_04_in()) : 4 === myNow && myPre > myNow && (setSection_05_out(), setSection_04_in()), 5 === myNow && (setSection_04_out(), setSection_05_in())
}

function autoAniCount() {
    clearTimeout(timer), myNow > myClick ? (isSectionAni = !0, myNow--, inAni(), timer = setTimeout("autoAniCount()", downTime[myNow])) : myClick > myNow ? (isSectionAni = !0, myNow++, inAni(), timer = setTimeout("autoAniCount()", downTime[myNow - 1])) : myNow == myClick && (isSectionAni = !1, clearTimeout(timer))
}

function menuEvent() {
    1 != $(this).hasClass("active") && (isSectionAni || (myClick = $(this).index(), autoAniCount()))
}

function sectionMove() {
    $("ul#nav li.active").removeClass("active"), $("ul#nav li:eq(" + myNow + ")").addClass("active"), 0 == myNow && ($("body,html").stop().animate({
        scrollTop: $("#index").offset().top
    }, 1e3, "easeInOutExpo", function() {
        ga("send", "pageview", "美肌之誌")
    }), $("ul#nav").attr("class", "index"), $(".scrollDown").attr("class", "scrollDown index")), 1 == myNow && ($("#absorb #closeBtn").trigger("click"), $("body,html").stop().animate({
        scrollTop: $("#importing").offset().top
    }, 1e3, "easeInOutExpo", function() {
        ga("send", "pageview", "微晶導入")
    }), $("ul#nav").attr("class", "importing"), $(".scrollDown").attr("class", "scrollDown importing")), 2 == myNow && ($("body,html").stop().animate({
        scrollTop: $("#absorb").offset().top
    }, 1e3, "easeInOutExpo", function() {
        ga("send", "pageview", "全面吸收")
    }), $("ul#nav").attr("class", "absorb"), $(".scrollDown").attr("class", "scrollDown absorb")), 3 == myNow && ($("#absorb #closeBtn").trigger("click"), $("body,html").stop().animate({
        scrollTop: $("#bloggers").offset().top
    }, 1e3, "easeInOutExpo", function() {
        ga("send", "pageview", "達人見證")
    }), $("ul#nav").attr("class", "bloggers"), $(".scrollDown").attr("class", "scrollDown bloggers")), 4 == myNow && ($("body,html").stop().animate({
        scrollTop: $("#buy").offset().top
    }, 1e3, "easeInOutExpo", function() {
        ga("send", "pageview", "促銷單元")
    }), $("ul#nav").attr("class", "buy"), $(".scrollDown").attr("class", "scrollDown buy")), 5 == myNow && ($("body,html").stop().animate({
        scrollTop: $("#buy").offset().top
    }, 1e3, "easeInOutExpo", function() {
        ga("send", "pageview", "促銷單元")
    }), $("ul#nav").attr("class", "buy"), $(".scrollDown").attr("class", "scrollDown buy"))
}

function mwEvent(e, t) {
    isSectionAni || (t *= -1, myClick += t, 0 > myClick ? myClick = 0 : myClick > 4 ? myClick = 4 : $("ul#nav li:eq(" + myClick + ")").trigger("click"))
}

function sdClick() {
    isSectionAni || (myClick++, 0 > myClick ? myClick = 0 : myClick > 4 ? myClick = 4 : $("ul#nav li:eq(" + myClick + ")").trigger("click"))
}

function clickArea() {
    isSectionAni || $(".scrollDown").trigger("click")
}

function absorbPopup() {
    $("#absorb .btn").off("click", absorbPopup), $("#popup").css({
        opacity: "0",
        display: "block"
    }), $("#popup").animate({
        opacity: "1"
    }, 500, function() {
        $("#absorb #closeBtn").on("click", absorbClose), TweenMax.staggerTo(".crown", .3, {
            opacity: 1
        }, .1)
    })
}

function absorbClose() {
    $("#absorb #closeBtn").off("click", absorbClose), $("#popup").animate({
        opacity: "0"
    }, 500, function() {
        $("#popup").css({
            display: "none"
        }), $(".crown").css("opacity", "0"), $("#absorb .btn").on("click", absorbPopup)
    })
}

function label1Popup() {
    $(".label1 a").off("click", label1Popup), $(".label2 a").off("click", label2Popup), $("#popup2").css({
        opacity: "0",
        display: "block"
    }), $("#popup2").animate({
        opacity: "1"
    }, 500, function() {
        $("#popup2 .close").on("click", labelClose)
    }), $("#popup2 .lightbox1").css({
        opacity: "0",
        display: "block"
    }), $("#popup2 .lightbox1").animate({
        opacity: "1"
    }, 500, function() {})
}

function label2Popup() {
    $(".label1 a").off("click", label1Popup), $(".label2 a").off("click", label2Popup), $("#popup2").css({
        opacity: "0",
        display: "block"
    }), $("#popup2").animate({
        opacity: "1"
    }, 500, function() {
        $("#popup2 .close").on("click", labelClose)
    }), $("#popup2 .lightbox2").css({
        opacity: "0",
        display: "block"
    }), $("#popup2 .lightbox2").animate({
        opacity: "1"
    }, 500, function() {})
}

function labelClose() {
    $("#popup2 .close").off("click", labelClose), $("#popup2").animate({
        opacity: "0"
    }, 500, function() {
        $("#popup2").css({
            display: "none"
        }), $(".label1 a").on("click", label1Popup), $(".label2 a").on("click", label2Popup)
    }), $("#popup2 .lightbox1").animate({
        opacity: "0"
    }, 500, function() {
        $("#popup2 .lightbox1").css({
            display: "none"
        })
    }), $("#popup2 .lightbox2").animate({
        opacity: "0"
    }, 500, function() {
        $("#popup2 .lightbox2").css({
            display: "none"
        })
    })
}

function bloggerListChange() {
    if (1 != $(this).hasClass("active")) {
        $(".btnWrap .type1").off("click", bloggerListChange), $(".btnWrap .type3").off("click", bloggerListChange);
        var e = $(this).index();
        $(".btnWrap a.active").removeClass("active"), $(".bloggerList.active").fadeOut(500, function() {
            $(".bloggerList.active").removeClass("active"), $(".bloggerList:eq(" + e + ")").fadeIn(500, function() {
                $(".bloggerList:eq(" + e + ")").addClass("active"), $(".btnWrap a:eq(" + e + ")").addClass("active"), $(".btnWrap .type1").on("click", bloggerListChange), $(".btnWrap .type3").on("click", bloggerListChange)
            })
        })
    }
}
var myPre = 0,
    myNow = 0,
    myClick = 0,
    isSectionAni = !1,
    pt1, pt2, pt3, ptp, pt1Num, pt2Num, pt3Num, ptpNum = 0,
    queue = new createjs.LoadQueue,
    preloadImages = ["images/fb2.jpg", "images/fb.jpg", "images/navBuy.png", "images/dropLight.png", "images/scrollDown.png", "images/wave1.png", "images/wave2.png", "images/halfCircle.png", "images/indexTitle.png", "images/arrow.png", "images/bg1.jpg", "images/drop.png", "images/importing.png", "images/indexBtnText.png", "images/loading.png", "images/loadingBg.jpg", "images/logo.png", "images/mask1.png", "images/mask2.png", "images/water1.png", "images/water2.png"];
queue.on("complete", function() {
    TweenMax.set(".wave1", {
        y: -1e3,
        scale: 0,
        opacity: 1
    }), TweenMax.set(".wave2", {
        y: 1e3,
        scale: 0,
        opacity: 1
    }), $(".mainBox").show(), TweenMax.to(".wave1, .wave2", .5, {
        ease: Expo.easeInOut,
        y: 0,
        scale: 1,
        onComplete: function() {
            TweenMax.to(".wave1, .wave2", 1, {
                opacity: 0
            }), $("#loading").delay(300).fadeOut(1e3, function() {
                firstAnimate()
            })
        }
    }), $("body,html").stop().animate({
        scrollTop: "0"
    }, 0), first_set()
}), queue.on("progress", function(e) {
    $("#loadingNum").html(Math.round(100 * e.progress))
}), queue.on("error", function() {}), queue.loadManifest(preloadImages);
var bh1timer, bh1Num = 0,
    timer, downTime = ["3600", "2100", "3000", "2600"];