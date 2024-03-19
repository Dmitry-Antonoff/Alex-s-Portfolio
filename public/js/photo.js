const { photoEdit } = document.forms;
const deletePhoto = document.getElementById('deletePhoto');

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

  await fetch(`/portfolio/${categoryname}/${photoid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });
  window.location.href = `/portfolio/${categoryname}/${photoid}`;
});
