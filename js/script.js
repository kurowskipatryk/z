

window.onload = () => {


}

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });
});

function ChangeTire(substitute) {

    if (substitute == 0) {

        const inputs = document.getElementById('original-tire-form').elements;
        const width = inputs[0].value;
        const profile = inputs[1].value;
        const diameter = inputs[2].value;

        if (width != "" && profile != "" && diameter != "") {

            let result = CalculateProfileTire(width, profile, diameter);

            const Diameter = document.getElementById('resultDiameterOriginal');
            Diameter.style.visibility = 'visible';
            Diameter.value = result
        }
    }
    else {
        const inputs = document.getElementById('substitute-tire-form').elements;
        const width = inputs[0].value;
        const profile = inputs[1].value;
        const diameter = inputs[2].value;
        if (width != "" && profile != "" && diameter != "") {
            let result = CalculateProfileTire(width, profile, diameter);
            const Diameter = document.getElementById('resultDiameterSubstitute');
            Diameter.style.visibility = 'visible';
            Diameter.value = result
        }
    }

}


function CalculateProfileTire(width, profile, diameter) {
    return Math.round((width * profile / 100 * 2) * 1.04 + 25.4 * diameter);
}

function Calculate() {


    const originalProfile = document.getElementById('resultDiameterOriginal').value;
    const substituteProfile = document.getElementById('resultDiameterSubstitute').value;
    const resultInner = document.getElementById("result-inner");
        resultInner.innerHTML = "";
    if (originalProfile == "" || substituteProfile == "") {

        // $("#myModal").modal('show');

        resultInner.innerHTML += `
        <i class="fa-solid fa-circle-xmark circleChceck" style="color: #c81e1e;"></i>
        `

        resultInner.innerHTML += `<h5>Wpisz dane</h5>`
    }
    else {

        let result = ((1 - parseInt(substituteProfile) / parseInt(originalProfile))) * 100;
        console.log(Math.round(result * 100) / 100);
    

        if (substituteProfile < (originalProfile * 0.98) || substituteProfile > (originalProfile * 1.015)) {
            console.log("nie");

            resultInner.innerHTML += `
        <i class="fa-solid fa-circle-xmark circleChceck" style="color: #c81e1e;"></i>
        `
        } else {
            console.log("tak");
            resultInner.innerHTML += `
        <i class="fa-solid fa-circle-check circleChceck" style="color: #25a278;"></i>
        `
        }

        resultInner.innerHTML += `<h5>${Math.round(result * 100) / 100}%</h5>`
    }
}


