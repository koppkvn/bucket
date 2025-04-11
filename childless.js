(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();gsap.registerPlugin(SplitText,ScrollTrigger,DrawSVGPlugin);function g(e=0){document.querySelector("section.is--legal")&&document.fonts.ready.then(()=>{const t=gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}});t.fromTo("section.is--legal h1",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},0),t.fromTo("section.is--legal .impressum-wrapper",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.1)})}function f(){if(!document.querySelector("#select-row"))return;const e=document.getElementById("select-row"),t=document.querySelectorAll('input[name="AnfrageTyp"]'),s=new URLSearchParams(window.location.search).get("preset");if(s==="1"){const o=document.querySelector('input[name="AnfrageTyp"][value="Beratungsgespräch"]');o&&(o.checked=!0)}else if(s==="2"){const o=document.querySelector('input[name="AnfrageTyp"][value="Gruppentreffen"]');o&&(o.checked=!0)}function r(){const o=document.querySelector('input[name="AnfrageTyp"]:checked'),n=e.querySelector("select");o&&o.value==="Gruppentreffen"?e.style.display="":(e.style.display="none",n&&(n.selectedIndex=0))}t.forEach(o=>{o.addEventListener("change",r)}),r()}function m(){document.fonts.ready.then(()=>{gsap.utils.toArray(".flower-svg").forEach(e=>{gsap.to(e,{rotation:180,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})})})}function y(){if(!document.querySelector(".is--date"))return;document.querySelectorAll(".is--date").forEach(t=>{const i=new Date(t.textContent.trim()),s={day:"numeric",month:"long",year:"numeric"},r=i.toLocaleDateString("de-CH",s);t.textContent=r})}function b(){document.querySelector(".section.is--einzelberatung")&&document.fonts.ready.then(()=>{gsap.matchMedia().add("(min-width: 768px)",()=>{gsap.timeline({scrollTrigger:{trigger:".section.is--einzelberatung",start:"top top",endTrigger:".section.is--einzelberatung.is--second",end:"top top",pin:!0,pinSpacing:!1,scrub:!0},defaults:{ease:"power1.out"}}).to(".section.is--einzelberatung.is--first",{y:"-10%",filter:"blur(3px)",ease:"power1.in"}),gsap.set(".eb-img-container img",{scale:1.2,yPercent:10}),gsap.set(".eb-img-container",{background:"red"}),gsap.utils.toArray(".eb-img-container img").forEach(i=>{gsap.to(i,{yPercent:-10,ease:"none",scrollTrigger:{trigger:i.closest(".eb-img-container"),start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})})})})}function w(e=0){document.querySelector("section.is--artikel")&&document.fonts.ready.then(()=>{const t=gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}});t.fromTo("section.is--artikel .blog-header",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},0),t.fromTo("section.is--artikel .outer-line",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},0).fromTo("section.is--artikel .author-wrapper",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.1).fromTo("section.is--artikel .img-w-main",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.2),gsap.set("section.is--artikel  .img-w-main img",{scale:1.2,yPercent:-10}),gsap.to("section.is--artikel .img-w-main img",{yPercent:10,ease:"none",scrollTrigger:{trigger:"section.is--artikel .img-w-main",start:"clamp(top bottom)",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})})}function h(e=0){document.querySelector("section.is--kontakt")&&document.fonts.ready.then(()=>{gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}}).fromTo("section.is--kontakt .outer-line",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},0).fromTo("section.is--kontakt .kontakt-i-w",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},.1).fromTo("section.is--kontakt .row.is--kontakt",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.2)})}function S(e=0){document.querySelector(".angebot-l-wrapper")&&document.fonts.ready.then(function(){gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}}).fromTo("section.is--angebothero .outer-word",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},0).fromTo("section.is--angebothero .outer-line",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},.1).fromTo("section.is--angebothero .angebot-img-container",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.2),gsap.timeline({scrollTrigger:{trigger:"section.is--angebothero",endTrigger:".angebot-img-container",start:"top top",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}}).to(".angebot-l-wrapper",{width:"50vw",ease:"power1.out"},0).to(".angebot-l-wrapper img",{scale:1,ease:"power1.out"},0)})}function v(e=0){document.querySelector("section.is--blog")&&document.fonts.ready.then(function(){gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}}).fromTo("section.is--blog .outer-word",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},0).fromTo("section.is--blog .outer-line",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},.1).fromTo("section.is--blog .articles-wrapper",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.2)})}function T(e=0){document.querySelector("section.is--hero")&&document.fonts.ready.then(function(){gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}}).fromTo("section.is--hero .outer-word",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},0).fromTo("section.is--hero  .img-container",{y:120,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.1);const i=gsap.timeline({scrollTrigger:{trigger:"section.is--hero",start:"top top",end:"bottom 30%",scrub:!0,pinSpacing:!0}});i.to("section.is--hero .img-container",{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"power1.out"},0),i.to("section.is--hero .img-container img",{scale:1,ease:"power1.out"},0)})}function x(e=0){document.querySelector(".abouthero__img-wrapper")&&document.fonts.ready.then(function(){gsap.timeline({defaults:{duration:1,delay:e,ease:"power3.out"}}).fromTo("section.is--abouthero .outer-line",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},0).fromTo("section.is--abouthero .outer-word",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)",stagger:.05},.1).fromTo("section.is--abouthero .abouthero__img-wrapper",{y:60,opacity:0,filter:"blur(10px)"},{y:0,opacity:1,filter:"blur(0px)"},.2);const i=gsap.timeline({scrollTrigger:{trigger:"section.is--abouthero",start:"top top",end:"bottom 30%",scrub:!0,invalidateOnRefresh:!0},defaults:{ease:"power1.out"}});i.fromTo(".about-inner-wrapper",{clipPath:"inset(0% 0% 0% 0% round 3px)"},{clipPath:()=>s()}),window.innerWidth>=992&&i.to(".about-inner-wrapper img",{scale:1},0),i.fromTo(".container-about-hero .inner-word",{yPercent:0},{yPercent:-100,duration:.08},0),i.fromTo(".container-about-hero .inner-line",{yPercent:0},{yPercent:-100,duration:.08},0);function s(){if(!document.querySelector(".abouthero__img-wrapper"))return;const o=document.querySelector(".abouthero__img-wrapper").getBoundingClientRect(),n=window.innerWidth,c=window.innerHeight,a=n<=479?.5:1,l=-(c*a-o.height)/2,d=-(n*1-o.width)/2;return`inset(${l}px ${d}px ${l}px ${d}px round 3px)`}})}function F(){if(!document.querySelector("[data-scrolling-direction]"))return;let e=0;const t=10,i=50;window.addEventListener("scroll",()=>{const s=window.scrollY;if(Math.abs(e-s)>=t){const r=s>e?"down":"up";document.querySelectorAll("[data-scrolling-direction]").forEach(n=>n.setAttribute("data-scrolling-direction",r));const o=s>i;document.querySelectorAll("[data-scrolling-started]").forEach(n=>n.setAttribute("data-scrolling-started",o?"true":"false")),e=s}})}function A(){if(!document.querySelector(".mobile-wrapper"))return;let e=document.querySelector(".mobile-wrapper"),t=document.querySelector(".nav-wrapper"),i=document.querySelectorAll("[data-menu-toggle]");gsap.set(t,{backgroundColor:"white"}),i.forEach(o=>{o.addEventListener("click",()=>{e.getAttribute("data-nav")==="open"?r():s()})}),gsap.timeline();const s=()=>{e.setAttribute("data-nav","open"),t.setAttribute("data-nav","open"),gsap.fromTo(t,{backgroundColor:"white"},{backgroundColor:"#F6F7F5",duration:1})},r=()=>{e.setAttribute("data-nav","closed"),t.setAttribute("data-nav","closed"),gsap.fromTo(t,{backgroundColor:"#F6F7F5"},{backgroundColor:"white",duration:1})};document.addEventListener("keydown",o=>{o.key==="Escape"&&e.getAttribute("data-nav")==="open"&&r()})}function k(){document.querySelector(".swiper")&&new Swiper(".swiper",{spaceBetween:16,slidesPerView:1.05,speed:600,breakpoints:{992:{slidesPerView:2.5,spaceBetween:24}},navigation:{nextEl:".swiper-button.is--next",prevEl:".swiper-button.is--prev"},scrollbar:{el:".swiper-scrollbar"}})}function q(){document.querySelector("[data-accordion-css-init]")&&document.querySelectorAll("[data-accordion-css-init]").forEach(e=>{const t=e.getAttribute("data-accordion-close-siblings")==="true";e.addEventListener("click",i=>{const s=i.target.closest("[data-accordion-toggle]");if(!s)return;const r=s.closest("[data-accordion-status]");if(!r)return;const o=r.getAttribute("data-accordion-status")==="active";r.setAttribute("data-accordion-status",o?"not-active":"active"),t&&!o&&e.querySelectorAll('[data-accordion-status="active"]').forEach(n=>{n!==r&&n.setAttribute("data-accordion-status","not-active")})})})}function L(){!document.querySelector("[data-split-words]")&&!document.querySelector("[data-split-lines]")||document.fonts.ready.then(function(){document.querySelectorAll("[data-split-words]").forEach(e=>{const t=new SplitText(e,{type:"words",wordsClass:"outer-word"});new SplitText(t.words,{type:"words",wordsClass:"inner-word",tag:"span"}),gsap.set(".outer-word",{overflow:"hidden",display:"inline-block",marginBottom:"-0.22em",paddingTop:"0.1em"})}),document.querySelectorAll("[data-split-lines]").forEach(e=>{const t=new SplitText(e,{type:"lines",linesClass:"outer-line"});new SplitText(t.lines,{type:"lines",linesClass:"inner-line",tag:"span"}),gsap.set(".outer-line",{overflow:"hidden"})})})}function P(){document.querySelector(".section.is--bigbg")&&document.fonts.ready.then(function(){gsap.set(".section.is--bigbg .bigbg__img",{scale:1.15,transformOrigin:"center center"}),gsap.to(".section.is--bigbg .bigbg__img",{y:"20%",ease:"none",scrollTrigger:{trigger:".section.is--bigbg",start:"top bottom",end:"bottom top",scrub:!0}})})}function E(){document.querySelector("section.is--intro")&&document.fonts.ready.then(function(){gsap.set("section.is--intro .text-intro.is--second",{position:"absolute",top:0});const e=gsap.timeline({defaults:{duration:.8,ease:"power3.out"},paused:!0});e.fromTo("section.is--intro .text-intro.is--first span",{yPercent:0},{yPercent:-100}),e.fromTo("section.is--intro .text-intro.is--second span",{yPercent:100},{yPercent:0},"<");const t=gsap.timeline({defaults:{duration:.8,ease:"power3.out"},paused:!0});t.fromTo("section.is--intro .text-intro.is--first span",{yPercent:-100},{yPercent:0}),t.fromTo("section.is--intro .text-intro.is--second span",{yPercent:0},{yPercent:100},"<"),ScrollTrigger.create({trigger:"section.is--intro",start:"top+=50% top",end:"bottom",onEnter:()=>e.play(0),onLeaveBack:()=>t.play(0)}),ScrollTrigger.create({trigger:"section.is--intro",start:"top top",end:"+=100%",pin:!0})})}function C(){document.querySelector("section.is--introangebote")&&document.fonts.ready.then(function(){gsap.fromTo("section.is--introangebote .text-intro.is--first .inner-line",{yPercent:100},{yPercent:0,ease:"power1.out",stagger:.05,scrollTrigger:{trigger:"section.is--introangebote .text-intro.is--first",start:"top 80%"}})})}function H(){window.lenis=new Lenis,window.lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(e=>{window.lenis.raf(e*1e3)}),gsap.ticker.lagSmoothing(0)}function O(){const e=document.querySelectorAll(".nav-wrapper [data-nav]");e.forEach(t=>{t.addEventListener("click",function(i){e.forEach(s=>s.classList.remove("w--current")),this.classList.add("w--current")})})}function D(){document.querySelectorAll("[data-nav]").forEach(t=>{t.classList.remove("w--current"),t.getAttribute("href")===window.location.pathname&&t.classList.add("w--current")})}function N(){gsap.set("html",{cursor:"wait"}),document.querySelector(".loading-circle .spinner_V8m1").classList.add("animate")}function I(){gsap.set("html",{cursor:"default"}),gsap.to(".loading-circle svg",{opacity:0,duration:.5,ease:"power1.out",onComplete:()=>{document.querySelector(".loading-circle .spinner_V8m1").classList.remove("animate"),document.querySelector(".loading-circle svg").style.removeProperty("opacity")}})}function _(){document.querySelector(".sigmask")&&(gsap.set(".sigmask",{drawSVG:"0% 0%"}),gsap.to(".sigmask",{duration:2.5,drawSVG:"100%",ease:"linear",scrollTrigger:{trigger:".svg-perspektive",start:"top 80%",toggleActions:"play none none none"}}))}function B(){const e=document.querySelector("form");e&&(window.Webflow&&window.Webflow.destroy(),e.removeEventListener("submit",p),e.addEventListener("submit",p))}function p(e){e.preventDefault();const t=e.target,i=new FormData(t),r=`${i.get("Name")} hat dir eine Nachricht geschickt!`;i.append("subject",r);const o=t.querySelector('button[type="submit"]'),n=t.querySelector(".spinner"),c=t.querySelector(".form-success"),a=t.querySelector(".form-error");c==null||c.classList.add("hidden"),a==null||a.classList.add("hidden"),o.disabled=!0,n==null||n.classList.remove("hidden"),fetch("https://api.web3forms.com/submit",{method:"POST",body:i}).then(l=>l.json()).then(l=>{l.success?(t.reset(),c==null||c.classList.remove("hidden")):a==null||a.classList.remove("hidden")}).catch(l=>{a==null||a.classList.remove("hidden")}).finally(()=>{o.disabled=!1,n==null||n.classList.add("hidden")})}const u=new Swup({plugins:[new SwupPreloadPlugin,new SwupHeadPlugin],containers:["#swup",".mobile-wrapper","footer"]});function R(){if(!document.querySelector(".preloader"))return;gsap.set("html",{cursor:"wait"}),gsap.set("#Layer_1",{overflow:"visible"});const e=gsap.timeline({ease:"power1.out"}),t=document.getElementById("loading-percentage"),i={value:0},s=document.querySelector("#Layer_1"),r=document.createElementNS("http://www.w3.org/2000/svg","defs");s.prepend(r),document.querySelectorAll("#Layer_1 > *").forEach((n,c)=>{const a=document.createElementNS("http://www.w3.org/2000/svg","filter");a.setAttribute("id","blurFilter-"+c),a.setAttribute("x","-220%"),a.setAttribute("y","-220%"),a.setAttribute("width","600%"),a.setAttribute("height","600%"),a.setAttribute("filterUnits","objectBoundingBox");const l=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");l.setAttribute("stdDeviation","0"),a.appendChild(l),r.appendChild(a),n.setAttribute("filter",`url(#blurFilter-${c})`)}),e.fromTo("#Layer_1 > *",{opacity:0},{opacity:1,duration:1.2,ease:"power1.out",stagger:.05}).fromTo("#Layer_1 feGaussianBlur",{attr:{stdDeviation:10}},{attr:{stdDeviation:0},duration:1.2,ease:"power1.out",stagger:.05},0).to(i,{value:100,duration:1.2,ease:"linear",onUpdate:()=>{t.textContent=Math.round(i.value)+"%"},onComplete:()=>{lenis.scrollTo(0,{immediate:!0})}},0),e.to("#Layer_1 > *",{opacity:0,y:-20,duration:.5,stagger:.02,ease:"power1.out"}).to("#Layer_1 feGaussianBlur",{attr:{stdDeviation:10},duration:.5,ease:"power1.out",stagger:.02},"<").to(t,{opacity:0,filter:"blur(5px)",y:-20,duration:.5,ease:"power1.out"},"<").to(".preloader",{opacity:0,onComplete:()=>{gsap.set("html",{cursor:"default"})}},"-=.3")}function G(e){L(),H(),F(),A(),O(),k(),q(),T(e),E(),x(e),S(e),P(),b(),C(),h(e),v(e),y(),m(),f(),g(e),_(),w(e),B()}document.addEventListener("DOMContentLoaded",()=>{document.fonts.ready.then(function(){document.body.removeAttribute("data-preload")});const e=2.2;R(),G(e)});u.hooks.on("page:view",e=>{L(),A(),k(),q(),T(),E(),x(),S(),P(),b(),C(),_(),h(),v(),m(),f(),g(),w(),D(),y(),B()});u.hooks.on("animation:out:start",()=>{N(),document.querySelector("[data-scrolling-started]").setAttribute("data-scrolling-started","false"),document.querySelector(".nav-wrapper").setAttribute("data-nav","closed")});u.hooks.on("animation:in:start",()=>{I()});u.hooks.on("content:replace",()=>{gsap.utils.toArray(ScrollTrigger.getAll()).forEach(e=>e.kill()),window.lenis.scrollTo(0,{immediate:!0})});u.hooks.on("link:self",e=>{window.lenis.scrollTo(0)});
