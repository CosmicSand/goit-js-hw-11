import{i as g,S as m}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="/goit-js-hw-11/assets/error-cc3a3fd7.svg",l=document.querySelector(".searching-form"),a=document.querySelector(".gallery");l.addEventListener("submit",h);function h(r){r.preventDefault(),b();const i=r.currentTarget.elements.searching.value,o=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${i}`,orientation:"horizontal",image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(s=>s.json()).then(s=>{if(s.hits.length===0)throw g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:`${u}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),new Error("Error fetching data");y(s)}).catch(s=>console.log(s))}function y(r){a.innerHTML="",r.hits.map((i,o)=>{const{largeImageURL:s,webformatURL:e,tags:t,likes:n,views:c,comments:d,downloads:p}=r.hits[o],f=`<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${t}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${n}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${c}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${d}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${p}</p>
</li>
</ul>
    </div>
    </div>
</li>`;a.insertAdjacentHTML("beforeend",f)}),new m(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),l.reset()}function b(){a.insertAdjacentHTML("beforebegin",'<span class="loader"></span>')}
//# sourceMappingURL=commonHelpers.js.map
