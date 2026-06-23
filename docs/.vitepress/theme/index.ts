import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    router.onAfterRouteChanged = () => {
      const content = document.querySelector('.VPContent')
      if (!(content instanceof HTMLElement)) return

      content.classList.remove('page-enter')
      void content.offsetWidth
      content.classList.add('page-enter')
      window.setTimeout(() => content.classList.remove('page-enter'), 320)
    }
  }
}
