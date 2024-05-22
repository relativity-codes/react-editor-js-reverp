import { EditorConfig } from '@editorjs/editorjs';
import { EditorCore } from '../core';
declare const useServerEditorJS: ({ data }: EditorConfig) => EditorCore;
export default useServerEditorJS;
