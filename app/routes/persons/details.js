import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersonsDetailsRoute extends Route {
  @service store;

    model(params) {
      return this.store.findRecord('person',
                                   params.id,
                                   {include: 'knows'});
  }
}
