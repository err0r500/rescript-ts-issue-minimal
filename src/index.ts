import { resType, iwork as iworkRes } from "./pure.gen";

export const idontwork = (uc: resType) => {
  console.log("i don't work")
  console.log(uc)

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

export const iwork = () => {
  console.log("i work")
  console.log(iworkRes)

  switch (iworkRes.tag) {
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
