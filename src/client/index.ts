import { useEffect, useState, useCallback, useRef } from 'react';
import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs';
import { EditorCore } from '../core';

const useClientEditorCore = (config: EditorConfig ): EditorCore => {
  const { tools = {}, ...otherConfig } = config;
  const editorRef = useRef<string | HTMLElement | undefined>(undefined);
  const [editorJS, setEditorJS] = useState<EditorJS | null>(null);

  useEffect(() => {
    const extendedTools = {
      ...tools,
    };

    const editor = new EditorJS({
      holder: editorRef.current,
      tools: extendedTools,
      ...otherConfig,
    });

    setEditorJS(editor);

    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      });
    };
  }, [tools, otherConfig]);

  const clear = useCallback(async () => {
    if (editorJS) {
      editorJS.clear();
    }
  }, [editorJS]);

  const dangerouslyLowLevelInstance = useCallback(async () => {
    if (editorJS) {
      return editorJS;
    } else {
      console.warn('EditorJS is not initialized yet');
      return null;
    }
  }, [editorJS]);

  const save = useCallback(async (): Promise<OutputData | undefined> => {
    if (editorJS) {
    return editorJS.save();
    }
  }, [editorJS]);

  const destroy = useCallback(async () => {
    if (editorJS) {
      await editorJS.isReady;
      editorJS.destroy();
    }
  }, [editorJS]);

  const render = useCallback(async (data: OutputData) => {
    if (editorJS) {
      await editorJS.render(data);
    }
  }, [editorJS]);

  return {
    dangerouslyLowLevelInstance,
    clear,
    save,
    destroy,
    render,
    ...config
  };
};

export default useClientEditorCore;
