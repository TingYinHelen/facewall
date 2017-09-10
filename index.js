import 'babel-polyfill'
import $ from 'jquery'
// const THREE = require('three')
let imgArr = [
  [
    {smallImg: 'static/image/1-1.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-2.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-3.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-4.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-5.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-6.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-7.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-8.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-9.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-10.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-11.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-12.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-13.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-14.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-15.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-16.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-17.jpg', bigImg: 'static/image/bigImg1.jpeg'},
    {smallImg: 'static/image/1-18.jpg', bigImg: 'static/image/bigImg1.jpeg'},
  ],
  [
    {smallImg: 'static/image/2-1.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-2.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-3.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-4.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-5.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-6.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-7.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-8.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-9.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-10.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-11.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-12.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-13.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-14.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-15.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-16.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-17.jpg', bigImg: 'static/image/bigImg2.jpeg'},
    {smallImg: 'static/image/2-18.jpg', bigImg: 'static/image/bigImg2.jpeg'},
  ],
  [
    {smallImg: 'static/image/3-1.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-2.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-3.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-4.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-5.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-6.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-7.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-8.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-9.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-10.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-11.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-12.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-13.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-14.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-15.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-16.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-17.jpg', bigImg: 'static/image/bigImg3.jpeg'},
    {smallImg: 'static/image/3-18.jpg', bigImg: 'static/image/bigImg3.jpeg'},
  ],
  [
    {smallImg: 'static/image/4-1.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-2.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-3.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-4.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-5.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-6.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-7.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-8.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-9.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-10.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-11.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-12.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-13.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-14.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-15.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-16.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-17.jpg', bigImg: 'static/image/bigImg4.jpg'},
    {smallImg: 'static/image/4-18.jpg', bigImg: 'static/image/bigImg4.jpg'},
  ],
  [
    {smallImg: 'static/image/5-1.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-2.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-3.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-4.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-5.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-6.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-7.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-8.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-9.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-10.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-11.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-12.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-13.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-14.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-15.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-16.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-17.jpg', bigImg: 'static/image/bigImg5.jpeg'},
    {smallImg: 'static/image/5-18.jpg', bigImg: 'static/image/bigImg5.jpeg'},
  ],
  [
    {smallImg: 'static/image/6-1.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-2.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-3.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-4.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-5.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-6.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-7.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-8.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-9.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-10.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-11.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-12.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-13.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-14.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-15.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-16.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-17.jpg', bigImg: 'static/image/bigImg6.jpeg'},
    {smallImg: 'static/image/6-18.jpg', bigImg: 'static/image/bigImg6.jpeg'},
  ],
]
$(function(){
    let scene, renderer, camera, controls, canvasObj
    let randomObj = new THREE.Object3D()
    // let objectName = 0
    let wallIndex = 0
    let originObjList = new THREE.Object3D()
    class Facewall{
        constructor(canvas){
            this.canvas = canvas
            canvasObj = canvas
            this.wallObjects = new THREE.Object3D()
            this.interval = 0
        }
        init(facewall){
            const self = this
            //计算出每个墙之间的间隙，并且左右距离canvas要有相同的间隙
            this.interval = self.canvas.offsetWidth/(facewall.length+1)
            initRender()
            animate()

            function initRender(){
              scene = new THREE.Scene()
              camera = new THREE.PerspectiveCamera( 40, self.canvas.offsetWidth / self.canvas.offsetWidth, 1, 10 )

              // camera.position.z =2200
              camera.position.z = 1000
              //renderer
              renderer = new THREE.CSS3DRenderer()
              renderer.setSize(self.canvas.offsetWidth, self.canvas.offsetHeight)
              renderer.domElement.style.position = 'absolute'
              self.canvas.appendChild( renderer.domElement )
              //添加图片

              facewall.forEach((imgSrcArr, i)=>{
                const singleWall = new THREE.Object3D() //顺序的单个wall
                let randomSingleObj = new THREE.Object3D() //随机单个wall

                imgSrcArr.wallArr.children.forEach((face, index)=>{
                  let cssObj = null
                  const element = document.createElement('img')
                  element.width = 60
                  element.height = 60
                  element.className = 'single-img'
                  element.src = face.thumb
                  $(element).data('outIndex', i)
                  $(element).data('innerIndex', index)
                  $(element).data('orignal', face.orignal)
                  //随机位置
                  self.randomPosition(element, scene, randomSingleObj, {wallIndex: i, faceIndex: index})
                  //顺序排列位置
                  let obj = new THREE.Object3D()
                  obj.position.x = i * self.interval - (self.canvas.offsetWidth/2) + self.interval
                  obj.position.y = Math.floor(index/6)*60 - ((imgSrcArr.wallArr.children.length/6) * 60/2-30)
                  obj.position.z = (index%6)*60 - 180
                  obj.rotation.y = (-1) * Math.PI/2
                  singleWall.add(obj)
                })
                randomObj.add(randomSingleObj)
                self.wallObjects.add(singleWall)
              })

              scene.add(randomObj)

              //坐标中心点用来测试
              // const element = document.createElement('div')
              // element.className = 'single-div'
              // let cssObj = new THREE.CSS3DObject(element)
              // cssObj.position.x = 0
              // cssObj.position.y = 0
              // cssObj.position.z = 0
              // scene.add(cssObj)

              render(scene, camera)
              //从随机位置到固定位置

              transform(self.wallObjects, 2000)
              // controls
              controls = new THREE.TrackballControls( camera, renderer.domElement )
              controls.rotateSpeed = 4
            }
            //动画
            function animate(){
              requestAnimationFrame(animate)
              render(scene, camera)
              TWEEN.update()
              controls.update()
              //禁止垂直方向旋转
              camera.position.y = 0
              camera.rotation.x = 0
              camera.rotation.z = 0
              camera.lookAt(new THREE.Vector3(0,0,0))
            }
        }
        async add(wall){
          const self = this
          // const index = this.wallObjects.children.length
          const index = randomObj.children.length
          let targetObj = new THREE.Object3D()
          let randomSingleObj = new THREE.Object3D()
          wall.wallArr.children.forEach( async(val, i)=>{
            const element = document.createElement('img')
            element.width = 60
            element.height = 60
            element.className = 'single-img'
            element.src = val.thumb
            // $(element).data('outIndex', i)
            // $(element).data('innerIndex', index)
            // $(element).data('orignal', val.orignal)
            this.randomPosition(element, scene, randomSingleObj, {wallIndex: (index-1), faceIndex: i})
            //顺序排列位置
            let obj = new THREE.Object3D()
            obj.position.x = (index) * self.interval - (self.canvas.offsetWidth/2)
            obj.position.y = Math.floor(i/6)*60 - ((wall.wallArr.children.length/6) * 60/2-30)
            obj.position.z = (i%6)*60 - 180
            obj.rotation.y = (-1) * Math.PI/2
            await targetObj.add(obj)
          })
          this.wallObjects.add(targetObj)
          randomObj.add(randomSingleObj)
          scene.add(randomObj)
          this.transformSingle(targetObj, 500)
        }
        async transformSingle(targetObj, duration){
            let count = randomObj.children.length-1
            if(!randomObj.children[count]){
              return;
            }
            await targetObj.children.forEach(async(target, i)=>{
              if(randomObj.children[count].children[i]){
                await new TWEEN.Tween( randomObj.children[count].children[i].position )
                  .to({x: target.position.x, y: target.position.y, z: target.position.z},Math.random() * duration + duration)
                  .easing( TWEEN.Easing.Exponential.InOut )
                  .start()
                await new TWEEN.Tween( randomObj.children[count].children[i].rotation )
                  .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
                  .easing( TWEEN.Easing.Exponential.InOut )
                  .start()
              }
            })
            await this.transformToCenter()
        }
        //增加墙之后置于中心
        async transformToCenter(){
          const self = this
          this.interval = this.canvas.offsetWidth/(randomObj.children.length+1)
          await randomObj.children.forEach(async (wall, index)=>{
            await wall.children.forEach(async(face, i)=>{
              const op = face.position
              await new TWEEN.Tween(op)
                  .to({
                    x:  (index+1) * self.interval - (self.canvas.offsetWidth/2),
                    y: op.y,
                    z: op.z
                  }, 500)
                  .easing(TWEEN.Easing.Quadratic.Out)
                  .start()
            })
          })
        }
        //随机位置
        randomPosition(element, scene, randomSingleObj, params){
          let cssObj = null
          cssObj = new THREE.CSS3DObject(element)
          cssObj.name = `wall${params.wallIndex}_${params.faceIndex}`
          // cssObj
          cssObj.position.x = Math.random() * 4000 - 2500
          cssObj.position.y = Math.random() * 4000 - 2500
          cssObj.position.z = Math.random() * 4000 - 2500
          randomSingleObj.add(cssObj)
        }
    }
      //交互(将init中的交互提出来)
    $('.single-img').on('click', function(image){
      //loading
      let loading = $(`<div class="loading-container" id="loadingContainer">
                        <div class="loader-inner square-spin">
                          <div></div>
                        </div>
                      </div>`)

      const transformString = $.trim($(this)[0].style.transform.split('matrix3d')[1].split(',')[14])
      if(transformString == 500){
        //显示大图弹出框
        let container = document.createElement('div')
        const close = document.createElement('i')
        close.innerHTML = 'x'
        const element = document.createElement('img')

        $(container).append(loading)

        element.width = 500
        element.src = $(this).data('orignal')
        element.onload = function(){
          loading.remove()
          container.appendChild(element)
          container.appendChild(close)
        }

        container.className = 'big-img-container'
        close.className = 'big-img-close'
        close.id = 'big-img-close'
        element.className = 'big-img'

        const orignalObj = new THREE.CSS3DObject(container)
        orignalObj.position.x = 0
        orignalObj.position.y = 0
        orignalObj.position.z = 600
        scene.add(orignalObj)
        $(close).on('click', function(){
          $(container).hide()
        })
      }else{
        //reset所有位置
        wallObjects = new THREE.Object3D()
        //这里的images需要修改（就是facewall）
        images.forEach((imgSrcArr, i)=>{
          let singleWall = new THREE.Object3D()
          imgSrcArr.wallArr.forEach((val, index)=>{
            //顺序排列位置
            let obj = new THREE.Object3D()
            obj.position.x = i * self.interval - (window.innerWidth/2) + self.interval
            obj.position.y = Math.floor(index/6)*60
            obj.position.z = index%6 == 0 ? 0 : ((index%6) *60)
            obj.rotation.y = (-1) * Math.PI/2
            singleWall.add(obj)
          })
          wallObjects.add(singleWall)
        })
        transform(wallObjects, 0)

        const index = $(this).data('outIndex')

        //将选择的墙显示到最前面
        let selectWall = new THREE.Object3D()
        wallObjects.children[index].children.forEach((val, i)=>{
            let obj = new THREE.Object3D()
            obj.position.x = i%6 == 0 ? 0 : ((i%6) *60-180)
            obj.position.y = Math.floor(i/6)*60
            obj.position.z = 500
            obj.rotation.y = 0
            selectObject.add(obj)
        })
        this.transformSingle(selectObject, index, 500)
      }
    })
    //整体动画
    function transform(targets, duration){
      targets.children.forEach((targetArr, i)=>{
        targetArr.children.forEach((target, index)=>{
          new TWEEN.Tween(randomObj.children[i].children[index].position)
              .to({x: target.position.x, y: target.position.y, z: target.position.z},Math.random() * duration + duration)
              .easing( TWEEN.Easing.Exponential.InOut )
              .start()

          new TWEEN.Tween( randomObj.children[i].children[index].rotation )
              .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
              .easing( TWEEN.Easing.Exponential.InOut )
              .start()
        })
      })
    }


    function render(scene, camera){
      renderer.render(scene, camera)
    }
    // class wall
    class Wall extends Facewall{
        constructor(wallArr, interval, canvas){
          super(interval, canvas)
          //这里需要修改
          this.canvas = document.getElementById('container')
          ++wallIndex
          this.wallArr = new THREE.Object3D()
          // this.wallArr = []
          wallArr.forEach((val, index)=>{
            const face = new THREE.Object3D()
            face.name = `wall${wallIndex}_${index}`
            face.thumb = val.thumb
            face.orignal = val.orignal
            this.wallArr.add(face)
          })
          this.id = wallIndex
        }
        add(thumb){
          const id = this.id
          const self = this

          this.interval = this.canvas.offsetWidth/(randomObj.children.length+1)
          let element = document.createElement('img')
          element.width = 60
          element.height = 60
          element.className = 'single-img'
          element.src = thumb.thumb

          //随机位置
          let cssObj = new THREE.CSS3DObject(element)
          cssObj.name = `wall${id}_18`
          cssObj.position.x = Math.random() * 400 - 250
          cssObj.position.y = Math.random() * 400 - 250
          cssObj.position.z = Math.random() * 400 - 250
          //添加一个face给指定的墙
          randomObj.children[id-1].add(cssObj)
          //删除指定墙的第一个face
          const firstObj = randomObj.children[id-1].children[0]
          firstObj.parent.remove(firstObj)
          //单个wall重新计算每张脸坐标
          this.transformFace()
        }
        transformFace(){
          const self = this
          const id = this.id
          const wall = randomObj.children[id-1].children
          //顺序排列位置
          let targetObj = []
          wall.forEach((face, index)=>{
            new TWEEN.Tween( face.position )
              .to({
                x: (id-1) * self.interval - (window.innerWidth/2) + self.interval,
                y: Math.floor(index/6)*60,
                z: index%6 == 0 ? 0 : ((index%6) *60- 180)}, Math.random() * 500 + 500 )
              .easing( TWEEN.Easing.Exponential.InOut )
              .start()

            new TWEEN.Tween( face.rotation )
              .to( {
                x: 0,
                y: (-1) * Math.PI/2,
                z: 0}, Math.random() * 500 + 500 )
              .easing( TWEEN.Easing.Exponential.InOut )
              .start()





            // let obj = new THREE.Object3D()
            // obj.position.x = id * self.interval - (window.innerWidth/2) + self.interval
            // obj.position.y = Math.floor(index/6)*60
            // obj.position.z = index%6 == 0 ? 0 : ((index%6) *60)
            // obj.rotation.y = (-1) * Math.PI/2
            // targetObj.push(obj)
          })



        }
        del(thumb){
          scene.remove(thumb)
        }
        destroy(canvas){
          this.canvas = canvas
          const wallIndex = this.id
          for(let i = randomObj.children[wallIndex].children.length; i>=0; i--){
            if(randomObj.children[wallIndex].children[i]){
              randomObj.children[wallIndex].children[i].parent.remove(randomObj.children[wallIndex].children[i])
            }
          }
          randomObj.children.splice(wallIndex, 1)
          this.transformToCenter()
        }
        pushThumbnail(thumb){
            let cssObj = null
            const element = document.createElement('img')
            element.width = 60
            element.height = 60
            element.className = 'single-img'
            element.src = thumb.thumb
            $(element).data('outIndex', this.id)
            $(element).data('innerIndex', this.wallArr.length-1)
            //随机位置
            cssObj = new THREE.CSS3DObject(element)
            cssObj.position.x = Math.random() * 1000 - 250
            cssObj.position.y = Math.random() * 1000 - 250
            cssObj.position.z = Math.random() * 1000 - 250
            scene.add(cssObj)
            //顺序排列位置
            let obj = new THREE.Object3D()
            obj.position.x = this.id * interval - (renderer.getSize().width/2) + interval
            obj.position.y = Math.floor((this.wallArr.length-1)/6)*60
            obj.position.z = (this.wallArr.length-1)%6 == 0 ? 0 : (((this.wallArr.length-1)%6) *60 - 180)
            obj.rotation.y = (-1) * Math.PI/2
            originObjList.add(obj)
            new TWEEN.Tween(cssObj.position)
                .to({x: obj.position.x, y: obj.position.y, z: obj.position.z},Math.random() * 1000 + 1000)
                .easing( TWEEN.Easing.Exponential.InOut )
                .start()

            new TWEEN.Tween( cssObj.rotation )
                .to( { x: obj.rotation.x, y: obj.rotation.y, z: obj.rotation.z }, Math.random() * 1000 + 1000 )
                .easing( TWEEN.Easing.Exponential.InOut )
                .start()
        }
    }




    // class Thumbnail
    class Thumbnail{
        constructor(thumb, orignal){
            this.thumb = thumb
            this.orignal = orignal
        }
        url(){
          return this.thumb
        }
        orignalUrl(){
          return this.orignal
        }
        to(wall){
          const thum = this
          wall.wallArr.shift()
          wall.wallArr.push(thum)
        }
    }


    let wallList = []

    imgArr.forEach((val, index)=>{
        let wallArr = []
        val.forEach(img=>{
            const thumb = new Thumbnail(img.smallImg, img.bigImg)
            wallArr.push(thumb)
        })
        const wall = new Wall(wallArr)
        wallList.push(wall)
    })

    const canvas = document.getElementById('container')
    const faceWall = new Facewall(canvas)
    faceWall.init(wallList)

    //test
    //wall.add(thumb)
    $('#addThumb').on('click', ()=>{
        const thumb = new Thumbnail('static/image/1-2.jpg', 'static/image/bigImg1.jpeg')
        const wallId = Math.floor(Math.random() * 6)
        wallList[wallId].add(thumb)
    })
    //wall.del(thumb)
    $('#delThumb').on('click', ()=>{
      const wallId = Math.floor(Math.random() * 6)
      const thumbId = Math.floor(Math.random() * 108)
      wallList[wallId].del(scene.children[thumbId])
    })
    //wall.destroy()
    $('#destroyWall').on('click', ()=>{
      const wallId = Math.floor(Math.random() * 6)
      wallList[0].destroy(canvas)
    })
    //thumb.to(wall)
    $('#thumbToWall').on('click', ()=>{
      const thumb = new Thumbnail('static/image/1-2.jpg', 'static/image/bigImg1.jpeg')
      const wallId = Math.floor(Math.random() * 6)
      thumb.to(wallList[wallId])
    })
    // facewall.addWall()
    $('#addWall').on('click', ()=>{
      const wall = wallList[0]
      faceWall.add(wall)
    })
})
