import Model, { attr, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') name; // foaf:name
  @attr('number') age; // foaf:age
  @hasMany('person', { inverse: null }) knows;
}
