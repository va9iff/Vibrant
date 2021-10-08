  import {CodeJar} from 'https://medv.io/codejar/codejar.js'
  // import {withLineNumbers} from "https://cdn.jsdelivr.net/npm/@medv/codejar@1.0.6/linenumbers.js"

  // let jar = CodeJar(document.querySelector('.editor'), Prism.highlightElement)

	const editor = document.querySelector(".editor")

const highlight = editor => {
  // highlight.js does not trim old tags,
  // let's do it by this hack.
  editor.textContent = editor.textContent
  hljs.highlightBlock(editor)
}

const jar = new CodeJar(editor, highlight)

export {jar}