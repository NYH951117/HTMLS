
//从左滑入
const staggeringOption = {
    delay: 1000,
    distance: "150px",
    duration: 2100,
    easing: "ease-in-out",
    origin: "left",
};

//从右滑入
const staggeringOptions = {
    delay: 1000,
    distance: "150px",
    duration: 2100,
    easing: "ease-in-out",
    origin: "right",
};

//从下滑入
const staggeringOptionss = {
    delay: 400,
    distance: "120px",
    duration: 800,
    easing: "ease-in-out",
    origin: "bottom",
};

//从上滑入
const staggeringOptionsss = {
    delay: 100,
    distance: "150px",
    duration: 1200,
    easing: "ease-in-out",
    origin: "top",
};

ScrollReveal().reveal(".install",{...staggeringOptionsss,interval: 550});
ScrollReveal().reveal(".install-box-left-img",{...staggeringOption,interval: 500});
ScrollReveal().reveal(".right-box-title",{...staggeringOptions,interval: 500});
ScrollReveal().reveal(".right-box-itmes",{...staggeringOptions,interval: 500});
ScrollReveal().reveal(".install-box-language",{...staggeringOptionss,interval: 500});

$(function(){
    $(".install-box-language").toggle(function(){
        $(this).addClass("style_div");
    },function(){
        $(this).removeClass("style_div");
    });
});




