import Card from "./Card";
import "./Content.css";
import data from "../assets/data/data";

export default function Content() {
  console.log(data[0]);
  const cards = data.map((place) => <Card {...place} />);
  return <section className="content">{cards}</section>;
}
