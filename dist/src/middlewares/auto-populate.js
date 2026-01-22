"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
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
