import { EditorConfig, OutputData } from '@editorjs/editorjs';
export interface EditorCore extends EditorConfig {
    destroy(): Promise<void>;
    clear(): Promise<void>;
    save(): Promise<OutputData | undefined>;
    render(data: OutputData): Promise<void>;
    get dangerouslyLowLevelInstance(): any | null;
}
