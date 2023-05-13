import styled from 'styled-components';

import WithDirection from '../../settings/withDirection';

const WDComponentDivFilter = styled.div`
  padding-bottom: 10px;
  
  & > div + div {
    /* margin-left: 10px; */
    margin-right: 10px;
  }
  & > div:first-child{
    margin-right: 10px;
  }

  .ant-select-search, .ant-select, .ant-calendar-picker {
    margin-right: 10px;
    
    &.ant-calendar-picker {
      margin-left: 5px;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const ComponentDivFilter = WithDirection(WDComponentDivFilter);
export { ComponentDivFilter };