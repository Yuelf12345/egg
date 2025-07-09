module.exports = (options, app) => {
  const jwt = require('jsonwebtoken');
  return async function auth(ctx, next) {
    const authHeader = ctx.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return ctx.fail('未登录或 token 缺失', 401);
    }
    const token = authHeader.replace('Bearer ', '');
    try {
      const payload = jwt.verify(token, app.config.jwtSecret);
      ctx.state.user = payload; // 保存用户信息到 ctx.state
      await next();
    } catch (err) {
      return ctx.fail('token 无效或已过期', 401);
    }
  };
}; 