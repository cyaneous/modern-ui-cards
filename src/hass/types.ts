import type {
  Auth,
  Connection,
  HassConfig,
  HassEntities,
  HassEntity,
  HassServiceTarget,
  HassServices,
  MessageBase,
} from 'home-assistant-js-websocket';

import type { LocalizeFunc } from "./common/translations/localize";
import type { AreaRegistryEntry } from "./data/area_registry";
import type { DeviceRegistryEntry } from "./data/device_registry";
import type { EntityRegistryDisplayEntry } from "./data/entity_registry";
import type { FloorRegistryEntry } from "./data/floor_registry";
import type { CoreFrontendUserData } from "./data/frontend";
import type { FrontendLocaleData, TranslationCategory } from './data/translation';
import type { Themes } from "./data/ws-themes";

export type Constructor<T = any> = new (...args: any[]) => T;

export interface ThemeSettings {
  theme: string;
  // Radio box selection for theme picker. Do not use in Lovelace rendering as
  // it can be undefined == auto.
  // Property hass.themes.darkMode carries effective current mode.
  dark?: boolean;
  primaryColor?: string;
  accentColor?: string;
}

export interface PanelInfo<T = Record<string, any> | null> {
  component_name: string;
  config: T;
  icon: string | null;
  title: string | null;
  url_path: string;
  config_panel_domain?: string;
}

export type Panels = Record<string, PanelInfo>;

export type Resources = Record<string, Record<string, string>>;

export interface Translation {
  nativeName: string;
  isRTL: boolean;
  hash: string;
}

export interface TranslationMetadata {
  fragments: string[];
  translations: Record<string, Translation>;
}

export interface Credential {
  auth_provider_type: string;
  auth_provider_id: string;
}

export interface MFAModule {
  id: string;
  name: string;
  enabled: boolean;
}

export interface CurrentUser {
  id: string;
  is_owner: boolean;
  is_admin: boolean;
  name: string;
  credentials: Credential[];
  mfa_modules: MFAModule[];
}

export interface Context {
  id: string;
  parent_id?: string;
  user_id?: string | null;
}

export interface ServiceCallResponse {
  context: Context;
}

export interface ServiceCallRequest {
  domain: string;
  service: string;
  serviceData?: Record<string, any>;
  target?: HassServiceTarget;
}

export interface HomeAssistant {
  auth: Auth;
  connection: Connection;
  connected: boolean;
  states: HassEntities;
  entities: Record<string, EntityRegistryDisplayEntry>;
  devices: Record<string, DeviceRegistryEntry>;
  areas: Record<string, AreaRegistryEntry>;
  floors: Record<string, FloorRegistryEntry>;
  services: HassServices;
  config: HassConfig;
  themes: Themes;
  selectedTheme: ThemeSettings | null;
  panels: Panels;
  panelUrl: string;
  // i18n
  // current effective language in that order:
  //   - backend saved user selected language
  //   - language in local app storage
  //   - browser language
  //   - english (en)
  language: string;
  // local stored language, keep that name for backward compatibility
  selectedLanguage: string | null;
  locale: FrontendLocaleData;
  resources: Resources;
  localize: LocalizeFunc;
  translationMetadata: TranslationMetadata;
  suspendWhenHidden: boolean;
  enableShortcuts: boolean;
  vibrate: boolean;
  debugConnection: boolean;
  dockedSidebar: "docked" | "always_hidden" | "auto";
  defaultPanel: string;
  moreInfoEntityId: string | null;
  user?: CurrentUser;
  userData?: CoreFrontendUserData | null;
  hassUrl(path?): string;
  callService(
    domain: ServiceCallRequest["domain"],
    service: ServiceCallRequest["service"],
    serviceData?: ServiceCallRequest["serviceData"],
    target?: ServiceCallRequest["target"],
    notifyOnError?: boolean,
    returnResponse?: boolean
  ): Promise<ServiceCallResponse>;
  callApi<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    parameters?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<T>;
  callApiRaw( // introduced in 2024.11
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    parameters?: Record<string, any>,
    headers?: Record<string, string>,
    signal?: AbortSignal
  ): Promise<Response>;
  fetchWithAuth(path: string, init?: Record<string, any>): Promise<Response>;
  sendWS(msg: MessageBase): void;
  callWS<T>(msg: MessageBase): Promise<T>;
  loadBackendTranslation(
    category: TranslationCategory,
    integration?: string | string[],
    configFlow?: boolean,
  ): Promise<LocalizeFunc>;
  loadFragmentTranslation(fragment: string): Promise<LocalizeFunc | undefined>;
  formatEntityState(stateObj: HassEntity, state?: string): string;
  formatEntityAttributeValue(
    stateObj: HassEntity,
    attribute: string,
    value?: any
  ): string;
  formatEntityAttributeName(stateObj: HassEntity, attribute: string): string;
}
