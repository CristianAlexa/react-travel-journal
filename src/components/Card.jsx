import "./Card.css";
import locationPin from "../assets/images/location.png";

export default function Card(props) {
  const {
    title,
    imageUrl,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
  } = props;
  return (
    <article>
      <div className="card-image">
        <img className="img" src={imageUrl} alt="" />
      </div>
      <div className="card-details">
        <div className="card-location">
          <img src={locationPin} alt="" />
          <div className="card-country">{location}</div>
          <div className="card-map-link">
            <a href={googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
        </div>
        <h1 className="card-title">{title}</h1>
        <p className="card-duration">
          {startDate} - {endDate}
        </p>
        <p className="card-description">{description}</p>
      </div>
    </article>
  );
}
