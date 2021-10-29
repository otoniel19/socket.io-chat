module.exports = function() {
  var base = new Date()
  var hora = base.getHours()
  var minuto = base.getMinutes()
  var segundo = base.getSeconds()

  if (hora < 9) {
    hora = `0${hora}`
  }
  if (minuto < 9) {
    minuto = `0${minuto}`
  }
  if (segundo < 9) {
    minuto = `0${segundo}`
  }

  var tempo = `${hora}:${minuto}:${segundo}`
  return tempo
}