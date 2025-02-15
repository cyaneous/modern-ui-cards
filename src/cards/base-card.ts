import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';

import { HomeAssistant } from '../hass/types';

export class BaseCard extends LitElement {
  @property({ type: Object }) hass!: HomeAssistant;

  get name(): string {
    return 'Unnamed';
  }

  get status(): string {
    return '–';
  }

  get iconColor(): string {
    return 'var(--state-icon-color)';
  }
  
  // Sizing

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize(): number {
    return 2;
  }

  // The rules for sizing your card in the grid in sections view
  getLayoutOptions(): object {
    return {
      grid_columns: 3,
      grid_min_columns: 2,
      grid_rows: 4,
      grid_min_rows: 3,
    };
  }

  static get styles() {
    return css`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes hoverIn {
        0% {
          transform: translateY(-20px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      ha-card {
        height: 100% !important;
        padding: 16px;
        cursor: pointer;
        overflow: hidden;
        animation: 250ms ease-out 0s 1 hoverIn;
        border: none;
      }
      ha-card:active {
        filter: invert(1);
        transition: none;
      }
      #content {
        display: grid;
        height: 100%;
        grid-template:
          'icon icon'
          'name name'
          'status status';
        grid-template-columns: 1fr min-content;
        grid-template-rows: 1fr min-content min-content;
      }
      #icon {
        grid-area: icon;
        --mdc-icon-size: 48px;
      }
      ha-state-icon[rotating] {
        animation: spin 1s linear infinite;
        display: inline-flex;
        transform-origin: 49% 50%;
      }
      #name {
        grid-area: name;
        font-size: x-large;
        font-weight: 500;
        padding: 8px 0px;
        border-top: 2px dotted var(--disabled-text-color);
        border-bottom: 2px dotted var(--disabled-text-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      #status {
        grid-area: status;
        font-size: large;
        line-height: large;
        font-weight: 400;
        padding-top: 8px;
        color: var(--disabled-text-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    `;
  }
}
