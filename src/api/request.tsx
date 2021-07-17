import { ApiUrl } from "../utils/config";
import { objectToQueryString } from "../utils/helpers";

type MethodType = "GET" | "POST" | "PUT" | "DELETE";
type OPtionType = {
  method: MethodType;
  headers?: any;
  body: any;
};
const request = async (
  url: string,
  params: any,
  method: MethodType = "GET"
) => {
  const options: OPtionType = {
    method,
    body: undefined,
  };

  // if params exists and method is GET, add query string to url
  // otherwise, just add params as a "body" property to the options object
  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params); // body should match Content-Type in headers option
    }
  }

  const response = await fetch(ApiUrl + url, options);
  const result = await response.json();

  return result;
};

export default request;
