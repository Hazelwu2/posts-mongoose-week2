const apiState = {
  FAIL: {
    status: 0,
    message: '失敗'
  },
  SUCCESS: {
    status: 1,
    message: '成功'
  },
  FIELD_MISSING: {
    status: 2,
    message: '資料欄位有誤'
  },
  DATA_EXIST: {
    status: 3,
    message: '資料已存在'
  },
  DATA_NOT_EXIST: {
    status: 4,
    message: '資料不存在'
  },
  UPDATE_FAILED: {
    status: 5,
    message: '更新失敗'
  },
  ROUTER_NOT_FOUND: {
    status: 9000,
    message: '找不到路由'
  },
  HTTP_METHOD_NOT_ALLOWED: {
    status: 9001,
    message: '請求方法不允許'
  },
  MAINTAIN: {
    status: 9002,
    message: '維護中，請稍後再試'
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: '發生錯誤，請稍後再試'
  },
  SYNTAX_ERROR: {
    status: 5001,
    message: 'Syntax Error，語法結構錯誤或非 JSON 格式'
  },
  REFERENCE_ERROR: {
    status: 5002,
    message: 'Reference Error，參考找不到'
  },
  TYPE_ERROR: {
    status: 5003,
    message: 'Type Error，型態錯誤'
  },

}

module.exports = apiState