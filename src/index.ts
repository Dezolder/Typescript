import './index.scss'
import { data, Data } from './data'

let playingSoundId: string
const list = document.querySelector('.weather-list') as HTMLUListElement

const soundElement = new Audio() as HTMLAudioElement
soundElement.loop = true

const volume = document.querySelector('.volume-controller') as HTMLElement
volume.addEventListener('input', (e) => {
  soundElement.volume = e.currentTarget?.value / 100
})

list.addEventListener('click', ({ target }) => {
  const targetId = target?.closest('[data-item-id]').dataset.itemId
  if (!targetId) return
  const item = data.find((i) => i.id === targetId)!

  if (playingSoundId !== item.id) {
    playingSoundId = item.id
    soundElement.src = item.sound
    soundElement.play()
    document.body.style.backgroundImage = `url('${item.background}')`
    return
  }

  if (soundElement.paused) {
    soundElement.play()
  } else {
    soundElement.pause()
  }
})

function renderItem(item: Data) {
  const listItem = document.createElement('li') as HTMLElement
  listItem.classList.add('weather-list__item')

  const weatherItem = document.createElement('button') as HTMLButtonElement
  weatherItem.classList.add('weather-item')
  weatherItem.dataset.itemId = item.id
  weatherItem.style.backgroundImage = `url('${item.background}')`

  const itemIcon = document.createElement('img') as HTMLImageElement
  itemIcon.classList.add('weather-item__icon')
  itemIcon.src = item.ico

  weatherItem.append(itemIcon)
  listItem.append(weatherItem)
  list.append(listItem)
}

data.forEach(renderItem)
