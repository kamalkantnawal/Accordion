import { styled } from "styled-components";

export const AccordianDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // .accordian-items-child {
  //   background-color: yellow;
  // }
  .accordian-items {
    width: 30%;
    height: 50%;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    padding-top: 4px;
  }
  .header {
    font-weight: bold;
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .discription {
  }
  .accordian-items-child {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    margin-bottom: 10px;
    margin: 10px;
    background-color: pink;
    padding: 5px;
    border-radius: 8px;
  }
`;
