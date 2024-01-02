import{S as p,i as u}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="/goit-js-hw-11/assets/error-cc3a3fd7.svg",l=document.querySelector(".searching-form"),d=document.querySelector(".gallery"),f=document.querySelector(".container"),a={title:"",iconUrl:`${m}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"};let g=new p(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});l.addEventListener("submit",h);function h(o){o.preventDefault(),d.innerHTML="",L();const s=o.currentTarget.elements.searching.value.trim(),t=encodeURIComponent(s);console.log(t);const i=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${t}`,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${i}`).then(e=>e.json()).then(e=>{const r=e.hits;if(r.length===0)throw new Error("There are no images matching your search query. Please try again!");y(r),c()}).catch(e=>{console.log(e),u.error(a,a.message=`Sorry! ${e.message}`),c()})}function y(o){const s=o.toSorted((t,i)=>i.likes-t.likes).map(t=>`<li class="gallery-item"><div class='image-wrapper'>
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
</li>`).join("");d.insertAdjacentHTML("beforeend",s),g.refresh(),l.reset()}function L(){f.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function c(){document.querySelector(".loader").remove(),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
