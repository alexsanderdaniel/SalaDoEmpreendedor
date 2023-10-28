// Menu
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const optionsMenu = document.getElementById('options-menu');

  // Quando o cursor passa sobre o ícone
  menuIcon.addEventListener('mouseover', function () {
    optionsMenu.classList.remove('hidden');
  });

  // Quando o cursor sai das opções
  optionsMenu.addEventListener('mouseleave', function () {
    optionsMenu.classList.add('hidden');
  });
});

// Header
window.addEventListener('scroll', function () {
  const img = document.querySelector('.menu a img');

  if (window.scrollY > 0) {
    img.style.height = '50px';
  } else {
    img.style.height = '80px';
  }
});

// Temas
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('sol');
  const body = document.body;
  const header = document.querySelector('header');
  const titleBlue = document.querySelectorAll('.title-blue');
  const yellowButtons = document.querySelectorAll('.yellow-gradient-button');
  const blueButtons = document.querySelectorAll('.blue-gradient-button');
  const footer = document.querySelector('footer');
  const optionsMenus = document.querySelectorAll('.secondary-container');

  menuIcon.addEventListener('click', function () {
    body.style.backgroundColor = '#f9f1f1';

    header.style.backgroundColor = '#ffffff';

    titleBlue.forEach((title) => {
      title.style.color = 'black';
    });

    yellowButtons.forEach((button) => {
      button.style.background =
        'linear-gradient(to bottom, #fba40f 5%, #f8d700 100%)';
    });

    blueButtons.forEach((button) => {
      button.style.background =
        'linear-gradient(to bottom, #0a9bfb 5%, #0ae8f8 100%)';
    });

    optionsMenus.forEach((optionsMenu) => {
      optionsMenu.style.background = '#a7a7a7';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('lua');
  const body = document.body;
  const header = document.querySelector('header');
  const titleBlue = document.querySelectorAll('.title-blue');
  const yellowButtons = document.querySelectorAll('.yellow-gradient-button');
  const blueButtons = document.querySelectorAll('.blue-gradient-button');
  const footer = document.querySelector('footer');
  const optionsMenus = document.querySelectorAll('.secondary-container');

  menuIcon.addEventListener('click', function () {
    body.style.backgroundColor = '#3a3939';

    header.style.backgroundColor = '#ded4d4';

    titleBlue.forEach((title) => {
      title.style.color = '#9ca7b3';
    });

    yellowButtons.forEach((button) => {
      button.style.background =
        'linear-gradient(to bottom, #9e6503 5%, #fba40f 100%)';
    });

    blueButtons.forEach((button) => {
      button.style.background =
        'linear-gradient(to bottom, #044a78 5%, #0a9bf0 100%)';
    });

    footer.style.color = '';

    optionsMenus.forEach((optionsMenu) => {
      optionsMenu.style.background = '#020202';
    });
  });
});

// Formulário serviço utilizado
document.addEventListener('DOMContentLoaded', function () {
  const botoesMostrarPopUp = document.querySelectorAll(
    '.cards-forms-service-note',
  );
  const botaoFecharPopUp = document.getElementById('fecharPopUp');
  const popupContainer = document.getElementById('popupContainer');

  botoesMostrarPopUp.forEach((botao) => {
    botao.addEventListener('click', function () {
      popupContainer.style.display = 'block';
    });
  });

  botaoFecharPopUp.addEventListener('click', function () {
    popupContainer.style.display = 'none';
  });
});

// // Ocultar Seções
document.addEventListener('DOMContentLoaded', function () {
  const serviceToggleButton = document.querySelector('#serviceButton');
  const noteToggleButton = document.querySelector('#noteButton');
  // const certificateToggleButton = document.querySelector('#certificateButton');
  const infToggleButton = document.querySelector('#infButton');

  const servicesSection = document.getElementById('cards-container-services');
  const noteSection = document.getElementById('cards-container-note');
  // const certificateSection = document.getElementById('cards-container-certificate');
  const infSection = document.getElementById('cards-container-inf');

  serviceToggleButton.addEventListener('click', function () {
    toggleSectionVisibility(servicesSection, serviceToggleButton);
  });

  noteToggleButton.addEventListener('click', function () {
    toggleSectionVisibility(noteSection, noteToggleButton);
  });

  // certificateToggleButton.addEventListener('click', function () {
  //     toggleSectionVisibility(certificateSection, certificateToggleButton);
  // });

  infToggleButton.addEventListener('click', function () {
    toggleSectionVisibility(infSection, infToggleButton);
  });

  function toggleSectionVisibility(section, toggleButton) {
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      toggleButton.textContent = 'Ocultar';
    } else {
      section.classList.add('hidden');
      toggleButton.textContent = 'Mostrar';
    }
  }
});

// Pesquisa Atualizar Dados
document.addEventListener('DOMContentLoaded', function () {
  const botaoMostrarPopUp = document.getElementById('atualiza-dados');
  const botaoFecharPopUp = document.getElementById('fechar-atualiza-dados');
  const popupContainer = document.getElementById('popupInformacoes');

  botaoMostrarPopUp.addEventListener('click', function () {
    popupContainer.style.display = 'block';
  });

  botaoFecharPopUp.addEventListener('click', function () {
    popupContainer.style.display = 'none';
  });
});

// Pesquisa Satisfação
document.addEventListener('DOMContentLoaded', function () {
  const botaoMostrarPopUp = document.getElementById('satisfacao');
  const botaoFecharPopUp = document.getElementById('fechar-satisfacao');
  const popupContainer = document.getElementById('popupSatisfacao');

  botaoMostrarPopUp.addEventListener('click', function () {
    popupContainer.style.display = 'block';
  });

  botaoFecharPopUp.addEventListener('click', function () {
    popupContainer.style.display = 'none';
  });
});

//Rodapé
function createFooterLink(href, text) {
  return `<li><a target="_blank" href="${href}">${text}</a></li>`;
}
