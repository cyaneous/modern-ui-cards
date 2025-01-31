import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from '../hass/types';
import { Helper } from '../helper';
import { LovelaceCardEditor } from "../hass/panels/lovelace/types";
export { ChipCardEditor } from './chip-card-editor';

export interface ChipCardConfig {
  chips: ChipConfig[] | [];
  statusbar: boolean | false;
}

interface ChipConfig {
  type?: string;
}

interface EntityChipConfig extends ChipConfig {
  entity?: string;
}

interface ActionChipConfig extends ChipConfig {
  action?: string; // FIXME: use enum
  url?: string;
  icon?: string;
}

@customElement('modern-chip-card')
export class ChipCard extends LitElement {
  @property({ type: Object }) private hass!: HomeAssistant;
  @property({ type: Object }) private config!: ChipCardConfig;

  render() {
    return html`
      <ha-card>
        <div id="chips" ?statusbar=${this.config.statusbar}>
            ${this.config.chips.map((chip: ChipConfig) => this.renderChip(chip))}
        </div>
      </ha-card>
    `;
  }

  private renderChip(chip: ChipConfig) {
    switch (chip.type) {
      case 'message':
        return this.renderMessageChip(chip as EntityChipConfig);
      case 'entity':
        return this.renderEntityChip(chip as EntityChipConfig);
      case 'action':
        return this.renderActionChip(chip as ActionChipConfig);
      case 'back':
        return this.renderBackChip();
      case 'menu':
        return this.renderMenuChip();
      case 'spacer':
        return this.renderSpacerChip();
      default:
        return html`<span class="chip not-found">?</span>`;
    }
  }

  private renderMessageChip(chip: EntityChipConfig) {
    const entity = this.hass?.states[chip.entity!];

    if (!entity)
       return html`<span class="chip not-found">${chip.entity}</span>`;

    return html`
      <span class="chip" style="cursor: default">
        ${this.statusForEntity(entity)}
      </span>
    `;
  }

  private renderEntityChip(chip: EntityChipConfig) {
    const entity = this.hass?.states[chip.entity!];

    if (!entity)
       return html`<span class="chip not-found">${chip.entity}</span>`;

    return html`
      <span class="chip" @click=${() => this.onEntityChipClicked(chip)}>
        <ha-state-icon
          class="icon"
          .state=${entity}
          .stateObj=${entity}
          .hass=${this.hass}
          ?data-domain=${Helper.domain(entity.entity_id)}
        ></ha-state-icon>
        <span class="label">${this.statusForEntity(entity)}</span>
      </span>
    `;
  }

  private renderActionChip(chip: ActionChipConfig) {
    return html`
      <span class="chip" @click=${() => this.onActionChipClicked(chip)}>
        <ha-icon
          class="icon"
          icon=${chip.icon || 'mdi:star'}
        ></ha-icon>
      </span>
    `;
  }

  private renderBackChip() {
    return html`
      <span class="chip" @click=${() => history.back()}>
        <ha-icon 
          class="icon"
          icon="mdi:arrow-left"
        ></ha-icon>
      </span>
    `;
  }

  private renderMenuChip() {
    return html`
      <span class="chip" @click=${() => Helper.toggleMenu(this)}>
        <ha-icon
          class="icon"
          icon="mdi:menu"
        ></ha-icon>
      </span>
    `;
  }

  private renderSpacerChip() {
    return html`
      <span class="chip spacer"></span>
    `;
  }

  private statusForEntity(entity) {
    switch (Helper.domain(entity.entity_id)) {
      case "scene":
        return entity.attributes.friendly_name || entity.entity_id;
      // case "climate": 
      //   return Helper.formatAttribute(entity, 'temperature');
      default:
        return this.hass.formatEntityState(entity);
    }
  }

  private onEntityChipClicked(chip: EntityChipConfig) {
    switch (Helper.domain(chip.entity!)) {
      case "scene":
        this.hass.callService('scene', 'turn_on', {
          entity_id: chip.entity,
        });
        break;
      default:
        Helper.showMoreInfo(this, chip.entity!);
      }
  }

  private onActionChipClicked(chip: ActionChipConfig) {
    switch (chip.action) {
      case "navigate":
        if (chip.url)
          Helper.navigate(chip.url);
        break;
      default:
        break;
    }
  }

  // Config

  setConfig(config) {
    this.config = config;
  }

  // Sizing

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 1;
  }

  // The rules for sizing your card in the grid in sections view
  getLayoutOptions() {
    return {
      grid_columns: 'full',
      grid_rows: 1,
      grid_max_rows: 1,
    };
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('modern-chip-card-editor') as LovelaceCardEditor;
  }

  public static async getStubConfig(hass: HomeAssistant): Promise<ChipCardConfig> {
    return {
      chips: [
        {
            type: 'entity',
            entity: 'sun.sun',
        } as EntityChipConfig
      ],
      statusbar: false,
    };
  }

  static get styles() {
    return css`
      ha-card {
        height: 100% !important;
        padding: 2px 0px;
        background: none;
        box-shadow: none;
        border: none;
      }
      #chips {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: nowrap;
        cursor: default;
      }
      .chip {
        margin: 0px 8px;
        font-size: 11px;
        font-weight: 700;
        white-space: nowrap;
        cursor: pointer;
      }
      #chips:not([statusbar]) .chip {
        border-radius: var(--border-radius);
        background: var(--ha-card-background);
        box-shadow: var(--ha-card-box-shadow);
        padding: 8px 10px;
        margin: 0px 4px;
      }
      #chips:not([statusbar]) .chip:first-child {
        margin-left: 0px;
      }
      #chips:not([statusbar]) .chip:active {
        filter: invert(1);
        transition: none;
      }
      .chip .icon {
        --mdc-icon-size: 16px;
        vertical-align: 0.5px;
      }
      .chip .label {
        margin-left: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .spacer {
        flex-grow: 1;
      }
      .not-found {
        color: var(--disabled-text-color);
        cursor: default;
      }
    `;
  }
}
