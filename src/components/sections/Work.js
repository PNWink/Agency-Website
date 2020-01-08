import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const WORK = [
  {
    name: 'Company Name - backyard',
    image: 'backyard.png',
    decription: 'Project Description',
  },
  {
    name: 'Company Name - building',
    image: 'building.png',
    decription: 'Project Description',
  },
  {
    name: 'Company Name - car',
    image: 'car.png',
    decription: 'Project Description',
  },
  {
    name: 'Company Name - man',
    image: 'man.jpg',
    decription: 'Project Description',
  },
];

const Work = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "showcase" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1440, maxHeight: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="work" accent="secondary">
        <StyledContainer>
          <div id="center">
            <h2>Work</h2>
            <p>Some of our selected projects</p>
          </div>
          <StyledGrid>
            {/* <div>
                <h3>Work</h3>
                <p>Some of our selected projects</p>
              </div> */}
            {WORK.map(({ name, image, description }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;
              return (
                <div key={name}>
                  <Img
                    fluid={img.childImageSharp.fluid}
                    alt={name}
                    imgStyle={{
                      objectFit: 'fill',
                      width: '100%',
                      height: '100%',
                    }}
                    style={{}}
                  />
                  <Title>{name}</Title>
                  <Subtitle>{description}</Subtitle>
                </div>
              );
            })}
          </StyledGrid>
          {/* <div id="center">
            
            <p>View all</p>
          </div> */}
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(Container)`
  min-width: 100vw;
  padding: 0;
  #center{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      flex-flow: column wrap;
      padding-bottom: 20px;
      

      
  }
  

  @media screen and (max-width: ${props => props.theme.screen.xs}) {
    #center{
      padding-left: 20px;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      flex-flow: column wrap;
    }
  }
`;
const StyledGrid = styled.div`
  div {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    justify-content: flex-end;
    max-height: 43vh;
    margin-top: 11px;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
  }

  @media (max-width: ${props => props.theme.screen.md}) {
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    div {
       
        min-height: 20vh;
        
    }
  }
`;
const Title = styled.p`
  z-index: 99;
  //   top: -50px;
  display: none;
  color: ${props => props.theme.color.primary.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
  display: none;
`;

export default Work;
