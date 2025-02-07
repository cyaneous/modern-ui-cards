// https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/cards/hui-weather-forecast-card.ts

import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from '../hass/types';
// import {
//   getForecast,
//   getSecondaryWeatherAttribute,
//   getWeatherStateIcon,
//   getWeatherUnit,
//   getWind,
//   subscribeForecast,
//   weatherAttrIcons,
//   weatherSVGStyles,
// } from "../hass/data/weather";
import { Helper } from '../helper';
import { BaseCard } from './base-card';
import { LovelaceCardEditor } from "../hass/panels/lovelace/types";
export { WeatherCardEditor } from './weather-card-editor';

export interface WeatherCardConfig {
  entity?: string;
}

@customElement('modern-weather-card')
export class WeatherCard extends BaseCard {
  @property({ type: Object }) private config!: WeatherCardConfig;

  get entity() {
    return this.hass.states[this.config.entity!];
  }

  get domain(): string {
    return Helper.domain(this.config.entity!);
  }

  get name(): string {
    return this.entity.attributes.friendly_name || this.entity.entity_id;
  }

  get conditions(): string {
    return this.hass.formatEntityState(this.entity);
  }

  get temperature(): string {
    return this.hass.formatEntityAttributeValue(this.entity, 'temperature');
  }

  get humidity(): string {
    return this.hass.formatEntityAttributeValue(this.entity, 'humidity');
  }

  get windSpeed(): string {
    return this.hass.formatEntityAttributeValue(this.entity, 'wind_speed');
  }

  get windBearing(): string {
    return this.hass.formatEntityAttributeValue(this.entity, 'wind_bearing');
  }

  get pressure(): string {
    return this.hass.formatEntityAttributeValue(this.entity, 'pressure');
  }

  private onCardClicked(event) {
    Helper.showMoreInfo(this, this.config.entity!);
  }

  render() {
    return html`
      <ha-card @click=${window.close}>
        <div id="content">
          <div id="icon">
            <!-- <ha-state-icon
              .state=${this.entity}
              .stateObj=${this.entity}
              .hass=${this.hass}
              ?data-domain=${this.domain}
              style="color: ${this.iconColor};"
            ></ha-state-icon> -->
          </div>
          <div id="conditions">${this.conditions}</div>
          <div id="name">${this.name}</div>
          <div>${this.temperature}</div>
          <div>${this.humidity}</div>
          <div>${this.windSpeed} ${this.windBearing}</div>
          <div>${this.pressure}</div>
        </div>
      </ha-card>
    `;
  }

  getLayoutOptions() {
    return {
      grid_columns: 4,
      grid_min_columns: 4,
      grid_max_columns: 4,
      grid_rows: 4,
      grid_min_rows: 4,
      grid_max_rows: 4,
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('No entity defined');
    }
    this.config = config;
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('modern-weather-card-editor') as LovelaceCardEditor;
  }

  public static async getStubConfig(hass: HomeAssistant): Promise<WeatherCardConfig> {
    return {
      entity: 'weather.forecast_home',
    };
  }

    static get styles() {
      return css`
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
            'conditions conditions';
          grid-template-columns: 1fr min-content;
          grid-template-rows: 1fr min-content min-content;
        }
        #icon {
          grid-area: icon;
          --mdc-icon-size: 32px;
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
      #conditions {
        grid-area: conditions;
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
