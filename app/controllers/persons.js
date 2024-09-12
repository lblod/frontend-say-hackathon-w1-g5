import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PersonsController extends Controller {
  @service store;

  name = '';
  age = '';
  @tracked selectedKnows = [];

  get allPersons() {
    return this.store.findAll('person'); // Assuming you want to load all persons
  }

  @action
  updateName(event) {
    this.set('name', event.target.value);
  }

  @action
  updateAge(event) {
    this.set('age', event.target.value);
  }

  @action
  toggleKnows(person) {
    if (this.selectedKnows.includes(person)) {
      this.selectedKnows = this.selectedKnows.filter((p) => p !== person);
    } else {
      this.selectedKnows = [...this.selectedKnows, person];
    }
  }

  @action
  async savePerson(event) {
    event.preventDefault();

    // Create a new person record
    let newPerson = this.store.createRecord('person', {
      name: this.name,
      age: parseInt(this.age, 10),
      knows: this.selectedKnows, // Set the knows relationship with selected persons
    });

    try {
      // Save the new person with the 'knows' relationship
      await newPerson.save();
      alert('Person added successfully!');
      this.setProperties({
        name: '',
        age: '',
        selectedKnows: [],
      });
    } catch (error) {
      console.error('Error saving person:', error);
    }
  }
}
