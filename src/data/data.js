import Moment from "moment";

function randomDate() {
  return Moment(parseInt(Math.random() * Math.pow(10, 12))).format(
    "YYYY-MM-DD"
  );
}

function randomCost(max) {
  return parseInt(max * Math.random());
}

export const dummy_data = [
  {
    id: "1",
    firstName: "Tony",
    lastName: "Stark",
    category: {
      food: [
        { id: 1, cost: randomCost(10000), date: randomDate() },
        { id: 2, cost: randomCost(10000), date: randomDate() }
      ],
      travel: [
        { id: 1, cost: randomCost(10000), date: randomDate() },
        { id: 2, cost: randomCost(10000), date: randomDate() }
      ],
      health: [
        { id: 1, cost: randomCost(10000), date: randomDate() },
        { id: 2, cost: randomCost(10000), date: randomDate() }
      ],
      supplies: [
        { id: 1, cost: randomCost(10000), date: randomDate() },
        { id: 2, cost: randomCost(10000), date: randomDate() }
      ]
    }
  },
  {
    id: "2",
    firstName: "Steve",
    lastName: "Rogers",
    category: {
      food: [
        { id: 1, cost: randomCost(100), date: randomDate() },
        { id: 2, cost: randomCost(100), date: randomDate() }
      ],
      travel: [
        { id: 1, cost: randomCost(100), date: randomDate() },
        { id: 2, cost: randomCost(100), date: randomDate() }
      ],
      health: [
        { id: 1, cost: randomCost(100), date: randomDate() },
        { id: 2, cost: randomCost(100), date: randomDate() }
      ],
      supplies: [
        { id: 1, cost: randomCost(100), date: randomDate() },
        { id: 2, cost: randomCost(100), date: randomDate() }
      ]
    }
  }
];
