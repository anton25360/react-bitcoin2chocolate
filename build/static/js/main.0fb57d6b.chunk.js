(this["webpackJsonpreact-bitcoin2chocolate"]=this["webpackJsonpreact-bitcoin2chocolate"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),o=n.n(i),r=(n(13),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),h=(n(14),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={coinPrice:"Loading...",numOfFredos:"Loading..."},n.getPrice(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getPrice()}),5e3)}},{key:"getPrice",value:function(){var e=this,t=this.props.coin;fetch("https://api.coingecko.com/api/v3/simple/price?ids="+t+"&vs_currencies=gbp").then((function(e){return e.json()})).then((function(n){var a=parseFloat(n[t].gbp).toFixed(2),c=parseFloat(a/.3).toFixed(0);e.setState({coinPrice:"\xa3"+a,numOfFredos:c})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"BPcontainer"},c.a.createElement("h1",null,this.props.title," -> ",this.state.coinPrice),c.a.createElement("h1",null,"You can buy ",this.state.numOfFredos," Freddo's"))}}]),t}(c.a.Component)),d=(n(15),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"HeaderContainer"},c.a.createElement("h1",null,"Crypto To Freddo"))}}]),t}(c.a.Component)),p=(n(16),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"FooterContainer"},c.a.createElement("div",{className:"footerText"},"Powered by CoinGecko API"),c.a.createElement("div",{className:"footerText"},"Made by Anton Webb"))}}]),t}(c.a.Component));n(17);var f=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"appBody"},c.a.createElement(d,null),c.a.createElement(h,{coin:"bitcoin",title:"Bitcoin"}),c.a.createElement(h,{coin:"ethereum",title:"Ethereum"}),c.a.createElement(h,{coin:"ripple",title:"XRP"}),c.a.createElement(h,{coin:"tether",title:"Tether"}),c.a.createElement(h,{coin:"bitcoin-cash",title:"Bitcoin Cash"}),c.a.createElement(h,{coin:"litecoin",title:"Litecoin"}),c.a.createElement(h,{coin:"eos",title:"EOS"}),c.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0fb57d6b.chunk.js.map