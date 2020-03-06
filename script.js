$(".submit").click(function(){
    let death = $(".yourName").val();
        let death2 = $(".foodName").val();
        let death3 = $(".foodName2").val();
    $(".results").append(`
         ${death} will die in ${Number(death2) *.2} years and your last meal will be ${death3}.`);
    $(".results").fadeIn();
});
