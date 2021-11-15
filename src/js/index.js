import '../css/index.css'
import IMG from '../imgs/test.png'
let width, height

let mycanvas, ctx

let name

window.onload = async function() {
  initCanvas()
  initWidth()
  name = prompt('请输入名字')
  await loadImg()
  drawText()
  canvas2Img()
}
/**
 * canvas初始化
 */
function initCanvas() {
  mycanvas = document.getElementById('canvas')
  ctx = mycanvas.getContext('2d')
}
/**
 * 初始化宽度高
 */
function initWidth() {
  width = screen.width
  height = width * 0.75

  /* 画布宽高比dom节点3倍，保障画质 */
  mycanvas.setAttribute('width', width * 3)
  mycanvas.setAttribute('height', height * 3)

  mycanvas.style.width = `${ width }px`
  mycanvas.style.height = `${ height }px`
}

/**
 * 加载图片
 */
function loadImg() {
  return new Promise((resolve) => {
    const img = new Image()

    img.src = IMG
    img.onload = function() {
      // 将图片画到canvas上面上去！
      ctx.drawImage(img, 0, 0, mycanvas.width, mycanvas.height)
      resolve()
    }
    img.error = function() {
      alert('加载图片失败')
    }
  })
}

/**
 * 绘制文字
 */
function drawText() {
  ctx.font = '40px "微软雅黑"'
  ctx.fillStyle = 'white'
  ctx.textBaseline = 'top'
  ctx.textAlign = 'left'
  ctx.fillText(name, 10, 10)
}
console.log(222222222)
/**
 * 转成图片并销毁canvas
 */
function canvas2Img() {
  const img = document.createElement('img')

  img.src = canvas.toDataURL('image/png')
  img.className = 'postcard'
  document.querySelector('body').appendChild(img)

  mycanvas.style.display = 'none'
  mycanvas = null
  // setTimeout(() => {
  //     document.querySelector("body").removeChild(document.getElementById("loading"))
  // },1000)
}
