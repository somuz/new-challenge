import { BASE_URL, token_Key } from "./config";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(token_Key);
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    };
  }
  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }
  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };
  const response = await fetch(BASE_URL + endpoint, config);
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(console.log(response.statusText));
    }
    throw new Error(data.errors);
  }
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  return data;
}
