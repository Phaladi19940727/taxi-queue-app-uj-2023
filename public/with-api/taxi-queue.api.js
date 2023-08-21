return {
    version: 'api-1.0',
    queueLength: 0,
    queueLen: 0,
    taxiQueueLen: 0,

    init() {
        this.queueLength()
        this.taxiQueueLength()
    },

    queueLength() {
        axios
            .get('/api/passenger/queue')
            .then(result => {
                // an example API call
                this.queueLength = result.data.queueCount
                console.log(result.data.queueCount)
            });
    },
    joinQueue() {

    },
    leaveQueue() {

    joinQueue() {
        axios
            .post('/api/passenger/join')
            .then((result) => {
                console.log(result.data.message);
            })
    },

    joinTaxiQueue() {

    leaveQueue() {
        axios
            .post('/api/passenger/leave')
            .then((result) => {
                console.log(result.data.message);
            })
    },

    queueLength() {

    joinTaxiQueue() {
        axios
            .post('/api/taxi/join')
            .then((result) => {
                console.log(result.data.message);
            })
    },

    taxiQueueLength() {
        axios
            .get('/api/taxi/queue')
            .then((result) => {
                this.taxiQueueLen = result.data.queueCount
            })
    },

    queueLength() {
        axios
            .get('/api/passenger/queue')
            .then((result) => {
                this.queueLen = result.data.queueCount
            })
    },

    taxiDepart() {

        axios
            .post('/api/taxi/depart')
            .then((result) => {
                console.log(result.data.message);
            })
    }
}
});

});


});