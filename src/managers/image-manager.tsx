import basicPushupUrl1 from "@site/static/images-docs/pushup/image-1.png";
import basicPushupUrl2 from "@site/static/images-docs/pushup/image-2.png";
import armCircleImageUrl from "@site/static/images-docs/arm/image-1.png";
import tricepDipsUrl from "@site/static/images-docs/tricep/tricep-dips.png";
import basicPlankUrl from "@site/static/images-docs/plank/basic-plank.png";

interface ImageComponentProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties; // More specific type than 'any'
}

const ImageComponent = ({ imageUrl, alt = "", className = "", style }: ImageComponentProps) => {
  // Extract default styles to a constant to improve maintainability
  const DEFAULT_IMAGE_STYLES: React.CSSProperties = {
    width: "250px",
    maxWidth: "250px",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  };

  const DEFAULT_CONTAINER_STYLES: React.CSSProperties = {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  };

  return (
    <div className="image-container" style={DEFAULT_CONTAINER_STYLES}>
      <img
        src={imageUrl}
        alt={alt}
        className={className}
        style={style || DEFAULT_IMAGE_STYLES}
        loading="lazy"
      />
    </div>
  )
};

// Group related imports together
const EXERCISE_IMAGES = {
  pushup: {
    basic1: basicPushupUrl1,
    basic2: basicPushupUrl2,
  },
  arm: {
    circle: armCircleImageUrl,
  },
  tricep: {
    dips: tricepDipsUrl,
  },
  plank: {
    basic: basicPlankUrl,
  },
} as const;

export { EXERCISE_IMAGES, ImageComponent }