const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

