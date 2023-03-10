import { defineEventHandler } from 'h3';

let result = {
  "title": "Mount Everest",
  "description": "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China\u2013Nepal border runs across its summit point",
  "height": "8,848 m",
  "countries": [
    "China",
    "Nepal"
  ],
  "continent": "Asia",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg"
};
const everest = defineEventHandler(() => {
  return result;
});

export { everest as default };
//# sourceMappingURL=everest.mjs.map
