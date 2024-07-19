document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
<div class="root">
<div class="navbar">
  <div class="nav-left">
    <img
      src="https://anglomova.com/site/images/512sign.png"
      class="logo"
    />
    <div class="nav-title">Anglomova</div>
  </div>
  <div class="nav-panel">
    <div class="nav-panel-element" onclick="document.location='/index.html'">
        <span class="material-symbols-outlined">home</span>
        <span>Main</span>
      </div>
      <div class="nav-panel-element" onclick="document.location='/courses.html'">
        <span class="material-symbols-outlined">book</span>
        <span>Courses</span>
      </div>
      <div class="nav-panel-element" onclick="document.location='/lesson.html'">
        <span class="material-symbols-outlined">bolt</span>
        <span>Current lesson</span>
      </div>
      <div class="nav-panel-element" onclick="document.location='/materials.html'">
        <span class="material-symbols-outlined">star</span>
        <span>My materials</span>
      </div>
      <div class="nav-panel-element" onclick="document.location='/pricing.html'">
        <span class="material-symbols-outlined">paid</span>
        <span>Pricing</span>
      </div>
    </div>
  <div class="nav-auth">
    <button class="nav-auth-sign" onclick="document.location='/login.html'">Sign in</button>
    <button class="nav-auth-reg" onclick="document.location='/login.html'">Register</button>
  </div>
</div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
