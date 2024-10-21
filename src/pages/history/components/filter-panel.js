import styled from 'styled-components';

const FilterPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <div>Filter</div>
      <div>Добавить операцию</div>
    </div>
  );
};

export const FilterPanel = styled(FilterPanelContainer)`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  color: red;
`;
