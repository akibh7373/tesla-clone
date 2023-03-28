import React from 'react';
import styled from 'styled-components';
import Section from "./Section";

function Home() {
    return (
      <Container>
          <Section 
              title="Model 3"
              describtion="Leasing starting at &dollar;349/mo"
              backgroundImg="model-3.jpg"
              leftButton="Custom Order"
              rightButton="Demo Drive"
              />
          <Section 
              title="Model Y"
              describtion="Order Online for Touchless Delivery"
              backgroundImg="model-y.jpg"
              leftButton="Custom Order"
              rightButton="Demo Drive"
              />
          <Section 
              title="Model S"
              describtion="Schedule a Demo Drive"
              backgroundImg="model-s.jpg"
              leftButton="Custom Order"
              rightButton="View Inventory"
              />
          <Section 
              title="Model X"
              describtion="Schedule a Demo Driv"
              backgroundImg="model-x.jpg"
              leftButton="Custom Order"
              rightButton="Existing Inventory"
              />
          <Section 
              title="Solar Panels"
              describtion="Lowest Cost Solar Panels in America"
              backgroundImg="solar-panel.jpg"
              leftButton="Order Now"
              rightButton="Learn More"
              />
          <Section 
              title="Solar Roof"
              describtion="Produce Clean Energy From your Roof"
              backgroundImg="solar-roof.jpg"
              leftButton="Order Now"
              rightButton="Learn More"
              />
          <Section 
              title="Accessories"
              backgroundImg="accessories.jpg"
              leftButton="Order Now"
          />
      </Container>
    )
  }
  
  export default Home;
  
  const Container = styled.div `
      height: 100vh;
  `