import { Link } from "react-router-dom";
import { Covenas1 } from "./Covenas1";
import { Covenas2 } from "./Covenas2";
import { Covenas3 } from "./Covenas3";
import { Covenas4 } from "./Covenas4";
import { Covenas5 } from "./Covenas5";
import { Covenas6 } from "./Covenas6";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/covenas1" className="links">
        <figure className="image-size">
          <Covenas1 />
          <figcaption>Grecia 1</figcaption>
        </figure>
      </Link>
      <Link to="/covenas2" className="links">
        <figure className="image-size">
          <Covenas2 />
          <figcaption>Grecia 2</figcaption>
        </figure>
      </Link>
      <Link to="/covenas3" className="links">
        <figure className="image-size">
          <Covenas3 />
          <figcaption>Grecia 3</figcaption>
        </figure>
      </Link>
      <Link to="/covenas4" className="links">
        <figure className="image-size">
          <Covenas4 />
          <figcaption>Grecia 4</figcaption>
        </figure>
      </Link>
      <Link to="/covenas5" className="links">
        <figure className="image-size">
          <Covenas5 />
          <figcaption>Grecia 5</figcaption>
        </figure>
      </Link>
      <Link to="/covenas6" className="links">
        <figure className="image-size">
          <Covenas6 />
          <figcaption>Grecia 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}