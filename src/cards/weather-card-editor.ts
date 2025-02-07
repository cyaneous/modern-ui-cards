import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from '../hass/types';
import { fireEvent } from "../hass/common/dom/fire_event";
import { LovelaceCardEditor } from "../hass/panels/lovelace/types";
import { HaFormSchema } from '../hass/components/ha-form/types';
import { WeatherCardConfig } from './weather-card';

const SCHEMA: HaFormSchema[] = [
    { name: 'entity', selector: { entity: { domain: ['weather'] } } },
];

@customElement('modern-weather-card-editor')
export class WeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ type: Object }) hass!: HomeAssistant;
  @property({ type: Object }) private config!: WeatherCardConfig;
  
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
