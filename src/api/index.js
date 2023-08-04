import Axios from "axios";

async function fetchData() {
  try {
    const res = await Axios.get(`https://books-list-api.vercel.app/books`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": "#b0@6hX8YasCq6^unOaPw1tqR",
      },
    });
    return res.data.data; // Return the data array from the response
  } catch (err) {
    console.error("Error fetching data:", err);
    return []; // Return an empty array if an error occurs
  }
}

export default fetchData;
