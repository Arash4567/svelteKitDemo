// import type { PageServerLoad } from './$types';

import type { Actions } from '@sveltejs/kit';

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export const load: PageServerLoad = async ({ fetch }) => {
//   // await sleep(2000);
//   // throw new Error('banana 🍌')
//   await fetch('http://jsonplaceholder.typicode.com/users')
// };

export const actions: Actions = {
  default: async ({ locals }) => {
    console.log(locals.formData);
  }
};
