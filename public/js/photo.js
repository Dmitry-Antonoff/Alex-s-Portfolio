const { photoEdit, photoCreate } = document.forms;
const deletePhoto = document.getElementById('deletePhoto');

function showToast(message, { type = 'error' } = {}) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = type === 'error' ? '#ff000091' : '#00800075';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.zIndex = '1000';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

photoCreate?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(photoCreate);
  const { categoryname } = e.target.dataset;
  const response = await fetch(`/portfolio/${categoryname}`, {
    method: 'POST',
    body: data,
  });

  if (response.status === 200) {
    window.location.href = `/portfolio/${categoryname}`;
  } else if (response.status === 500) {
    showToast('This photo name already exists');
  }
});

deletePhoto?.addEventListener('click', async (e) => {
  const categoryName = window.location.href.split('/')[4];
  const { photoid } = e.target.dataset;

  await fetch(`/portfolio/${categoryName}/${photoid}`, { method: 'DELETE' });

  window.location.href = `/portfolio/${categoryName}`;
});

photoEdit?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(photoEdit);
  const { categoryname, photoid } = e.target.dataset;

  const response = await fetch(`/portfolio/${categoryname}/${photoid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });

  if (response.status === 200) {
    window.location.href = `/portfolio/${categoryname}/${photoid}`;
  } else if (response.status === 500) {
    showToast('This photo name already exists');
  }
});
