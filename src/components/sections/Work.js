import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        showcase_backyard: file(
          sourceInstanceName: { eq: "showcase" }
          name: { eq: "backyard" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="work" accent>
        <StyledContainer>
          <div>
            <h1>This is a new component</h1>
          
          </div>
          <Showcase>
            <Img fluid={data.showcase_backyard.childImageSharp.fluid} />
          </Showcase>
        </StyledContainer>
      </Section>
    )}
  />
);


const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Showcase = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media screen and (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media screen and (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
