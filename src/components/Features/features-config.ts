import myImageUrl from "../../../static/images-docs/upper-body-1/image-1.png";
import myImageUrl2 from "../../../static/images-docs/upper-body-2/image-1.png";

interface Workout {
  id: number;
  title: string;
  href: string;
  imageUrl: string;
  alt: string;
}

export const workouts: Workout[] = [
  {
    id: 1,
    title: "Upper Body Workout Plan (No Equipment)",
    href: "/docs/upper-body/upper-body-1",
    imageUrl: myImageUrl,
    alt: "Upper Body Workouts",
  },
  {
    id: 2,
    title: "Upper Body Workout Plan (With Equipment)",
    href: "/docs/upper-body/upper-body-2",
    imageUrl: myImageUrl2,
    alt: "Upper Body Workouts",
  }
];
