import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '../core'
import useClientEditorCore from '.'


function ReactEditorJSClient(props: Props): React.ReactNode {
  const rest = useClientEditorCore(props);
  return <ReactEditorJS factory={() => rest} {...props} />
}

export default ReactEditorJSClient
