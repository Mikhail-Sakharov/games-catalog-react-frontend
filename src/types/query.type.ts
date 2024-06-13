export enum SortType {
  Rating = 'rating'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type QueryArguments = {
  sort?: SortType;
  order?: SortOrder;
};
