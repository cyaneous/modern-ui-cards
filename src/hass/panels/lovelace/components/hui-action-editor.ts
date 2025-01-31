import type {
    ActionConfig,
    // CallServiceActionConfig,
    // NavigateActionConfig,
    // UrlActionConfig,
  } from "../../../data/lovelace/config/action";
  
  export type UiAction = Exclude<ActionConfig["action"], "fire-dom-event">;

const DEFAULT_ACTIONS: UiAction[] = [
  "more-info",
  "toggle",
  "navigate",
  "url",
  "perform-action",
  "assist",
  "none",
];
