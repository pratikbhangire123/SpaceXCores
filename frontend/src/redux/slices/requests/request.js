import { BASE_URL } from "../../../constants/constants";

export const request = (path) =>
  fetch(`${BASE_URL}${path}`, { redirect: "follow" }).then(
    async (response) => {
      return await response.json();
    }
  );
