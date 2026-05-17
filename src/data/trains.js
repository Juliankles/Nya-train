export const trainsData = [
  {
    id: "705K",
    number: "705К",
    from: "Київ",
    to: "Львів",
    departure: "2026-05-25T06:00:00",
    duration: "5г 12хв",
    wagons: [
      { id: 1, type: "Інтерсіті (1 клас)", seats: Array(40).fill(false) },
      { id: 2, type: "Інтерсіті (2 клас)", seats: Array(40).fill(false) }
    ]
  },
  {
    id: "091K",
    number: "091К",
    from: "Київ",
    to: "Одеса",
    departure: "2026-05-25T21:15:00",
    duration: "9г 30хв",
    wagons: [
      { id: 1, type: "Купе", seats: Array(36).fill(false) },
      { id: 2, type: "Плацкарт", seats: Array(54).fill(false) }
    ]
  },
  {
    id: "007K",
    number: "007К",
    from: "Харків",
    to: "Ужгород",
    departure: "2026-05-26T16:43:00",
    duration: "19г 05хв",
    wagons: [
      { id: 1, type: "Купе", seats: Array(36).fill(false) }
    ]
  }
];