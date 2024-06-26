
## 🍞 DEMO

## 🍀 Supported Official Plugin

- [x] Paragraph (default)
- [x] Embed
- [x] Table
- [x] List
- [x] Warning
- [x] Code
- [x] Link
- [x] Image
- [x] Raw
- [x] Header
- [x] Quote
- [x] Marker
- [x] CheckList
- [x] Delimiter
- [x] InlineCode
- [x] SimpleImage

## 🤟🏻 Getting Started

### Install via npm (or yarn)

```bash
npm install --save react-editor-js-reverp @editorjs/editorjs @editorjs/paragraph ...other plugins
```

```tsx
import { Editor } from 'react-editor-js-reverp'

<Editor value={blocks} />
```

## 📙 API

Allow all options of [editor-js](https://github.com/codex-team/editor.js/blob/master/types/configs/editor-config.d.ts)

| Name               | Type                                                                            | Description                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| value | OutputData                                                                         | Initial data when using editor js as [uncontrolled component](https://ko.reactjs.org/docs/uncontrolled-components.html). highly recommend it                                                                                                         |
| value | OutputData                                                                         | data when using editor js as [controlled component](https://ko.reactjs.org/docs/forms.html#controlled-components). <br> ⚠️ Don't use it with onChange prop. Infinite loops can occur.                                                                                                         |
| onInitialize            | (editorCore?: EditorCore) => void                                                   | Call after editor-js is initialized                                                                                       |

## 🧐 FAQ

### How can I install plugins?

There is an only Paragraph block already included in Editor.js. Probably you want to use several Block Tools that should be installed and connected.

To add more Block Tools, simply add them to your repo and pass them as `tools`-property to your editor:

```
npm install --save-dev @editorjs/checklist
```

```tsx
import { Editor } from 'react-editor-js-reverp'
import CheckList from '@editorjs/checklist'

<Editor value={blocks} tools={{ checkList: CheckList }} />
```

We recommend to create a `tools.js` file and export your tools as a constant. Here is an example using all of the default plugins:

```ts
// tools.js
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}
```

You can read more about plugins/tools at [editor-js: Tools installation](https://editorjs.io/getting-started#tools-installation)

```tsx
import { Editor } from 'react-editor-js-reverp'
import { EDITOR_JS_TOOLS } from './tools'


<Editor className={} style={{}} value={blocks} tools={EDITOR_JS_TOOLS} onChange={} />
```

### How to access editor-js instance?

The editor-js instance is inaccessible. However, you can access the abstracted editor-js for isomorphic react-editor-js.

```tsx
const editorCore = React.useRef(null)

const handleInitialize = React.useCallback((instance) => {
  editorCore.current = instance
}, [])

const handleSave = React.useCallback(async () => {
  const savedData = await editorCore.current.save();
}, [])

<Editor onInitialize={handleInitialize} value={blocks} />
```

If you want to access low-level instance, you can use `dangerouslyLowLevelInstance`

⚠️ dangerouslyLowLevelInstance depends on the execution environment.

| Environment | Instnace Type |
| - | - |
| Browser | EditorJS instance|
| NodeJS | null |

```tsx
const editorCore = React.useRef(null)

const handleInitialize = React.useCallback((instance) => {
  editorCore.current = instance
}, [])

const handleSave = React.useCallback(async () => {
  const savedData = await editorCore.current.save();
}, [])

<Editor onInitialize={handleInitialize} value={blocks} />
```

### Haven't received data from server (when use Link)

You should set linkTool [config](https://github.com/editor-js/link#usage). 💪🏻

```tsx
import LinkTool from '@editorjs/link'

<Editor
  value={blocks}
  tools={{
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8008/fetchUrl',
      }
    }
  }}
/>
```
