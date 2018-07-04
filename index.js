(() => {
  const start = new Date("Jul 01 2018 17:00:00 UTC+3").getTime(),
    passesPerGame = 1114,
    missesPerGame = 2,
    msPerGame = 120 * 60 * 1000,
    msPerPass = Math.ceil(msPerGame / passesPerGame)

  document.addEventListener('DOMContentLoaded', ev => {
    const counter = document.querySelector('.counter'),
          misses = document.querySelector('.misses')

    function updateCounter() {
      const now = new Date().getTime()
      counter.innerText = `A Espanha já tentou ${Math.floor((now - start) / msPerPass)} passes`
      misses.innerText = `e perdeu ${Math.floor((now - start) / msPerGame)} vezes`
    }

    window.requestAnimationFrame(updateCounter)
    setInterval(window.requestAnimationFrame, msPerPass, updateCounter)
  })
})()
