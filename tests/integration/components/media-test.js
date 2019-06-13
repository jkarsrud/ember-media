import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | media', function(hooks) {
  setupRenderingTest(hooks);

  test('it render the body when media query matches', async function(assert) {
    await render(hbs`<Media />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Media>
        template block text
      </Media>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
