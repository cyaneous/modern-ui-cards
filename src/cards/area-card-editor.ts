import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from '../hass/types';
import { fireEvent } from "../hass/common/dom/fire_event";
import { LovelaceCardEditor } from "../hass/panels/lovelace/types";
import { HaFormSchema } from '../hass/components/ha-form/types';
import { AreaCardConfig } from './area-card';

const SCHEMA: HaFormSchema[] = [
  { name: 'area', selector: { area: {} } },
  { name: "name", selector: { text: {} } },
  { name: 'path', selector: { navigation: {} } },
  { name: 'temperature_sensor', selector: { entity: { domain: ['sensor'], filter: { device_class: ['temperature'] } } } },
  { name: 'humidity_sensor', selector: { entity: { domain: ['sensor'], filter: { device_class: ['humidity'] } } } },
];

@customElement('modern-area-card-editor')
export class AreaCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ type: Object }) hass!: HomeAssistant;
  @property({ type: Object }) private config!: AreaCardConfig;
  
  protected render() {
    if (!this.hass || !this.config) {
      return nothing;
    }
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${SCHEMA}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `;
  }
  
  private computeLabel = (schema: HaFormSchema) => {
    // const customLocalize = setupCustomlocalize(this.hass!);
    
    switch (schema.name) {
      case 'area': return 'Area';
      case 'name': return 'Name';
      case 'path': return 'Navigation Path';
      case 'temperature_sensor': return 'Temperature Sensor';
      case 'humidity_sensor': return 'Humidity Sensor';
      default: break;
    }
    // if (GENERIC_LABELS.includes(schema.name)) {
    //   return customLocalize(`editor.card.generic.${schema.name}`);
    // }
    return this.hass!.localize(
      `ui.panel.lovelace.editor.card.generic.${schema.name}`
    );
  };
  
  private valueChanged(ev: CustomEvent): void {
    fireEvent(this, 'config-changed', { config: ev.detail.value });
  }
  
  setConfig(config) {
    this.config = config;
  }
}
