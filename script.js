function makeASnake(sizeOfSnake, snakeSymbol) {
    if (sizeOfSnake <= 0) {
        return '';
    }
      let snake = '~<:=';
      for (let i = 0; i < sizeOfSnake; i++) {
        if (i % 2 === 0) {
          snake += snakeSymbol.toLowerCase();
        } else {
          snake += snakeSymbol.toUpperCase();
        }
    }
      snake += '=++';
    
      return snake;
    }
    const snakeSize = 20;
    const snakeSymbol = 's';
    const snake = makeASnake(snakeSize, snakeSymbol);
    console.log(snake);



function makeATriangle(triangleHeight, triangleSymbol) {
    if (triangleHeight <= 0) {
        return '';
      }
    
      let triangle = '';
    
      
      for (let row = 1; row <= triangleHeight; row++) {
        for (let col = 1; col <= row; col++) {
          triangle += triangleSymbol;
        }
        if (row < triangleHeight) {
          triangle += '\n';
        }
      }
    
      return triangle;
    }
    
    const height = 5;
    const symbol = 't';
    const triangle = makeATriangle(height, symbol);
    console.log(triangle);
