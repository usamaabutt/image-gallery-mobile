/** @format */

import axios from "axios";
import { config } from "./config";

/**
 * @description Create an Axios Client with defaults
 */
const axioRequest = axios.create({
  baseURL: "https://scary-wrap-duck.cyclic.app",
});

/**
 *
 * @param {*} callback Getting user data
 */
export const userData = async (callback) => {
  try {
    const response = await axioRequest.get(config.userData);
    callback(response.data);
  } catch (error) {
    callback(error);
  }
};

/**
 *
 * @param {*} callback Getting user gallary data
 */
export const userGallaryData = async (callback) => {
  try {
    const response = await axioRequest.get(config.userGallaryData);
    callback(response.data);
  } catch (error) {
    callback(error);
  }
};

/**
 *
 * @param {*} callback Getting user wonder data
 */
export const userWonderData = async (callback) => {
  try {
    const response = await axioRequest.get(config.userWonderData);
    callback(response.data);
  } catch (error) {
    callback(response.data);
  }
};
