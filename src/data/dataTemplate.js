import { v4 as uuidv4 } from "uuid";

export const userTemplate = {
  id: uuidv4(),
  firstName: "",
  lastName: "",
  category: {
    food: [{ id: uuidv4(), cost: 0, date: new Date() }],
    travel: [{ id: uuidv4(), cost: 0, date: new Date() }],
    health: [{ id: uuidv4(), cost: 0, date: new Date() }],
    supplies: [{ id: uuidv4(), cost: 0, date: new Date() }]
  },
  totalExpense: 0
};

export const categoryTemplate = {
  food: [{ id: uuidv4(), cost: 0, date: new Date() }],
  travel: [{ id: uuidv4(), cost: 0, date: new Date() }],
  health: [{ id: uuidv4(), cost: 0, date: new Date() }],
  supplies: [{ id: uuidv4(), cost: 0, date: new Date() }]
};
