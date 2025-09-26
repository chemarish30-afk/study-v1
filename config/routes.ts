export default {
  routes: [
    {
      method: 'GET',
      path: '/content-manager/relations/:model/:id/:targetField',
      handler: 'content-manager.relations',
    },
  ],
};
