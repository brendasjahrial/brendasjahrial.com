function mouseHandler(e) {
  const previewImage = e.target.nextElementSibling;
  console.log(previewImage.src);
  if (e.type === 'mouseenter') {
    previewImage.classList.add('is-active');
  } else {
    previewImage.classList.remove('is-active');
  }
}

function initEventListeners() {
  const linksArray = Array.from(document.querySelectorAll('.js-work-link'))
  if (linksArray.length) {
    linksArray.forEach(link => {
      link.addEventListener('mouseenter', mouseHandler)
      link.addEventListener('mouseleave', mouseHandler)
    })
  }
}

export default function() {
  initEventListeners();
}
