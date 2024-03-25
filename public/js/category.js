const { category, categoryEdit } = document.forms;

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

category?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(category);

  const response = await fetch('/portfolio/new-category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });

  if (response.status === 200) {
    window.location.href = '/portfolio';
  } else if (response.status === 500) {
    showToast('This category already exists');
  }
});

categoryEdit?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(categoryEdit);
  const { categoryid } = e.target.dataset;
  data.append('categoryId', categoryid);

  const response = await fetch(`/portfolio/${categoryid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });
  if (response.status === 200) {
    window.location.href = '/portfolio';
  } else if (response.status === 500) {
    showToast('This category already exists');
  }
});

if (window.location.href.split('/')[3] === 'portfolio') {
  document.addEventListener('click', async (e) => {
    if (e.target.textContent === 'Delete Category') {
      const { categoryid } = e.target.dataset;
      document.getElementById(`category-${categoryid}`).remove();

      await fetch(`/portfolio/${categoryid}`, { method: 'DELETE' });
    }
  });
}
