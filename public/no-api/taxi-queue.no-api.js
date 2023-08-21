document.addEventListener("alpine:init", () => {
	Alpine.data("TaxiQueue", () => {
	  return {
		version: "no-api-1.0",
		taxi_queue_count: 0,
		queueLengthPassnger: 0,
		queueLengthPassenger: 0,
		queueLengthTaxi: 0,
		taxiDepartPassenger: "",
		TaxiDepartTaxi: "",
  
		joinQueue() {
		  this.queueLengthPassnger += 1;
		  (localStorage = localStorage["queueLengthPassnger"]),
			this.passengerMessage;
		},
		leaveQueue() {
		  if (this.queueLengthPassnger > 0) {
			this.queueLengthPassnger -= 1;
		  }
		},
  
		joinTaxiQueue() {
		  this.taxi_queue_count += 1;
		  localStorage = localStorage["taxi_queue_count "];
		},
  
		queueLength() {
		  if (queueLengthPassnger == 12) {
			return joinTaxiQueue();
		  }
		},
  
		taxiQueueLength() {},
  
		taxiDepart() {
		  if (this.queueLengthPassnger >= 12) {
			this.taxiDepartPassenger = this.queueLengthPassnger - 12;
			this.TaxiDepartTaxi = this.taxi_queue_count - 1;
	  this.queueLengthPassnger = this.taxiDepartPassenger;
	  this.taxi_queue_count = this.TaxiDepartTaxi;
		  } else{
  
	 return "Not enough passengers for taxi to depart"
	}
		},
	  };
	});
  });
  