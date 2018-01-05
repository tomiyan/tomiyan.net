module.exports = {
  webpack (config)  {
    // Remove minifed react aliases for material-ui so production builds work
    if (config.resolve.alias) {
      delete config.resolve.alias.react
      delete config.resolve.alias['react-dom']
    }

    return config
  },
  async exportPathMap () {
    // combine the map of post pages with the home
    return Object.assign({}, {
      '/': { page: '/' },
      '/tools/urlscheme': { page: '/tools/urlscheme' }
    })
  }
}
