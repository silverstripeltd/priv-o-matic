import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('step', {
  // Specify the other units that are required for this test.
  needs: ['prompt']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
