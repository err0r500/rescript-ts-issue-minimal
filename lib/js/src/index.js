"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iwork = exports.idontwork = void 0;
var pure_gen_1 = require("./pure.gen");
var idontwork = function (uc) {
    console.log("i don't work");
    console.log(uc);
    switch (uc.tag) {
        case "Ok": {
            console.log("ok");
            return;
        }
        case "Error": {
            console.log("error");
            return;
        }
    }
    console.log("I am supposed to be unreachable");
    console.log("---");
};
exports.idontwork = idontwork;
var iwork = function () {
    console.log("i work");
    console.log(pure_gen_1.iwork);
    switch (pure_gen_1.iwork.tag) {
        case "Ok": {
            console.log("ok");
            return;
        }
        case "Error": {
            console.log("error");
            return;
        }
    }
    console.log("I am supposed to be unreachable");
    console.log("---");
};
exports.iwork = iwork;
