import axios from "axios";
import { CustomerData } from "../components/types";

const url = "https://alloy-test-server.herokuapp.com/server-request";

export async function serverRequest(customerData: CustomerData) {
  console.log(url)
  try {
    let responseData = await axios({
      url,
      method: "post",
      data: JSON.stringify(customerData),
      headers: { "Content-Type": "application/json"},
    });
    return responseData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return { response: error.response, config: error.config };
      }
      if (error.request) {
        console.log(error.request);
        return { request: error.request, config: error.config };
      } else {
        // Something happened in setting up the request that triggered an Error
        return { message: error.response, config: error.config };
      }
    }
  }
}
