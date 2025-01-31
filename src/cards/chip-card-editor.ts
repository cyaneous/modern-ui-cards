import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from '../hass/types';
import { fireEvent } from "../hass/common/dom/fire_event";
import { LovelaceCardEditor } from "../hass/panels/lovelace/types";
import { HaFormSchema } from '../hass/components/ha-form/types';
import { ChipCardConfig } from './chip-card';

const SCHEMA: HaFormSchema[] = [
    { name: 'statusbar', type: 'boolean' },
//   { name: 'area', selector: { area: {} } },
//   { name: 'path', selector: { navigation: {} } },
//   { name: 'temperature_sensor', selector: { entity: { domain: ['sensor'], filter: { device_class: ['temperature'] } } } },
//   { name: 'humidity_sensor', selector: { entity: { domain: ['sensor'], filter: { device_class: ['humidity'] } } } },
];

@customElement('modern-chip-card-editor')
export class ChipCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ type: Object }) hass!: HomeAssistant;
  @property({ type: Object }) private config!: ChipCardConfig;
  
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
      case 'statusbar': return 'Display as a statusbar';
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
    fireEvent(this, "config-changed", { config: ev.detail.value });
  }
  
  setConfig(config) {
    this.config = config;
  }
}
