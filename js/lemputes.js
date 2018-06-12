// let lempa = document.getElementById("lempute");
// lempa.addEventListener("click", changeImage);
// function changeImage() {
//     console.log(lempa.src);
//     if (lempa.src == 'http://localhost:63342/KCS13V/img/pic_bulboff.gif') {
//         lempa.src = 'http://localhost:63342/KCS13V/img/pic_bulbon.gif'
//     } else {
//         lempa.src = 'http://localhost:63342/KCS13V/img/pic_bulboff.gif'
//     }
// }


$('.lemputes').click(function(){
    if (this.src == 'http://localhost:63342/KCS13V/img/pic_bulboff.gif') {
        this.src = 'http://localhost:63342/KCS13V/img/pic_bulbon.gif'
    } else {
        this.src = 'http://localhost:63342/KCS13V/img/pic_bulboff.gif'
    }
});

$('[alt="Vardenis pavardenis"]').click(function(){
    $('.lemputes').click();
});

$('#lempute1').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    console.log(valueSelected);
    $('[alt="Vardenis pavardenis"]').attr('src', valueSelected);
});