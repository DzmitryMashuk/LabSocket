$(() => {
    const socket = io.connect();

    let $form          = $('#square-form');
    let $result        = $('.result');
    let requestCounter = 0;

    let getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }

    $form.submit((event) => {
        event.preventDefault();

        if (++requestCounter > 10) {
            alert('This query is the tenth or more.');

            return;
        }

        socket.emit('square', {number: getRandomInt(100)});
    });

    socket.on('showNumbers', (data) => {
        $result.append($('<div>').html('Start number: ' + data.number));
        $result.append($('<div>').html('Square number: ' + data.squareNumber));
    });
});