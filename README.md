# Free Drag

This is a typescript library aimed at making elements draggable on both pc and mobile environment. It's in development and inspired by [an article](https://javascript.info/mouse-drag-and-drop) of JavaScript Info.

## Installing 

```shell
npm i -D free-drag
```

It supports es5, umd and typescript modules.

## Usage

1. make an element draggable

```javascript
freedrag(element)

// or
freedrag.draggable(element)
```

2. giving more controls by adding options

```javascript
freedrag(element, {
	// options
})

// or
freedrag({
	element,
	// other options
})
```

3. options could be

element: HTMLElement

leaveHandler: hook activating when dragging element leaves elements with 'draggable' class

enterHandler: hook activating when dragging element enters elements with 'draggable' class

draggbleClassName: default value is 'draggable' and it could be customerly defined

onlyHorizontalMove: default value is false, element can only move horizontally when setting true

onlyVerticalMove:  default value is false, element can only move vertically when setting true

boundary: it's an object having left, top, right and bottom attributes limiting moving area.

moveHandler: it's an object having onMoveStart, onMove and onMoveEnd hooks and onMoveInterval (number) throttling onMove hook

preventDefaultTouch: default value is true, prevent default touching on mobile causing page shaking 

## Demo

https://dollylosingweight.today/test-free-drag

Or watching source code at https://github.com/zsqzsq1993/test-free-drag

