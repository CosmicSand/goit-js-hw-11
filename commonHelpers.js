import{i as m,S as f}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/error-cc3a3fd7.svg",l=document.querySelector(".searching-form"),a=document.querySelector(".gallery"),h=document.querySelector(".container");l.addEventListener("submit",y);function y(s){s.preventDefault(),b();const i=s.currentTarget.elements.searching.value,n=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${i}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${n}`).then(r=>r.json()).then(r=>{if(r.hits.length===0)throw m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:`${g}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),new Error("Error fetching data");L(r),w()}).catch(r=>console.log(r))}function L(s){a.innerHTML="";const i=s.hits.map((n,r)=>{const{largeImageURL:e,webformatURL:t,tags:o,likes:c,views:d,comments:p,downloads:u}=s.hits[r];return`<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${c}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${d}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${p}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${u}</p>
</li>
</ul>
    </div>
    </div>
</li>`}).join("");a.insertAdjacentHTML("beforeend",i),new f(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),l.reset()}function b(){h.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function w(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers.js.map
