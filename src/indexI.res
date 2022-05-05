type t = Belt.Result.t<int, string> => unit
@module("./index") external idontwork: t = "idontwork"

type t2 = unit => unit
@module("./index") external iwork: t2 = "iwork"
