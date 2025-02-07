import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from '../hass/types';
import { Helper } from '../helper';
import { BaseCard } from './base-card';
import { LovelaceCardEditor } from "../hass/panels/lovelace/types";
export { EntityCardEditor } from './entity-card-editor';

export interface EntityCardConfig {
  entity?: string;
  name?: string;
}

@customElement('modern-entity-card')
export class EntityCard extends BaseCard {
  @property({ type: Object }) private config!: EntityCardConfig;

  get entity() {
    return this.hass.states[this.config.entity!];
  }

  get domain(): string {
    return Helper.domain(this.config.entity!);
  }

  get name(): string {
    const friendlyName = this.entity.attributes.friendly_name;
    const customName = this.config.name;
    let areaId: string | null = null;
    if (!customName && friendlyName) {
      const entity = this.hass.entities[this.config.entity!];
      if (entity.area_id) {
        areaId = entity.area_id;
      } else if(entity.device_id) {
        const device = this.hass.devices[entity.device_id!];
        areaId = device.area_id;
      }
      if (areaId) {
        const area = this.hass.areas[areaId!];
        if (area && friendlyName != area.name) 
          return friendlyName.replace(area.name + ' ', '');
      }
    }
    return customName || friendlyName || this.entity.entity_id;
  }

  get status(): string {
    const isActive = Helper.isActiveState(this.entity);
    switch (this.domain) {
      case 'climate':
        if (isActive && this.entity?.state != 'fan_only')
          return `${this.hass.formatEntityState(this.entity)} • ${this.hass.formatEntityAttributeValue(this.entity, 'temperature')}`;
        break;
      case 'cover':
        if (this.entity?.state == "open")
          return `${this.hass.formatEntityState(this.entity)} • ${this.hass.formatEntityAttributeValue(this.entity, 'current_position')}`;
        break;
      case 'fan':
        if (isActive) 
          return this.hass.formatEntityAttributeValue(this.entity, 'percentage');
        break;
      case 'light':
        if (isActive && this.entity.attributes.brightness) 
          return this.hass.formatEntityAttributeValue(this.entity, 'brightness');
        break;
      default:
        break;
    }

    return this.hass.formatEntityState(this.entity);
  }

  get iconColor(): string {
    return Helper.stateColor(this.entity);
  }

  get isRotating() {
    return this.domain == 'fan' && Helper.isActiveState(this.entity);
  }

  private onCardClicked(event) {
    Helper.showMoreInfo(this, this.config.entity!);
  }

  private onIconClicked(event) {
    switch (this.domain) {
      case "automation":
      case "cover":
      case "fan":
      case "light":
      case "switch":
        event.stopPropagation();
        this.hass.callService("homeassistant", "toggle", {
          entity_id: this.entity.entity_id,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return html`
      <ha-card @click=${this.onCardClicked}>
        <div id="content">
          <div id="icon">
            <ha-state-icon
              .state=${this.entity}
              .stateObj=${this.entity}
              .hass=${this.hass}
              ?data-domain=${this.domain}
              ?rotating=${this.isRotating}
              @click=${this.onIconClicked}
              style="color: ${this.iconColor};"
            ></ha-state-icon>
          </div>
          <div id="name">${this.name}</div>
          <div id="status">${this.status}</div>
        </div>
      </ha-card>
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('No entity defined');
    }
    this.config = config;
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('modern-entity-card-editor') as LovelaceCardEditor;
  }

  public static async getStubConfig(hass: HomeAssistant): Promise<EntityCardConfig> {
    return {
      entity: 'sun.sun',
    };
  }
}
