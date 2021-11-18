(this["webpackJsonpreflection.tools"]=this["webpackJsonpreflection.tools"]||[]).push([[0],{173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(57),o=n.n(s),c=(n(65),n(2)),i=n(60),d=n(1),l={"0xfbab1d829e36efbd13642229eae2964004f38c41":"Evergrow","0x9aacfd4ff2a965779cff25e370b89b788222e6b9":"Crypter","0xfdac78ff52dead5a5f0b89b32a8ea66a01979f31":"Reflecto","0xdedf5fa8ec49255bc2c7bfadcd18be2c0d228f99":"Reflecto","0x7bda2f125b0e63bb332e1e6342be381e28efaeb6":"Reflecto","0xd93a7af8d6292030947b13dd2942a8d2baca649b":"Santa Coin","0x62c73478676848b96b729a3f2e25412735154df0":"Corsac"},u=Object.values(l).filter((function(e,t,n){return n.indexOf(e)===t})),h=u.reduce((function(e,t,n){return e[t]="hsl(".concat(n/u.length*270," 100% 50%)"),e}),{});function f(){var e=Object(a.useState)((function(){return window.location.hash.replace("#","")||localStorage.getItem("walletAddress")||""})),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(n),o=Object(c.a)(s,2),f=o[0],b=o[1],j=Object(a.useState)(n),p=Object(c.a)(j,2),g=p[0],y=p[1],O=Object(a.useState)(),m=Object(c.a)(O,2),v=m[0],x=m[1],w=Object(a.useState)(!1),k=Object(c.a)(w,2),S=k[0],q=k[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){b(n.trim())}),500);return localStorage.setItem("walletAddress",n),function(){clearTimeout(e)}}),[n]),Object(a.useEffect)((function(){return window.location.hash=f,""===f?(window.gtag("event","empty-wallet-address"),q(!1),x(!1),void y(null)):f.match(/^0x[A-Za-z0-9]{40}$/)?(window.gtag("event","lookup-wallet-address"),q(!0),x(!1),void fetch("https://graphql.bitquery.io/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n  query ($address: String!) {\n    ethereum(network: bsc) {\n      transfers(receiver: {is: $address}) {\n        amount\n        currency {\n          name\n          symbol\n          tokenId\n          tokenType\n          decimals\n          address\n        }\n        date {\n          date\n        }\n        transaction {\n          hash\n          txFrom {\n            address\n          }\n        }\n        sender {\n          address\n          annotation\n          smartContract {\n            currency {\n              name\n            }\n            contractType\n          }\n        }\n        receiver {\n          address\n        }\n      }\n    }\n  }\n",variables:JSON.stringify({address:f})})}).then((function(e){return e.json()})).then((function(e){if(q(!1),e.errors)return x(e.errors),void y(null);var t=[],n=e.data.ethereum.transfers.reduce((function(e,n){var a=l[n.sender.address];if(!a)return e;var r=n.date.date,s=n.currency.symbol;return e[r]=e[r]||{},e[r][s]=e[r][s]||{},e[r][s][a]=e[r][s][a]||0,e[r][s][a]+=n.amount,t.includes(s)||t.push(s),e}),{}),a={};t.forEach((function(e){var t=a[e]={labels:[],datasets:{}};Object.entries(n).forEach((function(e){var n=Object(c.a)(e,2),a=n[0];n[1];t.labels.push(a)})),u.forEach((function(e){t.datasets[e]={label:e,backgroundColor:h[e],data:[]}}))})),Object.entries(n).forEach((function(e){var n=Object(c.a)(e,2),r=(n[0],n[1]);t.forEach((function(e){u.forEach((function(t){var n;a[e].datasets[t].data.push((null===(n=r[e])||void 0===n?void 0:n[t])||0)}))}))})),t.forEach((function(e){var t=a[e];t.datasets=Object.values(t.datasets).filter((function(e){return e.data.reduce((function(e,t){return e+t}),0)>0}))})),y(a)}))):(x("Invalid wallet address."),q(!1),y(null),void window.gtag("event","invalid-wallet-address"))}),[f]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Enter your wallet address"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("div",{style:{maxWidth:600,margin:"auto",padding:20},children:""===f?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["This tool will fetch data about reflective tokens (",u.join(", "),"), and display how much you're eaching from and in each token in a single place."]}),Object(d.jsx)("p",{children:"When you enter in your address, your browser makes a graphql query directly to https://graphql.bitquery.io/ to fetch all of your transactions, which are then processed into very pretty graphs for your viewing pleasure. Data may or may not be up-to-date - that entirely depends on bitquery."}),Object(d.jsx)("p",{children:"There's a good chance this tool might break sometime. It's just been hacked together in a few hours so far, and is not using any API key for Bitquery, so they could block this if we end up sending too many requests."}),Object(d.jsxs)("p",{children:["Feel free to log any issues ",Object(d.jsx)("a",{href:"https://github.com/joelcox22/reflection.tools/issues",target:"_blank",rel:"noreferrer",children:"in Github Issues"}),". ",Object(d.jsx)("a",{href:"https://github.com/joelcox22/reflection.tools",target:"_blank",rel:"noreferrer",children:"Full source code is available there too"}),"."]}),Object(d.jsx)("p",{children:"Google analytics is setup purely so I can see how many people use this and if it's worth continuing development. Cookies are disabled - it's only interaction events with the page being logged."}),Object(d.jsx)("p",{children:"Pull requests are welcome if anyone wants to help out or add more tokens."}),Object(d.jsx)("p",{children:"I'd love to find a way to also fetch and display pending rewards from all of these tokens - if anyone knows how, please let me know via a Github Issue or something."})]}):v?Object(d.jsx)("pre",{children:JSON.stringify(v,null,4)}):S?Object(d.jsx)("p",{children:"Loading..."}):g&&Object.entries(g).map((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)(i.a,{data:r,width:100,height:50,options:{scales:{x:{stacked:!0},y:{stacked:!0}}}})]},n+f)}))})]})}n(173);var b=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:"Crypto Reflections"})}),Object(d.jsx)(f,{})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),j()},65:function(e,t,n){}},[[174,1,2]]]);
//# sourceMappingURL=main.d0035552.chunk.js.map