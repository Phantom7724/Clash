function e(e){$(e).attr("src","/work/images/avantar.png")}$(function(){var l=null;function t(){videojs("AuditionVodie").ready(function(){l=this,console.log("video-"+l),l.on("error",function(){30<Z||(Z++,console.log("try"),K(ae()))}),l.on("load",function(){console.log("load")}),l.on("timeupdate",function(){l.qt_lastupdate=new Date})})}t();function a(o,t){console.log(t),c({data:{roomId:t||RoomSocket.roomId},success:function(e){if(e&&e.b)console.log("getRoomInfo"),v=0,o(e.b);else{if(v<3)return a(o,t);if(v<5)return a(o,roomId)}}}),v++}function o(n){d({data:{roomId:RoomSocket.roomId},success:function(e){if(e.b){var o=e.b,t=o.roomStatus,a=o.likeCount,r=o.onlineNumber;G(4==t||10==t?r:void 0),L(a),n&&n(t)}}})}var e=RoomTool,u=e.getDuration,r=e.formatDate,n=e.formatNumber,i=e.TimerManager,s=e.asynLoadJs,m=RoomCgi,c=m.cgiGetRoomInfo,d=(m.cgiGetRoomBannerInfo,m.cgiGetRoomStatus),h=m.cgiGetComment,p=(m.cgiGetGoods,function(e){console.log("getcomment"),h({data:{roomId:RoomSocket.roomId,bizType:4,cursor:e,pageSize:5},success:function(e){if(200==e.h.code)for(var o=0,t=(e=e.b.data).length;o<t;o++)if(4==e[o].bizType){var a=e[o],r=Math.floor(Number(a.relativeTime)/1e3),n=Math.floor(1*o+parseInt(10*Math.random())),i=JSON.parse(a.content);i&&(ce[r]={},ce[r].type=4,ce[r].data=i,de[n]&&(n+=parseInt(5*Math.random())),de[n]={},de[n].type=4,de[n].data=i)}}})}),g=i(),f=initRoomData.goldPrice,v=0,k=g.setTimer({callback:function(){return o(RoomSocket.initRoomByStatus)},time:5e3,name:"longPoll"}),w=g.setTimer({callback:function(){for(var e=Math.floor(3*Math.random()+1),o=($(".zan").children("img").length,""),t=0;t<e;t++){var a=Math.floor(12*Math.random()+1);o+="<img class='zanImg ani"+Math.floor(5*Math.random()+1)+"' src='"+("http://res.uxin.com/hongdoulive/danmu"+a+".png")+"'>"}$(".zan").append(o),$(".zanImg").each(function(){$(this).on("webkitAnimationEnd",function(){$(this).remove()})})},name:"LikeAni",time:1500});w.on();var b=0;window.inputmessage=function(e){var o=e;if(console.log(e),1!=o.exit_or_enter_room&&o.content){var t=JSON.parse(o.content),a="";switch(t.t){case 101:a='<p><em><img class="headIcon" src="http://res.uxin.com/xiaobing/icon'+Math.floor(5*Math.random()+1)+'.png"/>'+t.n+"</em>入室したよ</p>";case 603:a='<p><em><img class="headIcon" src="http://res.uxin.com/xiaobing/icon'+Math.floor(5*Math.random()+1)+'.png"/>'+t.n+"</em>入室したよ</p>";break;case 102:break;case 200:a='<p><em><img class="headIcon" src="http://res.uxin.com/xiaobing/icon'+Math.floor(5*Math.random()+1)+'.png"/>'+t.n+"：</em>"+t.c+"</p>";break;case 639:var r=(e=decodeURIComponent(t.c)).replace(/toRoomId|{|}|"|:|price/gi,"").split(","),n=r[0];0<r[1]?E():RoomSocket.preGetRoomInfo(B,n);break;case 220:t.c.isDoubleHit||(diamonds++,se++,updateMsg(5,t),initNumber(diamonds,".room-watchnumber",0));break;case 513:a='<p><em><img class="headIcon" src="http://res.uxin.com/xiaobing/icon'+Math.floor(5*Math.random()+1)+'.png"/>'+t.n+"</em>连麦成功</p>";break;case 515:case 531:a='<p><em><img class="headIcon" src="http://res.uxin.com/xiaobing/icon'+Math.floor(5*Math.random()+1)+'.png"/>'+t.n+"</em>断开连麦</p>";break;case 535:updateMsg(3,t);break;case 300:case 302:updateMsg(1,t.c.imageUrl);break;case 301:case 303:updateMsg(1);break;case 240:updateMsg(2,t.c);break;case 10004:updateMsg(5,t)}if(a){$(".comment").append(a);var i=$(".comment").prop("scrollHeight");$(".comment").animate({scrollTop:i},50)}if(30<$(".comment").children().length){var s=$(".comment").children().length-30;$(".comment p:lt("+s+")").remove()}}},window.updateMsg=function(e,o){if(e)if(1==e){var t=$(".room-img-msg");if(!o)return t.hide(),$(".room-header").show(),$(".room-title").show(),$(".anchor-nickname").show(),$(".room-ask-msg").hide(),$(".room-img-msg").hide(),$(".room-dialogue-msg").hide(),void(1==initRoomData.funcType&&$(".videoJsWraper").addClass("videoJsWraperFunc"));t.width(),t.height();var a=new Image;a.onload=function(){var e=a.width,o=a.height;e&&o&&(e<o?(t.removeClass("room-img-msg-low"),a.style.height="100%"):(t.addClass("room-img-msg-low"),a.style.width="100%"),t.show(),t.children().remove
