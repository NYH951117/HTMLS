
const staggeringOption = {
    delay: 300,
    distance: "120px",
    duration: 1200,
    easing: "ease-in-out",
    origin: "left",
};

ScrollReveal().reveal(".types",{...staggeringOption,interval: 500});

