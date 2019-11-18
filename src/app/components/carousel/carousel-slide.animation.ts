import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

export const slider: AnimationTriggerMetadata = trigger('slider', [
  state('true', style({ transform: 'translate3d({{distance}}px,0,0)' }), { params: { distance: '0' } }),
  state('false', style({ transform: 'translate3d({{distance}}px,0,0)' }), { params: { distance: '0' } }),
  transition('* => *', animate('200ms ease'))
]);
