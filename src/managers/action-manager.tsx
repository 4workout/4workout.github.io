import { EXERCISE_IMAGES, ImageComponent } from "@site/src/managers/image-manager";

interface Action {
  id: number;
  title: string;
  href: string;
  image: any;
}

interface ActionCategory {
  category: string;
  actions: Action[];
}

export const actionCategories: ActionCategory[] = [
  {
    category: "Upper Body",
    actions: [
      {
        id: 1,
        title: "Upper Body Daily (No Equipment)",
        href: "/docs/upper-body/upper-body-1",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic1} alt="Upper Body" />
      },
      {
        id: 2,
        title: "Upper Body Daily (With Equipment)",
        href: "/docs/upper-body/upper-body-2",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic2} alt="Upper Body"/>
      },
    ]
  },
  {
    category: "Core",
    actions: [
      {
        id: 5,
        title: "Core Workout Plan (No Equipment)",
        href: "/docs/core/core-1",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.plank.basic} alt="Core" />
      },
      {
        id: 6,
        title: "Core Workout Plan (With Equipment)",
        href: "/docs/core/core-2",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.plank.basic} alt="Core" />
      },
    ]
  }
];
