document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
    <div class="nav-root">
    <div class="nav-wire">
    <div class="desktop-nav-bar" id="navbar">
    <div class="unified-nav">
<img class="logo" src="https://www.dropbox.com/scl/fi/a0qiv80qrjzu8vvvv2ouk/512sign.png?rlkey=ykjui910b9eufvs1n0yzbok2s&st=m0y64ssi&raw=1"></div>
<span class="company">ANGLOMOVA</span>
</div>
  <nav class="objectives">
  
  <button type="button" class="navbut" onclick="document.location='https://chyzhique.github.io/site/index.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">home</span></div><div>Main</div></button>
  
  <button type="button" class="navbut" onclick="document.location='https://chyzhique.github.io/site/courses.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">dataset</span></div><div>Courses</div></button>
  
  <button type="button" class="navbut" onclick="document.location='https://chyzhique.github.io/site/lesson.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">bolt</span></div><div>Current lesson</div></button>
  
  <button type="button" class="navbut" onclick="document.location='https://chyzhique.github.io/site/materials.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">save</span></div><div>Materials</div></button>
  </nav>
  <div style="align-items: center; box-sizing: border-box;display: flex;;">
  <button type="button" class="navbut" onclick="document.location='https://chyzhique.github.io/site/profile.html'">
  <div class="piclog" size="20"><span class="material-symbols-outlined">account_circle</span></div><div>Profile</div></button>
  
</div></div></div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
