// Adiciona a classe 'active' para a tab clicada e mostra o conteúdo correspondente
var tabs = document.querySelectorAll('.tabs a');
tabs.forEach(function(tab) {
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    
    var activeTab = document.querySelector('.tabs li.active');
    activeTab.classList.remove('active');
    var activeContent = document.querySelector('.tab-content.active');
    activeContent.classList.remove('active');
    
    var target = event.target;
    var parent = target.parentElement;
    parent.classList.add('active');
    
    var href = target.getAttribute('href');
    var matchingContent = document.querySelector(href);
    matchingContent.classList.add('active');
  });
});
