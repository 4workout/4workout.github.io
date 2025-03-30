import armCircleImageUrl from "@site/static/images-docs/arm/image-1.png";
import basicPlankUrl from "@site/static/images-docs/plank/basic-plank.png";
import basicPushupUrl1 from "@site/static/images-docs/pushup/image-1.png";
import basicPushupUrl2 from "@site/static/images-docs/pushup/image-2.png";
import tricepDipsUrl from "@site/static/images-docs/tricep/tricep-dips.png";

import './image-manager.css';

interface ImageComponentProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

const ImageComponent = ({ imageUrl, alt, className }: ImageComponentProps) => {

  return (
    <div className="image-container">
      <img
        src={imageUrl}
        alt={alt}
        className={className || "shadow--md"}
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

export { EXERCISE_IMAGES, ImageComponent };
