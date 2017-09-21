import Ember from 'ember';

export default Ember.Component.extend({
    text: 'Hello World',

    actions: {
        setText() {
            this.set('text', 'Hello guy who clicked the button');
        },
        resetText() {
            this.set('text', 'Hello World');
        }
    }
});