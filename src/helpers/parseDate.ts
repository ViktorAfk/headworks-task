export const parseDate = (params: string) => {
  const preparedData = params.slice(0, 16).split('T').join(', ');

  return preparedData;
};
