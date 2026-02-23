function main() {
  document.querySelectorAll('ul.comic-contain>div').forEach(doc => {
    // 取出图片之间的间隔
    doc.style['margin-top'] = '-4px'

    doc.querySelectorAll('amp-img').forEach(amp => {
      // 图片居中
      amp.style.display = 'flex'
      amp.style['justify-content'] = 'center'

      amp.querySelectorAll('img').forEach(img => {
        // 使用实际图片
        const arr = img.src.split('.')
        arr[0] += '-ogsm1-uspho'
        img.src = arr.join('.')
        img.style.width = '100%'
        img.style.height = '100%'
        img.style['object-fit'] = 'contain'
      })

      amp.querySelectorAll('div.comic-text__amp').forEach(txt => {
        // 取出重载图标
        txt.style.display = 'none'
      })
    })
  })

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      // 下一章
      document.querySelectorAll('div.next_chapter a')[0].click()
    } else if (event.key === 'ArrowLeft') {
      // 上一章 (回退)
      history.back()
    }
  })
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    main()
  })
} else {
  main()
}
