const LOGIN_ERROR_CODES = {
  AUTH_ERROR_UNREGISTERED_MOBILE_NUMBER: '101',
  AUTH_ERROR_OTP_SEND_FAILURE: '102',
  OTP_ERROR_INVALID_OTP: '103',
  AUTH_SESSION_EXPIRED: '104',
  INCOMPLETE_MOBILE_NUMBER: '105',
  OTP_ERROR_USER_BLOCKED: '106',
  INTERNAL_SERVER_ERROR: '107'
};
const errorMessages = {
  [LOGIN_ERROR_CODES.AUTH_ERROR_UNREGISTERED_MOBILE_NUMBER]: 'Sorry, we could not find you!',
  [LOGIN_ERROR_CODES.AUTH_ERROR_OTP_SEND_FAILURE]: 'Sorry! We are unable to send you an OTP at this time. Please try again after some time',
  [LOGIN_ERROR_CODES.OTP_ERROR_INVALID_OTP]: 'The OTP entered is incorrect. Please try again',
  [LOGIN_ERROR_CODES.AUTH_SESSION_EXPIRED]: 'Your session has been expired. Please login again',
  [LOGIN_ERROR_CODES.INCOMPLETE_MOBILE_NUMBER]: 'Enter a valid 10 digit mobile number',
  [LOGIN_ERROR_CODES.OTP_ERROR_USER_BLOCKED]: "Sorry! You've exceeded the number of retries allowed. Please retry after two hours",
  [LOGIN_ERROR_CODES.INTERNAL_SERVER_ERROR]: 'Something went wrong! Please try again'
};

export { LOGIN_ERROR_CODES as L, errorMessages as e };
