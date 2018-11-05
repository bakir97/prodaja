import axios from "axios";
export default async file => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "emsbshr7");
  delete axios.defaults.headers.common["Authorization"];
  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dq9cwwrml/image/upload",
      formData
    );
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    return response.data.url;
  } catch (error) {
    if (Object.keys(error.response.data.error).length > 0) {
      this.setState({ error: true });
    }
  }
};
