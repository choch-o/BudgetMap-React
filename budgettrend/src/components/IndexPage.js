import React from 'react';
import BudgetMap from './BudgetMap';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="budgetmap">
          <BudgetMap />
        </div>
      </div>
    );
  }
}
