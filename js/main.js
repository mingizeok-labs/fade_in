const site = window.SERVICES.HAZE;
const text = document.querySelector(".loading-text");


if (site) {
    text.textContent = "길을 잃은 당신, 안개 속으로 안내합니다."

    setTimeout(() => text.textContent = "길을 잃은 당신, 안개 속으로 안내합니다.", 3000);
    setTimeout(() => text.textContent = "안개 속 나침반, 로딩 완료.", 5000);
    setTimeout(() => window.location.replace(site.url), 7000);
}