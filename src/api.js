import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDzmbK8CJvfvdG_EZiiv5hpZDcRwQzXXt0",
  },
});
