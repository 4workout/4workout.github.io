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
  description: string;
  actions: Action[];
}

const customImageStyle = {
  width: "150px",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
} as const;
// Lower Body: "Strong legs are your foundation—take each step with power and purpose!"
export const actionCategories: ActionCategory[] = [
  {
    category: "Upper Body",
    description: "Every push and pull builds the strength to tackle anything life throws your way—go for it!",
    actions: [
      {
        id: 1,
        title: "Upper Body Bodyweight",
        descriptions: ["No Equipment"],
        href: "/docs/upper-body/upper-body-1",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic1} alt="Upper Body" />
      },
      {
        id: 2,
        title: "Upper Body Mixed-Level Dumbbell",
        descriptions: ["Equipment"],
        href: "/docs/upper-body/upper-body-2",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic2} alt="Upper Body" />
      },
      {
        id: 3,
        title: "Upper Body Mixed-Level Bodyweight",
        descriptions: ["No Equipment"],
        href: "/docs/upper-body/upper-body-3",
        image: <ImageComponent imageUrl={EXERCISE_IMAGES.pushup.basic1} alt="Upper Body" />
      },
    ]
  },
  {
    category: "Core",
    description: "Your core is the center of it all—ignite your inner strength and stability!",
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
