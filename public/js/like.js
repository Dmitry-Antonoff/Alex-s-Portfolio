const likes = document.getElementsByClassName('like');

[...likes].forEach((like) => {
  like.addEventListener('click', async (e) => {
    const { id, categoryname } = e.target.parentNode.dataset;
    const liked = [...e.target.parentNode.classList].includes('liked')
    await fetch(`/portfolio/${categoryname}/${id}/like`, {
      method: liked?'DELETE':'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
if (liked) {
  e.target.parentNode.classList.remove('liked')
  
} else {
  e.target.parentNode.classList.add('liked')
}
  });
});
