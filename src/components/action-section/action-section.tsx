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
          <h3 className="margin-bottom--sm">{category.category}</h3>
          <p className="text--semibold text--italic">{category.description}</p>
          <div className="category-container">
            {category.actions.map((action) => (
              <div
                key={action.id}
                className="margin-bottom--sm"
              >
                <div className="card shadow--md">
                  <a href={action.href} className="card__link">
                    <div className="row padding--sm">
                      {/* Left side - Image */}
                      <div className="image-component col col--3">
                        {action.image}
                      </div>

                      {/* Right side - Title and Description */}
                      <div className="body-component col col--9">
                        <h4>{action.title}</h4>
                        {action.descriptions?.map((des, index) => (
                          <small className="text--normal" key={index}>
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
