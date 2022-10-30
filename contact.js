const scriptURL = 'https://script.google.com/macros/s/AKfycbyh5g3XRs6ZOZWY4mR2-fs8hzqUNzcOi1cyH_REft2AZds7_017_WXElvaZR1V_0lNkrQ/exec';
const form = document.forms['Contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  /* ketika tombol submit di klik */
  /* tampilkan tombol loading,hilangkan tombol kirim */
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      /* tampilkan tombol kirim,hilangkan tombol loading */
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      /* tampilkan alert */
      myAlert.classList.toggle('d-none');
      /* Reset formnya */
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

// AOS
AOS.init({
  once: true,
});
