import { createApp } from 'vue';
// import { createMemoryHistory, createBrowserHistory } from 'history';
import Dashboard from './components/Dashboard.vue';

// Ideally every micro app would follow the same structure
//const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // const history = defaultHistory || createMemoryHistory({
  //   initialEntries: [initialPath]
  // });

  // if (onNavigate) {
  //   history.listen(onNavigate);
  // }
const mount = (el) => {
  const app = createApp(Dashboard);

  app.mount(el);

  // return {
  //   onParentNavigate({ pathname: nextPathname }) {
  //     const { pathname } = history.location;

  //     if (pathname !== nextPathname) {
  //       history.push(nextPathname);
  //     }
  //   }
  // };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_dashboard-dev-root');

  if (devRoot) {
    // mount(devRoot, { defaultHistory: createBrowserHistory() });
    mount(devRoot);
  }
}

export { mount };
