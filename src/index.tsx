import React from "react";
import ReactEditorJSClient from "./client/ReactEditorJSClient";
import { WrapperProps } from "./core";
import ReactEditorJSServer from "./server/ReactEditorJSServer";

export default function createReactEditorJS(): (props: WrapperProps) => React.JSX.Element {
  if (typeof window !== 'undefined') {
    return ReactEditorJSClient;
  } else { 
    return ReactEditorJSServer;
  }
}
