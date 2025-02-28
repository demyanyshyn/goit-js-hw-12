var x=t=>{throw TypeError(t)};var y=(t,e,r)=>e.has(t)||x("Cannot "+r);var l=(t,e,r)=>(y(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>e.has(t)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),f=(t,e,r,a)=>(y(t,e,"write to private field"),a?a.call(t,r):e.set(t,r),r),v=(t,e,r)=>(y(t,e,"access private method"),r);import{a as R,S as E,i as P}from"./assets/vendor-NgjAvfGz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var u,b;class I{constructor(){g(this,u);this.gallery=document.querySelector(".gallery")}changeResolution(e){return e.replace("_640","_180")}showFirstPage(e){v(this,u,b).call(this,e)}showNextPage(e){v(this,u,b).call(this,e)}clearGalery(){this.gallery.innerHTML="",this.removeBtn()}createBtn(e,r){const a=document.createElement("div");a.classList.add("pages-btn-wrapper"),a.innerHTML=`
      <buton class="search-btn" id="next-page" type="button">Load more</buton>
      <buton class="search-btn" id="last-page" type="button">Load last page</buton>`;const s=a.querySelector("#next-page"),n=a.querySelector("#last-page");s.addEventListener("click",e),n.addEventListener("click",r),this.gallery.insertAdjacentElement("afterend",a)}removeBtn(){const e=document.querySelectorAll(".pages-btn-wrapper");e&&e.forEach(r=>r.remove())}loader(){this.gallery.insertAdjacentHTML("afterend",'<div class="content-header" id="loader">Loading images, please wait... <br/><span class="loader"></span></div>')}removeLoader(){document.querySelector("#loader").remove()}disableBtn(e,r){const a=document.querySelector("#next-page"),s=document.querySelector("#last-page");a.removeEventListener("click",e),s.removeEventListener("click",r),a.classList.toggle("disabled-btn"),s.classList.toggle("disabled-btn")}}u=new WeakSet,b=function(e){const r=e.data.hits.map(a=>`<li class="gallery-item">
        <div clas="img-box">
          <a class="gallery-link" href="${a.largeImageURL}">
            <img
              class="gallery-image"
              src="${this.changeResolution(a.webformatURL)}"
              data-source="${a.largeImageURL}"
              alt="${a.tags}"
            />
          </a>
        </div>
        <ul class="content-box">
          <li class="content-item">
            <div class="content-header">Likes</div>
            <div class="content">${a.likes}</div>
          </li>
          <li class="content-item">
           <div class="content-header">Views</div>
            <div class="content">${a.views}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Comments</div>
            <div class="content">${a.comments}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Downloads</div>
            <div class="content">${a.downloads}</div>
          </li>
        </ul>
      </li>
      `).join("");this.gallery.insertAdjacentHTML("beforeend",r)};var i,h;class M{constructor(){g(this,i);g(this,h);f(this,i,{params:{_method:"get",key:"49061032-8122651df51dcd062279bc436",q:"",orientation:"horizontal",page:1,safesearch:!0,image_type:"photo",per_page:40}}),f(this,h,"https://pixabay.com/api/"),this.lastP=0}async sendQuery(e,r){return e&&(l(this,i).params.q=e),await R(l(this,h),l(this,i))}async goToLastPage(){return l(this,i).params.page=this.lastP,await this.sendQuery()}clearSearchQuery(){l(this,i).params.q="",l(this,i).params.page=1}nextPage(){l(this,i).params.page++}lastPage(e){return this.lastP=Math.ceil(e.data.totalHits/l(this,i).params.per_page),this.lastP<=l(this,i).params.page}}i=new WeakMap,h=new WeakMap;const $={captionDelay:250,captionsData:"alt"};function O(){_.addEventListener("submit",Q)}async function Q(t){if(t.preventDefault(),k()){S(),o.loader();const e=setTimeout(async()=>{try{const r=await c.sendQuery(T);A(r),c.nextPage()}catch(r){d(r)}clearInterval(e)},2e3)}else d("Sorry, input not valid"),S()}async function L(t){o.loader();const e=setTimeout(async()=>{try{const r=await c.sendQuery();c.nextPage(),q(r)}catch(r){d(r)}clearInterval(e)},2e3)}async function w(t){o.loader();const e=setTimeout(async()=>{try{const r=await c.goToLastPage();q(r)}catch(r){d(r)}clearInterval(e)},2e3)}function k(){return p.value.trim()&&p.value.length<=100?(T=p.value,!0):!1}function q(t){o.removeLoader(),o.showNextPage(t),B.refresh(),N(),c.lastPage(t)&&(o.disableBtn(L,w),P.warning({message:`We're sorry, but you've reached the end of search results.
`,position:"topRight"}))}function A(t){o.removeLoader(),t.data.hits.length>0?(o.clearGalery(),o.showFirstPage(t),o.createBtn(L,w),B.refresh(),c.lastPage(t)&&(o.disableBtn(L,w),P.warning({message:`We're sorry, but you've reached the end of search results.
`,position:"topRight"}))):(d(`Sorry, there are no images matching your search query. Please try again!
  `),o.clearGalery())}function N(){let e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}function S(){o.clearGalery(),p.value="",c.clearSearchQuery()}function d(t){t=t.message?t.message:t;let e={message:t,icon:"material-icons-outlined",iconColor:"#fff",iconText:"dangerous",messageColor:"#fff",color:"#ef4040",position:"topRight",timeout:2e3,theme:"dark",maxWidth:"432px"};P.show(e)}const o=new I,c=new M;let B=new E(".gallery-link",$);const _=document.querySelector("#search-form");document.querySelector("#search-btn");const p=document.querySelector("#search-input");let T;O();
//# sourceMappingURL=index.js.map
