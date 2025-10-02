const viewToggleButtons = document.querySelectorAll('.view-toggle__button');
const topicModalTemplate = document.getElementById('topic-modal-template');
const seeAllTopicsButton = document.querySelector('.see-all');
let topicDialog;

viewToggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    viewToggleButtons.forEach((other) => other.classList.remove('is-active'));
    button.classList.add('is-active');
    document.body.dataset.view = button.dataset.view;
  });
});

if (topicModalTemplate && seeAllTopicsButton) {
  topicDialog = topicModalTemplate.content.firstElementChild.cloneNode(true);
  document.body.appendChild(topicDialog);

  seeAllTopicsButton.addEventListener('click', () => {
    topicDialog.showModal();
    const searchField = topicDialog.querySelector('#topic-search');
    if (searchField) {
      searchField.focus();
    }
  });

  topicDialog.addEventListener('close', () => {
    seeAllTopicsButton.focus();
  });

  const topicButtons = topicDialog.querySelectorAll('.topic-results button');
  topicButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-selected');
    });
  });

  const topicSearch = topicDialog.querySelector('#topic-search');
  if (topicSearch) {
    topicSearch.addEventListener('input', () => {
      const query = topicSearch.value.toLowerCase();
      topicButtons.forEach((btn) => {
        const matches = btn.textContent.toLowerCase().includes(query);
        btn.parentElement.style.display = matches ? '' : 'none';
      });
    });
  }
}

const floatingBar = document.querySelector('.floating-bar');
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const direction = current > lastScrollY ? 'down' : 'up';
  floatingBar.dataset.direction = direction;
  if (direction === 'down' && current > 120) {
    floatingBar.classList.add('is-hidden');
  } else {
    floatingBar.classList.remove('is-hidden');
  }
  lastScrollY = current;
});

const pills = document.querySelectorAll('.pill');
pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pill.classList.toggle('is-active');
  });
});

const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chip.classList.add('is-removing');
    setTimeout(() => chip.remove(), 250);
  });
});
