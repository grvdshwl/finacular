(this.webpackJsonpfinacular=this.webpackJsonpfinacular||[]).push([[0],{156:function(t,e,A){"use strict";A.r(e);var a=A(4),n=A(41),s=A.n(n),c=(A(51),A(42)),i=A(43),r=A(46),l=A(45),o=(A(52),A(53),A(24)),u=A(0),j=function(t){var e,A=t.array,a=t.status,n=Math.random(),s=[];A.map((function(t){return console.log(t.yearSort),s.push(t)}));var c=s.sort((function(t,e){return t.monthSort-e.monthSort})).sort((function(t,e){return t.yearSort-e.yearSort})),i=c.map((function(t){return t.amountSort})),r=c.map((function(t){return t.month})),l=[0],j=[0];if(i.length>1)for(var p=1;p<i.length;p++){var h=i[p]-i[p-1],m=h/i[p-1]*100;l.push(h),j.push(m.toFixed(2))}for(var b=[],d=0;d<i.length;d++)b.push({amount:i[d],month:r[d],change:l[d],percent:j[d],percentchange:j[d]+" %"});var x=b.map((function(t){return e=Number(t.change)>0?"colorGreen":Number(t.change)<0?"colorRed":"none",Object(u.jsx)("div",{id:"headertitle",children:Object(u.jsxs)("div",{id:"title1",children:[Object(u.jsxs)("span",{className:"valueSpan1",children:[" ",Object(u.jsxs)("h3",{className:"title1",children:[" ",t.month]})," "]}),Object(u.jsxs)("span",{className:"valueSpan2",children:[" ",Object(u.jsxs)("h3",{className:"title1",children:[" ",t.amount]})]}),Object(u.jsxs)("span",{id:e,className:"valueSpan3",children:[" ",Object(u.jsxs)("h3",{className:"title1",children:[" ",t.change]})," "]}),Object(u.jsxs)("span",{id:e,className:"valueSpan4",children:[" ",Object(u.jsxs)("h3",{className:"title1",children:[" ",t.percentchange," "]}),"  "]})]},n)})}));return Object(u.jsxs)("div",{id:"area",children:[x,a?Object(u.jsx)("div",{id:"graph",children:Object(u.jsx)(o.Bar,{data:{labels:r,datasets:[{label:"Networth(\u20b9)",data:i,backgroundColor:"rgba(0,0,255,0.5)",yAxisID:"A"},{type:"line",label:"Change(%)",data:j,borderColor:"red",backgroundColor:"rgba(0,0,0,0)",yAxisID:"B"}]},height:300,width:20,options:{maintainAspectRatio:!1,scales:{yAxes:[{id:"A",type:"linear",position:"left",ticks:{beginAtZero:!0}},{id:"B",type:"linear",position:"right",ticks:{}}]}}})}):Object(u.jsx)("span",{children:" "})]})},p=A(44),h=A.n(p),m={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},b=function(t){Object(r.a)(A,t);var e=Object(l.a)(A);function A(){var t;return Object(c.a)(this,A),(t=e.call(this)).savePdf=function(){t.setState({pdfInput:!1});var e={filename:"Networth-".concat(t.state.name,".pdf"),image:{type:"jpeg",quality:.98},html2canvas:{},jsPDF:{orientation:"landscape"}},A=document.getElementById("App");h()().from(A).set(e).save(),setTimeout(t.showInput,0)},t.showInput=function(){t.setState({pdfInput:!0})},t.calculateValue=function(){var e,A,a,n,s,c=t._inputDate.value.split("-"),i=Number(c[1]),r=c[0],l=t._inputName.value,o=m[i]+"-"+r,u=t._inputAmount.value,j=Number(u).toLocaleString();console.log(c),t.state.portfolioValue?((e=(A=u-t.state.portfolioValue)/t.state.portfolioValue*100).toFixed(2),a=Number(A).toLocaleString(),n=e.toFixed(2)+"%"):(a=0,n=0,A=0);var p=((u-t.state.portfolioValue)/t.state.portfolioValue*100).toFixed(2);s=t.state.portfolioValue?p:0,t.setState({status:!0}),t.setState({month:t.state.month.concat([o])}),t.setState({name:l}),t.setState({portAmount:t.state.portAmount.concat([Number(u)])}),t.setState({portPercent:t.state.portPercent.concat([Number(s)])}),t.setState({finArray:t.state.finArray.concat([{month:o,yearSort:Number(c[0]),monthSort:Number(c[1]),amountSort:u,amount:j,changeinvalue:A,changeinamount:a,changeinpercent:n}])}),t.setState({portfolioValue:u}),t.setState({changeInAmount:a}),t.setState({changeInPercent:n})},t.showChart=function(){t.setState({chartStatus:!0})},t.state={finArray:[],portfolioValue:"",status:!1,chartStatus:!1,month:[],portAmount:[],portPercent:[],name:"dummy",pdfInput:!0},t}return Object(i.a)(A,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{id:"App",className:"App",children:[Object(u.jsx)("span",{id:"finimg",children:Object(u.jsx)("img",{alt:"finacular image",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAG4BCgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/2gAIAQEAAAAA7+AAAAAAAAAAAAPn6AAAAApBeVmAAAAAFMDzx59J5atBWhWgVUFQMTz9lrnXuiMhEWobV74e8lKCpogWQbXZ9XkDZ+YJ/wCe9kn+oIO1PI3OA36Y+VM1sekxVtcixzneqfbk+SI2mrM8fT3ETtP6CnOvn9+1p6dFc7dAxppu183SN8ZbH7zoOLlDQL3J6rI+p9NfQY/nvw9vq0v+g7qoArQKVpWoMRpUV+spbxkKgAAAClr5X6oAAAAAAAAAAAAAAAAAAAAP/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/9oACAECEAAAAAAADRnAANG/z+feOdr8y1OR6yM19t6+bv53nJgTu0Z8EJABMAAAAA//xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/9oACAEDEAAAAAAACaAAJi9lWZoUcisg6RuK6HPKsAAAAAAAf//EADUQAAEEAgIAAgcFCAMAAAAAAAUDBAYHAQIAEQgSEBMUFSAhYRYXMUBBGCIjJDA3UWA4UHH/2gAIAQEAAQwA/wBK2zjHXfMZ/wCgznl+lpcyg66sW0/gUuTlT+CjHEwT8i/nz+fN7qvWZQQJKIti9Oi5vDdJfmwXuqEct0LYUtOQ3MMf43jo1fCOjYY7IJOCXo7xzvneOd455sc7xzvHO/R3jnfO8c7xzvHp7xzvnfO8f0DZoXH2CxQw8TasjFaSAhZgiwo5LM+6pK7jV4ApDEo+e2SIADMTqRjGa6JyDdYpEq6ORKbSSwplLemYksxMj2hMW5TcM88tyy3FbjBbtoL0fONLDulTTTfSqks6mZ9KAFav5ebjabIv946+lT62Juw09op239LIbvmhBui0MSmznsfsuJwhEciq2NlWwIQRMPM9N6mvB3O5A8BlhKTBSVSoREQzo4bcYSasrUtiWabEoZXiXuivbCOSV+SASaJOw5aFWW8lFgzSHrDkkW1ly1xCIcVkjRro4XJ2a9ZVGlYqY1HLyEyNaUxICeWQ1Q32z1ji3iDynY32a91JZASU3iPR8wdyj67AG4rSk47BYDWqDpjEbrXfSVKHTaNLAS+vz+LOe8Z5OyUBnb99VRkvu1JrH29BBYnFHjZ4XQPiAVSA5FYMMAKrkBYWNTscBtqVRxZuS1IIeIuNmBWiTsMnX56BA3qVWxgnu5c454p85wGh2U8YzuylN/8AqWmukCD5SvTZfapDW7rTGi6+Nf2XEs/qMCP4fDoBb0bSz62VHGEkumqDYxbCjTxHSHcfD2sdab/zk9Do1eSqOTjdtPL4iHOhIlVwtZbOAzVu2aN0GzVLRND93vOfljNRZxi8bW54gs4+6uQcP/8AF5pynf7ZQzlgyPSLQ88d2363Rg/raDdSHbOvvdWSayyiSBrz4yrTlxxSGQhsDLNie7nYqveNpRgrHBS7UPj4nivs7Vdfy52xGla4tQ8lKkBKjOTR89IUd5M1ucax0Eim8rjcpmchl8gbOYI+ZywpOQsuHyVo2r8mbk65aGDqjFssRYk5ran5DlyzELu5ImpnfTXPXWPEPGT0lGRTQGMWebs9Nk2jZPfHW10iSRyujw0SzUcu14yez4ek4zgarktWEaWSqwNHJGOynsAqeYRq3wTfVi5cA59AjlkW4xYlWjxtGJf4cQ2kdKLBCZp2T1r0pYtPx0TIUFB0hDz+24czSBSevXplaAkLVPn3ZuVsURACVQ+bwOxXdjQgV71Yy59aFwN20VawlwBF2BB3mafdQuNt9nS8RllsRWNh46nVLhfW2W87nUUhodGMOWimvhriHsuEcnD3UDikyEQW1IO8EOfVUXGngWvWLI+J9neDolIq/uD2uNjFl4vj4jSxJEWRcim2rh8Veg5SAcMZWyVg5+Q4SURjlVWI3dkUXbJoo/aUeQBOlI42YoSBxIKW0AumUZCq+9g8krqvNHQIUPKDAAAUhAhCkzMDtnW7Noq/Rwm66+nMf+c67/HHM6/TnX055e8/LHPL6PLzrH+OY1751+Py51jOPw519OeXrHOsf451zr6c8v6dc8v0518ZcEJPtFB5pgg8auI6ZDGCBZsSUfgmSKP2NzFcSl8sgTcIOo6HaJyQjoyRipMqa3JFCOUgYwUODtEmItmi1a/nescdDB62W/bXTPGoti018iDVPXHWOdf7/wD/xAA+EAACAQMDAgIECwQLAAAAAAABAgMABBEFEiETMSJBFCNRcQYQFSAkMkBDUmGRYqGztDBCUGBwc4GSk7Gy/9oACAEBAA0/AP72O5S/nhPrYYP2a4S1kkOJZoMDYzj+wJLRzCxwzRFwQshXvjNWzy7xeneHlJy8qE/dmp3hltpbU7UgmXxCWUjuoHK1DbRGfBAdjjaZNnkGI+3Q43yycAbjgVclJbmUSgmKBBnYnk0b1p1xlfFtSVo+AxA+vEaujguzbhC8vYnP1EzwtRGYRytKAJoG5BmzwFHktXMYkilQ8Mp+K+uzAiO5RRgZpgCPpNQHAsnl3py4UMStHThcejA+Dqk7P9uatCHaKInbJEf66ZrVEUzTOTvUyEgbas7eSeT3IM08DXNiUJ9ZGp5B3VAPezseyKPMmvupr6Qq0o9o5WrKNZJCVJt3U/hY1o+7ozKSXfY+w7qthEI45CQhMjhOcU9rDILcsemHlkEdX1qkzxqSQpPxLqI05r7J3iYnbu9mM1Y2klx0843bBnFO7osq3HmlT8W+85jkJ7Dn+gAiliYNsHWYZVQTwzDzU1eTym8usMURHOMRA/8AitRRCqMuY7RJOSxXgqlWVk80sGzKz9Eblk2d3HmlafqkbwTYJjlg9j+RerC2eZ3LB0Zw2HXf+PzIHxDVHwPz2VsQBjMeV/5KKWxlRTkK+8ZANfJS/wAarVWh1aFO0sBlI3Gry2tZUPvd+DWuXaW6qO5iQgtWmxx6femMjxfiJx+IM1X98zzsD4SC0aj9zGokCRogAVVXgAAfF9I/mBW+2/jLXoVn/NLXyfHVtav0v81/Cn7zTX51oHI39NTs/wCstUmhSpP+UsS7HpLmeQm3tupHhzXwfkiknu51CuQkgkwdue+MAfPjjZ9qjJO0ZwK0WYPNDKOlufkIZfJ60++ims724QGPqyyerSLyYLVzbG5V5cSROr8IkaeWBVnpy3CMjAQNCww8bp2JIq6cXtxdwrthcCTEscn4a165MyJCnUdEnkw2w9lTNFc4qDVcyrCMlFde5pIkU+8CnEbJDGMu21wTihpSj0T73dv37aks5Yrm2mHIWVjwRVhf9a3vTzCtty9afYeG8hO0FiN52McjcWqGAyWsNxcLIjuvljbWnxn0Z5xhlaIlF3/k61bKIor6zJbqqOxcgNRh2W+mEAzF/Jia1EH06xQ+PxAbqeVHvLm+PfbVvbWkcKZAaToyq7VYW4gEpn2l8VqV+H1OJCJPRgnC7yPI5zWzaU9KXZ+myk640x3HFwZAQQn6A0bm4cxzxgSBGfjNfCHJu1jHq7Z+5J9mD8+OB2t4XbajyAeFSfLNapepB18bTNcWwDo3UGNyeKtQto1ttfiUn6cSQv6CvkVXg1Ut4+rFyZs9gBWm6bCkeog+Iz7gwf2EPWkL0n1yUFQ86Pice8itPnl0xL5gPVOQJnJlI4TLU0CNMinIWQjxKD5gH7Y/eOZAwowSSnSZIw0sM0aYQ2j+WfYa+FN5d2mj3kkJEtl4dxtpyec7wVNfBnVYtOvujCTcatd2yqUiiI/bGKaBhFo0MYjV2uI8StcsOXbk1GMJFCgRR/oPt8E/pCHb2l58Xv5ozvcfV+9kOWf3nP8AgD//xAAsEQACAQMCBQMCBwAAAAAAAAABAgMABBESIRMiMUFxFDKBEEAFMDNRUmGx/9oACAECAQE/APtDbN6YXGtd206c7/YW8SuSzvoABKkjIJHauI/EM/DHqOhi0bBce6riJUYGN9akDLAYAJ7VFG80ixxjLHpTWkqsq5QliFADA7mvSTiOWXRyxtpbzTQyLwsj9QZWpLaaKUQunOcYA3zmpLOaJSzFNuoDAkUbeUSpCV5204HmnglRS7LgBynyKht5p9fCXOkZNRWssyNImkKDgliBv81NDJAwWQdRkdwR9epAoKFUQ6WKKAXjY4JY7ZWt+nE58ZMuTkjHs806BkMQDBWBaONTkg9y1fh5CXkTMQACc58VHMj3cB4aIBIMkeaFysUU3MGDXTal/dTTi2E9oeKDFFCWz/goT25NtPxtRRmRiRg824PxUlpImt2lQqNwdQOqiqy3NtdrIgjCoWywBGkU4FzauI3XPqGfDMBsatXhtYE4k2l2lydI1cq9qc20UN0jc6GcMoVsHBFXzo3AEWOEIxp3yR5+oOCDUdwpwNwRkgZ6H+jXz367+7+VSXKDYDVk5Iz1PfJrqT+fqbpk4+//AP/EACQRAAICAQMEAgMAAAAAAAAAAAERAAIhEjFRICJAQWGRMkJQ/9oACAEDAQE/APE1d2levAsVsHEFpeOZUk7hQlBmaxNdWBzBYF/EFgQwcQXBKDmoIn0ILA7cOGwCcNgCvcrYW26Pb+jPlY4g5+zL5oYaqhyTiGjI504g1K+CyYrDVUDcOCwKxGq2BGYO2wY/WWBtYqrCgZNFgqUH5Pd56DWCCp/n/wD/2Q=="})}),this.state.pdfInput?Object(u.jsxs)("div",{id:"inputform",children:[Object(u.jsxs)("span",{className:"input",children:[" Name : ",Object(u.jsx)("input",{type:"text",ref:function(e){return t._inputName=e}})," "]}),Object(u.jsxs)("span",{className:"input",children:[" Month : ",Object(u.jsx)("input",{type:"month",ref:function(e){return t._inputDate=e}})," "]}),Object(u.jsxs)("span",{className:"input",children:[" Networth(\u20b9) : ",Object(u.jsx)("input",{type:"number",ref:function(e){return t._inputAmount=e}})," "]}),Object(u.jsx)("input",{className:"btn",type:"button",Value:"Enter",onClick:this.calculateValue}),Object(u.jsx)("input",{className:"btn2",type:"button",Value:"Graph",onClick:this.showChart}),Object(u.jsx)("input",{className:"btn3",type:"button",Value:"Save",onClick:this.savePdf})]}):Object(u.jsx)("span",{children:" "}),Object(u.jsxs)("div",{id:"pdf",children:[this.state.status?Object(u.jsxs)("h2",{children:[" Client Name : ",Object(u.jsxs)("strong",{id:"clientname",children:[this.state.name," "]})]}):Object(u.jsx)("span",{}),Object(u.jsx)("div",{id:"titleHeader",children:Object(u.jsxs)("div",{id:"titleContainer",children:[Object(u.jsxs)("h3",{className:"title",children:[" ",Object(u.jsx)("span",{className:"titleSpan1",children:" Month "})," "]}),Object(u.jsxs)("h3",{className:"title",children:[" ",Object(u.jsx)("span",{className:"titleSpan2",children:" Networth(\u20b9)  "})," "]}),Object(u.jsxs)("h3",{className:"title",children:[" ",Object(u.jsx)("span",{className:"titleSpan3",children:"  Change (\u20b9) "})," "]}),Object(u.jsxs)("h3",{className:"title",children:[" ",Object(u.jsx)("span",{className:"titleSpan4",children:"  Change(%)  "})," "]})]})}),this.state.status?Object(u.jsx)(j,{status:this.state.chartStatus,array:this.state.finArray}):Object(u.jsx)("span",{children:" "})]})]})}}]),A}(a.Component);s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))},51:function(t,e,A){},52:function(t,e,A){},53:function(t,e,A){}},[[156,1,2]]]);
//# sourceMappingURL=main.c6270032.chunk.js.map