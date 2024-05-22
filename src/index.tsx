import React from "react";
import ReactEditorJSClient from "./client/ReactEditorJSClient";
import { WrapperProps } from "./core";
import ReactEditorJSServer from "./server/ReactEditorJSServer";

export default function CreateReactEditorJS(props: WrapperProps): React.JSX.Element {
  return <>{typeof window !== 'undefined' ? <ReactEditorJSClient {...props} /> : <ReactEditorJSServer {...props} />}</>
}
