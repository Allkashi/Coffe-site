document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollButton').addEventListener('click', function() {
      var targetElement = document.getElementById('targetElement');
  
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });


var menuContainer = document.getElementById('menuContainer');
var isDragging = false;
var startX = 0;
var scrollLeft = 0;

menuContainer.addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.pageX - menuContainer.offsetLeft;
  scrollLeft = menuContainer.scrollLeft;
  menuContainer.style.cursor = 'grabbing';
});

menuContainer.addEventListener('mousemove', function(e) {
  if (!isDragging) return;
  
  e.preventDefault();
  
  var x = e.pageX - menuContainer.offsetLeft;
  var scroll = x - startX;
  menuContainer.scrollLeft = scrollLeft - scroll;
});

menuContainer.addEventListener('mouseup', function() {
  isDragging = false;
  menuContainer.style.cursor = 'grab';
});
  });

