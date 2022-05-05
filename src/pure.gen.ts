/* TypeScript file generated from pure.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const pureBS = require('./pure.bs');

// tslint:disable-next-line:interface-over-type-literal
export type resType = 
    { tag: "Ok"; value: number }
  | { tag: "Error"; value: string };

export const iwork: resType = pureBS.iwork.TAG===0
? {tag:"Ok", value:pureBS.iwork._0}
: {tag:"Error", value:pureBS.iwork._0};
