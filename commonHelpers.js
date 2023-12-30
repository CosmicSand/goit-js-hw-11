import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const m="/goit-js-hw-11/assets/error-cc3a3fd7.svg",h=document.querySelector(".searching-form");h.addEventListener("submit",g);function g(o){o.preventDefault();const i=o.currentTarget.elements.searching.value,l=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${i}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${l}`).then(t=>t.json()).then(t=>{if(t.hits.length===0)throw u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:`${m}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),new Error("Error fetching data");y(t)}).catch(t=>console.log(t))}function y(o){const i=document.querySelector(".gallery");o.hits.map((l,t)=>{const e=o.hits[t].largeImageURL,s=o.hits[t].webformatURL,r=o.hits[t].tags,n=o.hits[t].likes,c=o.hits[t].views,a=o.hits[t].comments,p=o.hits[t].downloads,d=`<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${s}"
      data-source="${e}"
      alt="${r}"
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
<p class='quantity'>${a}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${p}</p>
</li>
</ul>
    </div>
    </div>
</li>`;i.insertAdjacentHTML("beforeend",d)})}new f(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});
//# sourceMappingURL=commonHelpers.js.map
