const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters
