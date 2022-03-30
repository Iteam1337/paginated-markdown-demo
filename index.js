import './index.css'
import { marked } from 'marked'
import content from './content.md?raw'

const htmlContent = marked.parse(content)
const contentWrapper = document.querySelector('#content')
contentWrapper.addEventListener('scroll', (e) => {
  console.log(`Scroll!`, e)
})
contentWrapper.innerHTML = htmlContent
