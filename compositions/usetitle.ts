import marked from 'marked'
import { highlightAuto } from 'highlight.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tocObj = {
  toc: [] as any,
  index: 0,
  add(text: any, level: any) {
    const anchor: any = `#toc${level}${++this.index}`
    this.toc.push({ anchor, level, text })
    return anchor
  },
  // 使用堆栈的方式处理嵌套的ul,li，level即ul的嵌套层次，1是最外层
  // <ul>
  //   <li></li>
  //   <ul>
  //     <li></li>
  //   </ul>
  //   <li></li>
  // </ul>
  toHTML() {
    const levelStack: any[] = []
    let result = ''
    const addStartUL = () => {
      result += '<ul>'
    }
    const addEndUL = () => {
      result += '</ul>\n'
    }
    const addLI = (anchor: string, text: string) => {
      result += '<li><a href="#' + anchor + '">' + text + '<a></li>\n'
    }

    this.toc.forEach(function (item: any) {
      let levelIndex = levelStack.indexOf(item.level)
      // 没有找到相应level的ul标签，则将li放入新增的ul中
      if (levelIndex === -1) {
        levelStack.unshift(item.level)
        addStartUL()
        addLI(item.anchor, item.text)
      } // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
      else if (levelIndex === 0) {
        addLI(item.anchor, item.text)
      } // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
      else {
        while (levelIndex--) {
          levelStack.shift()
          addEndUL()
        }
        addLI(item.anchor, item.text)
      }
    })
    // 如果栈中还有level，全部出栈打上闭合标签
    while (levelStack.length) {
      levelStack.shift()
      addEndUL()
    }
    // 清理先前数据供下次使用
    this.toc = []
    this.index = 0
    return result
  },
}

const useTitle = (content: string): string => {
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer,
    highlight(code: string) {
      return highlightAuto(code).value
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  })
  renderer.heading = function (text: any, level: any, _raw: any) {
    const anchor = tocObj.add(text, level)
    return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`
  }
  return marked(content)
}

export { useTitle, tocObj }
