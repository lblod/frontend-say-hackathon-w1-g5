import Route from '@ember/routing/route';

export default class AanvragenOverviewRoute extends Route {
  async model() {
    const response = await fetch('/aanvraag')
    return await response.json()
  }
}
