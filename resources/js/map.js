const mapBlock = document.getElementById('contacts-map');

mapBlock.addEventListener("mouseover", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '0';
    });
})
mapBlock.addEventListener("mouseout", e =>{
    circles.forEach(circle => {
        circle.style.opacity = '1';
    });
})

initMap();
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapFeature, YMapMarker} = ymaps3;

    const markerElement = document.createElement('img');
    markerElement.className = 'icon-marker';
    markerElement.src = 'resources/images/icons/pin.svg';
    const subwayPoint = new YMapMarker(
        {
            coordinates: [30.3708099183207,60.008756528292906]
        }, 
        markerElement.cloneNode()
    );
    const meetingPoint = new YMapMarker(
        {
            coordinates: [30.379549892024745,60.006793549804826]
        },
        markerElement.cloneNode()
    );    
 
    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        mapBlock,

        // Передаём параметры инициализации карты
        {
            location: {
                center: [30.37532199887456, 60.007750373034796],
                zoom: 16, 
                showScaleInCopyrights: false
            }
        }
    );
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    // Добавляем точки
    map.addChild(subwayPoint).addChild(meetingPoint);

    const lineStringFeature = new YMapFeature({
        id: 'line',
        geometry: {
          type: 'LineString',
          coordinates: [
            subwayPoint.coordinates,
            [30.37076297966293,60.00869474989982],
            [30.37504995081744,60.00795440955289],
            [30.375387909153307,60.00785435292302],
            [30.3777561525649,60.007437019732556],
            [30.379785119481436,60.00712079138187],
            meetingPoint.coordinates
          ]
        },
        style: {
          stroke: [{width: 4, color: '#1a32e089', dasharray: 40}]
        }
      });
      
    map.addChild(lineStringFeature);

}