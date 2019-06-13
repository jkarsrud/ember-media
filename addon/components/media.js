import Component from '@ember/component';
import layout from '../templates/components/media';

import MediaQueryList from './-private/media-query-list';

export default Component.extend({
  layout,
  tagName: '',
  matches: true,
  targetWindow: undefined,

  updateMatches() {
    const { matches } = this.mediaQueryList;

    this.set('matches', matches);

    if(this.onChange) {
      this.onChange(matches);
    }
  },

  willRender() {
    const targetWindow = this.targetWindow || window;

    this.mediaQueryList = new MediaQueryList(targetWindow, this.query, this.updateMatches.bind(this));
    this.updateMatches();
  },

  willDestroyElement() {
    this.mediaQueryList.cancel();
  }
});
