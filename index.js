var piTime=0;
var st="次數：";
$(document).ready(function () {
    $("#bearjump").click(function (e) { 
        piTime+=1;
        st="次數："+piTime;
        $("#pi2").text(st);
        $("#bear").css("background-image", 'url("https://truth.bahamut.com.tw/s01/202210/6e5fecb5646b692eac3b6046d6cfc342.GIF")');
        $("#bear").animate({top:"-100px"},"fast");
        $("#bear").animate({top:"0px"},"fast");
        
    });
});

    

