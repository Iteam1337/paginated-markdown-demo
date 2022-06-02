import './index.css';
import { marked } from 'marked';
import content from './content.md?raw';

const renderer = {
  heading(text, level) {
    return `<hr class="hard-break" /><p class="heading${level}">${text}</p>`;
  },
};
marked.use({ renderer });

const htmlContent = marked.parse(content);
const contentWrapper = document.querySelector('#content');
contentWrapper.addEventListener('scroll', (e) => {
  // console.log(`Scroll!`, e);
});
contentWrapper.addEventListener('click', (e) => {
  if (e.clientX < e.target.clientWidth / 2) {
    console.log('back', -contentWrapper.clientWidth)
    contentWrapper.scrollBy({
      left: -contentWrapper.clientWidth,
      behavior: 'smooth'
    })
  } else {
    console.log('next', contentWrapper.clientWidth)
    contentWrapper.scrollBy({
      left: contentWrapper.clientWidth,
      behavior: 'smooth'
    })
  }
})
contentWrapper.innerHTML = `${htmlContent}`;
