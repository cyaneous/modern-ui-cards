export { HeaderCard } from './cards/header-card';
export { ChipCard } from './cards/chip-card';
export { AreaCard } from './cards/area-card';
export { EntityCard } from './cards/entity-card';

const MUI_VERSION = '0.1.0';

console.log(`Modern UI Cards v${MUI_VERSION} loaded.`);   

const w = window as any;
w.customCards = w.customCards || [];

w.customCards.push({
  type: 'modern-status-bar',
  name: 'Modern Status Bar',
  preview: true,
  description: 'A modern status bar card',
});

w.customCards.push({
  type: 'modern-header-card',
  name: 'Modern Header card',
  preview: true,
  description: 'A modern header card',
});

w.customCards.push({
  type: 'modern-chip-card',
  name: 'Modern Chip Card',
  preview: true,
  description: 'A modern chip card',
});

w.customCards.push({
  type: 'modern-area-card',
  name: 'Modern Area Card',
  preview: true,
  description: 'A modern area card',
});

w.customCards.push({
  type: 'modern-entity-card',
  name: 'Modern Entity Card',
  preview: true,
  description: 'A modern entity card',
});
