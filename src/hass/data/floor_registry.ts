import type { RegistryEntry } from "./registry";

export interface FloorRegistryEntry extends RegistryEntry {
  floor_id: string;
  name: string;
  level: number | null;
  icon: string | null;
  aliases: string[];
}
