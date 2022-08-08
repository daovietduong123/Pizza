$(document).ready(function(){
    $(".bars-mobile-header").click(toggleNabar)
    $(".bar-nav-footer").click(toggleFooter)
})

function toggleNabar(e){
    $("#navbar-mobile").toggle()
}

function toggleFooter(e){
    $("#footer").toggle()
}


