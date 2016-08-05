$(function(){
     var xinxi01=$(".xinxi01")[0];
     var wdtb2=$(".wdtb2")[0];
     var xinxi02=$(".xinxi02")[0];
     var xinxi022=$(".xinxi022")[0];
     var xinxi07=$(".xinxi07")[0];
     var wdtb22=$(".wdtb22")[0];
     var xinxi11=$(".xinxi11")[0];
     var ewm=$(".ewm")[0];
     var xinxi13=$(".xinxi13")[0];
     var wdtb222=$(".wdtb222")[0];
     var xinxi16=$(".xinxi16")[0];
     var daohang=$(".daohang")[0];
     var xiaomao=$(".xiaomao")
     var lis=$("li",$(".spfl1")[0]);
     var banneryou=$(".banneryou")[0];
     var li=$("li",$(".bannerzuo")[0]);
     var a=$("a",$(".bannerzuo")[0]);
     var content=$(".content")[0];
     var conzuo=$(".conzuo")[0];
     var conyou=$(".conyou")[0];



     for(var i=0;i<li.length;i++){
      li[i].index=i;
      li[i].onmouseover=function(){
        
        content.style.display="block"
       


        for(j=0;j<a.length;j++){
         
          a[j].style.color="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
        }
      }
      li[i].onmouseout=function(){
        content.style.display="none"


        for(j=0;j<a.length;j++){
        
        
          a[j].style.color="#000"
        }
      }
      content.onmouseover=function(){
        content.style.display="block"
        conzuo.style.display="block"
        conyou.style.display="block"

      }
      content.onmouseout=function(){
        content.style.display="none"


      }


     }




     banneryou.onmouseover=function(){
      banneryou.style.opacity=1;
     }
      banneryou.onmouseout=function(){
      banneryou.style.opacity=0.8;
     }

     xinxi01.onmouseover=function(){
     	wdtb2.style.display="block";
     	// xinxi02.style.display="none";
     	// xinxi022.style.display="block";

     }
         xinxi01.onmouseout=function(){
     	wdtb2.style.display="none"
     	// xinxi02.style.display="block";
     	// xinxi022.style.display="none";

     }
          xinxi07.onmouseover=function(){
          wdtb22.style.display="block";

     }
         xinxi07.onmouseout=function(){
          wdtb22.style.display="none"

     }
          xinxi11.onmouseover=function(){
          ewm.style.display="block";

     }
         xinxi11.onmouseout=function(){
          ewm.style.display="none"

     }
          xinxi13.onmouseover=function(){
          wdtb222.style.display="block";

     }
         xinxi13.onmouseout=function(){
          wdtb222.style.display="none"

     }
         xinxi16.onmouseover=function(){
         daohang.style.display="block";

     }
         xinxi16.onmouseout=function(){
         daohang.style.display="none"

     }

     for(i=0;i<lis.length;i++){
          lis[i].index=i;
          lis[i].onmouseover=function(){
            animate(xiaomao[this.index],{top:-4.5},150)
             
          }
            lis[i].onmouseout=function(){
            animate(xiaomao[this.index],{top:4.5},150)
          }
     }


     // 轮播图

         var win=$(".banner")[0];
         var as=$("a",win);
         var lis=$("li",$(".banner")[0]);
         var beijing=$(".beijing");
         var num=0;
         beijing[0].style.zIndex=1;
         as[0].style.zIndex=10;
         var t=setInterval(moveR,2000);
         var flag=true;

              for(var i=0;i<lis.length;i++){
           lis[i].index=i;
           lis[i].onmouseover=function(){
            if(flag){
          flag=false;
          moveR();
         }

             if(num==this.index){
               return;
             }


             for(var j=0;j<as.length;j++){
             animate(as[j],{opacity:0},function(){flag=true});
           animate(beijing[j],{opacity:0},function(){flag=true});

               lis[j].className="";
           }
             lis[this.index].className="hot";
             animate(as[this.index],{opacity:1},function(){flag=true});
           animate(beijing[this.index],{opacity:1},function(){flag=true});

             num=this.index;
           }
       }



         function moveR(){
          num++;
          if(num==as.length){
            num=0;
          }
          for(var i=0;i<as.length;i++){
           
           animate(as[i],{opacity:0},function(){flag=true});
           animate(beijing[i],{opacity:0},function(){flag=true});
            lis[i].className=""
          }
          animate(as[num],{opacity:1},function(){flag=true});
           animate(beijing[num],{opacity:1},function(){flag=true});

            lis[num].className="hot"
         }




            win.onmouseover=function(){
         clearInterval(t);
       }
          win.onmouseout=function(){
         t=setInterval(moveR,2000);
       }


         var btx11=$(".btx11");

     for(var i=0;i<btx11.length;i++){
    btx11[i].index=i;
    btx11[i].onmouseover=function(){
    btx11[this.index].style.opacity="0.3"
    }
    btx11[i].onmouseout=function(){
      btx11[this.index].style.opacity="0" 
    }
  }

    var lianjie=$(".lianjie");
  for(var i=0;i<lianjie.length;i++){
       lianjie[i].index=i;
    lianjie[i].onmouseover=function(){
    lianjie[this.index].style.opacity="0.8"
    }
    lianjie[i].onmouseout=function(){
      lianjie[this.index].style.opacity="0" 
    }
  }


  // 右侧固定定位

  var chen=$(".chen");
  var tanchu=$(".tanchu");

   for(var i=0;i<chen.length;i++){
    chen[i].index=i;
    chen[i].onmouseover=function(){
      tanchu[this.index].style.display="block";
    animate(tanchu[this.index],{right:35},300);
    }
    chen[i].onmouseout=function(){
      tanchu[this.index].style.display="none";
    animate(tanchu[this.index],{right:60},300)
    }
   }

  var youtiao7=$(".youtiao7")[0];
  var ewm02=$(".ewm02")[0];
  youtiao7.onmouseover=function(){
    ewm02.style.display="block"
  }
    youtiao7.onmouseout=function(){
    ewm02.style.display="none"
  }

  // 图片放大

  var mzhong=$(".mzhong");
  var more=$(".more")[0]
    var imgs=$("img",more);


 
   mzhong[0].onmouseover=function(){
      animate(imgs[1],{width:143,height:143},200)
    }
        mzhong[0].onmouseout=function(){
      animate(imgs[1],{width:133,height:133},200)
    }

       mzhong[1].onmouseover=function(){
      animate(imgs[2],{width:143,height:143},200)
    }
        mzhong[1].onmouseout=function(){
      animate(imgs[2],{width:133,height:133},200)
    }



       mzhong[2].onmouseover=function(){
      animate(imgs[4],{width:143,height:143},200)
    }
        mzhong[2].onmouseout=function(){
      animate(imgs[4],{width:133,height:133},200)
    }
           mzhong[3].onmouseover=function(){
      animate(imgs[5],{width:143,height:143},200)
    }
        mzhong[3].onmouseout=function(){
      animate(imgs[5],{width:133,height:133},200)
    }


           mzhong[4].onmouseover=function(){
      animate(imgs[7],{width:143,height:143},200)
    }
        mzhong[4].onmouseout=function(){
      animate(imgs[7],{width:133,height:133},200)
    }
           mzhong[5].onmouseover=function(){
      animate(imgs[8],{width:143,height:143},200)
    }
        mzhong[5].onmouseout=function(){
      animate(imgs[8],{width:133,height:133},200)
    }


            mzhong[6].onmouseover=function(){
      animate(imgs[10],{width:143,height:143},200)
    }
        mzhong[6].onmouseout=function(){
      animate(imgs[10],{width:133,height:133},200)
    }
           mzhong[7].onmouseover=function(){
      animate(imgs[11],{width:143,height:143},200)
    }
        mzhong[7].onmouseout=function(){
      animate(imgs[11],{width:133,height:133},200)
    }

           mzhong[8].onmouseover=function(){
      animate(imgs[13],{width:143,height:143},200)
    }
        mzhong[8].onmouseout=function(){
      animate(imgs[13],{width:133,height:133},200)
    }
           mzhong[9].onmouseover=function(){
      animate(imgs[14],{width:143,height:143},200)
    }
        mzhong[9].onmouseout=function(){
      animate(imgs[14],{width:133,height:133},200)
    }

  // 滚动事件

  var sousuok=$(".sousuok")[0];
  var chen02=$(".chen02")[0];
  var louceng=$(".louceng")[0];
  var floor=$(".floor");
  var tiaozhuan=$(".tiaozhuan")
  var type=$(".type-color")
  var heights=document.documentElement.clientHeight;
  console.log(type)
  var souflag=true;
  var chenflag=true;
  var louflag=true;
  var arr=[];
  for(var i=0;i<floor.length;i++){
     arr.push(floor[i].offsetTop)  
  }
  for(var i=0;i<tiaozhuan.length;i++){
    tiaozhuan[i].index=i
    tiaozhuan[i].onclick=function(){
      for(var j=0;j<type.length;j++){
         type[j].style.display="none"
   }
      type[this.index].style.display="block"
      var obj=document.body.scrollTop?document.body:document
    .documentElement;
    var scrollTop=obj.scrollTop;
    animate(obj,{scrollTop:arr[this.index]-70})
      
  }
  }
  
  window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document
    .documentElement;
    var scrollTop=obj.scrollTop;


  // 楼层跳转
   for(var i=0;i<type.length;i++){
         type[i].index=i;
         if(heights+scrollTop>=arr[i]+500){
           for(var j=0;j<type.length;j++){
         type[j].style.display="none"
           }
           type[i].style.display="block"
         }

}


    if(scrollTop>=750){
      if(souflag){
        souflag=false;
        animate(sousuok,{top:0})
      }
      
    }
     else{
      if(!souflag){
        souflag=true;
        animate(sousuok,{top:-50})
      }
      
    }

    if(scrollTop>=550){
      if(louflag){
        louflag=false;
        animate(louceng,{opacity:1})
      }
      
    }
     else{
      if(!louflag){
        louflag=true;
        animate(louceng,{opacity:0})
      }
      
    }



    if(scrollTop>=100){
      if(chenflag){
        chenflag=false;
      animate(chen02,{opacity:1})      

      }
    }
     else{
      if(!chenflag){
        chenflag=true;
      animate(chen02,{opacity:0})      

      }

    }



  }
  var obj=document.body.scrollTop?document.body:document
    .documentElement;
  var scrollTop=obj.scrollTop;
  var lc10=$(".lc10")[0];
    lc10.onclick=function(){
    animate(obj,{scrollTop:0})
  }

  chen02.onclick=function(){
    animate(obj,{scrollTop:0})
  }

  var qinzi02zuo=$(".qinzi02zuo");
  var touming=$(".touming");
  for(var i=0;i<qinzi02zuo.length;i++){
    qinzi02zuo[i].index=i;
    qinzi02zuo[i].onmouseover=function(){
      animate(touming[this.index],{opacity:0.3},300)
    }
    qinzi02zuo[i].onmouseout=function(){
      animate(touming[this.index],{opacity:0},300)
    }
  }

  var shop1=$(".shop1");
  var tm=$(".tm");
  for(var i=0;i<shop1.length;i++){
    shop1[i].index=i;
    shop1[i].onmouseover=function(){
      animate(tm[this.index],{opacity:0.3},200)
    }
    shop1[i].onmouseout=function(){
      animate(tm[this.index],{opacity:0},200)
    }
  }

  var like03=$(".like03");
  var tm02=$(".tm02");
  for(var i=0;i<like03.length;i++){
    like03[i].index=i;
    like03[i].onmouseover=function(){
      animate(tm02[this.index],{opacity:0.3},200)
    }
    like03[i].onmouseout=function(){
      animate(tm02[this.index],{opacity:0},200)
    }
  }















       













})