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

  return square;
}

function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');

  return row;
}

fillGrid(canvas, 16);
