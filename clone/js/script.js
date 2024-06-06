$(document).ready(function(){
    $('#carouselExample2Controls').carousel({
        interval: 1000, // Adjust the interval time as needed
        pause: 'hover'  // Pause the carousel on hover
    });
});

$(document).ready(function() {
    const apiKey = '38b24bff3834b33182f5b7d8f496e8df';
    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            if (data.success) {
                const goldPrice = data.rates.XAU;
                $('.test').each(function() {
                    $(this).text(`$${goldPrice.toFixed(2)}`);
                });
            } else {
                $('.test').each(function() {
                    $(this).text('Error.');
                });
            }
        },
        // error: function(error) {
        //     console.error('Error fetching the gold price:', error);
        //     $('.test').each(function() {
        //         $(this).text('Error.');
        //     });
        // }
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const checkbox = document.getElementById('sidebar-active');
//     const linksContainer = document.querySelector('.links-container');
//     const openSidebar = document.querySelector('.open-sidebar');

//     openSidebar.addEventListener('click', function() {
//         checkbox.checked = !checkbox.checked;
//     });

//     linksContainer.addEventListener('click', function() {
//         checkbox.checked = false;
//     });
// });
