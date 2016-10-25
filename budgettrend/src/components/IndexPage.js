import React from 'react';
import BudgetMap from './BudgetMap';
import Treemap from './Treemap';

export default class IndexPage extends React.Component {
  render() {
    var treemapData = [
      {"label": "root", "value": 0, "parent": ""},
      {"label": "과학기술", "value": 7026758145, "parent": "root"},
      {"label": "교육", "value": 54146387330, "parent": "root"}
    ];
    var width = 450;
    var height = 250;
    return (
      <div className="home">
        <div className="budgetmap">
          <BudgetMap />
        </div>
        <div className="treemap">
          <Treemap 
            data={treemapData}
            width={width}
            height={height}
            textColor="#484848"
            fontSize="12px"
            title="Treemap"
            hoverAnimation={false}
          />
        </div>
      </div>
    );
  }
}
