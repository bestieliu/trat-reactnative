const Images = [
    { image: require("../assets/banners/tratmarche.jpg") },
    { image: require("../assets/banners/fuengfah.jpg") },
    { image: require("../assets/banners/tewtara.jpg") },
    { image: require("../assets/banners/ruanthaiseafood.jpg") },
    { image: require("../assets/banners/jayewseafood.jpg") },
    { image: require("../assets/banners/nongbuaseafood.jpg") },
];

const Marker = [
    { marking: require("../assets/mapmarker-2.png")},
    { marking: require("../assets/mapmarker-2.png")},
    { marking: require("../assets/mapmarker-2.png")},
    { marking: require("../assets/mapmarker-2.png")},
    { marking: require("../assets/mapmarker-2.png")},
    { marking: require("../assets/mapmarker-2.png")},
    { marking: require("../assets/mapmarker-2.png")},
]


export const markers = [
    {
      coordinate: {
        latitude: 12.239812,
        longitude:102.535016,
      },
      title: "ตราดมาร์เช่ Trat Marché",
      description: "468 ม.8 ถนน เนินตาเเมว-ท่าเรือจ้าง ตราด",
      image: Images[0].image,
      rating: 4,
      reviews: 46,
      marking:Marker[0].marking,
    },
    {
      coordinate: {
        latitude: 12.247192,
        longitude: 102.519620,
      },
      title: "ร้านอาหารเฟื่องฟ้า",
      description: "ท่าเรือจ้าง ตราด",
      image: Images[1].image,
      rating: 4,
      reviews: 11,
      marking:Marker[1].marking,
    },
    {
      coordinate: {
        latitude: 12.173963,
        longitude: 102.474615,
      },
      title: "ร้านอาหารทิวธารา",
      description: "74/4 ปากคลองน้ำเชี่ยว ตราด(ซอยปากคลองน้ำเชี่่ยว)",
      image: Images[2].image,
      rating: 4,
      reviews: 121,
      marking:Marker[3].marking,
    },
    {
      coordinate: {
        latitude: 11.970602,
        longitude: 102.312869,
      },
      title: "เรือนไทยซีฟู้ด",
      description: "19/2 หมู่ หาดบางเบ้า ถนนเลียบชายหาด ตราด",
      image: Images[3].image,
      rating: 4,
      reviews: 75,
      marking:Marker[4].marking,
    },
    {
      coordinate: {
        latitude: 12.054789,
        longitude:  102.298966,
      },
      title: "เจ๊อิ๋ว ซีฟู้ด",
      description: "22/10 หมู่ 4 ต.เกาะช้าง อ.เกาะช้าง จ.ตราด",
      image: Images[4].image,
      rating: 4,
      reviews: 204,
      marking:Marker[5].marking,
    },
    {
      coordinate: {
        latitude: 12.103405,
        longitude: 102.274021,
      },
      title: "หนองบัวซีฟู้ด",
      description: "หาดทรายขาว ตราด ",
      image: Images[5].image,
      rating: 4,
      reviews: 178,
      marking:Marker[6].marking,
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];