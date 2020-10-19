import _get from 'lodash/get';
import data from '~~apis/ErrorCodes.json';

/**
 * 由後端給的特殊error code轉成錯誤訊息
 */

export function getErrorMessage(errorObj, defaultMsg = '系統錯誤，請稍後再試') {
  const errorCode = errorObj?.response?.data?.code || errorObj?.response?.data;
  const errorMsg = data?.[errorCode] || defaultMsg;
  return errorMsg;
}
export function getMessageByErrorCode(code, defaultMsg = 'Unexpected Error.') {
  return _get(data, code, defaultMsg);
}

export default {
  getMessageByErrorCode,
};

