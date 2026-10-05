import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const isExternalLink = Boolean(props.link && !props.link.startsWith("/"));

  return (
    <div className="work-image">
      {props.link ? (
        isExternalLink ? (
          <a
            className="work-image-in"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </a>
        ) : (
          <Link
            className="work-image-in"
            to={props.link}
            data-cursor="disable"
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </Link>
        )
      ) : (
        <div className="work-image-in" data-cursor="disable">
          <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
        </div>
      )}
    </div>
  );
};

export default WorkImage;
