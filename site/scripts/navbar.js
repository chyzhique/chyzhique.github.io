document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
          <div id="navbar" class="navbar">
  <a href="#">Profile</a>
  <a href="#">Courses</a>
  <a href="#">Current lesson</a>
  <a href="#">My Materials</a>
  <a href="#" class="right">Pricing</a>
</div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
