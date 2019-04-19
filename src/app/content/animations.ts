import { trigger,style,transition,animate,keyframes,query,stagger, state } from '@angular/animations';

export let fade = 
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])

export let routing = 
trigger('enterLeave', [
  state('flyIn', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s 300ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
  ])
])

export let staggerList = trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(
            '50ms',
            animate(
              '550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          )
        ],
        { optional: true }
      ),
      query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true
      })
    ])
  ])