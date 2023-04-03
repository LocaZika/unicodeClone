import { host } from "../config";
const send = async (path, method, dataBody, token) => {
  const res = await fetch(host + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + token,
    },
    body: JSON.stringify(dataBody) ?? null,
  });
  const data = res.json();
  return { res, data };
};
export const get = (path) => {
  return send(path, "GET");
};
export const post = (path, data) => {
  return send(path, "POST", data);
};
export const update = (path, id, data) => {
  return send(`${path}/${id}`, "PATCH", data);
};
export const remove = (path, id) => {
  return send(`${path}/${id}`, "DELETE");
};
const RESTful = {
  get,
  post,
  update,
  remove,
};
export default RESTful;
