//轮播
function play(){
	

var ba=document.getElementById("banner").getElementsByTagName("a")
var le=document.getElementById("left")
var ri=document.getElementById("right")
var box=document.getElementById("banner")
var i=0;
ba[i].style.display="block"
function play(){
   var e=i;
   i<ba.length-1?i++:i=0
   ba[e].style.display="none"
   ba[i].style.display="block"
	}
ri.onclick=play
le.onclick=function(){
	var e=i;
	i>0?i--:i=ba.length-1
	ba[e].style.display="none"
    ba[i].style.display="block"
	}
  var time=setInterval(play,1000)
			box.onmousemove=function(){
				clearInterval(time)
			}
			box.onmouseout=function(){
				time=setInterval(play,1000)
			}
}
play()
//选项卡
function Tab(aa,bb){
			var b=document.getElementById(aa).getElementsByTagName("li")
			var a=document.getElementById(bb).getElementsByTagName("ul")//获取id名称为List里面的li标签的集合
			var i=0;
			a[i].style.display="block"
			b[i].style.color="#CD2D1B"
			while(i<a.length){
				b[i].index=i
				b[i].onmousemove=function(){
					var i=0;
					while(i<a.length){
						a[i].style.display="none"
						b[i].style.color="#000000"
						i++
					}
				 a[this.index].style.display="block";
				 this.style.color="#CD2D1B"
				}
				i++
			}
			}
			Tab("title","content")
//下拉框
function my(cc){
var a=document.getElementById(cc).getElementsByTagName("li")//获取id名称为List里面的li标签的集合
			var i=0;
			a[i].className="bl"
			a[i].style.height="143px"
			while(i<a.length){
				a[i].onmousemove=function(){
					var e=0;
					while(e<a.length){
						a[e].className=""
						a[e].style.height="35px"
						e++
					}
				 this.className="bl"
				 this.style.height="143px"
				}
				i++
			}}
        my("List")
        my("LL")