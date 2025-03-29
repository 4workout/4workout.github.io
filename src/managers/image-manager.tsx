import upperBodyImageUrl1 from "@site/static/images-docs/upper-body-1/image-1.png";
import upperBodyImageUrl2 from "@site/static/images-docs/upper-body-2/image-1.png";

interface ImageComponentProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  style?: any;
}

const ImageComponent = ({ imageUrl, alt = "", className = "", style }: ImageComponentProps) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      style={style ? style : { width: "100%", height: "auto" }}
    />
  );
};
export { upperBodyImageUrl1, upperBodyImageUrl2, ImageComponent }