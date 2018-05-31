import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  },
  isWide: false
});
