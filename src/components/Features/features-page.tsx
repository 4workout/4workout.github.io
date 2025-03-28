import { FC } from 'react';
import myImageUrl from '../../../static/images-docs/upper-body-1/image-1.png';
import myImageUrl2 from '../../../static/images-docs/upper-body-2/image-1.png';
import myImageUrl3 from '../../../static/images-docs/upper-body-3/image-1.png';

// Define types for the workout item
interface Workout {
  id: number;
  title: string;
  href: string;
  imageUrl: string;
  alt: string;
}

// Define props type if needed to make the component reusable
interface WorkoutListProps {
  title?: string;
}

export const FeatureList: FC<WorkoutListProps> = ({ title }) => {
  const workouts: Workout[] = [
    {
      id: 1,
      title: 'Upper Body 1',
      href: '/docs/upper-body/upper-body-1',
      imageUrl: myImageUrl,
      alt: 'Upper Body Workouts'
    },
    {
      id: 2,
      title: 'Upper Body 2',
      href: '/docs/upper-body/upper-body-1',
      imageUrl: myImageUrl2,
      alt: 'Lower Body Workouts'
    },
    {
      id: 3,
      title: 'Upper Body 3',
      href: '/docs/upper-body/upper-body-1',
      imageUrl: myImageUrl3,
      alt: 'Lower Body Workouts'
    }
  ];

  return (
    <div className="workout-container">
      {workouts.map((workout) => (
        <div key={workout.id} className="workout-section">
          <h2>{workout.title}</h2>
          <div className="workout-content">
            <div className="workout-link">
              <a href={workout.href}>
                <img
                  src={workout.imageUrl}
                  alt={workout.alt}
                  className="workout-thumbnail"
                />
                <div className="workout-title">
                  View {workout.title} Workouts
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main component
const FeaturesPage: FC = () => {
  return (
    <>
      <div className='features-container'>
        <FeatureList />
        <FeatureList />
      </div>

      <style>
        {`
    /* Container styles */
    .features-container {
      display: flex;
      flex-direction: column;
      gap: 1rem; /* Optional: adds consistent spacing between items */
    }

    .workout-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Section styles */
    .workout-section {
      background: #ffffff;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .workout-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .workout-section h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
      text-align: center;
    }

    /* Content styles */
    .workout-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .workout-link {
      width: 100%;
      text-align: center;
    }

    .workout-link a {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    /* Image styles */
    .workout-thumbnail {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .workout-link:hover .workout-thumbnail {
      transform: scale(1.05);
    }

    /* Title styles */
    .workout-title {
      font-size: 1.1rem;
      font-weight: 500;
      color: #2c5282;
      margin-top: 1rem;
      transition: color 0.3s ease;
    }

    .workout-link:hover .workout-title {
      color: #1a365d;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .workout-container {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1.5rem;
      }

      .workout-section {
        padding: 1rem;
      }

      .workout-section h2 {
        font-size: 1.25rem;
      }

      .workout-thumbnail {
        height: 180px;
      }

      .workout-title {
        font-size: 1rem;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .workout-section {
        background: #1a202c;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      }

      .workout-section h2 {
        color: #e2e8f0;
      }

      .workout-title {
        color: #63b3ed;
      }

      .workout-link:hover .workout-title {
        color: #90cdf4;
      }
    }
  `}
      </style>

    </>
  );
};

export default FeaturesPage;
