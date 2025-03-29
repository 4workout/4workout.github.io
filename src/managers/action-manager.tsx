import { pushupImageUrl1, ImageComponent } from "@site/src/managers/image-manager";

interface Action {
  id: number;
  title: string;
  href: string;
  image: any;
}

export const actions: Action[] = [
  {
    id: 1,
    title: "Upper Body Workout Plan (No Equipment)",
    href: "/docs/upper-body/upper-body-1",
    image: <ImageComponent imageUrl={pushupImageUrl1} alt="Upper Body" />
  },
  {
    id: 2,
    title: "Upper Body Workout Plan (With Equipment)",
    href: "/docs/upper-body/upper-body-2",
    image: <ImageComponent imageUrl={pushupImageUrl1} alt="Upper Body"/>
  },
];
