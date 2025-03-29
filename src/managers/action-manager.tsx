import { EXERCISE_IMAGES, ImageComponent } from "@site/src/managers/image-manager";

interface Action {
  id: number;
  title: string;
  href: string;
  descriptions?: string[];
  image: any;
}

interface ActionCategory {
  category: string;
  actions: Action[];
}

const customImageStyle = {
  width: "150px",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
} as const;

export const actionCategories: ActionCategory[] = [
  {
    category: "Upper Body",
    actions: [
      {
        id: 1,
        title: "Upper Body Daily",
        descriptions: ["No Equipment"],
        href: "/docs/upper-body/upper-body-1",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic1} alt="Upper Body" />
      },
      {
        id: 2,
        title: "Upper Body Daily",
        descriptions: ["No Equipment"],
        href: "/docs/upper-body/upper-body-2",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic2} alt="Upper Body" />
      },
    ]
  },
  {
    category: "Core",
    actions: [
      {
        id: 5,
        title: "Core Workout",
        href: "/docs/core/core-1",
        descriptions: ["No Equipment"],
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.plank.basic} alt="Core" />
      },
      {
        id: 6,
        title: "Core Workout",
        href: "/docs/core/core-2",
        descriptions: ["No Equipment"],
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.plank.basic} alt="Core" />
      },
    ]
  }
];
