import { v4 as uuidv4 } from "uuid";

export const userTemplate = {
  id: uuidv4(),
  firstName: "",
  lastName: "",
  category: {
    food: [],
    travel: [],
    health: [],
    supplies: []
  },
  totalExpense: 0
};