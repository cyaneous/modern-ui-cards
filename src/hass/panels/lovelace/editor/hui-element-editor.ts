// import type {
//   EditDetailElementEvent,
//   EditSubElementEvent,
//   GUIModeChangedEvent,
//   SubElementEditorConfig,
// } from "./types";

export interface ConfigChangedEvent<T extends object = object> {
  config: T;
  error?: string;
  guiModeAvailable?: boolean;
}

declare global {
  interface HASSDomEvents {
    "config-changed": ConfigChangedEvent;
    // "GUImode-changed": GUIModeChangedEvent;
    // "edit-detail-element": EditDetailElementEvent;
    // "edit-sub-element": EditSubElementEvent;
  }
}