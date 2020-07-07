import freedrag from "../../src"
import any = jasmine.any

(function(){
  const blocks = document.getElementsByClassName('block')
  const bars = document.getElementsByClassName('bar')
  if (!blocks || !bars) {
    throw new Error('could not find elements.')
  }
  const block1 = blocks[0] as HTMLElement
  const block2 = blocks[1] as HTMLElement
  const react1 = bars[0].getBoundingClientRect()
  const react2 = bars[1].getBoundingClientRect()

  freedrag(block1, {
    boundary: react1,
    onlyHorizontalMove: true
  })

  freedrag({
    element: block2,
    onlyVerticalMove: true,
    boundary: {
      top: react2.top,
      left: react2.left,
      right: react2.right,
      bottom: react2.bottom
    }
  })
})()
