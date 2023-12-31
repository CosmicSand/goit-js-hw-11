import{i as d,S as p}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u="/goit-js-hw-11/assets/error-cc3a3fd7.svg",a=document.querySelector(".searching-form"),c=document.querySelector(".gallery"),f=document.querySelector(".container");a.addEventListener("submit",m);function m(o){o.preventDefault(),c.innerHTML="",h();const s=o.currentTarget.elements.searching.value,i=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${s}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${i}`).then(t=>t.json()).then(t=>{const e=t.hits;if(e.length===0)throw a.reset(),d.error({title:"",message:"Sorry, there are no images matching <br> your search query. Please try again!",iconUrl:`${u}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"}),l(),new Error("Error fetching data");g(e),l()}).catch(t=>console.log(t))}function g(o){const s=o.map(t=>`<li class="gallery-item"><div class='image-wrapper'>
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
</li>`).join("");c.insertAdjacentHTML("beforeend",s),new p(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}).refresh(),a.reset()}function h(){f.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function l(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers.js.map
