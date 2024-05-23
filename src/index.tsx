import React, { useRef, useState, useEffect, useId } from "react";
import EditorJS, { OutputData } from '@editorjs/editorjs'

export default function Editor({ value, onChange, ...props }: { value: string, onChange: (value: string) => void, className?: string, tools: any, style: any, [key: string]: any }) {
  const editorCore = useRef<EditorJS | null>(null);
  const [editorData, setEditorData] = useState<OutputData>();
  const id = useId();
  useEffect(() => {
    editorCore.current = new EditorJS({
      tools: props.tools,
      onChange: (api: any) => {
        const editorContent = api.saver.save();
        setEditorData(editorContent);
      },
      holder: id,
      data: editorData,
      placeholder: 'write something awesome'
    });
    if (editorCore.current) {
      props.handleInitialize?.(editorCore.current);
    };
    return () => {
      if (editorCore.current) {
        editorCore.current.isReady
          .then(() => editorCore.current?.destroy())
          .then(() => editorCore.current = null)
          .catch(() => { });
      }
    }
  }, []);

  useEffect(() => {
    let parsedValue: OutputData | null = null;
    try {
      parsedValue = JSON.parse(value)
      if (value?.length > 1 && parsedValue !== editorData) {
        if (parsedValue !== null) {
          setEditorData(parsedValue);
        }
      }
    } catch (e) {
      console.error('Editor: Error parsing editor data', e);
    };
  }, [value]);

  useEffect(() => {
    if (editorData && onChange) {
      onChange(JSON.stringify(editorData));
    }
  }, [editorData]);

  return (
    <div className={props.className} style={props.style} id={id}></div>
  );
}


