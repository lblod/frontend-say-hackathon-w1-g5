import Route from '@ember/routing/route';

export default class AanvragenOverviewRoute extends Route {
  async model() {
    const aanvragen = await fetch('https://aanvraag.hackathon-5.s.redhost.be/aanvraag')
    const besluiten = await fetch('https://aanvraag.hackathon-5.s.redhost.be/besluiten')
    return {aanvraag: await aanvragen.json(), besluit: await besluiten.json()}
  }
}
