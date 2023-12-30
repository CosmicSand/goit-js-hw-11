import{i as g,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f="/goit-js-hw-11/assets/error-cc3a3fd7.svg",a=document.querySelector(".searching-form");a.addEventListener("submit",h);function h(i){i.preventDefault();const r=i.currentTarget.elements.searching.value,l=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${r}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${l}`).then(s=>s.json()).then(s=>{if(s.hits.length===0)throw g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:`${f}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),new Error("Error fetching data");y(s)}).catch(s=>console.log(s))}function y(i){const r=document.querySelector(".gallery");r.innerHTML="",i.hits.map((l,s)=>{const{largeImageURL:e,webformatURL:t,tags:o,likes:n,views:c,comments:p,downloads:d}=i.hits[s],m=`<li class="gallery-item"><div class='image-wrapper'>
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
<p class='quantity'>${n}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${c}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${p}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${d}</p>
</li>
</ul>
    </div>
    </div>
</li>`;r.insertAdjacentHTML("beforeend",m)}),new u(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),a.reset()}
//# sourceMappingURL=commonHelpers.js.map
