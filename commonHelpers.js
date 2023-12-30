import{i as f,S as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const h="/goit-js-hw-11/assets/error-cc3a3fd7.svg",l=document.querySelector(".searching-form");l.addEventListener("submit",g);function g(i){i.preventDefault();const o=i.currentTarget.elements.searching.value,n=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${o}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${n}`).then(t=>t.json()).then(t=>{if(t.hits.length===0)throw f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:`${h}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),new Error("Error fetching data");y(t)}).catch(t=>console.log(t))}function y(i){const o=document.querySelector(".gallery");o.innerHTML="",i.hits.map((n,t)=>{const e=i.hits[t].largeImageURL,s=i.hits[t].webformatURL,r=i.hits[t].tags,c=i.hits[t].likes,a=i.hits[t].views,p=i.hits[t].comments,d=i.hits[t].downloads,u=`<li class="gallery-item"><div class='image-wrapper'>
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
<p class='quantity'>${c}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${a}</p>
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
</li>`;o.insertAdjacentHTML("beforeend",u)}),new m(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
