import pushupImageUrl1 from "@site/static/images-docs/pushup/image-1.png";
import pushupImageUrl2 from "@site/static/images-docs/pushup/image-2.png";
import armImageUrl1 from "@site/static/images-docs/arm/image-1.png";
import tricepDipsUrl from "@site/static/images-docs/tricep/tricep-dips.png";

interface ImageComponentProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  style?: any;
}

const ImageComponent = ({ imageUrl, alt = "", className = "", style }: ImageComponentProps) => {
  return (
    <div className="image-container" style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignContent: "center" }}>
      <img
        src={imageUrl}
        alt={alt}
        className={className}
        style={style ? style : { width: "250px", maxWidth: "250px", margin: "0 auto", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
      />
    </div>
  )
};
export { pushupImageUrl1, pushupImageUrl2, armImageUrl1, tricepDipsUrl, ImageComponent }