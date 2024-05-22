import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '../core'
import useClientEditorCore from '.'


function ReactEditorJSClient(props: Props) {
  return <ReactEditorJS factory={useClientEditorCore} {...props} />
}

export default ReactEditorJSClient
