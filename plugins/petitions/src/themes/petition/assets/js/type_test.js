(function(t){function e(e){for(var s,a,c=e[0],o=e[1],u=e[2],m=0,p=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={type_test:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([1,"chunk-vendors"]),n()})({"0052":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAbCAYAAAEyk+xQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA4RDRCNjRDMjk3MDExRUJCN0YwQzU5NDJGQjBCRkVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA4RDRCNjREMjk3MDExRUJCN0YwQzU5NDJGQjBCRkVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDhENEI2NEEyOTcwMTFFQkI3RjBDNTk0MkZCMEJGRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDhENEI2NEIyOTcwMTFFQkI3RjBDNTk0MkZCMEJGRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4CdJ3EAAALNklEQVR42mLsWmzA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"},"0fbc":function(t,e,n){t.exports=n.p+"img/twiter_icon.png"},1:function(t,e,n){t.exports=n("3a59")},1631:function(t,e,n){},2932:function(t,e,n){t.exports=n.p+"img/instar_icon.png"},"2bf0":function(t,e,n){"use strict";var s=n("ac3d"),i=n.n(s);i.a},"2cdb":function(t,e,n){"use strict";var s=n("6a2e"),i=n.n(s);i.a},"3a59":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"quiz-container"},[s("div",{staticClass:"quiz-modal"},[s("div",{staticClass:"header",style:t.headerStyle},[s("img",{attrs:{src:n("6090")}})]),s("div",{staticClass:"quiz-content"},[s("router-view",{attrs:{headerImage:t.headerImage},on:{update:t.headerImageUpdate}})],1)])])])},r=[],a={data:function(){return{headerStyle:{background:"",height:"100px"},headerImage:""}},methods:{headerImageUpdate:function(t){this.headerImage=t.image,this.headerStyle.height=t.height}},watch:{headerImage:function(){this.headerStyle.backgroundImage="url('"+this.headerImage+"')"}}},c=a,o=(n("3cf8"),n("2877")),u=Object(o["a"])(c,i,r,!1,null,null,null),l=u.exports,m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("div",{staticClass:"content"},[n("h3",{staticClass:"title-set title-type-one"},[t._v("2020 서울시 아동참여정책박람회")]),n("h3",{staticClass:"title-set title-type-two"},[t._v("아동을 위한 서울시 만들기")]),t._m(0),n("h3",{staticClass:"title-set title-type-foure"},[t._v("아동권리참여 성향테스트")]),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:"question"}},[t._v("START")])],1),t._m(1)])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"title-set title-type-three title-effect"},[t._v("\n      나는"),n("br"),t._v("\n      어떤 정책가일까?\n    ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center_logo_img"},[s("div",{staticClass:"goodneigbors_logo"},[s("img",{attrs:{src:n("0052")}})]),s("div",[s("img",{attrs:{src:n("c767")}})])])}],A=n("acff"),g={props:["headerImage"],mounted:function(){this.$emit("update",{image:A,height:"200px"})},destroyed:function(){this.$emit("update",{image:"",height:"100px"})}},h=g,d=(n("2bf0"),Object(o["a"])(h,p,b,!1,null,"e70b6f02",null)),E=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.questions.length?n("div",[n("h3",{staticClass:"question_title title-effect"},[t._v("\n      나는 어떤 정책가일까?\n    ")]),n("Progress",{attrs:{numTotal:t.questionCount,numCorrect:t.index+1,totalCount:t.questionCount}}),n("div",{staticClass:"quiz content"},[n("p",{staticClass:"subject",domProps:{innerHTML:t._s(t.currentQuestion.question)}}),n("div",{staticClass:"answers"},t._l(t.currentQuestion.answer,(function(e,s){return n("button",{key:s,staticClass:"answer btn-block",on:{click:function(e){return t.submitAnswer(s)}}},[t._v("\n          "+t._s(e.subject)+"\n        ")])})),0),t._m(0)])],1):t._e()])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center_logo_img"},[s("div",[s("img",{attrs:{src:n("0052")}})]),s("div",[s("img",{attrs:{src:n("c767")}})])])}],C=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"bar",style:t.barClass},[n("div",{staticClass:"progress_tag"},[n("p",[t._v(t._s(t.numCorrect)+" / "+t._s(t.numTotal))])])])])])},I=[],j=n("ad18"),v={mixins:[j["a"]]},R=v,B=(n("6926"),Object(o["a"])(R,w,I,!1,null,"2078a416",null)),M=B.exports,Q=n("2f62"),D=[{question:"새로운 아동정책을 만들고 싶은 나, <span class='subject-bold'>어떻게 할까?</span> ",answer:[{subject:"아동정책의결기구 활동에 직접 참여한다",point:"E"},{subject:"집에서 온라인 신문고에 원하는 내용을 올린다",point:"I"}]},{question:"아동정책회의에 <span class='subject-bold'>뭘 입고 갈까?</span>",answer:[{subject:"전날부터 옷을 다 세팅해둔다",point:"J"},{subject:"출발 직전 마음에 드는 옷을 입는다",point:"P"}]},{question:"아동정책 회의실에 도착한 나, <span class='subject-bold'>어디에 앉을까?</span>",answer:[{subject:"앞쪽이나 가운데 자리",point:"E"},{subject:"뒤쪽이나 구석 자리",point:"I"}]},{question:"아동정책회의에서 <span class='subject-bold'>내 정책에 대해 소개할 때 나는?</span>",answer:[{subject:"이유부터 효과까지 구체적으로 설명한다",point:"S"},{subject:"좋은 점을 강조하여 간단하게 핵심만 설명한다",point:"N"}]},{question:"아동정책을 <span class='subject-bold'>만들 때 나는?</span>",answer:[{subject:"정책에 필요한 요소들을 차근차근 떠올려본다",point:"J"},{subject:"회의 직전 아이디어를 마구 떠올려본다",point:"P"}]},{question:"내가 낸 의견에 팀원들이 <span class='subject-bold'>반응하지 않을 때 나는?</span>",answer:[{subject:"아랑곳하지 않고 내 정책에 대해 생각한다",point:"T"},{subject:"괜히 별로인 것처럼 느껴진다",point:"F"}]},{question:"아동정책 회의 중 안타까운 <span class='subject-bold'>뉴스를 보았을 때 나는?</span>",answer:[{subject:"어떤 정책을 만들어서 해결할 수 있을까?",point:"T"},{subject:"너무 안타깝다.. 왜 도와줄 수 있는 정책이 없는 거야?",point:"F"}]},{question:"두 가지 아동정책 중 하나를 <span class='subject-bold'> 골라야 할 때, 중요한 것은?</span>",answer:[{subject:"과거를 바탕으로, 현실적인 장단점을 따져야 한다",point:"S"},{subject:"미래의 아동이 살아갈 환경을 상상해 보아야 한다",point:"N"}]},{question:"아동정책에 대해 <span class='subject-bold'> 회의할 때 중요한 것은?</span>",answer:[{subject:"모두가 참여하여 정책을 정하는 것",point:"P"},{subject:"우리가 정한 정책의 내용과 결과",point:"J"}]},{question:"다른 아동정책 <span class='subject-bold'>팀과 만났을 때 나는?</span>",answer:[{subject:"자연스럽게 웃으며 정책에 대해 이야기한다",point:"E"},{subject:"우리 팀원을 찾아 떠난다",point:"I"}]},{question:"의견을 말하지 못한 팀원이 <span class='subject-bold'>우울하다고 말했을 때 나는?</span>",answer:[{subject:"못해서 그런 게 아니라고 위로해주고 토닥여준다",point:"F"},{subject:"다음 회의 때 낼 아이디어에 대해 함께 생각해본다",point:"T"}]},{question:"팀원들에게 줄 <span class='subject-bold'>선물을 고를 때 나는?</span>",answer:[{subject:"요즘 대세인 신상 아이템 선물",point:"N"},{subject:"팀원들에게 가장 필요한 것 같은 선물",point:"S"}]}];function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(C["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T=1e3,k={name:"Question",components:{Progress:M},data:function(){return{index:0,selectedAnswer:null,shuffledAnswers:[],submitted:!1,time:30*T,counting:!1}},mounted:function(){this.$store.commit("UPDATE_QUESTIONS",D),this.$store.dispatch("resetDefault")},computed:O({questionCount:function(){return this.questions.length},currentQuestion:function(){return this.questions[this.index]},questionNumberTitle:function(){return"Q"+(this.index+1)}},Object(Q["b"])(["questions","numTotal","numCorrect"])),watch:{currentQuestion:{immediate:!0,handler:function(){this.questions.length&&(this.selectedAnswer=null,this.submitted=!1)}}},methods:{increment:function(t){t&&this.$store.dispatch("incrementNumCorrect"),this.$store.dispatch("incrementNumTotal")},next:function(){this.index++},submitAnswer:function(t){var e=!0;this.$store.commit("ADD_ANSWER",this.currentQuestion.answer[t].point),this.selectedAnswer=t,this.submitted=!0,this.increment(e),this.nextQuestion()},nextQuestion:function(){this.index<this.questionCount-1?this.next():this.$router.push("/result/"+this.$store.getters.type)}}},N=k,G=(n("2cdb"),n("73ce"),Object(o["a"])(N,f,y,!1,null,"b2bf0d16",null)),J=G.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"result-container"},[t.currentType?n("div",{staticClass:"content"},[n("h4",{staticClass:"question_title title-effect"},[n("span",[t._v("나의 아동권리참여 성향은")]),n("h2",[t._v(t._s(t.currentType.type_summary))])]),n("img",{attrs:{src:t.imageSrc,alt:t.currentType.type}}),n("h4",{staticClass:"feature"},[t._v(t._s(t.currentType.feature))]),n("p",{staticClass:"comment"},[t._v(t._s(t.currentType.comment))]),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:"/"}},[t._v("테스트 다시하기")])],1),t._m(0)]):t._e()])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon_content"},[s("div",{staticClass:"box"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:n("ad67")}})])]),s("div",{staticClass:"box"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:n("cddc")}})])]),s("div",{staticClass:"box"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:n("2932")}})])]),s("div",{staticClass:"box"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:n("0fbc")}})])]),s("div",{staticClass:"box"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:n("8913")}})])])])}],H=(n("7514"),[{type:"ISTJ",type_summary:"소금형(청렴결백 논리주의자)",title:"끈질긴 마이웨이러 하마",image:"",feature:"한 번 추진한 정책은 끝까지 해낸다!",comment:"현실감각이 뛰어나고 계획적인 당신! 명확한 논리로 객관적이고 청렴한 정책을 만들어낼 수 있어요!"},{type:"ISFJ",type_summary:"권력형(용감한 수호자)",title:"성실한 사슴",image:"",feature:"우리 팀의 정책에 성실히 협조한다!",comment:"계획적인 일을 선호하는 당신! 타고난 친절함으로 팀원들의 감정을 잘 캐치하여 완벽한 팀워크의 정책을 만들어낼 수 있어요!"},{type:"INFJ",type_summary:"예언자형(선한 옹호자)",title:"한치 두치 세치 앞까지 보는 예언가 기린",image:"",feature:"넓고 뛰어난 통찰력의 정책을 만든다!",comment:"겉으로는 이성적인 것 같지만 속으로는 소통을 갈망하는 당신! 넓은 시야로 섬세하고 완벽한 정책을 만들어낼 수 있어요!"},{type:"INTJ",type_summary:"과학자형(용의주도한 전략가형)",title:"전략가 호랑이",image:"",feature:"전체를 조합해 정책의 비전을 제시한다!",comment:"독립적이고 이성적이며 목표 지향적인 당신! 정책을 객관적으로 판단하여 눈에 보이는 성취를 이루어낼 수 있어요!"},{type:"ISTP",type_summary:"백과사전형(만능 재주꾼)",title:"논리적인 고양이",image:"",feature:"논리적이고 상황에 적용할 수 있는 정책을 만든다!",comment:"자기주장이 강하고 효율성을 중요시하는 당신! 융통성있고 변화하는 상황을 잘 반영한 정책을 만들어낼 수 있어요!"},{type:"ISFP",type_summary:"성인군자형(호기심 많은 예술가)",title:"감성적인 양",image:"",feature:"사람을 향한 따뜻한 감성의 정책을 만든다!",comment:"감성적이고 예술적인 당신! 무궁무진한 생각과 아이디어로 아무도 생각하지 못한 정책을 만들어낼 수 있어요!"},{type:"INFP",type_summary:"잔다르크형(열정 가진 중재자)",title:"이상적인 토끼",image:"",feature:"세상을 위한 이상적인 정책을 만든다!",comment:"관대하고 이해심 많은 당신! 팀원들의 숨은 의도를 파악하여 모두가 만족하는 정책을 만들어낼 수 있어요!"},{type:"INTP",type_summary:"아이디어형(논리적인 사색가)",title:"비판적 부엉이",image:"",feature:"정책을 비평적인 관점으로 바라보고 전략을 세운다!",comment:"자기 주관이 뚜렷한 당신! 논리정연한 생각과 타고난 지능으로 깊은 정책을 만들어낼 수 있어요!"},{type:"ESTP",type_summary:"활동가형(모험을 즐기는 사업가)",title:"다양한 얼룩말",image:"",feature:"다양한 곳에 필요한 정책을 만든다!",comment:"즉흥적인 경쟁과 스릴을 즐기는 당신! 갈등이 발생하여도 전략적으로 정책을 추진해나갈 수 있어요!"},{type:"ESFP",type_summary:"사교형(자유로운 영혼의 연예인)",title:"분위기 업 ! 젖소",image:"",feature:"분위기를 고조시켜 팀원들의 정책 아이디어를 모은다!",comment:"계획적인 일을 선호하는 당신! 타고난 친절함으로 팀원들의 감정을 잘 캐치하여 완벽한 팀워크의 정책을 만들어낼 수 있어요!"},{type:"ENFP",type_summary:"스파크형(재기발랄한 활동가)",title:"열정적 코끼리",image:"",feature:"열정적으로 새 정책을 추진한다!",comment:"긍정적이고 낙천적인 성격으로 새로운 인간관계를 즐기는 당신! 다양한 사람들과 함께 활용도 높은 정책을 만들어낼 수 있어요!"},{type:"ENTP",type_summary:"발명가형(논쟁을 즐기는 변론가)",title:"상상력 풍부 앵무새",image:"",feature:"풍부한 상상력으로 새로운 정책에 도전한다!",comment:"일단 행동으로 실천하고 보는 당신! 아무도 생각하지 못하는 재미있고 톡톡 튀는 정책 아이디어를 만들어낼 수 있어요!"},{type:"ESTJ",type_summary:"사업가형(엄격한 관리자)",title:"현실적 곰",image:"",feature:"사무적, 실용적, 현실적인 정책을 만든다!",comment:"현실적이고 직설적인 화법을 갖고 있는 당신! 상황을 분석하고 객관적으로 판단하여 이성적인 정책을 만들어낼 수 있어요!"},{type:"ESFJ",type_summary:"친선도모형(사교적인 외교관)",title:"봉사 정신 투철 말",image:"",feature:"타인에게 봉사할 수 있는 정책을 실현한다!",comment:"대화에 뛰어나고 사람을 잘 챙기는 당신! 타고난 공감능력으로 사회에 꼭 필요한 정책을 만들어낼 수 있어요!"},{type:"ENFJ",type_summary:"언변능숙형(정의로운 사회운동가)",title:"협동심이 강한 개",image:"",feature:"팀원들의 성장을 도모하고 협동하여 정책을 만든다!",comment:"사람들과 어울리는 것을 즐기고 센스있는 당신! 팀원들의 의도를 정확히 파악하여 모두가 함께하는 정책을 만들어낼 수 있어요!"},{type:"ENTJ",type_summary:"지도자형(대담한 통솔자)",title:"지도 인도에 강한 사자",image:"",feature:"정책이 가진 비전을 향해 팀원들을 인도한다!",comment:"끈기과 책임감이 넘치고 리더의 자리를 좋아하는 당신! 여러가지 상황을 판단하고 분석하여 치밀한 정책을 만들어낼 수 있어요!"}]);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Object(C["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={props:["type"],data:function(){return{types:H,showWrongAnswer:!1}},computed:Z(Z({},Object(Q["b"])(["numCorrect","numTotal","answers"])),{},{score:function(){return 0===this.numCorrect?0:this.numCorrect/this.numTotal*100},currentType:function(){var t=this;return this.types.find((function(e){return e.type.toUpperCase()===t.type.toUpperCase()}))},imageSrc:function(){return"/src/assets/character_"+this.type.toLowerCase()+".png"}}),mounted:function(){this.currentType||this.$router.push("/")},methods:{}},Y=x,L=(n("592b"),Object(o["a"])(Y,P,U,!1,null,"88c31330",null)),W=L.exports,V=n("be4d");s["a"].use(m["a"]);var z=new m["a"]({base:"type_test",mode:"history",routes:[{path:"/",component:E,props:!0},{path:"/question",component:J},{path:"/result",redirect:"/"},{path:"/result/:type",component:W,props:!0},{path:"*",component:V["a"]}]});s["a"].use(Q["a"]);var X={questions:[],numCorrect:0,numTotal:0,answers:{I:0,E:0,S:0,N:0,T:0,F:0,J:0,P:0}},K={UPDATE_QUESTIONS:function(t,e){t.questions=e},UPDATE_NUM_CORRECT:function(t){t.numCorrect++},UPDATE_NUM_TOTAL:function(t){t.numTotal++},RESET_DEFAULT:function(t){t.numTotal=0,t.numCorrect=0,t.answers={I:0,E:0,S:0,N:0,T:0,F:0,J:0,P:0}},ADD_ANSWER:function(t,e){t.answers[e]++}},q={incrementNumCorrect:function(t){var e=t.commit;e("UPDATE_NUM_CORRECT")},incrementNumTotal:function(t){var e=t.commit;e("UPDATE_NUM_TOTAL")},resetDefault:function(t){var e=t.commit;e("RESET_DEFAULT")}},_={questions:function(t){return t.questions},numCorrect:function(t){return t.numCorrect},numTotal:function(t){return t.numTotal},answers:function(t){return t.answers},type:function(t){var e="";return e+=t.answers["I"]>t.answers["E"]?"I":"E",e+=t.answers["S"]>t.answers["N"]?"S":"N",e+=t.answers["T"]>t.answers["F"]?"T":"F",e+=t.answers["J"]>t.answers["P"]?"J":"P",e}},$=new Q["a"].Store({state:X,mutations:K,actions:q,getters:_}),tt=n("407d"),et=n.n(tt);s["a"].component(et.a.name,et.a),s["a"].config.productionTip=!1,new s["a"]({router:z,store:$,render:function(t){return t(l)}}).$mount("#app")},"3cf8":function(t,e,n){"use strict";var s=n("ab5e"),i=n.n(s);i.a},"592b":function(t,e,n){"use strict";var s=n("1631"),i=n.n(s);i.a},6090:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAAGgZBxZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCQUY5QThGMkEwNjExRUJBMDY5QTQ0QkRERkM4NkUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCQUY5QTkwMkEwNjExRUJBMDY5QTQ0QkRERkM4NkUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkJBRjlBOEQyQTA2MTFFQkEwNjlBNDRCRERGQzg2RTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkJBRjlBOEUyQTA2MTFFQkEwNjlBNDRCRERGQzg2RTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oHaZkAAAAuklEQVR42mJkYGCYAMQBDEQDgABiBOIHSHxmwloAAogoM2WBWBefomdA/B8XBgggkAkPoRwqApCx3mQZy4hPF0AAgSR9gNiNYSDAEXwBSQAPEAAIIFCAPQbiv2To284CJNZBOaSCAwxDEzBSEF+nQZo9yQywqyMwwN4CBBhI8xsgFqazoz8xjAJ6JhAJIFaB8v/Tyc57IMZZCopscvHV0Tina+JyAmJHOtt5GFQ3RkJbI//oZDETEMsDAGMsSuyHC7L0AAAAAElFTkSuQmCC"},6926:function(t,e,n){"use strict";var s=n("744a"),i=n.n(s);i.a},"69fb":function(t,e,n){},"6a2e":function(t,e,n){},"6db0":function(t,e,n){"use strict";var s=n("fe7a"),i=n.n(s);i.a},"73ce":function(t,e,n){"use strict";var s=n("69fb"),i=n.n(s);i.a},"744a":function(t,e,n){},"79af":function(t,e,n){"use strict";var s=n("97d3"),i=n.n(s);i.a},8913:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAAHfgQuIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY0QTI1RDhEMkE0NDExRUI5QUJBRkE0RURFRTlGRENDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY0QTI1RDhFMkE0NDExRUI5QUJBRkE0RURFRTlGRENDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjRBMjVEOEIyQTQ0MTFFQjlBQkFGQTRFREVFOUZEQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjRBMjVEOEMyQTQ0MTFFQjlBQkFGQTRFREVFOUZEQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zaijAAAL5UlEQVR42mL8uV+I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"},"97d3":function(t,e,n){},ab5e:function(t,e,n){},ac3d:function(t,e,n){},acff:function(t,e,n){t.exports=n.p+"img/header_right_img.png"},ad18:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"bar",style:t.barClass})])])},i=[],r={name:"Progress",props:["numCorrect","numTotal","totalCount"],computed:{barClass:function(){var t="bar",e=this.numTotal/this.totalCount*100;return t="width:".concat(e,"%"),t}}},a=r,c=(n("79af"),n("2877")),o=Object(c["a"])(a,s,i,!1,null,"39654934",null);e["a"]=o.exports},ad67:function(t,e,n){t.exports=n.p+"img/facebook_icon.png"},be4d:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Opssssss.. Page not found")]),n("p",[t._v("\n    Click\n    "),n("router-link",{attrs:{to:"/"}},[t._v("-Here-")]),t._v("to go back to the home page\n  ")],1)])},i=[],r=(n("6db0"),n("2877")),a={},c=Object(r["a"])(a,s,i,!1,null,"2e6ef7a7",null);e["a"]=c.exports},c767:function(t,e,n){t.exports=n.p+"img/seoul_logo.png"},cddc:function(t,e,n){t.exports=n.p+"img/kakao_icon.png"},fe7a:function(t,e,n){}});