module.exports = {
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'bv-cmg.appspot.com',
      publicFiles: false,
      uniform: false,
      basePath: '',
    },
  }
}