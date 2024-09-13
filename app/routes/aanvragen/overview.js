import Route from '@ember/routing/route';

export default class AanvragenOverviewRoute extends Route {
  async model() {
    const response = await fetch('https://aanvraag.hackathon-5.s.redhost.be/aanvraag')
    return await response.json()
  }
}
