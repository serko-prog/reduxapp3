export const ACTION_CHANGE_EMAIL = "ACTION_CHANGE_EMAIL";
export const ACTION_CHANGE_PASSWORD = "ACTION_CHANGE_PASSWORD";

export const changeEmail = (email) => ({ type: ACTION_CHANGE_EMAIL, email });
export const changePassword = (password) => ({ type: ACTION_CHANGE_PASSWORD, password });   