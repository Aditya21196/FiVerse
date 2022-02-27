import { Dialog } from '@dcl/npc-scene-utils'
import { alice } from 'game'

export const AliceDialog: Dialog[] = [
  {
    text: "Hi, I'm Alice - Welcome to FiVerse!",
  },
  {
    text: 'Would you like to learn more about this place?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 3 },
      { label: 'No', goToDialog: 2 },
    ],
  },
  {
    text: "Okay, I'll be around if you get curious!",
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    },
  },
  {
    text:
      'We are currently in the middle of a stock trading simulation and I am your guide for the day!',
  },
  {
    text:
      'If you look to your left, you will see a candlesticks chart and an explanation of how to read it.',
  },
  {
    text:
    'Once you are done going through it, please answer the trivia questions in front of you.',
  },
  {
    text:
      'Are you done going through the charts? What did you choose?',
    isQuestion: true,
    buttons: [
      { label: 'Buy', goToDialog: 7 },
      { label: 'Hold', goToDialog: 8 },
    ],
  },
  {
    text: 'Wait! The trend isn\'t apparent in the current scenario.',
  },
  {
    text:
      'Holding is a better choice!',
  },
  {
    text:
      'You can learn a lot from them about how FiVerse works and what makes it special.',
  },
  {
    text: 'You can take up another simulation to learn more!',
  }
]

