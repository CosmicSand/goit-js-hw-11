import{i as c,S as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="/goit-js-hw-11/assets/error-cc3a3fd7.svg",l=document.querySelector(".searching-form"),a=document.querySelector(".gallery"),u=document.querySelector(".container");l.addEventListener("submit",f);function f(i){i.preventDefault(),g();const o=i.currentTarget.elements.searching.value,t=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${o}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${t}`).then(s=>s.json()).then(s=>{const e=s.hits;if(e.length===0)throw c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:`${p}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),new Error("Error fetching data");m(e),y()}).catch(s=>console.log(s))}function m(i){a.innerHTML="";const o=i.map(t=>`<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${t.likes}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${t.views}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${t.comments}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${t.downloads}</p>
</li>
</ul>
    </div>
    </div>
</li>`).join("");a.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),l.reset()}function g(){u.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function y(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers.js.map
