const canvas = document.querySelector('#canvas');

function fillGrid(grid, size = 16) {
  let numSquares = size * size;

  for (let i = 0; i < size; i++) {
    let row = createRow();

    for (let j = 0; j < size; j++) {
      row.appendChild(createSquare());
    }

    canvas.appendChild(row);
  }
}

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', (e) => paint(e.target));

  return square;
}

function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');

  return row;
}

function paint(square) {
  if (square.classList.contains('painted-10')) {
    square.classList.remove('painted-10');
    square.classList.add('painted-20');
  } else if (square.classList.contains('painted-20')) {
    square.classList.remove('painted-20');
    square.classList.add('painted-30');
  } else if (square.classList.contains('painted-30')) {
    square.classList.remove('painted-30');
    square.classList.add('painted-40');
  } else if (square.classList.contains('painted-40')) {
    square.classList.remove('painted-40');
    square.classList.add('painted-50');
  } else {
    square.classList.add('painted-10');
  }
}

fillGrid(canvas, 16);
