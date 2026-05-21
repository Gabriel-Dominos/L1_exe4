const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index",{"retorno":null,"valores":{"nota":""}});
});


router.post("/classificar", (req, res)=>{

    //recuperar a nota1do nadador
    let nota1= parseInt(req.body.nota1);
    let nota2= parseInt(req.body.nota2);

let media = (nota1 + nota2) / 2
    //manipular os dados -> classificar
    if(media> 9 && media<=10 ){
        var notafinal = "A";
    }else if(media> 7.5 && media<=9 ){
        var notafinal = "B";
    }else if(media> 6 && media<=7.5 ){
        var notafinal = "C";
    }else if(media> 4 && media<=6 ){
        var notafinal = "D";
    }else if(media>0 && media <= 4 ){
        var notafinal = "E";
    }else{
        var notafinal = "nota não classificada";
    }

    //formatação 
    let objJson = {"notafinal":notafinal,"media":media};

    //envio dos dados para mescalr com o HTML
    res.render("pages/index",{"retorno":objJson,"valores":{"nota":req.body.nota}})

});


module.exports = router;