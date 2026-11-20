// components/PlaceCard.tsx
import React from "react";

export interface Place {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

type PlaceCardProps = {
  place: Place;
};

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        gap: "16px",
      }}
    >
      <img
        src={place.imageUrl}
        alt={place.name}
        style={{
          width: "200px",
          height: "140px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div>
        <h2 style={{ margin: "0 0 8px", fontSize: "1.25rem" }}>
          {place.name}
        </h2>
        <p style={{ margin: 0 }}>{place.description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;