import { fireEvent } from "../common/dom/fire_event";

declare global {
  // for fire event
  interface HASSDomEvents {
    "hass-toggle-menu": undefined | { open?: boolean };
  }
}
