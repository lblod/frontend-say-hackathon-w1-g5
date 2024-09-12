import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersonsRoute extends Route {
  @service store;

  model() {
    return this.store.query('person', {
      include: 'knows',
    });
  }
}
