import { getSalary, getNet } from './measures';

component.exports = {
    data: {
        netHeight( month ) {
            const amount = this.get( month ? 'currentSalary' : 'cost' );
            return getNet( amount );
        },
        netTop( month ) {
            if ( !month ) return 0;
            const cost = this.get( 'cost' );
            if ( month === 1 ) return getNet( cost );
            const amount = cost + ( ( month-1 ) * this.get( 'currentSalary' ) );
            return getNet( amount );
        },
        net( month ) {
            let cost = this.get( 'cost' );
            if ( month ) {
                cost += month * this.get( 'currentSalary' );
            }
            return cost;
        }
    },
    computed: {
        salaryHeight() {
          return getSalary( this.get( 'currentSalary' ) );
        }
    }
}