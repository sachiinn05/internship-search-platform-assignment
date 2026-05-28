import axios from "axios";

const API = "https://internshala.com/hiring/search";

export const fetchInternships = async () => {

  try {

    const response = await axios.get(API);

    return response.data;

  } catch (error) {

    console.log(error);

  }
};