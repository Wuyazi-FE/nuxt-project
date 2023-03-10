import { defineEventHandler } from 'h3';

let counter = 0;
const count = defineEventHandler(() => {
  counter++;
  return counter;
});

export { count as default };
//# sourceMappingURL=count.mjs.map
