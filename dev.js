
/**
 * AUDIO
 * http://github.grumdrig.com/jsfxr/
 */
var audioSrc = {
    coin: "data:audio/wav;base64,UklGRjEFAABXQVZFZm10IBAAAAABAAEAiBUAAIgVAAABAAgAZGF0YQ0FAAAAiVuSnFt+pGdrpHpboI1cjaBceqNrZ6N+XJuRXIijXXajcGOjg1yXlVyEo2Jxo3Vfooddkppdf6JmbaJ5XaCLXY6eXXuia2mifV2bkF2Jol13onBloYJel5RehaFic6F0YaGGXpKYXoGhZm+heF6gil6Om158oGtroHxfm45fip9feKBvZ6CAX5eSX4agYnSgc2OghF+Tll+Bn2Zwn3dgn4hgjplgfZ9rbZ98YJuMYIqdYHqfb2mff2CXkGCGnmJ2nnNlnoNhk5Rhgp5ncp53Yp6HYY+XYX+ea26ee2Gbi2GLm2F7nW9rnX9il45ih51jd51zaJ2CYpOSYoOdZ3SddmSdhmKPlWN/nGtwnHpjmolji5hjfJxvbZx+Y5eNY4ecY3iccmqcgWOTkGSNa4GQZJR9cJtqg45klntym2iFjGSXenSbZ4aLZJl4dZpliIllmnZ3mWWJh2aadXmYZYuFaJpze5ZljYRqmnJ8lGWOgmyZcH6SZpCAbplvf5BmkX9wmW2Bj2aTfXGZbIONZpR8c5lqhItnlXp1mGmGimeXeXaYaIeIZ5h3eJdniYZpmHZ5lWeKhWqYdHuUaIuDbJdzfZJojYJul3F+kGiOgG+XcH+PaI9/cZdvgY1okX1zlm6CjGmSfHSWbISKaZN7dpZrhYlplHl3lmqGh2mWeHmVaoiGa5V3epNqiYRtlXV7kmqKg26VdH2QaouBcJVzfo9qjYBxlHJ/jWuOf3OUcYGMa49+dJRvgoprkHx1lG6DiWuRe3eUbYSIbJJ6eJNshoZsk3l5kmyHhW2TeHuRbIiEb5N2fJBsiYJwk3V9jm2KgXGSdH6NbYuAc5Jzf4xtjH90knKBim2NfnWScYKJbY59d5Fwg4huj3x4kW+Eh26Qe3mRb4WFbpF6epBuhoRvkXl7j2+Hg3GQeHyOb4iCcpB3fYxviYFzkHZ+i2+KgHSQdX+Kb4t/dY90gIlwi353j3OBiHCMfXiPcoKHcI18eY9yg4Zwjnt6j3GEhXGOenuOcYWEco56fI1xhoNzjnl9jHGHgnSOeH6LcYeBdY53f4pyiIB2jXZ/iHKJf3eNdoCHcop+eI11gYdyin15jXSChnKLfXqMdIOFc4t8e4xzg4RzjHt8jHOEg3SMe3yLc4WCdYx6fYp0hYF2i3l+iXSGgXeLeX+IdIeAeIt4f4d0h394i3eAhnSIfnmKd4GFdYh+eop2gYR1iX17inaChHWJfXyKdoODdYp8fIl1g4J2iXt9iHaEgneJe36IdoSBeIl6fod2hYB5iXp/hnaFgHmJen+Fd4Z/eoh5gIV3hn97iHmBhHeGfnuIeIGDd4d+fIh4goN3h319h3iCgniHfX2HeIKCeId8foZ4g4F5h3x+hniDgXqHfH+FeYOAeoZ7f4R5hIB7hnt/hHmEf3uGe4CDeYR/fIZ7gIN5hH99hXuBgnqFfn2FeoGCeoV+fYV6gYF6hX5+hXqBgXuFfX6EeoKBe4R9f4R7goB8hH1/g3uCgHyEfX+De4KAfYR9f4J7gn99hH2AgnyCf32DfYCBfIJ/foN9gIF8gn9+g32AgXyCf36DfYCBfYJ+f4J9gYB9gn5/gn2BgH2Cfn+CfYGAfoJ+f4F9gYB+gn5/gX6BgH6Bfn+BfoF/foF+gIB+gX9/gX6AgH6Bf3+Bf4CAfoB/f4B/gIB/gH9/gH+AgH+Af3+Af4CAf4B/f4B/gIB/gH9/gH8=",
    hurt: 'data:audio/wav;base64,UklGRpUEAABXQVZFZm10IBAAAAABAAEAiBUAAIgVAAABAAgAZGF0YXEEAACkdFtbW1t+nVtbW1tbk4tbW1tbW5qIW1tbW1uRlFtcXFxceKRoXFxcXFyWl1xcXFxcXKGQXFxcXFxcmZ1cXFxcXFx8pXZcXFxcXFyQpWZcXFxcXFyMpXFdXV1dXV1tpZZdXV1dXV1deaSPXV1eXl5eXmekpGJeXl5eXl5eeaScXl5eX19fX19npKNyX19fX19fX19yo6NwX19gYGBgYGBglaOZYGBgYGBgYGBgYIijo29hYWFhYWFhYWFhiKKifGFhYWFhYWFiYmJijqKigmJiYmJiYmJiYmJiYpGhoY1iY2NjY2NjY2NjY2NjiKGhoWhjY2NjY2NkZGRkZGRkaKCgoJtkZGRkZGRkZGRkZGRlZWVlmaCgoH9lZWVlZWVlZWVlZWVlZWVmZo+fn5+faGZmZmZmZmZmZmZmZmZmZmZmZ26fn56enm9nZ2dnZ2dnZ2dnZ2dnZ2dnZ2doaGiEnp6enp5/aGhoaGhoaGhoaGhoaGhoaGlpaWlpaWlpaZydnZ2dnZVpaWlpaWlpaWlpaWlqampqampqampqampqampqanGcnJycm5ublmpqamtra2tra2tra2tra2tra2tra2tra2trbGxsbGxsbGxsbIyampqampqamppvbGxsbGxsbGxsbG1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1ubm5ubm5ubm5ue5iYmJiYmJiYmJiYmHdubm5ubm5ubm5ub29vb29vb29vb29vb29vb29vb29vb29vb3BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHFxcY+WlpaWlZWVlZWVlZWVlZWVlXFxcXFxcXFxcXFxcXFxcXFxcnJycnJycnJycnJycnJycnJycnJycnJycnJycnNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dYeQkJCQkJCQkJCQkJCQkJCQkJCQj4+Pj4+Pj4+Pj4+Pj4+Pg3Z2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3x8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38=',
    fanfare: 'data:audio/wav;base64,UklGRjwNAABXQVZFZm10IBAAAAABAAEAiBUAAIgVAAABAAgAZGF0YRgNAADDuK6jmI6DeG1iVktAn7uwpJmOgndrX1RITMG2qp6ShnpuYlVJRcG1qZ2Qg3dqXVBDhruuoZSHem1fUkSEu62gkoR3aVtNP720ppiKe21eUEGotaeYiXprXE1FwLGik4N0ZFRFkrenl4d3Z1dGiLenloZ1ZVRDprOikYBuXUxouqmXhnRiUE69rJmHdWNQVLyql4RxXkt4tqOQfWlWQrmsmIRwXEiVsZyIc19Ki7KdiHNdSJmvmYRuWEK9p5F7ZU58s5yFbldOu6SMdV1GraiQeGBIpamQeF9Gr6aNdFtPuaCGbVN4sJZ8YkeupIluU3yuk3hcV7abf2NGtZ+DZkqqoYRnSqmgg2VHtJ1/YFa1lnhZd6yNbU6goIBgYrGQcE+en35dcquKaE+1k3FPopt4VY+gfVqDpIBcfqWAXICkf1mIoHtVl5p0Tq2Sa12uh19+oXpRpJJqZaqBWJeWbGSqgFWekWZ2oXZRsYVZl5JlfZ1wZ6Z5VK+BUqmGV56LW5iNXZWOXZWNXJeKWKGFU6t/Wap3aqFtfZZhk4lUq3prn2mJjVaneW+bY5OEYKRriIpbp22HiV6laY2DaZxgnHh8jl6kZpZ5fIxkn1+gb4t+eI1pmlqmY5tujniDgXqJc49tlGmYZZtjnWKeYp1knGaZapVukHSKe4KCeYtvk2ScZJtvjXx9iWyXZZl0hYRwlGeWeH6KZJ10g4dmm3WBm7yxp5yRhntwZVpPQ3G+s6idkYZ6b2NXTEChua6ilop+cmZZTUCdua2hlIh7bmFVSFi/sqWYi35xZFZJVr+ypJeJe21fUUOQuKqcjoByY1VGe7qsnY5/cGFSQ5q2p5iIeWlaSmW8rJyMfGxcTFu8rJyLe2pZSXm4p5aFdGNRQLuvnYx6aFZEobGfjXtpVkSnsJ2LeGVSTL2ql4NwXEiNsp+Ld2NOarejj3pmUWC5pI96ZU9utqCLdV9Jk6+Zg2xWUbqkjXZfSJ6rlH1lToOwmIBoUHyxmIBnT4WulXxjSp2oj3VcT7mfhWpQhaySd1xTt5yBZUqkpIhsUIypjXBTgauOcVSBqo1vUYyniWtMoqGCY0+2l3hYeKuLa0usm3tad6qJaEu2lXNSmJ99WnynhGFprIlmXbCMaFixjWhasItmY62HYnKngVuIn3hRopRtWq+HX3+geE+qj2ZzpHtRqI5ke6B1U7CFWZSUaHShdFqsf1KoiFuVkGKHlmd8m2t3nW1znm5znmx2nGp+l2WIkV6WiVamgFuodHGcZ4qNV6V8aKBph41VqHdzmF+Zf2ieZZOCZ55jlX5umV2gdX2NXqRmk3x4kF6jY5h2goZullulY5twjHt+hnKQZ5leol2jYp1nmGqVbZJukW+RbpJslGmXZZtgoGKeapVzi3qAhHWOZ5lkmnKJgHeOZJxtjn53jmKddYOHaJlyhoZnmni/taqglYp/dGleU0c+wresoZWKf3NnXFBEb76yppuPg3ZqXlJFaL6ypZmMgHNmWU0/qbeqnZCDdmlbTkCkt6mcjoFzZVdJWL6wopSGeGlbTETAsqOUhXdoWEljvK2ej39wYFBBsLKjk4NzY1NCprOjkoJxYFBDv66djHtqWUiFtaSTgXBeTGy4ppWDcV5McrekkoBtWkeVsZ6LeGVSWbmmk39sWESxqpeDb1tGp6uXgm5ZRLSok35pVGC2oYt2YEuXq5aAalRrs52GcFlSt6CKc1xLuKGKcltUtp6Gb1dssJiAaE+RqI92XVO1nINpUJSljHJYca2TeV5bspd9YlK0mX5jUrOYfGFcsJR4XHCqjnJVjqKFaEu0l3lce6aIakyxlXdZiaGCY2eqi2xOsZJyUqKXd1aXmXlYkpp5WJOZeFablnRSqJBuXKuIZnOif1uRlnNVrYlke555VKWMZ3ieeFOsiGKIlnBno31WpYhhjZJqeppyaaF5XqZ9VKqBWKWDWaKEWaKDWKSBWKh9YaN3bJ1wepRoi4tdnX9joXJ7kmSSg2Ghcn6PX517cZZlk39tmGeSf2+WZJd6eY9co3CIgm+VYJ5xiIF0kGKeaJV1hYF4jGuWYJ9nl2+Od4V9gIJ7hneKdIxyjXGOco5zjHWKd4d7goB9hXeLb5JnmGmVcop7f4VykGaYcop+eYtomHOHgXOPb459d41ujn51oq6mnZWMg3tyaWBXToOwp56VjIN6cWheVUyorKOZkIZ9c2pgVk2jq6KYjoR7cWddU22wppyRh31zaF5Uaq+lmpCFe3BlW1CVqp+Uin90aV1ShauglYl+c2dcUJ2onJGFeW1iVnOsoJSIfHBkV22soJOHe25iVYSonI+DdmlcVq6hlId6bWBSoaOWiHttYFKlopSGeGpdYqudj4FzZFaSo5WGeGlaeKaYiXprXHGnmIl6a1t7pZaGd2dXlaCQgHBgZ6iYh3dnVp2djHxrW4qgj35tXIWgj35tW4qejXtqWJyaiXdlZKaUgm9dip2LeGVnpJJ/bFmfl4RxXY6ah3Ngh5uIdGCHm4dzXo6ZhHBbnJR/a2WjjnljgJuFcFqjkHtlf5qEbmKijHZflJN8ZYKYgWp1m4RtbZ6Gbmqeh29rnoZtcZuDanuYf2aIknlgmotya5yDaYSTeV+fiG16lntgnIdsf5N3Zp2BZo+Lb3uTd2uafmGchGeQiWyHjG+Aj3F9kHN7kXN7kXJ9j3GBjG6IiWmQhGSZfmyXd3mPb4iGZZl8cpJxhYZlmnl6jWuQfnORbo1/cpFtjn53jWmUeH+GbZRvjXx9iG2Tbo94goJ3i2yUbZF1iHyAgnmIc41tkmqVbZJwj3KNc4t0i3WLdItzjHGOb5Bsk3CPdIp5hH5+g3iJcI9xjXmDgHqIb5B2h396iHCPeoGEcY54goRxjnyinZeRi4V/eXNtZ2FdpJ6XkYuFf3lybGZfd6GalI6HgXp0bWdgdKCak42Gf3lya2Relp2Wj4iBenNsZV6UnJWOh4B5cmpjbKCYkYqDe3RsZWKgmZGKgntza2RynpaPh393b2hgmJmRiYF5cWlhk5mRiYB4cGhjn5aOhn11bGSDmpGJgHdvZnebkoqBeG9mepqRiH92bWSLl46FfHJpbpuSiX92bGKYlIuBd21kk5SLgXdtY5qTiX91anGZj4V7cGaMlIp/dWp3mI2DeG1rmo+EeW5nmo+EeW5rmY6Dd2x3louAdGmIkod7b2yYjIF1aYqRhXltepSIfHBvlop+cmuXi35ya5eKfnFwlol8b3mThnlsh4+CdGiXinxvfpGDdmiXiXtuhI6AcnWShHZqloh5a5CKe22Li3xuiIt8bomLfG2MiXprkod3b5KDdHuOf2+IiXptk4Nzfox8bJCFdX2MfGyTg3KEiXh2j35tkINyhod2fot5d458cpB+bpKAbpCBb4+Bb46Bbo+Ab5B+c458eIt5foh1hYRxjH90jXp+h3SIgXONen+Gcox9eol1iH94inWHf3mJdIl9fYZxjnmDgXmIc4x6g4B7hnSMdoh7goB8hHeIc4x2iXmFfIJ/gIF+gnyDe4R6hXqFeoV6hHuEfIJ+gX9/gnyEeYd2iXeIeoR+f4J6hnaJeoN/fYR3iXuCgHuFeYV/fIR5hX98jJGOi4eEgX56d3RxbYGRjouHhIF9endzcG2OkIyJhYJ/e3h0cW2Mj4yIhYF+endzb3mQjYmGgn97d3RweJCNiYWCfnp2c2+HjoqHg397eHRwgo6Lh4N/e3dzb4mNiYWBfXl1cXuOioaCfnp2cnmOioaCfnp2coGNiYWAfHh0co6KhoJ+eXVxiouHgn56dXGLioaCfXl0do2JhIB7d3OFioaCfXl0fYuHgn55dXuLh4J+eXV+i4aBfXhzhomEgHt2eIuHgn14c4iIg356dYKJhH96dYGJhH96dYKIg355dIeHgn14eIqFgHt2goiDfXh5ioR/enWIhoF7doOHgXx3gYeCfHeBh4F8d4OGgXt2h4V/enmIg354gIaBfHaIhH55f4aBe3iIg314hIR/eYCFgHp9hoF7e4eBe3qHgXx7hoF7fIaAe36Ff3qBhH54hYJ8e4aAe4CEfniGgXx+hH95hoF7f4R+eoaAeoOCfH+EfnuFf3mFgHuDgXyBgnyAg31/g31/g31/g31/gn2AgnyBgXuCgHuEf3yEfn6CfYGBe4R/fYN9gIF7hH5+gnyCf32CfYJ/fYJ9gn9+gnyDfn+BfYN9gX9/gX2CfYJ+gIB+gX2CfYJ+gX+AgH+BfoF9gn2CfYJ9gn6BfoF+gX6BfoF+gX6BfoJ9gn6BfoF/gH9/gH+BfoF+gX+AgH+AfoF/gH9/gH6Bf4CAfoF/gIB+gX+DgoGBgIB/f35+fn19goKBgYCAf39/fn59f4KBgYCAgH9/fn5+f4GBgYCAf39/fn5+gYGBgICAf39/fn6AgYCAgIB/f39/f4CAgICAf39/f3+AgICAgH9/f39/gICAgH9/f39/gICA'
}

var sound = {};

function initSound() {
    for(var i in audioSrc) {
        sound[i] = document.createElement("AUDIO");
        sound[i].src = audioSrc[i];
    }
}

initSound();


/**
 * VIRTUAL GAMEPAD (MOBILE ONLY)
 */
function isMobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

var mobile = isMobile();

var pad = document.getElementById('pad');
var padctx = pad.getContext('2d');
var padPoints = [[72, 152], [120,176], [72, 200], [24, 176]];
var padRadius = 20;
var padleft = 0;
var padtop = 0;
var padWait = 0;

function resizePad() {
    pad.width = canvas.width;
    pad.height = canvas.height;
    pad.style.left = canvas.style.left;
    pad.style.top = Math.floor(window.innerHeight - canvas.height) + "px";

    padleft = canvasleft;
    padtop = Math.floor(window.innerHeight - canvas.height);
}

function initPad() {
    if(mobile == false) {
        return false;
    }

    for(var i in padPoints) {
        padctx.beginPath();
        padctx.arc(padPoints[i][0] * scale, padPoints[i][1] * scale, padRadius * scale, 0, Math.PI*2);
        padctx.lineWidth = 2;
        padctx.strokeStyle="rgba(255,255,255,0.2)";
        padctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
        padctx.stroke();
        padctx.fill();
    }
}


/**
 * SCREEN
 */

var gamescreen = document.createElement('canvas');
var gamectx = gamescreen.getContext("2d");
gamescreen.width = 144;
gamescreen.height = 224;

var scale = 1;

var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
    canvas.width = gamescreen.width * scale;
    canvas.height = gamescreen.height * scale;

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();
var canvasleft = 0;
var cavnastop = 0;

function resizeCanvas() {
    scale = Math.floor(window.innerWidth / gamescreen.width);
    scale = scale < 1 ? 1 : (scale > 3 ? 3 : scale);

    canvas.width = gamescreen.width * scale;
    canvas.height = gamescreen.height * scale;
    var left = Math.floor((window.innerWidth - canvas.width) / 2);
    var top = Math.floor((window.innerHeight - canvas.height) / 2);
    left = left < 0 ? 0 : left;

    if(mobile) {
        top = 0;
    }
    else {
        top = top < 0 ? 0 : top;
    }
    
    canvas.style.left = left + "px";
    canvas.style.top = top  + "px";

    canvasleft = left;
    canvastop = top;
    resizePad();
    initPad();
}

/**
 * TILESET
 */
var tileset = new Image();
    tileset.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAFVBMVEUAAAAbHDPafSLm2il7U60tk93TJzRJbbmrAAAAB3RSTlMA////////pX+m+wAAA2pJREFUaIHVmQ2ThCAIhjVr//9PvpKElw/L8uZmj9nNMHlExMYq5UlJYe1S5QlAt1+WcUKKDJal7DIOKM2gNEDJZf89AJwGfcDRgbJjNTmD/aw6tLvEzap7Rdm33nwMdstEgMTd7s3Fv3yOGoZQyP5sTl2TI3kEQAGkQLar5Beb+CGwmg77TC5ndtmlwVUQj9Nm0AX0JYUGx/kjwNEz+vgUUAgAMdP6vQcT8keAjQ9dwKYub1W0fYcQArZNEdrJFhFSYLDrpf6EB0UA2DbXZagiQN0P9t4K/cEFpd0CfAMTEzUkB3AxsAA7Kw5ALS4NbAANwM77dqx/PaJNJ5ONQc44TWpIx5FikCNJiOWECRKjhFlQAegpjFj8EY8Cxshiiqb5EeBS0sfKcXe0ZyABYAFpZnKw1z1ggRa74gDmegCQFp8lAujru83KcgJai88SA9T1A9B6Z4Aes4mfCWq1O/sXwMKOhh6gToDMRWruqdIDWjAboPb/m4DZITgDCN9IEGencTaRZlN5ejGFIpG7Xc624ql8A+CcDpaHejqyQTew+t8AoNbpNeu7egNIt04/l01HRwBhnc4Goa4AZC0NRvS3AK78CoBUQJCG9W9YTP8TADum+/tB154ILwGy+f4tDy7Wf8eFomPwFCB75/tUjgHHbt4D7GLpA9w0PgPg88SrIfRmYRSgdu8vgyjPE/91NWoAD5ULOjnLGozctlZYf94TKXBU0zDm30AZr5/niRqs4IFvLD2qVvW0TmM2ABkLuC7/FfkwBNWvIYFu2gcAKLDGxoYBPuo62lna65IBc+I9UJ4EugTV5MHAf5XxczkG8DMAAOX6alzMEUANKXV7GfZgOgY++iZlu7PQAHOSwo6h53DoUJk6KY5tzWRwLFYGYJA9QNeuNhP1hXeA9XoILp9WnNZuDGDsfvoxiJLBZhbAdZ3hFjApkom9zFO6T+/xtYDHxwCI3xXgejFZwLmhSa6n7gJwAHNDwUxZQ5AB0BFnISuC6UlaaH0+D0J3VUoGAq+I+wBwOttX5VAIgMdG06Pts35LDSUA4iBRS/u5QIp6P+hF29hLz7jRXG0GGn+y//7gdqq5A2guuRfT+pFnQPyrdtxsD4n7/gCPPOMugN4eebbRIcjRfm8YA6jCPrE8BujvDW8+1pk8mJQfESVBdomKwz0AAAAASUVORK5CYII=";

function getTilePos(tile) {
    return [
        (tile % 4) * 16,
        Math.floor(tile / 4) * 16
    ];
}




/**
 * GAME LOOP
 */
var now,
    dt       = 0,
    last     = timestamp(),
    slow     = 1,
    step     = 1/60,
    slowStep = slow * step;

function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

function frame() {
    now = timestamp();
    dt = dt + Math.min(1, (now - last) / 1000);

    while(dt > slowStep) {
        dt = dt - slowStep;
        update(step);
    }

    render(dt/slow);

    last = now;

    requestAnimationFrame(frame);
}

/**
 * CONTROLS: GAMEPAD
 */

window.addEventListener("gamepadconnected", connectgamepad);
window.addEventListener("gamepaddisconnected", disconnectgamepad);

var gamepad = [];
var gamepadwait = 0;

function connectgamepad(e) {
    gamepad[e.gamepad.index] = e.gamepad;
}

function disconnectgamepad(e) {
    delete gamepad[e.gamepad.index];
}

function updategamepad(dt) {
    if(gamepadwait > 0) {
        gamepadwait -= dt;
        return false;
    }

    if(gamepadwait > 0) {
        gamepadwait -= dt;
        return false;
    }

    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

    if(gamepads.length == 0 || gamepads[0] === null) {
        return false;
    }

    gamepad = gamepads;

    if(isactive && gamepad[0] && gamepad[0].buttons) {
        if(gamepad[0].buttons[12].pressed) { // up
            sprites[0].move(0,-1);
            gamepadwait = isactive ? 0.175 : 2;
        }
        else if(gamepad[0].buttons[15].pressed) { // right
            sprites[0].move(1,0);
            gamepadwait = isactive ? 0.175 : 2;
        }
        else if(gamepad[0].buttons[13].pressed) { // down
            sprites[0].move(0,1);
            gamepadwait = isactive ? 0.175 : 2;
        }
        else if(gamepad[0].buttons[14].pressed) { // left
            sprites[0].move(-1,0);
            gamepadwait = isactive ? 0.175 : 2;
        }
    }
    else if((gamepad[0].buttons[0].pressed || gamepad[0].buttons[9].pressed) && titletext == 'GAME OVER') {
        startGame();
        gamepadwait = 1;
    }
}
  

/**
 * CONTROLS: VIRTUAL GAMEPAD (MOBILE ONLY)
 */
function tryClick(x, y) {
    if(mobile == false) {
        return false;
    }

    if(padWait > 0) {
        return false;
    }

    var found = -1;
    var i = 0;
    while(found == -1 && i < padPoints.length) {
        var tx = x - padleft;
        var ty = y - padtop;

        var px = padPoints[i][0] * scale;
        var py = padPoints[i][1] * scale;

        var a = px - tx;
        var b = py - ty;
        var dist = Math.sqrt(a*a + b*b );

        if(dist <= padRadius * scale * 1.2) {
            found = i;
        }

        i++;
    }

    var moves = [[0,-1], [1,0], [0,1], [-1,0]];

    if(found >= 0) {
        sprites[0].move(moves[found][0],moves[found][1]);

        padWait = 0.15;
    }
}

document.addEventListener('touchstart', function(event) {
    if(isactive) {
        var touches = event.changedTouches;
        tryClick(touches[0].pageX, touches[0].pageY);
    }
    else if(padWait <= 0  && titletext == 'GAME OVER') {
        startGame();
        padWait = 1;
    }
});

document.addEventListener('click', function(event) {
    if(isactive) {
        tryClick(event.clientX, event.clientY);
    }
    else if(padWait <= 0  && titletext == 'GAME OVER') {
        startGame();
        padWait = 1;
    }
});

/**
 * CONTROLS: KEYBOARD
 */

document.addEventListener('keydown', function(event) {
    if((event.key == " " || event.key == "Enter") && titletext == 'GAME OVER') { // space or enter
        startGame();
    }

    if(isactive == false) {
        return false;
    }

    if(event.key == 'w' || event.key == 'ArrowUp') {
        sprites[0].move(0,-1);
    }
    else if(event.key == 's' || event.key == 'ArrowDown') {
        sprites[0].move(0,1);
    }
    else if(event.key == 'a' || event.key == 'ArrowLeft') {
        sprites[0].move(-1,0);
    }
    else if(event.key == 'd' || event.key == 'ArrowRight') {
        sprites[0].move(1,0);
    }
    
});


/**
 * MAZE
 */
function getMaze(x,y) {
    var n=x*y-1;
    if (n<0) { return false;}
    var horiz =[]; for (var j= 0; j<x+1; j++) horiz[j]= [],
        verti =[]; for (var j= 0; j<x+1; j++) verti[j]= [],
        here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)],
        path = [here],
        unvisited = [];
    for (var j = 0; j<x+2; j++) {
        unvisited[j] = [];
        for (var k= 0; k<y+1; k++)
            unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
    }
    while (0<n) {
        var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
            [here[0]-1, here[1]], [here[0],here[1]-1]];
        var neighbors = [];
        for (var j = 0; j < 4; j++)
            if (unvisited[potential[j][0]+1][potential[j][1]+1])
                neighbors.push(potential[j]);
        if (neighbors.length) {
            n = n-1;
            next= neighbors[Math.floor(Math.random()*neighbors.length)];
            unvisited[next[0]+1][next[1]+1]= false;
            if (next[0] == here[0])
                horiz[next[0]][(next[1]+here[1]-1)/2]= true;
            else 
                verti[(next[0]+here[0]-1)/2][next[1]]= true;
            path.push(here = next);
        } else 
            here = path.pop();
    }

    var entry = [Math.floor(Math.random() * x), y-1];
    var exit = [Math.floor(Math.random() * x), 0];

    return {x: x, y: y, horiz: horiz, verti: verti, entry: entry, exit: exit};
}

function getRoom(m, x, y) {
    var v = [[0,-1], [0,0], [0,0], [-1,0]];
    var doors = [];

    for(var i in v) {
      var dx = x + v[i][0];
      var dy = y + v[i][1];

      if(dx < 0 || dy < 0) {
        doors[i] = 0;
      }
      else if(i % 2 == 0) {
        doors[i] = m.verti[dy][dx] == true ? 1 : 0;
      }
      else if(i % 2 == 1) {
        doors[i] = m.horiz[dy][dx] == true ? 1 : 0;
      }
    }

    if(m.exit[0] == x && m.exit[1] == y) {
      var isexit = true;
      doors[0] = 1;
    }
    else {
      isexit = false;
    }

    if(m.entry[0] == x && m.entry[1] == y) {
      var isentry = true;
      doors[2] = 1;
    }
    else {
      var isentry = false;
    }

    
    if(y >= m.y) {
        doors = [1,0,0,0];
    }
    else if(y < 0) {
        doors = [0,0,1,0];
    }

    var hasColumns = Math.random() * 100 <= columnsChance ? true : false;

    return {
      doors: doors,
      isentry: isentry,
      isexit: isexit,
      hasColumns: hasColumns
    };
}

var roomCanvas = document.createElement('canvas');
var roomCtx = roomCanvas.getContext('2d');
roomCanvas.width = 144;
roomCanvas.height = 144;

var doorPos = [[4,0],[8,4],[4,8],[0,4]];

function drawRoom() {
    roomCtx.clearRect(0,0, 9*16,9*16);

    var tile = wallTile;
    var pos = getTilePos(tile);

    for(var x = 0; x < 9;x++)
    for(var y = 0; y < 9;y++) {
        if(x == 0 || x == 8 || y == 0 || y == 8) {
            roomCtx.drawImage(tileset, pos[0],pos[1],16,16, x*16,y*16,16,16);
        }
    }

    for(var i in room.doors) {
        if(room.doors[i] == 1) {
            roomCtx.clearRect(doorPos[i][0]*16, doorPos[i][1]*16, 16,16);
        }
    }

    

    if(mazey < 0 || mazey >= maze.y) {
        var pos = getTilePos(11);
        roomCtx.drawImage(tileset, pos[0],pos[1],16,16, 4*16,4*16,16,16);
    }
    else if(room.hasColumns) {
        for(var i in columnsPos) {
            roomCtx.drawImage(tileset, pos[0],pos[1],16,16, columnsPos[i][0]*16,columnsPos[i][1]*16,16,16);
        }
    }
}

function changeRoom(dx,dy, door) {
    var oppositeDoor = (door + 2) % 4;

    mazex = mazex + dx;
    mazey = mazey + dy;

    sprites[0].mapx = doorPos[oppositeDoor][0];
    sprites[0].mapy = doorPos[oppositeDoor][1];
    sprites[0].x = sprites[0].mapx * 16;
    sprites[0].y = sprites[0].mapy * 16;


    room = getRoom(maze, mazex,mazey);
    drawRoom();

    updateIndicator();

    mazecanvas = mazeImage(maze, mazex, mazey);

    resetSpritePool();
    
    if(mazey >= 0 && mazey < 4) {
        spawnCoins();
        spawnEnemies();
    }
}


 function mazeImage(m, mazex, mazey) {
    var currentRoom = mazex + 'x' + mazey;

    var bgColor = "#7b53ad";
    var fogColor = "#1b1c33";
  
    var canvas = document.createElement('canvas');
    canvas.width = m.x*4+1;
    canvas.height = m.y*4+1;
    var ctx = canvas.getContext("2d");
  
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = fogColor;
  
    ctx.fillRect(0,0, canvas.width,1);
    ctx.fillRect(0,0, 1, canvas.height);
    ctx.fillRect(0, canvas.height-1, canvas.width, 1);
    ctx.fillRect(canvas.width-1, 0, 1, canvas.height);
  
    ctx.fillStyle = bgColor;
    // entry
    ctx.fillRect(m.entry[0]*4+1, canvas.height-1, 3, 1);
    // exit
    ctx.fillRect(m.exit[0]*4+1, 0, 3,1);
  
    ctx.fillStyle = fogColor;
  
    for(var x = 0; x < m.x; x++)
    for(var y = 0; y < m.y; y++) {
      var id = x + "x" + y;
  
      if(id == currentRoom) {
        ctx.fillStyle = "#e6da29";
        ctx.fillRect(1+x*4, 1+y*4, 3,3);
        ctx.fillStyle = fogColor;
      }
  
  
      if(x < m.x-1) {
        if(typeof(m.horiz[y][x]) == "undefined") {
          
          ctx.fillRect((x+1)*4,y*4, 1, 5);
        }
      }
  
      if(y < m.y-1) {
        if(typeof(m.verti[y][x]) == "undefined") {
          
          ctx.fillRect(x*4,(y+1)*4, 5, 1);
        }
      }
      
  
    }
  
    return canvas;
  
  }


function updateIndicator() {
    var a = maze.entry[0] - maze.exit[0];
    var b = (maze.entry[1]+1) - (maze.exit[1]-1);

    var maxDist = Math.sqrt( a*a + b*b );

    var a = mazex - maze.exit[0];
    var b = mazey - (maze.exit[1]-1);

    var dist = Math.sqrt( a*a + b*b );

    indicator = 5 - Math.round(5 * dist / maxDist);
    indicatorSx = 0 + Math.floor(indicator % 4) * 16;
    indicatorSy = 48 + Math.floor(indicator / 4) * 16;
}


function renderText() {
    var str = titletext;

    gamectx.clearRect(16, 0, 96, 16);

    var dx = 24 + Math.floor((96 - (str.length * 8)) / 2);

    for(var i in str) {
        var code = str.charCodeAt(i);

        if(code >= 65 && code <= 90) {
            var tile = code - 65 + 10;
        }
        else if(code >= 48 && code <= 58) {
            var tile = code - 48;
        }
        else {
            var tile = -1;
        }
        
        if(tile >= 0) {
            var sx = 0 + Math.floor(tile % 8) * 8;
            var sy = 80 + Math.floor(tile / 8) * 8;

            gamectx.drawImage(tileset, sx,sy, 8,8, dx + i*8,4, 8,8);
        }
        
    }

}

function renderPoints() {
    gamectx.clearRect(120, 0, 32, 16);

    var str = String("000" + Math.floor(points)).slice(-3);

    for (var i in str) {
        var code = str.charCodeAt(i);

        var tile = code - 48;
        var sx = 0 + Math.floor(tile % 8) * 8;
        var sy = 80 + Math.floor(tile / 8) * 8;

        gamectx.drawImage(tileset, sx,sy, 8,8, 120 + i*8,4, 8,8);
    }
}

function renderInfo() {
    gamectx.clearRect(0,160,64,144);

    var str = [
        'FIND WIFI SIGNAL',
        'AND BECOME',
        'CIVILIZED MAN'];
    
    var tab = [8, 32, 20];

    for(var y in str)
    for(var i in str[y]) {
        var code = str[y].charCodeAt(i);

        var tile = code - 65 + 10;

        var sx = 0 + Math.floor(tile % 8) * 8;
        var sy = 80 + Math.floor(tile / 8) * 8;

        gamectx.drawImage(tileset, sx,sy, 8,8, tab[y] + i*8,176 + y*16, 8,8);
    }
}

/**
 * GAME LOGIC
 */
var maze = null;
var room = null;
var mazex = null;
var mazey = null;
var mazecanvas = null;

var columnsPos = [[2,2],[6,2],[6,6],[2,6]];
var columnsChance = 0;

var showMap = false;

var indicator = 0;
var indicatorSx = 0;
var indicatorSy = 48;
var indicatorActualSx = indicatorSx;
var indicatorActualSy = indicatorSy;
var indicatorTime = 2;

var wallTile = 8;

var level = 1;
var leveltime = 0;
var points = 0;
var isactive = true;
var titletext = '';
var nextleveltimer = -1;

var maxEnemies = 0;
var maxCoins = 5;

var sprites = [];


tileset.onload = function() {
    ctx.imageSmoothingEnabled = false;
    gamectx.imageSmoothingEnabled = false;
    startGame();
    requestAnimationFrame(frame);
}

function startGame() { 
    indicator = 0;
    indicatorSx = 0;
    indicatorSy = 48;
    indicatorActualSx = indicatorSx;
    indicatorActualSy = indicatorSy;
    indicatorTime = 2;

    if(titletext == 'ONLINE') {
        level++;
    }
    else {
        points = 0;
    }
    
    leveltime = 0;
    titletext = 'LEVEL ' + level;

    maxEnemies = Math.floor(Math.sqrt(level));
    maxCoins = Math.floor(Math.sqrt(level * 10));
    columnsChance = Math.floor(Math.sqrt(level * 10));

    wallTile = 8 + (level - 1) % 3;

    isactive = true;

    maze = getMaze(4,4);
    mazex = maze.entry[0];
    mazey = maze.entry[1] + 1;

    sprites = [];
    sprites[0] = new Player();

    room = getRoom(maze, mazex,mazey);
    drawRoom();
    
    mazecanvas = mazeImage(maze, mazex, mazey);
    renderPoints();
    renderText();
    renderInfo();
}



function Player() {
    this.type = 'player';
    this.active = true;
    this.mapx = 4;
    this.mapy = 4;
    this.x = this.mapx * 16;
    this.y = this.mapy * 16;
    this.width = 16;
    this.height = 16;
    this.tile = 0;
    this.sx = 0;
    this.sy = 0;
}


Player.prototype.move = function(dx, dy) {
    var mapx = this.mapx + dx;
    var mapy = this.mapy + dy;

    var canMove = mapx > 0 && mapx < 8 && mapy > 0 && mapy < 8;


    if(room.hasColumns) {
        for(var i in columnsPos) {
            if(columnsPos[i][0] == mapx && columnsPos[i][1] == mapy) {
                canMove = false;
            }
        }
    }


    for(var i in room.doors) {
        if(room.doors[i] == 1 && doorPos[i][0] == mapx && doorPos[i][1] == mapy) {
            canMove = true;
        }
    }

    if(canMove) {
        this.mapx = mapx;
        this.mapy = mapy;

        this.x = this.mapx * 16;
        this.y = this.mapy * 16;
    }

    if(mazey < 0 && this.mapx == 4 && this.mapy == 4) {
        sound.fanfare.play();

        sprites[0].sx = 16;
        sprites[0].sy = 0;

        titletext = 'ONLINE';
        nextleveltimer = 1.75;
        renderText();
        padWait = 2;
        gamepadwait = 2;
        isactive = false;
    }
    else if(mazey >= maze.y && this.mapx == 4 && this.mapy == 4) {
        sprites[0].sx = 0;
        sprites[0].sy = 0;
    }

    if(mapx < 0) {
        changeRoom(-1,0, 3);
    }
    else if(mapx > 8) {
        changeRoom(1, 0, 1);
    }
    else if(mapy < 0) {
        changeRoom(0,-1, 0);
    }
    else if(mapy > 8) {
        changeRoom(0,1, 2);
    }
}

Player.prototype.update = function(dt) {

}




Enemy = function() {
    this.type = 'enemy';
    this.active = true;
    this.mapx = 2 + Math.round(Math.random()*4);
    this.mapy = 2 + Math.round(Math.random()*4);
    this.x = this.mapx * 16;
    this.y = this.mapy * 16;
    this.width = 16;
    this.height = 16;
    this.enemy = Math.round(Math.random()*2);
    this.tiles = [[4,30], [5,19], [6,31]];
    this.tile = 0;
    this.sx = 0 + Math.round(Math.random()*2) * 16;
    this.sy = 16;
    this.movetimestart =  0.35 + Math.random()*1;
    this.movetime =this.movetimestart
}

Enemy.prototype.update = function(dt) {
    // animation
    this.tile += this.movetimestart * dt;
    if(this.tile >= this.tiles[this.enemy].length) {
        this.tile -= this.tiles[this.enemy].length;
    }

    var tileNum = this.tiles[this.enemy][Math.floor(this.tile)];
    
    this.sx = Math.floor(tileNum % 4) * 16;
    this.sy = Math.floor(tileNum / 4) * 16;

    // movement
    this.movetime -= dt;
    if(this.movetime <= 0) {
        this.movetime = this.movetimestart - this.movetime;

        var dx = sprites[0].mapx - this.mapx;
        var dy = sprites[0].mapy - this.mapy;

        if(Math.abs(dx) > Math.abs(dy)) {
            this.move(dx / Math.abs(dx), 0);
        }
        else {
            this.move(0, dy / Math.abs(dy));
        }

        
    }
}

Enemy.prototype.move = function(dx, dy) {
    var mapx = this.mapx + dx;
    var mapy = this.mapy + dy;

    var canMove = mapx > 0 && mapx < 8 && mapy > 0 && mapy < 8;

    for(var i in room.doors) {
        if(room.doors[i] == 1 && doorPos[i][0] == mapx && doorPos[i][1] == mapy) {
            canMove = true;
        }
    }

    for(var i = 1; i < sprites.length; i++) {
        if(sprites[i].type != 'coin' && mapx == sprites[i].mapx && mapy == sprites[i].mapy) {
            canMove = false;
        }
    }

    if(canMove) {
        this.mapx += dx;
        this.mapy += dy;

        this.x = this.mapx * 16;
        this.y = this.mapy * 16;
    }
}

function resetSpritePool() {
    sprites = sprites.slice(0,1);
}

function spawnEnemies() {
    var r = Math.round(Math.random() * maxEnemies);

    for(var i = 0; i < r; i++) {
        sprites.push(new Enemy());
    }
}

function spawnCoins() {
    var r = 1 + Math.round(Math.random() * maxCoins);

    for(var i = 0; i < r; i++) {
        sprites.push(new Coin());
    }
}

function Coin() {
    this.type = 'coin';
    this.active = true;
    this.mapx = 1 + Math.round(Math.random()*5);
    this.mapy = 1 + Math.round(Math.random()*5);
    this.x = this.mapx * 16;
    this.y = this.mapy * 16;
    this.tiles = [2,3,7,3];
    this.tile = 0;
    this.speed = 5 + Math.random()*3;
    this.width = 16;
    this.height = 16;
    this.sx = 32;
    this.sy = 0;

    if(room.hasColumns) {
        for(var i in columnsPos) {
            if(columnsPos[i][0] == this.mapx && columnsPos[i][1] == this.mapy) {
                this.active = false;
            }
        }
    }
}

Coin.prototype.update = function(dt) {
    this.tile += this.speed * dt;
    if(this.tile >= this.tiles.length) {
        this.tile -= this.tiles.length;
    }

    this.sx = Math.floor(this.tiles[Math.floor(this.tile)] % 4) * 16;
    this.sy = Math.floor(this.tiles[Math.floor(this.tile)] / 4) * 16;
}


function checkCollisions() {
    var player = sprites[0];

    for(var i = 1; i < sprites.length; i++) {
        if(sprites[i].active == true && player.mapx == sprites[i].mapx && player.mapy == sprites[i].mapy) {
            if(sprites[i].type == 'coin') {
                sound.coin.play();
                points += 5;
                sprites[i].active = false;

                if(points >= 1000) {
                    points = 999;
                }

                renderPoints();

                if(points >= 999 && showMap == false) {
                    sound.fanfare.play();
                    showMap = true;
                }
            }
            else if(sprites[i].type == 'enemy') {
                padWait = 2;
                gamepadwait = 2;
                isactive = false;
                sprites[0].active = false;

                indicatorTime = 1;
                titletext = 'GAME OVER';
                renderText();
                sound.hurt.play();
            }
        }
    }
}


function update(dt) {
    updategamepad(dt);

    if(padWait > 0) {
        padWait -= dt;
    }

    if(titletext == 'ONLINE') {
        nextleveltimer -= dt;
        if(nextleveltimer < 0) {
            nextleveltimer = -1;
            startGame();
        }
    }

    if(isactive == false) {
        return false;
    }

    for(var i in sprites) {
        sprites[i].update(dt);
    }

    indicatorTime -= dt;
    if(indicatorTime <= 0) {
        indicatorTime = 2 + indicatorTime;
    }

    if(indicatorTime >= 1.9) {
        indicatorActualSx = 32;
        indicatorActualSy = 64;
    }
    else {
        indicatorActualSx = indicatorSx;
        indicatorActualSy = indicatorSy;
    }

    checkCollisions();
}

function render(dt) {
    gamectx.clearRect(0, 16, gamescreen.width, gamescreen.height - 16 - 64);

    // map
    if(showMap) {
        gamectx.drawImage(mazecanvas, 16, 0);
    }

    gamectx.drawImage(roomCanvas, 0,16);

    for(var i in sprites) {
        var spr = sprites[i];
        if(spr.active == true) {
            gamectx.drawImage(tileset, spr.sx,spr.sy, spr.width,spr.height, spr.x,16+spr.y, spr.width,spr.height);
        }
    }

    // indicator
    gamectx.drawImage(tileset, indicatorActualSx,indicatorActualSy,16,16, 0,0,16,16);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gamescreen, 0, 0, gamescreen.width, gamescreen.height, 0,0, canvas.width, canvas.height);
}