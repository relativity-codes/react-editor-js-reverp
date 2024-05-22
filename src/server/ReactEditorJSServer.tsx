import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '../core'
import useServerEditorCore from '.'


function ReactEditorJSServer(props: Props) {
  const { ...rest } = useServerEditorCore(props);
  return <ReactEditorJS factory={() => rest} {...props} />
}

export default ReactEditorJSServer
