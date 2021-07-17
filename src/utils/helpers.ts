// shorting string  function with  2 params, first is  the string
// and second argument is the length of the  string that you want to shorten after.
const shortenName = (name: string, length = 10) => {
  if (!name) return "";
  if (name.length < length) return name;
  return `${name.substr(0, length - 2)}..`;
};

// convert object to query string
const objectToQueryString = (obj: any) => {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
};

export { shortenName, objectToQueryString };
