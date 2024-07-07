document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
    <div class="nav-root">
    <div class="wire_cont">
      <div class="wire_cont2">
        <div style="--gv-text-contextual-dark: rgba(255, 255, 255, 1); --gv-text-contextual-base: rgba(255, 255, 255, 0.9); --gv-text-contextual-pale: rgba(255, 255, 255, 0.8); --gv-text-contextual-xpale: rgba(255, 255, 255, 0.7); --gv-text-contextual-disabled: rgba(255, 255, 255, 0.6); --gv-bg-contextual-disabled: rgba(255, 255, 255, 0.05); --gv-text-contextual-inverse: #0D0D0D; --gv-text-contextual-accent: rgba(255, 255, 255, 1); --gv-bg-container-highlight: rgba(255, 255, 255, 0.05); --gv-bg-hovered: rgba(255, 255, 255, 0.1); --gv-border-dark: rgba(255,255,255,0.5); --gv-border-base: rgba(255, 255, 255, 0.15);">
          
    <header class="desktop-nav-bar" id="navbar">
      <div class="desktop-nav-bar-lef">
    <div class="unified-nav">
<img class="logo" src="https://www.dropbox.com/scl/fi/a0qiv80qrjzu8vvvv2ouk/512sign.png?rlkey=ykjui910b9eufvs1n0yzbok2s&st=m0y64ssi&raw=1"></div>
<span class="company">ANGLOMOVA</span>
</div>
  <nav class="objectives">
  
  <button type="button" class="navbut" onclick="document.location='/index.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">home</span></div><div>Main</div></button>
  
  <button type="button" class="navbut" onclick="document.location='/courses.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">dataset</span></div><div>Courses</div></button>
  
  <button type="button" class="navbut" onclick="document.location='/lesson.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">bolt</span></div><div>Current lesson</div></button>
  
  <button type="button" class="navbut" onclick="document.location='/materials.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">save</span></div><div>Materials</div></button>
  </nav>
      
  <div class="nav-bar-rig">
  <button type="button" class="navbut-prof" onclick="document.location='/profile.html'">
<div class="ppr">
    <span class="material-symbols-outlined">account_circle</span></div><div></div></button>
    </header>
  
</div>
  </div>
    </div>
      </div>
  </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
