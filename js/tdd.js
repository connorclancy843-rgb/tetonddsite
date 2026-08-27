/* Teton Development & Design — shared interior-page script */
(function(){
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  /* mobile nav toggle */
  var nav=document.querySelector('.tdd-nav');
  var btn=nav&&nav.querySelector('.tdd-navtoggle');
  var menu=document.getElementById('tdd-menu');
  if(nav&&btn&&menu){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});
    });
  }

  /* topographic contour hero field */
  var svg=document.getElementById('contour');
  if(svg){
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var W=1000,H=560; svg.setAttribute('viewBox','0 0 '+W+' '+H);
    function seeded(s){return function(){s=(s*16807)%2147483647;return s/2147483647;};}
    var rnd=seeded(74209), cx=W*0.8, cy=H*0.4, rings=12, off=[];
    for(var k=0;k<5;k++) off.push(rnd()*Math.PI*2);
    for(var i=0;i<rings;i++){
      var base=44+i*42, pts=[];
      for(var a=0;a<=360;a+=6){
        var rad=a*Math.PI/180;
        var wob=1+0.16*Math.sin(rad*2+off[0]+i*0.22)+0.10*Math.sin(rad*3+off[1]-i*0.16)+0.06*Math.sin(rad*5+off[2]+i*0.09);
        var r=base*wob; pts.push([cx+r*Math.cos(rad)*1.45, cy+r*Math.sin(rad)*0.82]);
      }
      var d='M'+pts.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1);}).join('L')+'Z';
      var path=document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',d); path.style.opacity=(0.28-i*0.014).toFixed(3); svg.appendChild(path);
      if(!reduce){
        var len=2*Math.PI*base*1.15; path.style.strokeDasharray=len; path.style.strokeDashoffset=len;
        path.style.transition='stroke-dashoffset 2.2s cubic-bezier(.22,.61,.36,1) '+(i*0.07)+'s';
        (function(p){requestAnimationFrame(function(){requestAnimationFrame(function(){p.style.strokeDashoffset=0;});});})(path);
      }
    }
  }

  /* scroll reveal */
  var els=document.querySelectorAll('.r');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e);});
})();
