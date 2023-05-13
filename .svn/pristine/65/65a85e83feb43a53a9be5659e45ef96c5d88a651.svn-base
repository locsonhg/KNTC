import styled from 'styled-components';
import {transition} from '../../../settings/style-util';
import {palette} from 'styled-theme';

export default styled.div`
  width: 100%;
  .wrapper-main,.wrapper-subInfo {
    margin-top : 20px
  }
  .wrapper-main .btn-group {
    padding-bottom:10px;
    text-align: right;
  }
  .title {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-radius: 6px;
    color: #fff;
    font-weight: bold;
    background: #4670a2;
    user-select: none;
    margin-bottom: 15px;

    .label {
      font-size: 22px;
      
      @media only screen and (max-width: 1450px) {
        font-size: 22px;
      }
      
      @media only screen and (max-width: 1290px) {
        font-size: 20px;
      }
      
      @media only screen and (max-width: 1050px) {
        font-size: 18px;
      }
      
      @media only screen and (max-width: 992px) {
        font-size: 22px;
      }
    }
    
    .number {
      font-size: 26px;
    }
  }
  
  .box-hover {
    &:hover {
      background: #5896ff;
      cursor: pointer;
    }
  }
  
  .box-active {
    background: #5896ff;
  }
  
  .row-modal {
    font-size: 16px;
    margin: 10px 0;
    
    span {
      font-size: 16px;
    }
  }
  
  .row-flex {
    display: flex;
    
    .label {
      width: 120px;
    }
  }
  
  .file-dinh-kem {
    font-size: 24px;
    
    .anticon {
      margin: 0 5px;
      color: #4482FF;
    }
  }
  
  .cong-khai {
    font-size: 24px;
    
    .check {
      color: #28A745;
    }
    
    .file {
      margin: 0 10px;
      color: #4482FF;
    }
  }
  
  //
  //new style
  //
  
  .box-color {
    height: 100px;
    border-radius: 6px;
    color: #fff;
    user-select: none;
    margin-bottom: 15px;
    position: relative;
    ${transition()};
    
    &.pointer {
      cursor: pointer;
    }
    
    .label {
      font-size: 20px;
      position: absolute;
      top: 10px;
      left: 10px;
      
      @media only screen and (max-width: 1450px) {
        font-size: 18px;
      }
      
      @media only screen and (max-width: 1290px) {
        font-size: 16px;
      }
      
      @media only screen and (max-width: 992px) {
        font-size: 20px;
      }
    }
    
    .number {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-size: 28px;
      font-weight: bold;
    }
    
    .icon {
      color: #fff;
      font-size: 40px;
      position: absolute;
      bottom: 0px;
      right: 10px;
    }
    
    &.box-active {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 25px 50px -12px;
    }
  }
  
  .box-color-0 {
    background: #FF4444;
  }
  
  .box-color-1 {
    background: #9100B5;
    
    &:hover {
      background: #b800e6;
    }
    
    &.box-active {
      background: #b800e6;
    }
  }
  
  .box-color-2 {
    background: #4646FF;
    
    &:hover {
      background: #4d4dff;
    }
    
    &.box-active {
      background: #4d4dff;
    }
  }
  
  .box-color-3 {
    background: #00C56A;
    
    &:hover {
      background: #00e67a;
    }
    
    &.box-active {
      background: #00e67a;
    }
  }
  
  .box-color-4 {
    background: #FF950A;
    
    &:hover {
      background: #ffa733;
    }
    
    &.box-active {
      background: #ffa733;
    }
  }
  
  .box-color-5 {
    background: #4646FF;
    
    &:hover {
      background: #6666ff;
    }
    
    &.box-active {
      background: #6666ff;
    }
  }
  
  .box-color-6 {
    background: #9100B5;
    
    &:hover {
      background: #b800e6;
    }
    
    &.box-active {
      background: #b800e6;
    }
  }
  
  .box-color-7 {
    background: #ff0066;
    
    &:hover {
      background: #ff3385;
    }
    
    &.box-active {
      background: #ff3385;
    }
  }
`;

const WrapperButton = styled.div`
  .ant-btn {
    background: #8c8c8c;
    color: #FFF;
    
    &:hover {
      border-color: #999;
      background: #999;
      color: #FFF;
    }
    
    &:active {
      border-color: #999;
      background: #999;
      color: #FFF;
    }
  }
`;

const WrapperRadio = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 15px;
  
  .ant-radio-group {
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .ant-radio {
    display: none;
  }
  
  .ant-radio-wrapper {
    display: flex;
    ${transition()}
    
    .radio-text {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      
      .anticon {
        display: none;
        color: ${palette('primary', 14)};
        margin-right: 5px;
      }
      
      &:hover {
        font-weight: bold;
        color: ${palette('primary', 14)};
      }
    }
    
    &.ant-radio-wrapper-checked {
      .radio-text {
        border-bottom: solid 2px ${palette('primary', 14)};
        font-weight: bold;
        color: ${palette('primary', 14)};
        
        .anticon {
          display: block;
        }
      }
    }
  }
`;

const WrapperFilter = styled.div`
  /* display: flex; */
  .filter-item {
    /* flex-basis: 20%; */
    display: flex;
    align-items: center;
    /* padding: 10px; */
    p {
        font-size: 14px;
        margin-right: 10px;
        display: inline-block;
        flex-basis: 33%;
    }
    .ant-select {
        /* flex-basis: 70%; */
        width: 100%;
    }
  }
  @media screen and (max-width: 1300px) { 
    .filter-item {
        p {
            font-size: 12px;
        }
    }
  }
`;

export {WrapperButton, WrapperRadio,WrapperFilter};