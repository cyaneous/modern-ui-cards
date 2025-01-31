import type { LovelaceResource } from "../resource";
import type { LovelaceStrategyConfig } from "./strategy";
import type { LovelaceViewRawConfig } from "./view";

export interface LovelaceDashboardBaseConfig {}

export interface LovelaceConfig extends LovelaceDashboardBaseConfig {
  background?: string;
  views: LovelaceViewRawConfig[];
}

export interface LovelaceDashboardStrategyConfig
  extends LovelaceDashboardBaseConfig {
  strategy: LovelaceStrategyConfig;
}

export interface LegacyLovelaceConfig extends LovelaceConfig {
  resources?: LovelaceResource[];
}

export type LovelaceRawConfig =
  | LovelaceConfig
  | LovelaceDashboardStrategyConfig;
