import type { Handle } from '@sveltejs/kit';
import { parseFormData } from 'parse-nested-form-data';
// import type { HandleServerError } from '@sveltejs/kit';

// import type { HandleFetch } from '@sveltejs/kit';

/* export const handle: Handle = async ({ event, resolve }) => { */
/* HOOK 1 */
// if (event.url.pathname.startsWith('/something')) {
//   return new Response('Something return here! :)');
// }

/* HOOK 2 */
// const session = event.cookies.get('session')
// const user = await getUser(session)
// event.locals.user = "Mark"

// return resolve(event);

/* HOOK 3 */
// const locale = event.cookies.get('locale')
/* const locale = 'uz';
  event.locals.locale = locale;

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', locale)
  }); */

/* HOOK 4  */
// const route = event.url

// const start = performance.now()
// const respose = await resolve(event)
// const end = performance.now()

// const responseTime = end - start

// if (responseTime > 2000) {
//   console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
// }

// if (responseTime < 1000) {
//   console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
// }

// return resolve(event);
/* }; */

// export const handleError: HandleServerError = async ({ error, event }) => {
//   console.log('error', error);
// };

/* HOOK 5 */
// export const handleFetch: HandleFetch = ({ request, fetch }) => {
//   if (request.url.startsWith('http')) {
//     const url = request.url.replace('http', 'https');
//     request = new Request(url, request);

//     console.log(request.url);
//   }

//   return fetch(request)
// };

export const handle: Handle = async ({ event, resolve }) => {
  if (event.request.method === 'POST') {
    const formData = await event.request.formData();
    const data = parseFormData(formData);

    event.locals.formData = data;
  }
  return resolve(event);
};
