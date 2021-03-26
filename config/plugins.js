module.exports = {
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'bv-cmg.appspot.com',
      uniform: false,
      basePath: 'strapi',
    },
  }
}