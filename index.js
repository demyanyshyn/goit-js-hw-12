var g=t=>{throw TypeError(t)};var f=(t,e,r)=>e.has(t)||g("Cannot "+r);var l=(t,e,r)=>(f(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),m=(t,e,r,n)=>(f(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),v=(t,e,r)=>(f(t,e,"access private method"),r);import{a as S,S as x,i as q}from"./assets/vendor-NgjAvfGz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();var p,b;class B{constructor(){u(this,p);this.gallery=document.querySelector(".gallery")}changeResolution(e){return e.slice(0,-7)+"180.jpg"}showFirstPage(e){this.clearGalery(),v(this,p,b).call(this,e)}clearGalery(){this.gallery.innerHTML="",this.removeBtn()}createBtn(e,r){const n=document.createElement("div");n.classList.add("pages-btn-wrapper"),n.innerHTML=`
      <buton class="search-btn" id="next-page" type="button">Load more</buton>
      <! Add only for demo work on last page-->
      <buton class="search-btn" id="last-page" type="button">Load last page</buton>`;const s=n.querySelector("#next-page"),a=n.querySelector("#last-page");s.addEventListener("click",i=>e(i)),a.addEventListener("click",i=>callback2(i)),this.gallery.insertAdjacentElement("afterend",s)}removeBtn(){const e=document.querySelectorAll(".pages-btn-wrapper");e&&e.forEach(r=>r.remove())}loader(){const e='<div class="content-header">Loading images, please wait... <br/><span class="loader"></span></div>';this.clearGalery(),this.gallery.insertAdjacentHTML("beforeend",e)}}p=new WeakSet,b=function(e){const r=e.data.hits.map(n=>`<li>
        <div clas="img-box">
          <a class="gallery-link" href="${n.largeImageURL}">
            <img
              class="gallery-image"
              src="${this.changeResolution(n.webformatURL)}"
              data-source="${n.largeImageURL}"
              alt="${n.tags}"
            />
          </a>
        </div>
        <ul class="content-box">
          <li class="content-item">
            <div class="content-header">Likes</div>
            <div class="content">${n.likes}</div>
          </li>
          <li class="content-item">
           <div class="content-header">Views</div>
            <div class="content">${n.views}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Comments</div>
            <div class="content">${n.comments}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Downloads</div>
            <div class="content">${n.downloads}</div>
          </li>
        </ul>
      </li>
      `).join("");this.gallery.insertAdjacentHTML("beforeend",r)};var o,d;class I{constructor(){u(this,o);u(this,d);m(this,o,{params:{_method:"get",key:"49061032-8122651df51dcd062279bc436",q:"",orientation:"horizontal",page:1,safesearch:!0,image_type:"photo",per_page:40}}),m(this,d,"https://pixabay.com/api/")}async sendQuery(e){return l(this,o).params.q=e,await S(l(this,d),l(this,o))}clearSearchQuery(){l(this,o).params.q="",l(this,o).params.page=1}}o=new WeakMap,d=new WeakMap;const $={captionDelay:250,captionsData:"alt"};function k(){G.addEventListener("submit",t=>A(t))}async function A(t){if(t.preventDefault(),M()){c.loader();const e=setTimeout(async()=>{try{const r=await L.sendQuery(w);O(r)}catch(r){y(r)}clearInterval(e)},2e3)}else y("Sorry, input not valid"),R()}async function E(t){console.log("click")}function M(){return h.value&&h.value.length<=100?(w=h.value,!0):!1}function O(t){t.data.hits.length>0?(c.showFirstPage(t),c.createBtn(E),P()):(y(`Sorry, there are no images matching your search query. Please try again!
  `),c.clearGalery())}function P(){T.refresh()}function R(){c.clearGalery(),h.value="",L.clearSearchQuery()}function y(t){t=t.message?t.message:t;let e={message:t,icon:"material-icons-outlined",iconColor:"#fff",iconText:"dangerous",messageColor:"#fff",color:"#ef4040",position:"topRight",timeout:2e3,theme:"dark",maxWidth:"432px"};q.show(e)}const c=new B,L=new I;let T=new x(".gallery-link",$);const G=document.querySelector("#search-form");document.querySelector("#search-btn");const h=document.querySelector("#search-input");let w;k();
//# sourceMappingURL=index.js.map
