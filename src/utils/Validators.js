export const ValidateUsername = (value) => {
  if (value.match(/^[a-zA-Z]+$/) && value) {
    return true;
  } else {
    return "Only english letters";
  }
};

export const ValidatePassword = (value) => {
  if (value.match(/[A-Za-z0-9]+$/) && value) {
    if (value.length >= 6) {
      return true;
    } else {
      return "Too short, 6 letters min";
    }
  } else {
    return "Only english letters and numbers";
  }
};
