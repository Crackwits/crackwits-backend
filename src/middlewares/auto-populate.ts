type MiddlewareConfig = Record<string, unknown>;

export default (config: MiddlewareConfig, { strapi }: { strapi: any }) => {
  return async (ctx, next) => {
    const isApiRequest = ctx.request.url.startsWith('/api/');
    const isGet = ctx.method === 'GET';

    if (isApiRequest && isGet && ctx.query.populate === undefined) {
      // Ensure media and relations are included by default
      ctx.query.populate = '*';
    }

    await next();
  };
};

