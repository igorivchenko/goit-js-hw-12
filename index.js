import{a as h,S as y,i as d}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();let m=15;async function p(r,o=1){const i="https://pixabay.com/api/?key=",a="46052576-a4ef4f0d52180e04b4399e04b",e=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:o}),s=await h.get(`${i}${a}&${e}`),{data:{hits:l,totalHits:n}}=s;return{hits:l,totalHits:n}}function f(r){return r.map(({largeImageURL:o,webformatURL:i,tags:a,likes:e,views:s,comments:l,downloads:n})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${o}"><img class="card-image" src="${i}" alt="${a}" loading="lazy"/></a>        <div class="card-container">
          <div class="card-item">
            <p class="card-title">Likes</p>
            <p class="card-count">${e}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Views</p>
            <p class="card-count">${s}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Comments</p>
            <p class="card-count">${l}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Downloads</p>
            <p class="card-count">${n}</p>
          </div>
        </div>
        </article>
          </li>`).join("")}const g=new y(".gallery a",{captionDelay:300,captionsData:"alt"}),t={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),button:document.querySelector(".gallery-button")};t.form.addEventListener("submit",b);t.button.addEventListener("click",v);let u="",c=1;async function b(r){r.preventDefault();const i=r.currentTarget.elements.state.value.trim();if(u=i,c=1,t.gallery.innerHTML="",t.button.classList.remove("is-visible"),!i){d.error({message:"Please enter your request",position:"bottomRight"}),t.button.classList.remove("is-visible");return}t.loader.classList.add("is-visible");try{const{hits:a}=await p(u,c);if(a.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});return}a.length<m?t.button.classList.remove("is-visible"):t.button.classList.add("is-visible");const e=f(a);t.gallery.insertAdjacentHTML("beforeend",e),g.refresh()}catch(a){console.log(a.message)}finally{t.loader.classList.remove("is-visible"),t.form.reset()}}async function v(){c+=1;try{t.loader.classList.add("is-visible"),t.button.classList.remove("is-visible");const{hits:r,totalHits:o}=await p(u,c),i=f(r);if(t.gallery.insertAdjacentHTML("beforeend",i),g.refresh(),L(),c>Math.ceil(o/m)-1){t.button.classList.remove("is-visible"),d.error({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}t.button.classList.add("is-visible")}catch(r){console.log(r.message)}finally{t.loader.classList.remove("is-visible")}}function L(){const i=t.gallery.querySelector("li").getBoundingClientRect().height*2+140;window.scrollBy({top:i,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
