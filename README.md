# facewall

<http://tingyinhelen.github.io/facewall>

# API

## Class FaceWall

## Class Thumbnail

1. constructor(thumb: string | ImageData, orignal?: string | ImageData)
1. url(): string
1. orignalUrl(): string
1. to(wall: Wall): Promise \<void\>

## Class Wall

1. constructor(thumb: Thumbnail | Thumbnail[])
1. add(thumb: Thumbnail | Thumbnail[]): Promise\<void\>
1. del(thumb: Thumbnail | Thumbnail[]): Promise\<void\>
1. destroy():  Promise\<void\>

Example:

```js
const canvas = document.getElementById('facewall-canvas')

const facewall = new Facewall(canvas)
await facewall.init()

const wall1 = new Wall() // a Wall class instance
const wall2 = new Wall()  // should be able to accept a Thumbnail list as parameters, like: new Wall([thumb1, thumb2])

facewall.add(wall1)     // anamition: create a wall in 3d sense dynamicly
facewall.add(wall2)     // anamition: create a wall in 3d sense dynamicly

const thumb1 = new Thumbnail('image/6-1.jpg', 'image/bigImg6.jpeg')
const thumb2 = new Thumbnail('image/7-2.jpg', 'image/bigImg7.jpeg')

wall1.addThumb(thumb1)  // anamition: a new face thumb appear
wall2.addThumb(thumb2)  // anamition: a new face thumb appear

wall1.remove(thumb1)    // anamition: a new face thumb disappear
wall2.add(thumb1)       // anamition: a new face thumb appear

thumb2.to(wall1)        // anamition: move thumb2 from wall2 to wall1

wall2.destroy()         // anamition: disappear
```
