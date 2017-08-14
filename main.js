import './asset/style.css'
import THREE from 'three'
import './lib/CSS3DRenderer'

let scene, camera, renderer, controls
let objects = [], randomObj = []
 
const images = [
	[
		'image/1-1.jpg', 'image/1-2.jpg', 'image/1-3.jpg', 'image/1-4.jpg', 'image/1-5.jpg',
		'image/1-6.jpg', 'image/1-7.jpg', 'image/1-8.jpg', 'image/1-9.jpg', 'image/1-10.jpg',
		'image/1-11.jpg', 'image/1-12.jpg', 'image/1-13.jpg', 'image/1-14.jpg', 'image/1-15.jpg',
		'image/1-16.jpg', 'image/1-17.jpg', 'image/1-18.jpg'
	],
	[
		'image/2-1.jpg', 'image/2-2.jpg', 'image/2-3.jpg', 'image/2-4.jpg', 'image/2-5.jpg',
		'image/2-6.jpg', 'image/2-7.jpg', 'image/2-8.jpg', 'image/2-9.jpg', 'image/2-10.jpg',
		'image/2-11.jpg', 'image/2-12.jpg', 'image/2-13.jpg', 'image/2-14.jpg', 'image/2-15.jpg',
		'image/2-16.jpg', 'image/2-17.jpg', 'image/2-18.jpg'
	],
	[
		'image/3-1.jpg', 'image/3-2.jpg', 'image/3-3.jpg', 'image/3-4.jpg', 'image/3-5.jpg',
		'image/3-6.jpg', 'image/3-7.jpg', 'image/3-8.jpg', 'image/3-9.jpg', 'image/3-10.jpg',
		'image/3-11.jpg', 'image/3-12.jpg', 'image/3-13.jpg', 'image/3-14.jpg', 'image/3-15.jpg',
		'image/3-16.jpg', 'image/3-17.jpg', 'image/3-18.jpg'
	],
	[
		'image/4-1.jpg', 'image/4-2.jpg', 'image/4-3.jpg', 'image/4-4.jpg', 'image/4-5.jpg',
		'image/4-6.jpg', 'image/4-7.jpg', 'image/4-8.jpg', 'image/4-9.jpg', 'image/4-10.jpg',
		'image/4-11.jpg', 'image/4-12.jpg', 'image/4-13.jpg', 'image/4-14.jpg', 'image/4-15.jpg',
		'image/4-16.jpg', 'image/4-17.jpg', 'image/4-18.jpg'
	],
	[
		'image/5-1.jpg', 'image/5-2.jpg', 'image/5-3.jpg', 'image/5-4.jpg', 'image/5-5.jpg',
		'image/5-6.jpg', 'image/5-7.jpg', 'image/5-8.jpg', 'image/5-9.jpg', 'image/5-10.jpg',
		'image/5-11.jpg', 'image/5-12.jpg', 'image/5-13.jpg', 'image/5-14.jpg', 'image/5-15.jpg',
		'image/5-16.jpg', 'image/5-17.jpg', 'image/5-18.jpg'
	],
	[
		'image/6-1.jpg', 'image/6-2.jpg', 'image/6-3.jpg', 'image/6-4.jpg', 'image/6-5.jpg',
		'image/6-6.jpg', 'image/6-7.jpg', 'image/6-8.jpg', 'image/6-9.jpg', 'image/6-10.jpg',
		'image/6-11.jpg', 'image/6-12.jpg', 'image/6-13.jpg', 'image/6-14.jpg', 'image/6-15.jpg',
		'image/6-16.jpg', 'image/6-17.jpg', 'image/6-18.jpg'
	],
]

init()
animate()

function init(){
	scene = new THREE.Scene()
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 )
	camera.position.z =2500
	scene.add(camera)
	
	//renderer
	renderer = new THREE.CSS3DRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.domElement.style.position = 'absolute'
	document.getElementById( 'container' ).appendChild( renderer.domElement )
	
	//添加图片
	images.forEach((imgSrcArr, i)=>{
		let randomSingleObj = []
		let singleObj = []
		new Promise((resolve)=>{
			imgSrcArr.forEach((val, index)=>{
				let cssObj = null
				const element = document.createElement('img')
				element.src = val
				element.width = 60
				element.height = 60
				element.className = 'single-img'
				element.onload = ()=>{
					//随机位置
          
					cssObj = new THREE.CSS3DObject(element)
					cssObj.position.x = Math.random() * 500 - 250
					cssObj.position.y = Math.random() * 500 - 250
					cssObj.position.z = Math.random() * 500 - 250
					scene.add(cssObj)
					randomSingleObj.push(cssObj)
					//顺序排列位置
					let obj = new THREE.Object3D()
					obj.position.x = index%6 == 0 ? 0 : ((index%6) *60)
					obj.position.y = Math.floor(index/6) * 60 
					obj.position.z = i * 300 + (index%6) * 150
					// obj.position.z = i * 300
					obj.rotation.y = (-1)*Math.PI*2/5
					singleObj.push(obj)
				}
			})
			resolve()
		}).then(()=>{
			console.log(randomSingleObj)
			randomObj.push(randomSingleObj)
			objects.push(singleObj)
		})
	})
	render(scene, camera)
	//从随机位置到固定位置
	transform(objects, 2000)
	//controls
	controls = new THREE.TrackballControls( camera, renderer.domElement )
	controls.rotateSpeed = 5
	controls.minDistance = 500
	controls.maxDistance = 6000
	
	
}
function render(scene, camera){
	renderer.render(scene, camera)
}
function animate(){
	requestAnimationFrame(animate)
	render(scene, camera)
	TWEEN.update()
	controls.update()
}
function transform(targets, duration){
	targets.forEach((targetArr, i)=>{
		targetArr.forEach((target, index)=>{
			new TWEEN.Tween(randomObj[i][index].position)
					.to({x: target.position.x, y: target.position.y, z: target.position.z},Math.random() * duration + duration)
					.easing( TWEEN.Easing.Exponential.InOut )
					.start()
					
			new TWEEN.Tween( randomObj[i][index].rotation )
					.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
					.easing( TWEEN.Easing.Exponential.InOut )
					.start()
		})
	})
}