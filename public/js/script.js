$(() => {
    const socket = io.connect();

    let $form         = $('#square-form');
    let $number       = $('.start-number');
    let $squareNumber = $('.square-number');

    let getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }

    $form.submit((event) => {
        event.preventDefault();
        socket.emit('square', {number: getRandomInt(100)});
    });

    socket.on('showNumbers', (data) => {
        $number.html(data.number);
        $squareNumber.html(data.squareNumber);
    });
});