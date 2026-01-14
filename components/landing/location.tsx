"use client"

import { useState, useRef } from "react"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer, Autocomplete } from "@react-google-maps/api"
import { useMemo } from "react"

const libraries: ("places")[] = ["places"]

export function LocationSection() {
    const [address, setAddress] = useState("")
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null)
    const [travelTime, setTravelTime] = useState<string>("")
    const [isCalculating, setIsCalculating] = useState(false)
    const [error, setError] = useState<string>("")
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
        libraries: libraries
    })

    const center = useMemo(() => ({
        lat: 48.18824,
        lng: 11.60187
    }), [])

    const destinationAddress = "Lilienthalallee 5, 80807 Munich, Germany"

    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
    }

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace()
            if (place.formatted_address) {
                setAddress(place.formatted_address)
                // Automatically calculate route when address is selected
                setTimeout(() => {
                    calculateRouteWithAddress(place.formatted_address)
                }, 100)
            }
        }
    }

    const calculateRouteWithAddress = async (selectedAddress: string) => {
        setIsCalculating(true)
        setError("")
        setTravelTime("")
        setDirections(null)

        try {
            const directionsService = new google.maps.DirectionsService()
            const results = await directionsService.route({
                origin: selectedAddress,
                destination: destinationAddress,
                travelMode: google.maps.TravelMode.DRIVING,
            })

            setDirections(results)

            // Extract travel time
            const duration = results.routes[0]?.legs[0]?.duration?.text
            if (duration) {
                setTravelTime(duration)
            }
        } catch (err) {
            setError("Could not calculate route. Please check your address.")
            console.error(err)
        } finally {
            setIsCalculating(false)
        }
    }

    const calculateRoute = async () => {
        if (!address.trim()) {
            setError("Please enter your address")
            return
        }
        await calculateRouteWithAddress(address)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            calculateRoute()
        }
    }

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
        <section className="py-12 md:pb-24 px-6 md:px-12 bg-grainy-beige">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8">
                {/* Map Side (Left) */}
                <div className="w-full lg:w-[65%] h-[500px] lg:h-[700px] bg-neutral-900 relative group overflow-hidden rounded-3xl shadow-lg">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={directions ? undefined : center}
                            zoom={directions ? undefined : 15}
                            options={mapOptions}
                        >
                            {!directions && <Marker position={center} />}
                            {directions && <DirectionsRenderer directions={directions} />}
                        </GoogleMap>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-500">
                            Loading Map...
                        </div>
                    )}
                </div>

                {/* Info Side (Right) */}
                <div className="w-full lg:w-[35%] bg-[#F3F0E5] text-[#293133] p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-8 border-b border-[#293133]/10 pb-6">
                        <h2 className="font-serif text-4xl lg:text-5xl text-[#293133]">Location</h2>
                    </div>

                    <div className="space-y-6">
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

                        {/* Travel Time Calculator */}
                        <div className="pt-6 mt-6 border-t border-[#293133]/10">
                            <div className="flex items-start gap-4">
                                <Navigation className="w-6 h-6 text-primary mt-1" />
                                <div className="flex-1">
                                    <h4 className="font-bold mb-3">How long does it take?</h4>
                                    <div className="space-y-3">
                                        {isLoaded ? (
                                            <Autocomplete
                                                onLoad={onLoad}
                                                onPlaceChanged={onPlaceChanged}
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Enter your address"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                    className="w-full px-4 py-2 rounded-lg border border-[#293133]/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-primary transition-colors text-sm"
                                                />
                                            </Autocomplete>
                                        ) : (
                                            <input
                                                type="text"
                                                placeholder="Loading..."
                                                disabled
                                                className="w-full px-4 py-2 rounded-lg border border-[#293133]/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-primary transition-colors text-sm"
                                            />
                                        )}
                                        <button
                                            onClick={calculateRoute}
                                            disabled={isCalculating || !isLoaded}
                                            className="w-full px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                        >
                                            {isCalculating ? "Calculating..." : "Calculate Travel Time"}
                                        </button>

                                        {travelTime && (
                                            <div className="bg-[#293133]/5 border border-[#293133]/10 rounded-lg px-6 py-4">
                                                <p className="text-[#293133] text-sm">
                                                    <span className="font-bold">Travel time:</span> <span className="font-medium">{travelTime}</span>
                                                </p>
                                            </div>
                                        )}

                                        {error && (
                                            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                                                <p className="text-red-600 text-sm">{error}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
