import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId);

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              type="button"
              className={
                selectedTabId === tab.id
                  ? 'button button--active'
                  : 'button'
              }
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      {selectedTab ? <div>{selectedTab.content}</div> : null}
    </>
  );
};