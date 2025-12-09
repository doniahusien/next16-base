"use server";

import axios from "axios";

export const axiosServer = axios.create({
  baseURL: process.env.API_URL,
});