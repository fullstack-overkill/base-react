export default (httpResponse) => ({
  status: httpResponse.status,
  body: httpResponse.data,
});
