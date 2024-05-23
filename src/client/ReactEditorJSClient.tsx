import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '../core'
import useClientEditorCore from '.'


function ReactEditorJSClient(props: Props): React.ReactNode {
  const rest = useClientEditorCore(props);
  return <ReactEditorJS factory={() => rest} {...rest as Props} />
}

export default ReactEditorJSClient
