import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '../core'
import useServerEditorCore from '.'


function ReactEditorJSServer(props: Props) {
  return <ReactEditorJS factory={useServerEditorCore} {...props} />
}

export default ReactEditorJSServer
