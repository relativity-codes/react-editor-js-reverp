import React from 'react'
import { Props } from './component-types'
import { EditorCore } from './editor-core'

function ReactEditorJS({
  factory,
  holder,
  defaultValue,
  value,
  onInitialize,
  ...restProps
}: Props): React.ReactNode {

  const editorJS = React.useRef<EditorCore | null>(null)

  React.useEffect(() => {
    editorJS.current = factory();

    onInitialize?.(editorJS.current)

    return () => {
      editorJS.current?.destroy()
    }
  }, [])

  React.useEffect(() => {
    if (value) {
      editorJS.current?.render(value)
    }
  }, [value])

  return <div className={restProps.className} style={restProps.style} id="editorjs"></div>
}

export default ReactEditorJS
