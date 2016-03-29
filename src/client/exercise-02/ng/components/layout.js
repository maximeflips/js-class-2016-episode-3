import 'client/exercise-02/ng/services/chuck-norris';
import 'client/exercise-02/ng/components/fact/fact';

window._app.global_ng_module
.component('layout', {
  templateUrl: 'client/exercise-02/ng/components/layout.html',
  controller: ['chuckNorris', function(chuckNorris) {
    chuckNorris.fetch3Random().then((res) => {
      let data = res.data.value;

      this.facts = data;
      console.log(res.data.value);
    })
  }]
});
