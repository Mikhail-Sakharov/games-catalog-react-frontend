import {QueryArguments} from '../types/query.type';

export const getQueryString = (args: QueryArguments | undefined) => {
  if (!args) {return '';}
  const queryParams = [
    `${args.sort ? `sortType=${args.sort}` : ''}`,
    `${args.sort && args.order ? `orderType=${args.order}` : ''}`,
  ];
  const queryString = `?${queryParams.filter((param) => param !== '').join('&')}`;
  return queryString;
};
