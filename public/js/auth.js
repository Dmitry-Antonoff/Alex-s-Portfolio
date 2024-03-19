const { registration, login } = document.forms;

if (window.location.href.split('/')[4] === 'registration') {
  const saveRegDataCheckbox = document.getElementById('regRememberMe');

  saveRegDataCheckbox?.addEventListener('change', function () {
    const formData = {};
    formData.name = registration.userName.value;
    formData.email = registration.email.value;

    if (saveRegDataCheckbox.checked) {
      localStorage.setItem('formRegData', JSON.stringify(formData));
    } else {
      localStorage.removeItem('formRegData');
    }
  });

  let savedRegFormData = localStorage.getItem('formRegData');
  if (savedRegFormData) {
    savedRegFormData = JSON.parse(savedRegFormData);
    registration.userName.value = savedRegFormData.name;
    registration.email.value = savedRegFormData.email;
    saveRegDataCheckbox.checked = true;
  }
}

if (window.location.href.split('/')[4] === 'login') {
  const saveLogDataCheckbox = document.getElementById('logRememberMe');
  saveLogDataCheckbox?.addEventListener('change', function () {
    const formData = {};
    formData.email = login.email.value;

    if (saveLogDataCheckbox.checked) {
      localStorage.setItem('formLogData', JSON.stringify(formData));
    } else {
      localStorage.removeItem('formLogData');
    }
  });

  let savedLogFormData = localStorage.getItem('formLogData');
  if (savedLogFormData) {
    savedLogFormData = JSON.parse(savedLogFormData);
    login.email.value = savedLogFormData.email;
    saveLogDataCheckbox.checked = true;
  }
}

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

function isValidEmail(email) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

async function submitForm(form, endpoint) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
  return response;
}

registration?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(registration);
  if (isValidEmail(e.target.email.value)) {
    const response = await submitForm(Object.fromEntries(data), '/auth/registration');
    if (response.status === 200) {
      showToast('You have successfully registered', { type: 'success' });
      setTimeout(() => (window.location.href = '/auth/login'), 2000);
    } else if (response.status === 401) {
      showToast('Email address is already taken');
    }
  } else {
    showToast('Invalid email format');
  }
});

login?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(login);

  if (isValidEmail(e.target.email.value)) {
    const response = await submitForm(Object.fromEntries(data), '/auth/login');
    if (response.status === 200) {
      window.location.href = '/';
    } else {
      showToast('Incorrect email address or password');
    }
  } else {
    showToast('Please enter the correct email format');
  }
});
