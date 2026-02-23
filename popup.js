function hello() {
    document.querySelectorAll('em').forEach(item => {
      item.style.display = 'none'
    })

    document.querySelectorAll('ul.comic-contain amp-img').forEach(item => {
      item.style.display = 'flex'
      item.style['justify-content'] = 'center'
    })

    document.querySelectorAll('ul.comic-contain amp-img img').forEach(item => {
      const arr = item.src.split('.')
      arr[0] += '-ogsm1-uspho'
      item.src = arr.join('.')
      item.style.width = '100%'
      item.style.height = '100%'
      item.style['object-fit'] = 'contain'
    })
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    hello()
  })
} else {
  hello()
}
