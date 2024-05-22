import React from "react";
import ReactEditorJSClient from "./client/ReactEditorJSClient";
import { WrapperProps } from "./core";

export default function CreateReactEditorJS(props: WrapperProps): React.ReactNode {
  return <>{typeof window !== 'undefined' && <ReactEditorJSClient {...props} />}</>
}
