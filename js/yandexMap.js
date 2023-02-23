$(document).ready(function () {
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.58233111, 28.75580474],
            zoom: 16,
            controls: ["zoomControl", 'fullscreenControl'],
        });

        let placemark = new ymaps.Placemark([59.58233111, 28.75580474], {
            balloonContentBody: [
                '<address>',
                '<strong>Муниципальное казенное учреждение культуры «Котельский КДК»</strong>',
                '<br/>',
                '<br/>',
                'Ленинградская обл., Кингисеппский район, пос. Котельский д.34',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#redDotIcon'
        });
        myMap.geoObjects.add(placemark);
    };
});
