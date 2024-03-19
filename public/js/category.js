const { category, categoryEdit } = document.forms;

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

  window.location.href = '/portfolio';
});

categoryEdit?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(categoryEdit);
  const { categoryid } = e.target.dataset;
  data.append('categoryId', categoryid)

  await fetch(`/portfolio/${categoryid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });
  window.location.href = '/portfolio';
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
