import { fireEvent } from "./hass/common/dom/fire_event";

export class Helper {
  static domain(entityId: string): string {
    return entityId.substring(0, entityId.indexOf('.'))
  }

  static isActiveState(entity): boolean {
    const state = entity.state;
    switch (Helper.domain(entity.entity_id)) {
      case 'group':
        return ['on', 'home', 'open', 'locked', 'problem'].includes(state);
      case 'automation':
        return state == 'on';
      case 'alarm_control_panel':
        return state != 'disarmed';
      case 'alert':
        return state != 'idle';
      case 'camera':
        return state == 'streaming';
      case 'climate':
        return state != 'off';
      case 'cover':
        return state != 'closed';
      case 'device_tracker':
        return state != 'not_home';
      case 'fan':
        return state == 'on';
      case 'light':
        return state == 'on';
      case 'lock':
        return state != 'locked';
      case 'media_player':
        return state != 'standby';
      case 'person':
        return state != 'not_home';
      case 'plant':
        return state == 'problem';
      case 'switch':
        return state == 'on';
      case 'timer':
        return state == 'active';
      case 'vacuum':
        return !['idle', 'docked', 'paused'].includes(state);
      default:
        return true;
    }
  }

  static stateColor(entity): string {
    const state = entity.state;
    switch (Helper.domain(entity.entity_id)) {
      case 'automation':
        if (Helper.isActiveState(entity)) return 'var(--green-color)';
        break;
      case 'climate':
        switch (state) {
          case 'auto':
            return 'var(--amber-color)';
          case 'heat':
            return 'var(--red-color)';
          case 'cool':
            return 'var(--blue-color)';
          case 'dry':
            return 'var(--brown-color)';
          case 'fan_only':
            return 'var(--light-blue-color)';
          default:
            break;
        }
        break;
      case 'cover':
        if (Helper.isActiveState(entity)) return 'var(--purple-color)';
        break;
      case 'fan':
        if (Helper.isActiveState(entity)) return 'var(--cyan-color)';
        break;
      case 'light':
        if (Helper.isActiveState(entity)) {
          if (entity.attributes.rgb_color) return `rgb(${entity.attributes.rgb_color.join(',')})`;
          else return 'var(--amber-color)';
        }
        break;
      case 'switch':
        if (Helper.isActiveState(entity)) return 'var(--light-green-color)';
        break;
      default:
        break;
    }
    return 'var(--state-icon-color)';
  }

  static showMoreInfo(node: HTMLElement | Window, entityId: string) {
    fireEvent(
      node,
      'hass-more-info',
      {
        entityId: entityId,
        view: 'info',
      }
    );
  }

  static toggleMenu(node: HTMLElement | Window) {
    fireEvent(node, 'hass-toggle-menu');
  }

  static navigate(path: string) {
    history.pushState(null, '', path);
    window.dispatchEvent(new CustomEvent('location-changed'));
  }
}
