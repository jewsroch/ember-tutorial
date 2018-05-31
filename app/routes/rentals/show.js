import Route from '@ember/routing/route';

export default Route.extend({
  model({rental_id}) {
    return this.get('store').findRecord('rental', rental_id);
  }
});
