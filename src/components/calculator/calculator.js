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
            const durations = this.get( 'durations' )
        }
    }
};