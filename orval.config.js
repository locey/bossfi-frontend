module.exports = {
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'api',
      schemas: 'api/model',
      client: 'react-query',
      mock: false,
      override: {
        mutator: {
          path: './utils/request.ts',
          name: 'axiosInstance',
        },
      },
    },
    input: {
      target: 'http://117.72.201.234/swagger/doc.json',
    },
  },
}
