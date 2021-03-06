/*
 *
 * AuthPage actions
 *
 */

import { DEFAULT_ACTION,
         LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,
         REGISTER, REGISTER_SUCCESS, REGISTER_ERROR,
         RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function userLogin(data) {
  return {
    type: LOGIN,
    data
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function userRegister(data) {
  return {
    type: REGISTER,
    data
  };
}

export function registerSuccess(response) {
  return {
    type: REGISTER_SUCCESS,
    response,
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR,
  };
}

export function resetPassword(data) {
  return {
    type: RESET_PASSWORD,
    data,
  };
}

export function resetPasswordSuccess(response) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    response,
  };
}

export function resetPasswordError() {
  return {
    type: RESET_PASSWORD_ERROR,
  };
}

