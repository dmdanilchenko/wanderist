(function(){

    'use strict'

    $(document).ready(function(){

        $('.toggle-sidebar').click(function (e) {
            e.preventDefault();

            var $btn        = $(this);
            var wrapper     = $btn.closest('#wrapper');
            var mapWrapper  = wrapper.find('.map-wrapper');
            var map         = wrapper.find('#map');
            var sidebar     = wrapper.find('.sidebar-wrapper');

            sidebar.toggleClass('hidden-sidebar');
            mapWrapper.toggleClass('hidden-sidebar');

            setTimeout(function(){
                updateMap();
                map.css('overflow', 'inherit');
            }, 400);
        });


        $(window).resize(resizeMap);
        resizeMap();

        var updateMap = (function() {
            var map = null;

            var place = {lat: 45.447120, lng: 11.005794};
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: place
            });
            var marker = new google.maps.Marker({
                position: place,
                map: map,
                icon: 'images/pin-map.png'
            });

            return function() {
                if (map) {
                    google.maps.event.trigger(map,'resize');
                }
            }

        })();
    });

    function resizeMap() {
        var sidebarHeight = $('.sidebar-wrapper').height();
        $('.map-wrapper').height(sidebarHeight);
    }

})(jQuery);