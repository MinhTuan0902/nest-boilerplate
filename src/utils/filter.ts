import { isObject } from 'class-validator';

export const transformFilterToMongoFilterQuery = (filter: unknown) => {
  const filterQuery = {};
  if (isObject(filter)) {
    for (const prop in filter) {
      const [field, operator] = prop.split('_');
      if (!field || !operator) continue;

      const value = filter[prop];
      switch (operator.toString()) {
        case 'equal':
          filterQuery[field] = { $eq: value };
          break;

        case 'notEqual':
          filterQuery[field] = { $ne: value };
          break;

        case 'in':
          filterQuery[field] = { $in: [...value] };
          break;

        case 'notIn':
          filterQuery[field] = { $nin: [...value] };
          break;

        case 'greaterThan':
          filterQuery[field] = { $gt: value };
          break;

        case 'moreThanOrEqual':
          filterQuery[field] = { $gte: value };
          break;

        case 'lessThan':
          filterQuery[field] = { $lt: value };
          break;

        case 'lessThanOrEqual':
          filterQuery[field] = { $lte: value };
          break;

        default:
          break;
      }
    }
  }
  return filterQuery;
};
