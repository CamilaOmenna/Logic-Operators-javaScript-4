const prompt = require('prompt-sync')()

const secondsString = prompt('Adiciona a duração de  em segundos:')
const seconds = Number(secondsString)

const horas= seconds / 3600

const minutos = (seconds % 3600) / 60

const segundos = (seconds % 3600) % 60

console.log('Sua quantidade de eventos em horas foi ${horas}horas.')
console.log('A quantidade de minutos do evento na fábrica é de ${minutos} minutos.')
console.log(` Duração em segundos no evento na fábrica foi de ${segundosrest} segundos.`)
