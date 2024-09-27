import{a as h,S as y,i as d}from"./assets/vendor-D73Uttp0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();let m=15;async function p(s,i=1){const a="https://pixabay.com/api/?key=",o="46052576-a4ef4f0d52180e04b4399e04b",e=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:i}),r=await h.get(`${a}${o}&${e}`),{data:{hits:l,totalHits:n}}=r;return{hits:l,totalHits:n}}function f(s){return s.map(({largeImageURL:i,webformatURL:a,tags:o,likes:e,views:r,comments:l,downloads:n})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${i}"><img class="card-image" src="${a}" alt="${o}" loading="lazy"/></a>        <div class="card-container">
          <div class="card-item">
            <p class="card-title">Likes</p>
            <p class="card-count">${e}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Views</p>
            <p class="card-count">${r}</p>
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
          </li>`).join("")}const g=new y(".gallery a",{captionDelay:300,captionsData:"alt"}),t={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),button:document.querySelector(".gallery-button")};t.form.addEventListener("submit",b);t.button.addEventListener("click",v);let u="",c=1;function b(s){s.preventDefault();const a=s.currentTarget.elements.state.value.trim();if(u=a,c=1,t.gallery.innerHTML="",t.button.classList.remove("is-visible"),!a){d.error({message:"Please enter your request",position:"bottomRight"}),t.button.classList.remove("is-visible");return}t.loader.classList.add("is-visible"),p(u,c).then(({hits:o})=>{if(o.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});return}const e=f(o);t.gallery.insertAdjacentHTML("beforeend",e),g.refresh(),t.button.classList.add("is-visible")}).catch(o=>{console.log(o.message)}).finally(()=>{t.loader.classList.remove("is-visible"),t.form.reset()})}async function v(){c+=1;try{t.loader.classList.add("is-visible"),t.button.classList.remove("is-visible");const{hits:s,totalHits:i}=await p(u,c);if(c>Math.ceil(i/m)){t.button.classList.remove("is-visible"),d.error({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}const a=f(s);t.gallery.insertAdjacentHTML("beforeend",a),g.refresh(),L(),t.button.classList.add("is-visible")}catch(s){console.log(s.message)}finally{t.loader.classList.remove("is-visible")}}function L(){const a=t.gallery.querySelector("li").getBoundingClientRect().height*2+140;window.scrollBy({top:a,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
