const x1String = prompt('Digite o ponto x1:')
const x1 = Number(x1String)

const y1String = prompt('Digite o ponto y1:')
const y1 = Number(y1String)

const x2String = prompt('Digite o ponto x2:')
const x2 = Number(x2String)

const y2String = prompt('Digite o ponto y2:')
const y2 = Number(y2String)

d = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))

console.log(`A distância entre os pontos p1(${x1},${y1}) e p2(${y1},${y2}) é ${d}`)



