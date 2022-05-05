"use strict";
/* TypeScript file generated from pure.res by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iwork = void 0;
// @ts-ignore: Implicit any on import
var pureBS = require('./pure.bs');
exports.iwork = pureBS.iwork.TAG === 0
    ? { tag: "Ok", value: pureBS.iwork._0 }
    : { tag: "Error", value: pureBS.iwork._0 };
