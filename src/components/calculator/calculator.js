component.exports = {
    data() {
        return {
            month: 10,
            durations: {
                current: 1,
                school: 4,
                search: 3,
                outlook: 60
            }

        }
    },
    computed: {
        totalDuration() {
            const d = this.get( 'durations' );
            return d.current + d.school + d.search + d.outlook;
        }
    }
};
