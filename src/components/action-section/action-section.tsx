import { FC } from 'react';
import './action-section.css';
import { actionCategories } from '@site/src/managers/action-manager';

// Define props type if needed to make the component reusable
interface actionListProps {
  title?: string;
}

const ActionsSection: FC<actionListProps> = ({ title }) => {

  return (
    <section className="margin-vert--md padding-vert--lg">
      {actionCategories.map((category) => (
        <div key={category.category} className="margin-bottom--lg">
          <h2 className="margin-bottom--sm">{category.category}</h2>
          <div className="category-container">
            {category.actions.map((action) => (

              <div
                key={action.id}
                className="margin-bottom--sm"
              >
                <div className="card shadow--md">
                  <a href={action.href} className="card__link">
                    <div className="row padding--lg">
                      {/* Left side - Image */}
                      <div className="card__image col col--3">
                        {action.image}
                      </div>

                      {/* Right side - Title and Description */}
                      <div className="card__body col col--9">
                        <h4>{action.title}</h4>
                        {action.descriptions?.map((des, index) => (
                          <small key={index} className="text--bold margin-bottom--sm">
                            {des}
                          </small>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActionsSection;
