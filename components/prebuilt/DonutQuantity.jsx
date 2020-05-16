import styled from "@emotion/styled";

const Input = styled.input`
  width: 80px;
  padding: 0 12px;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  outline: none;
  background: transparent;
  height: 40px;
  user-select: none;
`;

const Button = styled.span`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  height: 40px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  user-select: none;

`;

const DecrementButton = styled(Button)`
  border-right: none;
  border-radius: 4px 0 0 4px;
`;

const IncrementButton = styled(Button)`
  border-left: none;
  border-radius: 0 4px 4px 0;
`;

const DonutQuantity = ({ onAdd, onRemove, quantity }) => {
  return (
    <>
      <DecrementButton onClick={onRemove}>–</DecrementButton>
      <Input type="text" value={quantity} readOnly />
      <IncrementButton onClick={onAdd}>+</IncrementButton>
    </>
  );
};

export default DonutQuantity;
