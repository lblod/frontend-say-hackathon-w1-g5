import ApplicationSerializer from './application';

export default class PersonSerializer extends ApplicationSerializer {
  serialize(snapshot, options) {
    let json = super.serialize(snapshot, options);

    json.data = json.data || {};
    json.data.type = 'person';

    return json;
  }
}
