 document.addEventListener('touchmove',function(e){
            //清除默认触摸事件
            e.preventDefault();
        });
        var cv = document.getElementsByTagName('canvas')[0],//获取第一个canvas
            x = cv.getContext('2d'),//用2d绘制
            pr = window.devicePixelRatio || 1,//屏幕像素比或1
            w = window.innerWidth,//浏览器宽度
            h = window.innerHeight,//浏览器高度
            f = 90,//绘制初始高度
            r = 0,//
            m = Math,
            u = m.PI*2,//
            v = m.cos,
            z = m.random,
            q;
        cv.width = w*pr;
        cv.height = h*pr;
        x.scale(pr,pr);
        x.globalAlpha = 0.6;
        
        function i(){//清除画布，开始绘制
            x.clearRect(0,0,w,h);
            q = [{x:0 ,y:h*.7 + f} ,{x:0 ,y:h*.7 - f}];
            while(q[1].x < w+f){
                d(q[0],q[1]);
            }
        }

        function d(i ,j){//绘制
            x.beginPath();
            x.moveTo(i.x ,i.y);
            x.lineTo(j.x ,j.y);
            var k = j.x + (z()*2 - 0.45)*f;
                n = y(j.y);
            x.lineTo(k, n);
            x.closePath();
            r -= u/-50;
            x.fillStyle = '#' + (v(r)*127 + 128 << 16 | v(r + u/3)*127 +128 << 8 | v(r + u/3*2)*127 + 128).toString(16);
            x.fill();
            q[0] = q[1];
            q[1] = {x:k ,y:n}
        }

        function y(p){
            var t = p +(z()*2 - 1.1)*f;
            return (t> h||t<0) ? y(p) : t;
        }

        document.onclick = i;
        document.ontouchstart = i;
        i();