import { HomeAssistant } from '../hass/types';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Helper } from '../helper';

interface HeaderCardConfig {
  title?: string | '';
  title_entity?: string;
  subtitle?: string | '';
  subtitle_entity?: string;
}

@customElement('modern-header-card')
export class HeaderCard extends LitElement {
  @property({ type: Object }) private hass?: HomeAssistant;
  @property({ type: Object }) private config?: HeaderCardConfig;

  get title2() {
    if (this.config?.title) return this.config.title;
    else if (this.config?.title_entity) return this.hass?.states[this.config.title_entity].state;
    else return '';
  }

  get subtitle() {
    if (this.config?.subtitle) return this.config!.subtitle;
    else if (this.config?.subtitle_entity) return this.hass?.states[this.config!.subtitle_entity].state;
    else return '';
  }

  render() {
    return html`
      <ha-card>
        <div id="title">${this.title2}</div>
        <div id="subtitle">${this.subtitle}</div>
      </ha-card>
    `;
  }

  showMoreInfo(entityId) {
    Helper.showMoreInfo(this, entityId);
  }

  // Config

  setConfig(config) {
    this.config = config;
  }

  // Sizing

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 2;
  }

  // The rules for sizing your card in the grid in sections view
  getLayoutOptions() {
    return {
      grid_columns: 'full',
      grid_rows: 12,
      grid_max_rows: 1.5,
    };
  }

  static getStubConfig() {
    return {
      title: ['Hello'],
      subtitle: ["It's nice outside!"],
    };
  }

  static get styles() {
    return css`
      ha-card {
        height: 100% !important;
        padding: 2px 8px;
        background: none;
        box-shadow: none;
        border: none;
        cursor: default;
      }
      #title {
        margin: 20px 0px;
        font-weight: normal;
        font-size: xx-large;
      }
      #subtitle {
        margin: 8px 0px;
        font-weight: 500;
        font-size: large;
        color: var(--secondary-text-color);
      }
    `;
  }
}
