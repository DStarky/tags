(function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  function shuffle(arr) {
    result = [];
    while (result.length < arr.length) {
      let randomNum = Math.floor((Math.random() * 15) + 1);
      if (!(result.includes(randomNum))) result.push(randomNum);
    }
    return result;
  }

  function turn(toward) {
    active.classList.remove('active');

    switch (toward) {
      case 'up':
        x -= 1;
        active = document.getElementById(`${x}${y}`);
        document.getElementById(`${x + 1}${y}`).textContent = active.textContent;
        break;
      case 'down':
        x += 1;
        active = document.getElementById(`${x}${y}`);
        document.getElementById(`${x - 1}${y}`).textContent = active.textContent;
        break;
      case 'left':
        y -= 1;
        active = document.getElementById(`${x}${y}`);
        document.getElementById(`${x}${y + 1}`).textContent = active.textContent;
        break;
      case 'right':
        y += 1;
        active = document.getElementById(`${x}${y}`);
        document.getElementById(`${x}${y - 1}`).textContent = active.textContent;
        break;

    }

    active.classList.add('active');
    active.textContent = '';
  }

  const randomArr = shuffle(arr);

  const cells = [...document.querySelectorAll('.cell')];
  cells.forEach(cell => cell.textContent = randomArr.pop());

  let active = document.querySelector('.active');
  let [x, y] = active.id.split('');

  document.addEventListener('keyup', (e) => {
    const { code: key } = e;

    if (key === 'ArrowUp' && x > 0) turn('up');
    if (key === 'ArrowDown' && x < 3) turn('down');
    if (key === 'ArrowLeft' && y > 0) turn('left');
    if (key === 'ArrowRight' && y < 3) turn('right');

  })
})()