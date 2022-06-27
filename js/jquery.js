$(document).ready(function(){
    $('#btn-logar-form').hover(function(){
        $(this).css({
            "background": "orange",
            "border": "1px solid blue"
        })
        $(this).animate({
            "padding": "12px","border-radius": "20px"
        })
            
    }, function(){
        $(this).css({
            "background": "yellow",
            "border": "1px solid black"
        })
        $(this).animate({
            "padding": "10px","border-radius": "5px"
        })
    })

    $('#btn-cadastre-se-form').hover(function(){
        $(this).css({"background": "coral"}) 
        $(this).animate({
            "border-radius": "30px"   
        })
    }, function(){
        $(this).animate({
            "border-radius": "5px"
        })
        $(this).css({"background": "white"}) 
    })

    $('#btn-logar-form').click(function(){
        alert("Botão funcionando! Aplicando efeitos...")
        $('#btn-cadastrar-form').css({
            "background": "coral",
            "color": "white"
        })    
        $('#btn-cadastre-se-form').css({
            "background": "coral",
            "color": "black"
        })     
        
    })
})      