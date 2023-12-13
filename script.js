const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes[0].addEventListener('change', function() {
  const isChecked = this.checked;

  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].disabled = !isChecked;
    checkboxes[i].checked = false;
  }
});
