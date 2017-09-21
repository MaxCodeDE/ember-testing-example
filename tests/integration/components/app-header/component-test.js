import {
    moduleForComponent,
    test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-header', 'Integration | Component | app header', {
    integration: true
});

test('text change per button', function(assert) {

    this.render(hbs `{{app-header}}`);

    assert.equal(this.$('h2').text(), 'Hello World', 'initial text is hello world');

    //Click on the button
    this.$('#button1').click();

    assert.equal(this.$('h2').text(), 'Hello guy who clicked the button', 'title changes after click');
    
    this.$('#button2').click();
    
    assert.equal(this.$('h2').text(), 'Hello World', 'title changes after seccond click');
    
});