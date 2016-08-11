component.exports = {
    computed: {
        barHeight() {
          const cs = +this.get('currentSalary');
          let h = cs*.012;
          h = Math.max( h, 0 );
          h = Math.min( h, 90 );
          return h;
        }
    }
};
