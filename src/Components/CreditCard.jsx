import React from "react";
import styled from "styled-components";
import chip from "./chip.png";

const Card = styled.div`
  height: 280px;
  width: 400px;
  border: none;
  background: #fd435b;
  border-radius: 10px;
  box-shadow: 50px 50px 0px 10px rgb(230, 227, 230);
`;

const CardComponents = styled.div`
  height: 50px;
  color: white;
  font-weight: 900;
  font-size: 24px;
  text-align: right;
  padding: 20px 20px 0px 20px;
`;

const Chip = styled.div`
  height: 30px;
  width: 40px;
  border-radius: 5px;
  background: black;
  margin: 0px 0px 10px 20px;
`;

const CardDet = styled.div`
  text-align: center;
  color: white;
`;

const CreditCard = () => {
  return (
    <>
      <Card>
        <CardComponents>VISA</CardComponents>
        <CardComponents style={{ textAlign: "left", padding: "0px" }}>
          <Chip>
            <img
              src={chip}
              height="50px"
              width="80px"
              alt="chip"
              className="chip"
            />
          </Chip>
        </CardComponents>
        <CardComponents className="cardNum">
          <CardDet>4256</CardDet>
          <CardDet>7890</CardDet>
          <CardDet>5678</CardDet>
          <CardDet>4532</CardDet>
        </CardComponents>
        <CardComponents className="cardDetails">
          <CardComponents>
            <CardDet className="det">CARD HOLDER</CardDet>
            <CardDet className="cardName">John Smith</CardDet>
          </CardComponents>
          <CardComponents>
            <CardDet className="det">EXPIRES</CardDet>
            <CardDet className="cardName">09/20</CardDet>
          </CardComponents>
          <CardComponents>
            <CardDet className="det">CVC</CardDet>
            <CardDet className="cardName">345</CardDet>
          </CardComponents>
        </CardComponents>
      </Card>
    </>
  );
};

export default CreditCard;
