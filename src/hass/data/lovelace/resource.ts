export interface LovelaceResource {
  id: string;
  type: "css" | "js" | "module" | "html";
  url: string;
}