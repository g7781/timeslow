document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var source = document.getElementById('source').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;

    // Simulate searching for buses (you would replace this with actual backend code)
    var busData = [
        { busNumber: '001', departureTime: '08:00 AM', price: '$950' },
        { busNumber: '002', departureTime: '10:00 AM', price: '$1550' },
        { busNumber: '003', departureTime: '12:00 PM', price: '$1200' }
    ];

    var busList = document.getElementById('busList');
    busList.innerHTML = '';

    for (var i = 0; i < busData.length; i++) {
        var li = document.createElement('li');
        li.innerText = 'Bus Number: ' + busData[i].busNumber +
                      ', Departure Time: ' + busData[i].departureTime +
                      ', Price: ' + busData[i].price;
        busList.appendChild(li);
    }

    document.getElementById('results').style.display = 'block';
});
