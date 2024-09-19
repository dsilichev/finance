export const getLastPageFromLinks = (links) => {
  const result = links.match(/_page=(\d+)\&_limit=\d+>;\srel="last"/);
  if (result === null) {
    return 1;
  }
  return Number(result[1]);
};
