import { FreeDragConfig } from '../type'

//
const defaultConfig: FreeDragConfig = {
  draggableClassName: 'draggable',

  onlyHorizontalMove: false,

  onlyVerticalMove: false,

  boundary: {
    left: 0,

    right: window.innerWidth,

    top: 0,

    bottom: window.innerHeight
  }
}

export default defaultConfig
