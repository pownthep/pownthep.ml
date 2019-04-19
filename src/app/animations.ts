import { state, trigger, style, transition, animate } from "@angular/animations";

export let fade = [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
]