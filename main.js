(function(){var e,t,n,o,r,l,u,c,i,a,s,d,m,h,y,p,g,f,w,v,I,b,B,E,k,M,S,_,x,F,q=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};p=300,B=p,E=0,b=document.getElementById("time"),i=document.getElementById("input"),l=document.getElementById("hardcore"),y=!1,k=null,m=0,x=/Digit.|Key.|Space|Bracket.+|Enter|Semicolon|Quote|Backquote|Backslash|Comma|Period|Slash|Numpad.+/,_=[13,32,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,186,187,188,189,190,191,222],s={96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",222:"'"},g={",":"<",".":">","/":"?",";":":","'":'"',1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+"},u=!1,d=5,t=3,n=function(e){var t;return t=function(e){var t;return t=""+Math.floor(e),1===t.length?"0"+t:t},t(Math.floor(e/60))+":"+t(e%60)},M=function(){return b.innerHTML=n(B)},S=function(){var e,t,n;return e=i.value.length,t=i.value.split(" ").length,n=Math.floor(60*t/(p-B)),.1>=B%1?m=n:n=m,document.getElementById("stats").innerHTML=e+"c "+t+"w "+n+"wpm"},e=function(){var e,t;return t=i.value.split(" ").length,e=n(p-B),i.value="",i.placeholder="",clearInterval(k),y=!1,document.getElementById("tweet").href="https://twitter.com/intent/tweet?text=I+wrote+"+t+"+words+in+"+e+"+minutes+-+and+then+I+died+using+The+Most+Dangerous+Writing+App+%23MDWA&url=http%3A%2F%2Fwww.themostdangerouswritingapp.com",document.getElementById("tweet").innerHTML="I wrote "+t+" words in "+e+" minutes - and then I died using The Most Dangerous Writing App #MDWA",f("die"),f("logo")},F=function(){return clearInterval(k),y=!1,u&&(c("hardcore"),i.className=""),f("win_button"),c("time")},I=function(){var n;return B-=.1,E+=.1,M(),S(),u&&(l.style.opacity=E>.1?0:1),0>=B?F():E>d?e():E>t?(n=(E-t)/(d-t),i.style.opacity=1-n,document.body.style.boxShadow="inset 0px 0px "+Math.floor(100*n)+"px 0px rgba(242, 77, 77, "+.7*n+")"):void 0},a=function(e,t){var n;return s.hasOwnProperty(e)?n=s[e]:e>=48&&90>=e?(n=String.fromCharCode(e),t||(n=n.toLowerCase())):n="",t&&g.hasOwnProperty(n)&&(n=g[n]),n},v=function(e){var t,n;return n=n||window.event,t=n.keyCode||n.which,t&&q.call(_,t)<0||e.code&&!e.code.match(x)?void 0:(l&&(l.innerHTML=a(t,n.shiftKey)),E=0,y?(i.style.opacity=1,document.body.style.boxShadow="none"):(y=!0,k=setInterval(I,100)))},i.onkeydown=v,o=function(e){return e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():void 0},r=function(e){return document.getElementById(e)},c=function(e){var t;return t=document.getElementById(e).style.display="none",document.getElementById("status").style.opacity=1},f=function(e){return document.getElementById(e).style.display="block"},w=function(){return i.value="",u=r("hardcore_mode").checked,b.style.display="inline",i.disabled=!1,i.style.opacity=1,document.body.style.boxShadow="none",B=p,M(),i.placeholder="Start typing...",r("status").style.opacity=1,r("status_lower").style.opacity=1,c("logo"),c("start"),c("win_button"),u?(f("hardcore"),i.className="hardcore"):(c("hardcore"),i.className=""),i.focus()},h=function(){return r("stats").innerHTML="",document.body.style.boxShadow="none",c("time"),f("start"),c("die"),i.disabled=!0},document.getElementById("start_button").onclick=function(){var e;return p=parseInt(function(){var t,n,o,r;for(o=document.getElementsByClassName("select_time"),r=[],t=0,n=o.length;n>t;t++)e=o[t],e.checked&&r.push(e);return r}()[0].value),w()},document.getElementById("show_help").onclick=function(){return f("help")},document.getElementById("hide_help").onclick=function(){return c("help")},document.getElementById("retry_button").onclick=h,document.getElementById("win_button").onclick=h}).call(this);