if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(document).ready(function(){
        $('#bisnis1').css("transform", "translate("+width/1.20+"px,"+height/5+"px)");
        $('#bisnis2').css("transform", "translate("+width/1.15+"px,"+height/12+"px)");
        $('#seleb1').css("transform", "translate("+width/2.4+"px,"+height/12+"px)");
        $('#seleb2').css("transform", "translate("+width/1.12+"px,"+height/10+"px)");
        $('#dunia1').css("transform", "translate(6px,"+height/11+"px)");
        $('#dunia2').css("transform", "translate("+width/4.3+"px,"+(height-(height/0.95))+"px)");
        $('#metro1').css("transform", "translate("+width/2.4+"px,"+(height-(height/1))+"px)");
        $('#metro2').css("transform", "translate("+width/1.5+"px,"+(height-(height/0.9))+"px)");
        $('#nasional1').css("transform", "translate("+width/1.3+"px,"+height/16+"px)");
        $('#nasional2').css("transform", "translate("+width/1.11+"px,-"+(height/6)+"px)");
    })
}else{
    $(document).ready(function(){
        $('#bisnis1').css("transform", "translate("+width/1.15+"px,"+height/4.5+"px)");
        $('#bisnis2').css("transform", "translate("+width/1.068+"px,"+height/11+"px)");
        $('#seleb1').css("transform", "translate("+width/2.2+"px,"+height/11+"px)");
        $('#seleb2').css("transform", "translate("+width/1.07+"px,"+height/10+"px)");
        $('#dunia1').css("transform", "translate(1px,"+height/7+"px)");
        $('#dunia2').css("transform", "translate("+width/3.8+"px,-"+height/10+"px)");
        $('#metro1').css("transform", "translate("+width/2.25+"px,-"+height/10+"px)");
        $('#metro2').css("transform", "translate("+width/1.45+"px,-"+height/9.8+"px)");
        $('#nasional1').css("transform", "translate("+width/1.228+"px,-"+height/14+"px)");
        $('#nasional2').css("transform", "translate("+width/1.05+"px,-"+height/5+"px)");
    })
}
var trigger = 'onLeave'
var controller;
var kanals = 0.7;

$(function() {
    controller = new ScrollMagic.Controller();
    //untuk pin chart
    var ChartPin = new ScrollMagic.Scene({triggerElement: '#chart-container',triggerHook: trigger,duration: '2400%',})
                                        .setPin('#chart-container', {pushFollowers: false})
                                        // .addIndicators({name:"pining"})
                                        .addTo(controller)

    // // untuk data tempo
    // var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-1',triggerHook: kanals,duration: '150%',})
    //                     .on("enter",(e)=>{updateKanal('#nasional',4,'TEMPO.CO'),updateKanal('#metro',3,'TEMPO.CO'),updateKanal('#dunia',2,'TEMPO.CO'),updateKanal('#seleb',1,'TEMPO.CO'),updateKanal('#bisnis',0,'TEMPO.CO')})
    //                     .on("leave",(e)=>{
    //                         updateZero('#nasional',4),updateZero('#metro',3),updateZero('#dunia',2),updateZero('#seleb',1),updateZero('#bisnis',0),
    //                         d3.selectAll(".chart-title").text("")
    //                     })
    //                     // .addIndicators({name:"tempo"})
    //                     .addTo(controller)

    // untuk data bisnis
    var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-2',triggerHook: kanals,duration: '450%',})
                        .on("enter",(e)=>{
                            updateKanal('#bisnis',0,'BISNIS'),
                            $('#bisnis1').css("opacity","1"),
                            $('#bisnis2').css("opacity","1")
                        })
                        .on("leave",(e)=>{
                            updateZero('#bisnis',0),
                            $('#bisnis1').css("opacity","0"),
                            $('#bisnis2').css("opacity","0")
                        })
                        // .addIndicators({name:"bisnis"})
                        .addTo(controller)

    // untuk data seleb
    var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-3',triggerHook: kanals,duration: '450%',})
                        .on("enter",(e)=>{
                            updateKanal('#seleb',1,'SELEB'),
                            $('#seleb1').css("opacity","1"),
                            $('#seleb2').css("opacity","1")
                        })
                        .on("leave",(e)=>{
                            updateZero('#seleb',1),
                            $('#seleb1').css("opacity","0"),
                            $('#seleb2').css("opacity","0")
                        })
                        // .addIndicators({name:"seleb"})
                        .addTo(controller)

    // untuk data dunia
    var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-4',triggerHook: kanals,duration: '450%',})
                        .on("enter",(e)=>{
                            updateKanal('#dunia',2,'DUNIA'),
                            $('#dunia1').css("opacity","1"),
                            $('#dunia2').css("opacity","1")
                        })
                        .on("leave",(e)=>{
                            updateZero('#dunia',2),
                            $('#dunia1').css("opacity","0"),
                            $('#dunia2').css("opacity","0")
                        })
                        // .addIndicators({name:"dunia"})
                        .addTo(controller)

    // untuk data metro
    var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-5',triggerHook: kanals,duration: '450%',})
                        .on("enter",(e)=>{
                            updateKanal('#metro',3,'METRO'),
                            $('#metro1').css("opacity","1"),
                            $('#metro2').css("opacity","1")
                        })
                        .on("leave",(e)=>{
                            updateZero('#metro',3),
                            $('#metro1').css("opacity","0"),
                            $('#metro2').css("opacity","0")
                        })
                        // .addIndicators({name:"metro"})
                        .addTo(controller)

    // untuk data nasional
    var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-6',triggerHook: kanals,duration: '400%',})
                        .on("enter",(e)=>{
                            updateKanal('#nasional',4,'NASIONAL'),
                            $('#nasional1').css("opacity","1"),
                            $('#nasional2').css("opacity","1")
                        })
                        .on("leave",(e)=>{
                            updateZero('#nasional',4),
                            $('#nasional1').css("opacity","0"),
                            $('#nasional2').css("opacity","0")
                        })
                        // .addIndicators({name:"nasional"})
                        .addTo(controller)

    // untuk data semua
    // var ChartTempo = new ScrollMagic.Scene({triggerElement: '#story-7',triggerHook: kanals,duration: '100%',})
    //                     .on("enter",(e)=>{updateKanal('#nasional',4,'SEMUA'),updateKanal('#metro',3,'SEMUA'),updateKanal('#dunia',2,'SEMUA'),updateKanal('#seleb',1,'SEMUA'),updateKanal('#bisnis',0,'SEMUA')})
    //                     .addIndicators({name:"semua"})
    //                     .addTo(controller)
});