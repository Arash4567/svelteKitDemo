import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
  return new Response(locals.user);
};
