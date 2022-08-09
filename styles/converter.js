const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

const convert =(el, target, isTrue) => {
    el.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "package.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();

        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if (isTrue) {
                target.value = (+el.value / response.usd).toFixed(2)
            } else {
                target.value = (+el.value * response.usd).toFixed(2)
            }
            el.value === "" ? (target.value = "") : null;
        });
    });
};
convert(som, usd, 12);
convert(usd,som );

som.classList.style.fontFamily="Jost"


