import { FC } from 'react';
import './action-section.css';
import { actionCategories } from '@site/src/managers/action-manager';

// Define props type if needed to make the component reusable
interface actionListProps {
  title?: string;
}

const ActionsSection: FC<actionListProps> = ({ title }) => {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {actionCategories.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.actions.map((action) => (
              <div
                key={action.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <a href={action.href}>
                  <div className="action-container normal-text">
                    {/* Left side - Image */}
                    <div className="flex-shrink-0">
                      {action.image}
                    </div>

                    {/* Right side - Title */}
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold mb-2">{action.title}</h4>
                      {action.descriptions?.map((des) => (
                        <p className="font-semibold mb-2">{des}</p>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActionsSection;
