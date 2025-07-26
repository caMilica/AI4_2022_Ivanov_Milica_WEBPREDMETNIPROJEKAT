  
window.addEventListener('DOMContentLoaded', function () {

  //dropdown meni
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      const target = e.target;
      if (!target.classList.contains('caret') && !target.closest('span')?.classList.contains('caret')) {
        window.location = toggle.getAttribute('href');
      }
    });
  });
  


  //lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryImages = document.querySelectorAll('.kontejnerSlike img');

  if (lightbox && lightboxImg && galleryImages.length > 0) {
    galleryImages.forEach(function(img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    lightbox.addEventListener('click', function (e) {
      if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
      }
    });
  }


  //razmak ispod navigacije
  function adjustMainContentMargin() {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.main-content');

    if (navbar && content) {
      const navHeight = navbar.offsetHeight;
      content.style.marginTop = (navHeight - 5) + 'px';
    }
  }

  adjustMainContentMargin();
  window.addEventListener('resize', adjustMainContentMargin);
});
