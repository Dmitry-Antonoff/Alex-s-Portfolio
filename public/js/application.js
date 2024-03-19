const homeBtn = document.getElementById('home');
const portfolioBtn = document.getElementById('portfolio');
const allWorksBtn = document.getElementById('allWorks');
const loginBtn = document.getElementById('login');
const regBtn = document.getElementById('reg');

homeBtn.addEventListener('click', () => {
  window.location.href = '/';
});

portfolioBtn.addEventListener('click', () => {
  window.location.href = '/portfolio';
});

allWorksBtn?.addEventListener('click', () => {
  window.location.href = '/portfolio';
});

if (window.location.href.split('/')[3] === '') {
  homeBtn.disabled = true;
  homeBtn.style.backgroundColor = '#1c1c21';
} else if (
  window.location.href.split('/')[3] === 'portfolio' &&
  window.location.href.split('/')[4] === undefined
) {
  portfolioBtn.disabled = true;
  portfolioBtn.style.backgroundColor = '#1c1c21';
}

if (window.location.href.split('/')[4] === 'login') {
  loginBtn.style.display = 'none';
} else if (window.location.href.split('/')[4] === 'registration') {
  regBtn.style.display = 'none';
}

let input = document.getElementById('inputTag');
let imageName = document.getElementById('imageName');

input?.addEventListener('change', () => {
  let inputImage = document.querySelector('input[type=file]').files[0];

  imageName.innerText = inputImage.name;
});
