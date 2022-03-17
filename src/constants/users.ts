export const AUTHORS = {
  bots: {
    angryBot: "Джейк",
    sadBot: "Сэдди",
    romanticBot: "Драма",
    interestedBot: "Марк",
    psihologicBot: "Фрейди",
  },
  author: "Ты",
}

export type Bots = keyof typeof AUTHORS.bots
