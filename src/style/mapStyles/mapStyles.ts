//styles from snazzy maps
const mapStyles = [
    {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#444444'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'all',
        stylers: [
            {
                color: '#46bcec'
            },
            {
                visibility: 'on'
            }
        ]
    }
];

export default mapStyles;