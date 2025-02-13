import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { LovelaceLayoutOptions } from '../hass/panels/lovelace/types';

import { ChipCard } from "./chip-card";

@customElement('modern-list-card')
export class ListCard extends ChipCard {
  getLayoutOptions(): LovelaceLayoutOptions {
    return {
      grid_columns: 'full',
      grid_rows: 1 * this.config.chips.length,
    };
  }

  static get styles() {
    return css`
      ha-card {
        height: 100% !important;
        background: none;
        overflow: hidden;
      }
      #chips {
        height: 100%;
        display: flex;
        flex-direction: column;
        cursor: default;
      }
      .chip {
        flex-grow: 1;
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        grid-template-rows: 1fr;
        grid-gap: 16px;
        height: 24px;
        overflow: hidden;
        font-size: medium;
        font-weight: 600;
        white-space: nowrap;
        border-top: 1px solid var(--disabled-text-color);
        background: var(--ha-card-background);
        align-items: center;
        padding: 16px;
        cursor: pointer;
      }
      .chip:first-child {
        border-top: none;
      }
      .chip:active {
        filter: invert(1);
        transition: none;
      }
      .chip .icon {
        --mdc-icon-size: 24px;
      }
      .chip .label {
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .chip .value {
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--disabled-text-color);
      }
      .not-found {
        color: var(--disabled-text-color);
        cursor: default;
      }
    `;
  }
}
