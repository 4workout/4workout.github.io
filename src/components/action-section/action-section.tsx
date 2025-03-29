import { FC } from 'react';

// Define props type if needed to make the component reusable
interface actionListProps {
  title?: string;
}

import { actions } from '@site/src/managers/action-manager';

const ActionList: FC<actionListProps> = ({ title }) => {

  return (
    <div className="action-container">
      {actions.map((action) => (
        <div key={action.id} className="action-section">
          <h2>{action.title}</h2>
          <div className="action-content">
            <div className="action-link">
              <a href={action.href}>
                {action.image}
                <div className="action-title">
                  View {action.title}
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
const ActionsSection: FC = () => {
  return (
    <>
      <div className='actions-container'>
        <ActionList />
      </div>

      <style>
        {`
    /* Container styles */
    .actions-container {
      display: flex;
      flex-direction: column;
      gap: 1rem; /* Optional: adds consistent spacing between items */
    }

    .action-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Section styles */
    .action-section {
      background: #ffffff;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      max-width: 350px;
    }

    .action-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .action-section h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
      text-align: center;
    }

    /* Content styles */
    .action-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .action-link {
      width: 100%;
      text-align: center;
    }

    .action-link a {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .action-link:hover .action-thumbnail {
      transform: scale(1.05);
    }

    /* Title styles */
    .action-title {
      font-size: 1.1rem;
      font-weight: 500;
      color: #2c5282;
      margin-top: 1rem;
      transition: color 0.3s ease;
    }

    .action-link:hover .action-title {
      color: #1a365d;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .action-container {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1.5rem;
      }

      .action-section {
        padding: 1rem;
      }

      .action-section h2 {
        font-size: 1.25rem;
      }

      .action-thumbnail {
        height: 180px;
      }

      .action-title {
        font-size: 1rem;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .action-section {
        background: #1a202c;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      }

      .action-section h2 {
        color: #e2e8f0;
      }

      .action-title {
        color: #63b3ed;
      }

      .action-link:hover .action-title {
        color: #90cdf4;
      }
    }
  `}
      </style>

    </>
  );
};

export default ActionsSection;
