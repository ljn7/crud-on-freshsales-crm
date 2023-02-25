const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.FRESHSALES_API_KEY;
const BASE_URL = process.env.FRESHSALES_DOMAIN;

const headers = {
  Authorization: `Token token=${API_KEY}`,
  "Content-Type": "application/json",
};

const axiosConfig = {
  headers: headers,
};

module.exports = { axios, BASE_URL, axiosConfig };
