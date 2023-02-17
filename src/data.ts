import sunIcon from '../public/assets/icons/sun.svg'
import rainIcon from '../public/assets/icons/cloud-rain.svg'
import winterIcon from '../public/assets/icons/cloud-snow.svg'

import summerBg from '../public/assets/summer-bg.jpg'
import rainyBg from '../public/assets/rainy-bg.jpg'
import winterBg from '../public/assets/winter-bg.jpg'

import summerSound from '../public/assets/sounds/summer.mp3'
import rainSound from '../public/assets/sounds/rain.mp3'
import winterSound from '../public/assets/sounds/winter.mp3'

export interface Data {
  id: string
  ico: any
  background: any
  sound: any
}

export const data: Data[] = [
  {
    id: '1',
    ico: sunIcon,
    background: summerBg,
    sound: summerSound,
  },
  {
    id: '2',
    ico: rainIcon,
    background: rainyBg,
    sound: rainSound,
  },
  {
    id: '3',
    ico: winterIcon,
    background: winterBg,
    sound: winterSound,
  },
]
