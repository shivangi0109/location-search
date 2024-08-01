import type { Place } from "../api/Place";
import { useState } from "react";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  const [places, setPlaces] = useState<Place[]>([]);

  return (
    <>
      <div>Location Search!!</div>
    </>
  );
};

export default LocationSearch;