export interface MoreInfoDialogParams {
  entityId: string | null;
  view?: View;
  /** @deprecated Use `view` instead */
  tab?: View;
}

type View = "info" | "history" | "settings" | "related";
