var m=e=>{throw TypeError(e)};var y=(e,t,s)=>t.has(e)||m("Cannot "+s);var a=(e,t,s)=>(y(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,o)=>(y(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{a as L,S as b,i as w}from"./assets/vendor-NgjAvfGz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();class S{constructor(){this.gallery=document.querySelector(".gallery")}changeResolution(t){return t.slice(0,-7)+"180.jpg"}renderItems(t){const s=t.data.hits.map(o=>`<li>
        <div clas="img-box">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
              class="gallery-image"
              src="${this.changeResolution(o.webformatURL)}"
              data-source="${o.largeImageURL}"
              alt="${o.tags}"
            />
          </a>
        </div>
        <ul class="content-box">
          <li class="content-item">
            <div class="content-header">Likes</div>
            <div class="content">${o.likes}</div>
          </li>
          <li class="content-item">
           <div class="content-header">Views</div>
            <div class="content">${o.views}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Comments</div>
            <div class="content">${o.comments}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Downloads</div>
            <div class="content">${o.downloads}</div>
          </li>
        </ul>
      </li>
      `).join("");this.clearGalery(),this.gallery.insertAdjacentHTML("beforeend",s)}clearGalery(){this.gallery.innerHTML=""}loader(){const t='<div class="content-header">Loading images, please wait... <br/><span class="loader"></span></div>';this.clearGalery(),this.gallery.insertAdjacentHTML("beforeend",t)}}var n,l;class x{constructor(){h(this,n);h(this,l);f(this,n,{params:{_method:"get",key:"49061032-8122651df51dcd062279bc436",q:"",orientation:"horizontal",page:1,safesearch:!0,image_type:"photo",per_page:9}}),f(this,l,"https://pixabay.com/api/")}sendQuery(t,s,o){a(this,n).params.q=t,L(a(this,l),a(this,n)).then(r=>s(r)).catch(r=>o(r))}clearSearchQuery(){a(this,n).params.q="",a(this,n).params.page=1}}n=new WeakMap,l=new WeakMap;const q={captionDelay:250,captionsData:"alt"};function I(){P.addEventListener("submit",e=>$(e))}function $(e){if(e.preventDefault(),O()){d.loader();const t=setTimeout(()=>{g.sendQuery(v,R,p),clearInterval(t)},2e3)}else p("Sorry, input not valid"),T()}function O(){return c.value&&c.value.length<=100?(v=c.value,!0):!1}function R(e){e.data.hits.length>0?(d.renderItems(e),G()):(p(`Sorry, there are no images matching your search query. Please try again!
  `),d.clearGalery())}function G(){M.refresh()}function T(){d.clearGalery(),c.value="",g.clearSearchQuery()}function p(e){e=e.message?e.message:e;let t={message:e,icon:"material-icons-outlined",iconColor:"#fff",iconText:"dangerous",messageColor:"#fff",color:"#ef4040",position:"topRight",timeout:2e3,theme:"dark",maxWidth:"432px"};w.show(t)}const d=new S,g=new x;let M=new b(".gallery-link",q);const P=document.querySelector("#search-form");document.querySelector("#search-btn");const c=document.querySelector("#search-input");let v;I();
//# sourceMappingURL=index.js.map
