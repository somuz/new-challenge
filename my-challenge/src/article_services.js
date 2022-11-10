import apiFetch from "./services/api.fetch";

export function index_articles() {
  return apiFetch("/articles");
}
