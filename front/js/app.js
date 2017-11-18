var body = $('#vagas')

window.onload = () => {
  const socket = io('http://127.0.0.1:8000')

  socket.on('connect', (payload) => console.info('[IO] connect:', socket.id))
  socket.on('error', (err) => console.error('[IO] error:', err))

  socket.on('vagas.change', (vaga) => {
    console.info('[IO] vagas.change:', vaga)

    if (vaga.new_val === null) {
      const $vaga = $('#vaga_' + vaga.old_val.number)
      return $vaga.remove()
    }

    changeVaga(vaga)
  })

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  fetch('http://127.0.0.1:3000/vagas', {headers})
    .then((response) => response.json())
    .then((data) => makeVagas(data))
    .catch((err) => console.log(err))

  $(document).on('click', '.text', function (e) {
    const id = $(this).data('id')

    console.info('[IO] vagas.update:', id)
    socket.emit('vagas.update', {id})
  })
}

const makeVagas = (vagas) => {

  body.html('')

  for (let vaga in vagas) {
    const el = vagas[vaga]
    makeVaga(el)
    makePosition(el)
  }
}

const changeVaga = (vaga) => {

  if (vaga.new_val && vaga.old_val) {
    return makePosition(vaga.new_val)
  }

  if (vaga.new_val && vaga.old_val === null) {
    makeVaga(vaga.new_val)
    makePosition(vaga.new_val)
  }
}

const makeVaga = (vaga) => {
  body.append('<span title="Vaga ' + vaga.number + '" id="vaga_' + vaga.number + '" data-id="' + vaga.id + '" data-name="Vaga ' + vaga.number + '" class="hidden"></span>')
}

const makePosition = (vaga) => {
  const $vaga = $('#vaga_' + vaga.number)

  const color = vaga.state ? 'red' : '#449d44'

  $vaga.addClass('text')
  $vaga.css({
    background: color,
    top: vaga.position.x + 'px',
    left: vaga.position.y + 'px',
  })
}
