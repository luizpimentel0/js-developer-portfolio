const accordionTrigger = document.querySelectorAll('.accordion .trigger');

accordionTrigger.forEach((trigger) =>
  trigger.addEventListener('click', (e) => {
    const accordion = trigger.parentElement;
    accordion.classList.toggle('open');
  }),
);
