import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
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
  const route = event.url

  const start = performance.now()
  const respose = await resolve(event)
  const end = performance.now()

  const responseTime = end - start

  if (responseTime > 2000) {
    console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
  }

  if (responseTime < 1000) {
    console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`); 
  }

  return respose
};
