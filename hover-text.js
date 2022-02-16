/*
* HoverText
*
* https://github.com/walkerchiu/jQuery-hover-text
*
*/

(function(factory){
    if (typeof define === 'function' && define.amd) {   /* RequireJS */
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {           /* Backbone.js */
        factory(require('jquery'));
    } else {                                            /* Jquery plugin */
        factory(jQuery);
    }
}(function($){
    'use strict';

    let DefaultSettings = {
            type: "title",
            theme_title: {
                "minWidth": "",       "maxWidth": "",
                "minHeight": "",      "maxHeight": "",
                "lineHeight": "24px", "letterSpacing": "",
                "wordBreak": "",      "wordWrap": "nowrap", "whiteSpace": "",
                "color": "",
                "backgroundColor": "",
                "borderWidth": "",
                "borderStyle": "",
                "borderColor": ""
            },
            theme_box: {
                "minWidth": "250px",  "maxWidth": "350px",
                "minHeight": "",      "maxHeight": "",
                "lineHeight": "24px", "letterSpacing": "",
                "wordBreak": "",      "wordWrap": "nowrap", "whiteSpace": "",
                "color": "",
                "backgroundColor": "",
                "borderWidth": "",
                "borderStyle": "",
                "borderColor": ""
            },
            theme_card: {
                "minWidth": "400px",  "maxWidth": "600px",
                "minHeight": "",      "maxHeight": "",
                "lineHeight": "24px", "letterSpacing": "",
                "wordBreak": "",      "wordWrap": "nowrap", "whiteSpace": "",
                "color": "",
                "backgroundColor": "",
                "borderWidth": "",
                "borderStyle": "",
                "borderColor": ""
            }
        };

    $.fn.WKHT_cal = function () {
        return this.each( function (key,value) {
            $(this).hover( function (e) {
                let top, left;
                let width   = $(document).width();
                let Ptop    = $(this).parent().offset().top - $(window).scrollTop();
                let Pheight = $(this).parent().height();
                let Owidth  = $(this).siblings().outerWidth();
                let Oheight = $(this).siblings().outerHeight();

                if ($(this).siblings().hasClass("WKHT_show")) {
                    Owidth  = 200;
                    Oheight = 70;
                }

                let dleft   = e.clientX;
                let dtop    = e.clientY;
                let dright  = width - dleft;
                let wdright = width - (dleft + Owidth);

                if (wdright <= 0)
                    left = width - (Owidth + Math.abs(wdright)) - 20;
                else
                    left = dleft - 20;
                if (left < 0)
                    left = 0;

                top = dtop - Oheight - 5;
                if (top < 70 || $(this).parents("thead").hasClass("fixed") || $(this).siblings().hasClass("WKHT_show"))
                    top = dtop + 20;

                $(this).next().show().css("top", top).css("left", left);
            },function () { $(this).next().hide(); });
        });
    };
    $.fn.WKHT = function (options) {
        let settings = $.extend(DefaultSettings, options);

        let type    = $(this).data("type");
        if (type == undefined) type    = settings.type;

        let main    = $("<span>", {class: "WKHT"});
        let target  = $(this).clone().addClass("WKHT_target");

        if (type == "title") {
            let span    = $("<span>", {class: "WKHT_show"}).html($(this).data("info"));
            var tmp     = main.append(target.WKHT_cal())
                              .append(span.css({
                                    "min-width": settings.theme_title.minWidth,
                                    "max-width": settings.theme_title.maxWidth,
                                    "min-height": settings.theme_title.minHeight,
                                    "max-height": settings.theme_title.maxHeight,
                                    "line-height": settings.theme_title.lineHeight,
                                    "letter-spacing": settings.theme_title.letterSpacing,
                                    "word-break": settings.theme_title.wordBreak,
                                    "word-wrap": settings.theme_title.wordWrap,
                                    "white-space": settings.theme_title.whiteSpace,
                                    "color": settings.theme_title.color,
                                    "backgroundColor": settings.theme_title.backgroundColor,
                                    "border-width": settings.theme_title.borderWidth,
                                    "border-style": settings.theme_title.borderStyle,
                                    "border-color": settings.theme_title.borderColor
                                }));
        } else if (type == "card") {
            let title   = $("<div>", {class: "WKHT_title"}).html($(this).data("title")).css({
                                        "border-bottom-width": settings.theme_card.borderWidth,
                                        "border-bottom-style": settings.theme_card.borderStyle,
                                        "border-bottom-color": settings.theme_card.borderColor
                                    });
            let info    = $("<div>", {class: "WKHT_info"}).html($(this).data("info"));
            let footer  = $("<div>", {class: "WKHT_footer"}).html($(this).data("footer"));
            let div_r   = $("<div>", {class: "WKHT_div_r"}).append(title).append(info).append(footer);

            let photo   = $("<div>").html($("<img>").attr("src", $(this).data("photo")));
            let from    = $("<div>", {class: "WKHT_from"}).html($(this).data("from"));
            let div_l   = $("<div>", {class: "WKHT_div_l"}).css({
                                        "border-right-width": settings.theme_card.borderWidth,
                                        "border-right-style": settings.theme_card.borderStyle,
                                        "border-right-color": settings.theme_card.borderColor
                                    })
                                    .append(photo).append(from);
            let div     = $("<div>", {class: "WKHT_card"}).append(div_l).append(div_r);
            var tmp     = main.append(target.WKHT_cal())
                              .append(div.css({
                                    "min-width": settings.theme_card.minWidth,
                                    "max-width": settings.theme_card.maxWidth,
                                    "min-height": settings.theme_card.minHeight,
                                    "max-height": settings.theme_card.maxHeight,
                                    "line-height": settings.theme_card.lineHeight,
                                    "letter-spacing": settings.theme_title.letterSpacing,
                                    "word-break": settings.theme_card.wordBreak,
                                    "word-wrap": settings.theme_card.wordWrap,
                                    "white-space": settings.theme_card.whiteSpace,
                                    "color": settings.theme_card.color,
                                    "backgroundColor": settings.theme_card.backgroundColor,
                                    "border-width": settings.theme_card.borderWidth,
                                    "border-style": settings.theme_card.borderStyle,
                                    "border-color": settings.theme_card.borderColor
                                }));
        } else if (type == "box") {
            let title   = $("<div>", {class: "WKHT_title"}).html($(this).data("title")).css({
                                        "border-bottom-width": settings.theme_box.borderWidth,
                                        "border-bottom-style": settings.theme_box.borderStyle,
                                        "border-bottom-color": settings.theme_box.borderColor
                                    });
            let photo   = $("<div>").html($("<img>").attr("src", $(this).data("photo"))).css({
                                        "border-bottom-width": settings.theme_box.borderWidth,
                                        "border-bottom-style": settings.theme_box.borderStyle,
                                        "border-bottom-color": settings.theme_box.borderColor
                                    });
            let info    = $("<div>", {class: "WKHT_info"}).html($(this).data("info"));
            let footer  = $("<div>", {class: "WKHT_footer"}).html($(this).data("footer"));
            let div     = $("<div>", {class: "WKHT_box"}).append(title).append(photo).append(info).append(footer);
            var tmp     = main.append(target.WKHT_cal())
                              .append(div.css({
                                    "min-width": settings.theme_box.minWidth,
                                    "max-width": settings.theme_box.maxWidth,
                                    "min-height": settings.theme_box.minHeight,
                                    "max-height": settings.theme_box.maxHeight,
                                    "line-height": settings.theme_box.lineHeight,
                                    "letter-spacing": settings.theme_title.letterSpacing,
                                    "word-break": settings.theme_box.wordBreak,
                                    "word-wrap": settings.theme_box.wordWrap,
                                    "white-space": settings.theme_box.whiteSpace,
                                    "color": settings.theme_box.color,
                                    "backgroundColor": settings.theme_box.backgroundColor,
                                    "border-width": settings.theme_box.borderWidth,
                                    "border-style": settings.theme_box.borderStyle,
                                    "border-color": settings.theme_box.borderColor
                                }));
        }

        return $(this).after(tmp).remove();
    };
    $.fn.WKHT_init = function (options) {
        let settings = $.extend(DefaultSettings, options);

        $(this).find("[data-hover='WKHT']").each( function () {
            $(this).WKHT(settings);
        });
    };
}));
