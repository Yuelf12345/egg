/**
 * 扩展 ctx，统一返回格式
 * ctx.success(data, msg)
 * ctx.fail(msg, code)
 */
module.exports = {
  /**
   * 成功返回
   * @param {any} data 返回数据
   * @param {string} msg 提示信息
   */
  success(data = null, msg = 'success') {
    this.body = {
      code: 0,
      msg,
      data,
    };
  },

  /**
   * 失败返回
   * @param {string} msg 错误信息
   * @param {number} code 错误码，默认 1
   */
  fail(msg = 'fail', code = 1) {
    this.body = {
      code,
      msg,
      data: null,
    };
  },
}; 