(this["webpackJsonpreact-searchbar-awesome-page"]=this["webpackJsonpreact-searchbar-awesome-page"]||[]).push([[0],{19:function(a,e,n){a.exports=n(30)},24:function(a,e,n){},30:function(a,e,n){"use strict";n.r(e);var i=n(0),t=n.n(i),r=n(14),o=n.n(r),b=(n(24),n(18)),m=n(15),s=n.n(m),l=function(){return t.a.createElement("div",{style:{marginTop:"1rem",fontSize:"1rem"}},t.a.createElement("p",null,"Searchbar navigable with Ctrl+J and Ctrl+K."),t.a.createElement("p",null,"Stops at the edges if the shortcut is being held down (press and hold)."),t.a.createElement("p",null,"Starts over if not."))},v=function(){return t.a.createElement("a",{href:"https://github.com/axmz/react-searchbar-awesome"},t.a.createElement("div",{style:{position:"absolute",right:"0",bottom:"0",fill:"white",padding:"1rem",fontSize:"0.5em",color:"white"}},"github"))},c=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],u=n(5);var h=function(){var a=Object(u.d)(),e=Object(i.useState)([]),n=Object(b.a)(e,2),r=n[0],o=n[1];return t.a.createElement("div",{className:"App",onClick:function(a){a.target.closest(".ReactSearchbarAwesome")||o([])}},t.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"10rem"}},t.a.createElement(s.a,{data:r,mapping:{title:"name"},style:{width:"calc(80% + (100vw - 100%))",color:"#333",backgroundColor:"white",fontSize:"2.5rem",position:"absolute",top:"3rem",boxShadow:"0 0 28px 2px rgba(0,0,0,0.1)",border:"none",overflow:"hidden"},activeStyle:{backgroundColor:"pink"},placeholder:"Search for states...",shortcuts:!0,onEnter:function(e){var n=JSON.parse(e.target.dataset.searchitem);a.push(n.name)},onInput:function(a){var e=a.target.value.toLowerCase();if(0===e.length)o([]);else{var n=c.filter((function(a){return a.name.toLowerCase().includes(e)}));o(n)}},onClick:function(e){var n=JSON.parse(e.target.dataset.searchitem);a.push(n.name)},onEsc:function(a){console.log("Escape pressed")}})),t.a.createElement(l,null),t.a.createElement(v,null))},d=n(9);o.a.render(t.a.createElement(d.a,null,t.a.createElement(h,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d26a4207.chunk.js.map