import React, { useState } from 'react';
import styled from 'styled-components';
import ThirdPartyComponent from './ThirdPartyComponent';

const StyledTabsContainer = styled.div`
  display: flex;
`

const StyledTab = styled.div`
  background-color: ${props => props.selected ? '#fff4' : '#fff9' };
  width: 100px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const CentralComponent = (props) => {
  const { initialTab } = props;
  const tabs = [
    { label: 'tab1', component: () => <div>Componente genérico 1</div> },
    { label: 'tab2', component: () => <div>Componente genérico 2</div>  },
    { label: 'tab3', component: () => <div>Componente genérico 3</div>  },
    { label: 'tab4', component: () => <ThirdPartyComponent />  },
  ];

  const [currentTab, setCurrentTab] = useState(initialTab || 0);

  return (
    <div>
      <StyledTabsContainer>
        {tabs.map((tab, index) => (
          <StyledTab
            key={tab.label}
            selected={currentTab === index}
            onClick={() => {
              setCurrentTab(index);
              console.log(currentTab);
            }
          }>
            {tab.label}
          </StyledTab>
        ))}
      </StyledTabsContainer>
      <div id="dashboard-central-tab-content">
        {tabs[currentTab] && tabs[currentTab].component()}
      </div>
    </div>
  )
}

export default CentralComponent;