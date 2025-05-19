function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
 
function showModal(imageSRC, imgAlt) {
  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <img src="${imageSRC}" alt="${imgAlt}">
    <button class="close-viewer">X</button>
    `;
    document.body.append(dialog);
    dialog.showModal();

    dialog.querySelector('.close-viewer').addEventListener('click', () => {
      dialog.close();
      dialog.remove();
    });
  }

  document.querySelectorAll('.custom-img').forEach(img => {
    img.addEventListener('click', () => {
      showModal(img.src, img.alt);
    });
  });
  