const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

/* - - - - - - - - - - - - - - - - - *\
  С Т В О Р Е Н Н Я   П О Л Я   Г Р И
\* - - - - - - - - - - - - - - - - - */

// Поле гри (20х13)
const fieldWidth = 20
const fieldHeight = 13

// 2д масив клітинок
const field = Array.from({ length: fieldHeight }, (_, row) => Array.from({ length: fieldWidth }, (_, column) => {
  return {y: row, x: column, IsFreeCell: true}
}))

// Створення клітинок
field.forEach((row) => row.forEach(ceil => {
  //робимо квадратики і їх рамки
  ctx.strokeStyle = "#fbeaea" //колір обводки клітинок
  ctx.lineWidth = '1'
  ctx.rect(ceil.x*35, ceil.y*35, 35,35)
  ctx.stroke()
  //заливаємо сірим якщо вони крайні
  ctx.fillStyle = '#D8D9D8' //колір крайніх
  if(ceil.x === 0 || ceil.y === 0 || ceil.x === fieldWidth-1 || ceil.y === fieldHeight-1) {
    ctx.fillRect(ceil.x*35, ceil.y*35, 35,35)
    ceil.IsFreeCell = false
  }
}))