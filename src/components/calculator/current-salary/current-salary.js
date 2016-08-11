component.exports = {
    computed: {
        barHeight() {
          const cs = +this.get('currentSalary');
          let h = 100 - cs/1000;
          return h < 100 && h >= 0 ? h : 100;
        }
    }
};
