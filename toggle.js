'use strict'
$(function(){
    $("dt")
    .click(function(e){
        $("ul",this).stop().slideDown("fast"); ①
        var select = $(this).children(".select")[0];②
        $(select).toggleClass("select_a");③
    })
    .mouseout(function(e){
        $("ul", this).stop().slideUp("fast");
        var select = $(this).children(".select")[0];
        $(select).toggleClass("select_a");
    });
})
})
}