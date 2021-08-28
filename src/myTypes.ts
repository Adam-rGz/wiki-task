export type Item = {
  pageid: number,
  snippet: string,
  title: string,
  timestamp: string,
};

export type apiQuery = {
  batchcomplete: any,
  continue: any,
  query: {
    search: Item[],
    searchInfo: any,
  },
};
