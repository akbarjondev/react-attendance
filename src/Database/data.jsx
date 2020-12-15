const users = [
  { id: 1, username: 'Farruh' },
  { id: 2, username: 'Bekzod' },
  { id: 3, username: 'Abdullatifxon' },
  { id: 4, username: 'Umida' },
  { id: 5, username: 'Iroda' },
];

const attendance = [
  { id: 1, userId: 1, visitDate: '2020-12-15', visit: true, score: 8 },
  { id: 2, userId: 1, visitDate: '2020-12-14', visit: false, score: 7 },
  { id: 3, userId: 2, visitDate: '2020-12-15', visit: false, score: 6 },
  { id: 4, userId: 2, visitDate: '2020-12-14', visit: true, score: 11 },
  { id: 5, userId: 3, visitDate: '2020-12-15', visit: true, score: 15 },
  { id: 6, userId: 3, visitDate: '2020-12-14', visit: true, score: 2 },
  { id: 7, userId: 4, visitDate: '2020-12-14', visit: true, score: 4 },
  { id: 8, userId: 4, visitDate: '2020-12-14', visit: false, score: 7 },
  { id: 9, userId: 4, visitDate: '2020-12-14', visit: true, score: 12 },
  { id: 10, userId: 1, visitDate: '2020-12-16', visit: true, score: 23 },
  { id: 11, userId: 2, visitDate: '2020-12-16', visit: true, score: 31 },
  { id: 12, userId: 4, visitDate: '2020-12-16', visit: false, score: 55 },
  { id: 13, userId: 5, visitDate: '2020-12-16', visit: true, score: 88 },
];

export { users, attendance };