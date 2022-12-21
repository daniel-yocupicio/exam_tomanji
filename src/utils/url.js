export const getUrl = string => {
  if (string.lenght > 1) {
    return {url: string, isWeb: true};
  }
  return {url: string, isWeb: false};
};
