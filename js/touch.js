var scroll_start=0;//定义滑动时的起点
function handler(){//禁止默认滑动函数
 event.preventDefault();
}
document.addEventListener("touchstart",function(e){
 scroll_start = e.changedTouches[0].clientY;//设置起点为触摸时的点
 if($('#bodycthead').offset().top==0){//如果触摸时是滑动块在顶部则禁用默认滑动
  document.addEventListener('touchmove', handler, false);
 }
});
document.addEventListener("touchmove",function(e){
 $("title").html(e.changedTouches[0].clientY-scroll_start);
 if($('#bodycthead').offset().top==0){//想做的是中断滑动并禁用默认滑动，暂时没找到中断的方法
  document.addEventListener('touchmove', handler, false);
 }
 if((e.changedTouches[0].clientY-scroll_start)<0){//如果是向上滑动则恢复默认滑动
  document.removeEventListener('touchmove', handler, false);
 }
});