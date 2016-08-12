import { getSalary } from './measures';

component.exports = {
    computed: {
        barHeight() {
          return getSalary( this.get('currentSalary') );
        }
    }
};
