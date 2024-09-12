import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('editor');
  this.route('persons', function () {
    this.route('details', { path: '/:id/details' });
  });
});
