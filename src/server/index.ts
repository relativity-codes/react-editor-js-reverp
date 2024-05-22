import { useState, useCallback, useEffect } from 'react';
import { EditorConfig, OutputData } from '@editorjs/editorjs';
import { EditorCore } from '../core';

const useServerEditorJS = ({ data }: EditorConfig): EditorCore => {
  const [memoizedData, setMemoizedData] = useState<OutputData>(data as OutputData);


  useEffect(() => {
    if (data) {
      setMemoizedData(data);
    }
  }, [data]);

  const clear = useCallback(async () => {
    // No operation for server-side clear
  }, []);

  const save = useCallback(async (): Promise<OutputData> => {
    return memoizedData;
  }, [memoizedData]);

  const destroy = useCallback(async () => {
    // No operation for server-side destroy
  }, []);

  const render = useCallback(async (data: OutputData) => {
    setMemoizedData(data);
  }, []);

  return {
    dangerouslyLowLevelInstance: null,
    clear,
    save,
    destroy,
    render,
  };
};

export default useServerEditorJS;
