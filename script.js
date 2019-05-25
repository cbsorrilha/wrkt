function renderDayChange(shownDay) {
  const dict = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
  }
  const element = document.getElementById(dict[shownDay]);

  Array.from(document.getElementsByClassName('day')).forEach(el => {
    el.classList.add('hidden');
  })

  element.classList.remove('hidden');
}

(function () {

  let shownDay = (new Date()).getDay();

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');


  function nextDay() {
    shownDay = shownDay + 1 > 7 ? 1 : shownDay + 1;
    renderDayChange(shownDay)
  }

  function prevDay() {
    shownDay = shownDay - 1 < 1 ? 7 : shownDay - 1;
    renderDayChange(shownDay)
  }

  prevBtn.addEventListener('click', prevDay);
  nextBtn.addEventListener('click', nextDay);

  renderDayChange(shownDay)

})()