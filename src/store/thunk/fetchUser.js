import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUser = createAsyncThunk("users", async () => {
  try {
    const res = await axios.get(`https://books-list-api.vercel.app/books`, {
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
});

export { fetchUser };
