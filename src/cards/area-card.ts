import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { HomeAssistant } from '../hass/types';

import { Helper } from '../helper';
import { BaseCard } from './base-card';

export interface AreaCardConfig {
  area?: string;
  name?: string;
  path?: string;
}

@customElement('modern-area-card')
export class AreaCard extends BaseCard {
  @property({ type: Object }) private config!: AreaCardConfig;

  get icon() {
    return this.hass.areas[this.config.area!].icon || 'mdi:texture-box';
  }

  get name() {
    return this.config.name || this.hass.areas[this.config.area!].name || '?';
  }

  get status() {
    const area = this.hass.areas[this.config.area!];
    const status: string[] = [];
    if (area.temperature_entity_id && this.hass.states[area.temperature_entity_id] != undefined) {
      const entity = this.hass.states[area.temperature_entity_id];
      if (entity)
        status.push(this.hass.formatEntityState(entity));
    }
    if (area.humidity_entity_id && this.hass.states[area.humidity_entity_id] != undefined) {
      const entity = this.hass.states[area.humidity_entity_id];
      if (entity)
        status.push(this.hass.formatEntityState(entity));
    }
    if (status.length == 0) {
      status.push('Area');
    }
    return status.join(' • ');
  }

  private onCardClicked(event) {
    Helper.navigate(this.config.path!);
  }

  render() {
    return html`
      <ha-card @click=${this.onCardClicked}>
        <div id="content">
          <div id="icon">
            <ha-icon
              icon=${this.icon}
              style="color: ${this.iconColor};"
            ></ha-icon>
          </div>
          <div id="name">${this.name}</div>
          <div id="status">${this.status}</div>
        </div>
      </ha-card>
    `;
  }

  setConfig(config) {
    if (!config.area) {
      throw new Error('No area defined');
    }
    this.config = config;
  }

  public static async getConfigForm() {
    const schema = [
      { name: 'area', required: true, selector: { area: {} } },
      { name: "name", selector: { text: {} } },
      { name: 'path', required: true, selector: { navigation: {} } },
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

  public static async getStubConfig(hass: HomeAssistant): Promise<AreaCardConfig> {
    return {
      area: 'kitchen',
    };
  }
}
