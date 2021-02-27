(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{25:function(n,e,t){},33:function(n,e){},37:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(16),a=t.n(i),c=(t(25),t(6)),u=t(3),d=t(4),s=t(17),l=t.n(s),f=t(39);function b(){return{type:"snake",bodyPart:"head",id:Object(f.a)()}}function p(n){return{type:"snake",bodyPart:"trunk",index:n.index,id:Object(f.a)()}}function h(){return{type:"snake",bodyPart:"tail",id:Object(f.a)()}}function j(){return{type:"food",id:Object(f.a)()}}function v(){return{type:"empty",id:Object(f.a)()}}var g=32,y=17;var O=[["left","right"].sort().join(","),["up","down"].sort().join(",")];var m,x=(m=g,new Array(y).fill(null).map((function(){return new Array(m).fill(null)})).map((function(n,e){return n.map((function(n,t){return{x:e,y:t}}))})).flat());function w(n,e){var t=x.filter((function(n){var t,r=n.x,o=n.y;return"snake"!==(null===(t=e[r][o])||void 0===t?void 0:t.type)}));return t[function(n,e){var t=e.max,r=e.min,o=void 0===r?0:r,i=l()(n);return function(){return o+Math.floor(i()*t)}}(n,{max:t.length})()]}function k(n,e){return new Array(e).fill(null).map((function(){return new Array(n).fill(null).map((function(){return v()}))}))}var S,C,z,P,D,E,I,M,B,A=t(1),F=d.a.div(S||(S=Object(u.a)(["\n  width: 3.4vh;\n  height: 3.4vh;\n"]))),N=Object(d.a)(F)(C||(C=Object(u.a)(["\n  background-color: black;\n"]))),G=Object(d.a)(N)(z||(z=Object(u.a)(["\n  width: 3.4vh;\n  height: 3.4vh;\n"]))),R=Object(d.a)(N)(P||(P=Object(u.a)(["\n  width: 3.1vh;\n  height: 3.1vh;\n"]))),T=Object(d.a)(N)(D||(D=Object(u.a)(["\n  width: 2.5vh;\n  height: 2.5vh;\n"]))),q=Object(d.a)(F)(E||(E=Object(u.a)(["\n  background-color: #ff3e00;\n  border-radius: 50%;\n  width: 3vh;\n  height: 3vh;\n"]))),H=function(n){var e=n.square;if("snake"===(null===e||void 0===e?void 0:e.type))switch(e.bodyPart){case"head":return Object(A.jsx)(G,{});case"trunk":return Object(A.jsx)(R,{});case"tail":return Object(A.jsx)(T,{})}return"food"===(null===e||void 0===e?void 0:e.type)?Object(A.jsx)(q,{}):Object(A.jsx)(F,{})},L=d.a.div(I||(I=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 3.6vh);\n  grid-template-rows: repeat(",", 3.6vh);\n  place-items: center center;\n  gap: 0.15vh 0.15vh;\n  padding: 0.15vh;\n  border: 3px solid black;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,\n    'Helvetica Neue', sans-serif;\n"])),g,y),J=function(n){var e=n.gameState.field.map((function(n,e){return n.map((function(n,t){return Object(A.jsx)(H,{square:n},"".concat(e).concat(t))}))}));return Object(A.jsx)(L,{children:e})},U=[{delay:3e5,description:'"Need to make some coffee" speed'},{delay:700,description:"Dead snail on a slope"},{delay:540,description:"Snail"},{delay:400,description:"Sloth"},{delay:320,description:"Snail running from a bird"},{delay:230,description:"Turtle"},{delay:160,description:"Turtle on a skateboard"},{delay:80,description:"Regular speed"},{delay:50,description:"Fast"},{delay:30,description:"Cheetah"},{delay:20,description:"Cheetah driving a Porsche"},{delay:10,description:"M-497 Black Beetle"},{delay:4,description:"Warp 11"}];function W(){return U.findIndex((function(n){return 80===n.delay}))}var Y=d.a.div(M||(M=Object(u.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 50px;\n  min-width: 500px;\n\n  /* BEGIN Apply styles that allow us to customize range input */\n  input[type='range'] {\n    -webkit-appearance: none;\n    width: 15vw; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n\n  input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n\n  input[type='range']:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n\n  input[type='range']::-ms-track {\n    width: 100%;\n    cursor: pointer;\n\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  /* END Apply styles that allow us to customize range input */\n\n  /* Special styling for WebKit/Blink */\n  input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: 2px solid #000000;\n    height: 16px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n  }\n\n  /* All the same stuff for Firefox */\n  input[type='range']::-moz-range-thumb {\n    border: 2px solid #000000;\n    height: 16px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n  }\n\n  input[type='range']:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n\n  input[type='range']::-ms-track {\n    width: 100%;\n    cursor: pointer;\n\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  button {\n    border: 2px solid black;\n    background-color: white;\n    height: 24px;\n    font-weight: bold;\n    font-size: 14px;\n  }\n\n  button:hover {\n    background-color: black;\n    color: white;\n  }\n"]))),K=d.a.div(B||(B=Object(u.a)(["\n  display: flex;\n  margin-top: 4px;\n"]))),Q=function(n){var e=n.onSpeedChange,t=Object(r.useState)(W()),o=Object(c.a)(t,2),i=o[0],a=o[1];return Object(r.useEffect)((function(){e(U[i].delay)}),[e,i]),Object(A.jsxs)(Y,{children:[Object(A.jsx)("span",{children:U[i].description}),Object(A.jsxs)(K,{children:[Object(A.jsx)("button",{onClick:function(){i>0&&a((function(n){return n-1}))},children:"\uff0d"}),Object(A.jsx)("input",{type:"range",value:i,min:"0",max:U.length-1,step:"1",onChange:function(n){var t=parseInt(n.target.value,10);a(t),e(U[t].delay)}}),Object(A.jsx)("button",{onClick:function(){i<U.length-1&&a((function(n){return n+1}))},children:"\uff0b"})]})]})},V=t(12);var X,Z=function(n){var e=n.current,t=Object(r.useState)(0),o=Object(c.a)(t,2),i=o[0],a=o[1],u=Object(r.useState)(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{countDelay:20},t=Object(V.a)(n),r=t.subscribe,o=t.update,i=n;return{subscribe:r,newScore:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(n){if(n<i){var t=1500/(i-n);if(t<4)o((function(){return n}));else for(var r=i;r>n;r--)setTimeout((function(){return o((function(n){return n-1}))}),r*t)}else for(var a=1;a<=n-i;a++)setTimeout((function(){return o((function(n){return n+1}))}),a*e.countDelay);i=n}))}}()),d=Object(c.a)(u,1)[0];return Object(r.useEffect)((function(){return d.subscribe((function(n){a(n)}))}),[d]),d.newScore(e),Object(A.jsxs)(A.Fragment,{children:["Score: ",Object(A.jsx)("span",{children:i})]})},$=d.a.div(X||(X=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  opacity: 0.9;\n  background-color: black;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 1000;\n\n  h1 {\n    color: white;\n  }\n\n  p {\n    color: #ff3e00;\n    text-transform: uppercase;\n    font-size: 6vh;\n  }\n\n  button {\n    position: relative;\n    border-style: none;\n    border-radius: 0.4rem;\n    width: 180px;\n    height: 3.5rem;\n    background-color: #ff3e00;\n    color: white;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 8px 22px;\n    text-transform: uppercase;\n  }\n\n  button:hover {\n    background-color: #ff4000c5;\n    cursor: pointer;\n  }\n\n  button:active {\n    background-color: #ff3e00;\n    cursor: pointer;\n  }\n"]))),_=function(n){var e=n.onNewGameClick,t=n.finalScore;return Object(A.jsxs)($,{children:[Object(A.jsx)("h1",{children:"Game over"}),Object(A.jsxs)("p",{children:["Final score: ",t]}),Object(A.jsx)("button",{onClick:e,children:" New game "})]})},nn=t(2);function en(n){return n.field}function tn(n){return n.direction}function rn(n){return n.snakeSize}function on(n,e){var t=function(n,e){var t;return n.forEach((function(n,r){n.forEach((function(n,o){return e(n)?t={row:r,column:o}:null}))})),t}(n,(function(n){return"snake"===(null===n||void 0===n?void 0:n.type)&&"head"===n.bodyPart})),r=t.column;"left"===e?r=t.column-1<0?31:t.column-1:"right"===e&&(r=t.column+1===g?0:t.column+1);var o=t.row;return"up"===e?o=t.row-1<0?16:t.row-1:"down"===e&&(o=t.row+1===y?0:t.row+1),{row:o,column:r}}var an,cn,un,dn,sn=U[W()].delay,ln=function(){};function fn(n){var e=n.delay,t=void 0===e?sn:e,r=n.logger,o=void 0===r?ln:r,i=Object(V.a)(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.floor(1e7*Math.random()),e=k(g,y);e[8][13]=h(),e[8][14]=p({index:3}),e[8][15]=p({index:2}),e[8][16]=p({index:1}),e[8][17]=p({index:0}),e[8][18]=b();var t=w(n,e);return e[t.x][t.y]=j(),{field:e,direction:"right",snakeSize:6,foodConsumed:!1,gameOver:!1,score:0}}()),a=i.subscribe,c=i.update,u=[],d=t,s=!1;function l(n){return setInterval((function(){o("Calling setInterval handler (delay: ".concat(n,")")),function(n,e){e&&n((function(n){return function(n,e){var t,r,o=tn(n);return Object(nn.a)(Object(nn.a)({},n),{},{direction:(t=o,r=e,O.indexOf([t,r].sort().join(","))>=0?o:e)})}(n,e)}))}(c,u.shift()),c((function(n){var e=function(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.floor(1e7*Math.random()),r=en(n),o=rn(n),i=on(r,tn(n));if("snake"===(null===(e=r[i.row][i.column])||void 0===e?void 0:e.type)&&"tail"!=r[i.row][i.column].bodyPart)return Object(nn.a)(Object(nn.a)({},n),{},{gameOver:!0});var a=!1,c=r.map((function(e,t){return e.map((function(e,r){return"snake"===(null===e||void 0===e?void 0:e.type)&&"tail"===e.bodyPart?i.row===t&&i.column===r?Object(nn.a)(Object(nn.a)({},b()),{},{id:e.id}):n.foodConsumed?e:Object(nn.a)(Object(nn.a)({},v()),{},{id:e.id}):"snake"===(null===e||void 0===e?void 0:e.type)&&"head"===e.bodyPart?Object(nn.a)(Object(nn.a)({},p({index:0})),{},{id:e.id}):"snake"===(null===e||void 0===e?void 0:e.type)&&"trunk"===e.bodyPart?e.index!==o-3||n.foodConsumed?Object(nn.a)(Object(nn.a)({},p({index:e.index+1})),{},{id:e.id}):Object(nn.a)(Object(nn.a)({},h()),{},{id:e.id}):"empty"!==e.type&&"food"!==e.type||r!==i.column||t!==i.row?e:(e&&(a="food"===e.type),Object(nn.a)(Object(nn.a)({},b()),{},{id:e.id}))}))}));if(n.foodConsumed){var u=w(t,c);c[u.x][u.y]=Object(nn.a)(Object(nn.a)({},j()),{},{id:c[u.x][u.y].id})}return Object(nn.a)(Object(nn.a)({},n),{},{foodConsumed:a,field:c,snakeSize:n.foodConsumed?n.snakeSize+1:n.snakeSize,score:a?n.score+5:n.score})}(n);return e.gameOver&&clearInterval(f),e}))}),n)}var f=l(t);function m(n){d=n,clearInterval(f),f=l(n)}return{subscribe:a,changeDirection:function(n){s||u.push(n)},changeDelayBetweenMoves:m,togglePause:function(){s?(m(d),s=!1):(s=!0,clearInterval(f))},destroy:function(){clearInterval(f)}}}var bn=d.a.main(an||(an=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]))),pn=d.a.div(cn||(cn=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),hn=d.a.span(un||(un=Object(u.a)(["\n  font-size: 2rem;\n"]))),jn=d.a.h1(dn||(dn=Object(u.a)(["\n  color: #ff3e00;\n  text-transform: uppercase;\n  font-size: 8vh;\n  font-weight: 100;\n"]))),vn=fn({}),gn=function(){var n=Object(r.useState)(vn),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(void 0),a=Object(c.a)(i,2),u=a[0],d=a[1];Object(r.useEffect)((function(){return t.subscribe((function(n){return d(n)})),t.destroy}),[t]),Object(r.useEffect)((function(){function n(n){var e=n.key.toLowerCase();"w"===e?t.changeDirection("up"):"s"===e?t.changeDirection("down"):"d"===e?t.changeDirection("right"):"a"===e?t.changeDirection("left"):"p"===e&&t.togglePause()}return window.addEventListener("keypress",n),function(){return window.removeEventListener("keypress",n)}}),[t]);var s=Object(r.useCallback)((function(n){t.changeDelayBetweenMoves(n)}),[t]);if(!u)return Object(A.jsx)(A.Fragment,{});return Object(A.jsxs)(bn,{children:[Object(A.jsx)(jn,{children:"Snake"}),Object(A.jsxs)(pn,{children:[Object(A.jsx)(hn,{children:Object(A.jsx)(Z,{current:u.score})}),Object(A.jsx)(J,{gameState:u})]}),Object(A.jsx)(Q,{onSpeedChange:s}),u.gameOver&&Object(A.jsx)(_,{onNewGameClick:function(){t.destroy(),o(fn({}))},finalScore:u.score})]})};a.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(gn,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.dc8c6214.chunk.js.map