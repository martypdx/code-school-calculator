component.exports = {
    data() {
        return {
            month: 10,
            durations: {
                current: 1,
                school: 4,
                search: 3,
                outlook: 60
            },
            currentSalary: {
                amount: 30000,
                period: 'y'
            }

        }
    },
    computed: {
        totalDuration() {
            const d = this.get( 'durations' );
            return d.current + d.school + d.search + d.outlook;
        },
        monthlyCurrentSalary() {
            const salary = this.get( 'currentSalary' );
            const amount = salary.period === 'm' ? +salary.amount : salary.amount/12;
            return Math.round(amount);
        }
    }
};