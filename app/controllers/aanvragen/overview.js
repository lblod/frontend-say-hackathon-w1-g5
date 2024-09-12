import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class AanvragenOverviewController extends Controller {
  title = 'Overicht aanvragen toelatingen beschermd onroerend erfgoed';
  @service() router;

  get hasActiveChildRoute() {
    return (
      this.router.currentRouteName.startsWith('aanvragen.') &&
      this.router.currentRouteName != 'aanvragen.overview'
    );
  }
}
