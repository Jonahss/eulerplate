document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector(INSTALL_OPTIONS.form.selector);

  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'eulerplate');

  var submit = form.querySelector('input[type=submit]');
  if (submit){
    form.insertBefore(checkbox, submit);
  } else {
    form.appendChild(checkbox);
  }
})
