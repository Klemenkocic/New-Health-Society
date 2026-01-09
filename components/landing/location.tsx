"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useMemo } from "react"

const libraries: ("places")[] = ["places"]

export function LocationSection() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
        libraries: libraries
    })

    const center = useMemo(() => ({
        lat: 48.18824,
        lng: 11.60187
    }), [])

    const mapOptions = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        scrollwheel: false,
        zoomControl: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#616161" }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#bdbdbd" }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#eeeeee" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{ "color": "#e5e5e5" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{ "color": "#dadada" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#616161" }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{ "color": "#e5e5e5" }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{ "color": "#eeeeee" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#c9c9c9" }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
            }
        ]
    }), [])

    return (
        <section className="py-12 md:pb-24 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto h-[600px] flex flex-col md:flex-row">
                {/* Map Side (Left) */}
                <div className="w-full md:w-1/2 h-full bg-neutral-900 relative group overflow-hidden rounded-3xl shadow-sm">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={center}
                            zoom={15}
                            options={mapOptions}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-500">
                            Loading Map...
                        </div>
                    )}
                </div>

                {/* Info Side (Right) */}
                <div className="w-full md:w-1/2 bg-[#F3F0E5] text-[#293133] p-12 md:p-24 flex flex-col justify-center">
                    <div className="mb-12 border-b border-[#293133]/10 pb-8">
                        <h2 className="font-serif text-5xl md:text-6xl text-[#293133]">Location</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold mb-1">Location</h4>
                                <p className="opacity-80">Lilienthalallee 5</p>
                                <p className="opacity-80">80807 Munich, Germany</p>
                                <p className="text-primary text-xs font-bold mt-2 tracking-widest uppercase">Free Parking Available</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold mb-1">Opening Hours</h4>
                                <p className="opacity-80">Mon - Fri: 07:00 - 19:00</p>
                                <p className="opacity-80">Sat: 09:00 - 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
