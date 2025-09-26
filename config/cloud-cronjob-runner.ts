export default {
  apiToken: process.env.STRAPI_API_TOKEN || 'default-token',
  apiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337',
  firstRunWindow: process.env.FIRST_RUN_WINDOW || '0 0 * * *',
};
