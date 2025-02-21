import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { HomeAssistant } from '../hass/types';

import { Helper } from '../helper';

interface HeaderCardConfig {
  title?: string;
  title_entity?: string;
  subtitle?: string;
  subtitle_entity?: string;
}

@customElement('modern-header-card')
export class HeaderCard extends LitElement {
  @property({ type: Object }) private hass!: HomeAssistant;
  @property({ type: Object }) private config!: HeaderCardConfig;

  get title() {
    if (this.config.title) return this.config.title;
    else if (this.config.title_entity) return this.hass.states[this.config.title_entity].state || '';
    else return '';
  }

  get subtitle() {
    if (this.config.subtitle) return this.config.subtitle;
    else if (this.config.subtitle_entity) return this.hass.states[this.config.subtitle_entity].state;
    else return '';
  }

  render() {
    return html`
      <ha-card>
        <div id="title">${this.title}</div>
        <div id="subtitle">${this.subtitle}</div>
      </ha-card>
    `;
  }

  setConfig(config) {
    this.config = config;
  }

  getLayoutOptions(): object {
    return {
      grid_columns: 'full',
      grid_rows: 12,
      grid_max_rows: 1.5,
    };
  }

  public static async getConfigForm() {
    const schema = [
      { name: "title", selector: { text: {} } },
      { name: 'title_entity', selector: { entity: {} } },
      { name: "subtitle", selector: { text: {} } },
      { name: 'subtitle_entity', selector: { entity: {} } },
    ];

    const assertConfig = (config) => {

    };

    const computeLabel = (schema, localize) => {
      switch (schema.name) {
        default: return localize(`ui.panel.lovelace.editor.card.generic.{$schema.name}`);
      }
    };
    
    return {
      schema: schema,
      assertConfig: assertConfig,
      computeLabel: computeLabel,
    }
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
