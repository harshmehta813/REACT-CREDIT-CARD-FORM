import React from "react";
import styled from "styled-components";

const FormConatiner = styled.div`
  height: 450px;
  background: whitesmoke;
  color: gray;
  padding-left: 10px;
  border-radius: 10px;
  padding: 1rem;
`;

const PaymentDetail = styled.div`
  height: 50px;
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  padding-top: 10px;
`;

const Label = styled.div`
  font-size: 12px;
  text-align: left;
  margin-top: 30px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid red;
  background: whitesmoke;
  width: 338px;
  padding-top: 10px;
  font-size: 18px;
  color: black;
`;

const Div = styled.div`
  color: gray;
  display: flex;
  gap: 2rem;
`;

const PayBtn = styled.button`
  height: 40px;
  width: 150px;
  color: white;
  background: red;
  font-size: 18px;
  border: 1px solid red;
  border-radius: 10px;
`;

const Form = () => {
  return (
    <>
      <FormConatiner>
        <PaymentDetail>Payment details</PaymentDetail>
        <Label>CARD HOLDER NAME</Label>
        <div className="pmntDet">
          <span class="material-icons-outlined">person_outline</span>
          <Input placeholder="John Smith" />
        </div>
        <Label>CARD HOLDER NAME</Label>
        <div className="pmntDet">
          <span class="material-icons-outlined">credit_card</span>
          <Input placeholder="4256 7890 5678 4532" />
        </div>
        <Div>
          <Label style={{ width: "108px" }}>EXPIRY MONTH</Label>
          <Label style={{ width: "108px" }}>EXPIRY YEAR</Label>
          <Label style={{ width: "88px" }}>CVC</Label>
        </Div>
        <Div>
          <div className="pmntDet">
            <span class="material-icons-outlined">calendar_month</span>
            <Input placeholder="09" style={{ width: "80px" }} />
          </div>
          <div className="pmntDet">
            <span class="material-icons-outlined">calendar_month</span>
            <Input placeholder="2020" style={{ width: "80px" }} />
          </div>
          <div className="pmntDet">
            <span class="material-icons-outlined">lock</span>
            <Input placeholder="345" style={{ width: "60px" }} />
          </div>
        </Div>
        <Div
          style={{ gap: "1rem", marginTop: "20px", justifyContent: "center" }}
        >
          <PaymentDetail>Payment amount: </PaymentDetail>
          <PaymentDetail style={{ color: "red" }}>12 300₽</PaymentDetail>
        </Div>
        <Div
          style={{ gap: "1rem", marginTop: "20px", justifyContent: "center" }}
        >
          <PayBtn>PAY</PayBtn>
        </Div>
      </FormConatiner>
    </>
  );
};

export default Form;
