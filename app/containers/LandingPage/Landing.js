/* eslint-disable */
/**
 * LandingPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */


import React , { useEffect, useState } from 'react';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled, useStyletron, DarkTheme, lightThemePrimitives, createTheme} from 'baseui';


import {Block} from 'baseui/block';

import './style.scss';

import ChevronRight from 'baseui/icon/chevron-right';
import {StatefulMenu} from 'baseui/menu';
import {Heading, HeadingLevel} from 'baseui/heading';
import LoadingIndicator from 'components/LoadingIndicator';

import {
  ListItem,
  ListItemLabel,
  MenuAdapter,
  ARTWORK_SIZES,
} from 'baseui/list';


const engine = new Styletron();
const Centered = styled('div',  ({$theme}) =>  ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
  width: '100%',
  position: 'fixed',
  zIndex: 10,
  background: $theme.colors.accent100,
}));

const Caption = styled('div',  ({$theme}) =>  ({
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '100%',
  background: $theme.colors.primary50,
}));

const PageContainer = styled('div',  ({$theme}) =>  ({
  display: 'flex', 
  height:'100%',
  width:'100%',
  position:'absolute'
}));

const ContentContainer = styled('div',  ({$theme}) =>  ({
    display: 'flex', width: '100%', width: '100%' , marginTop:'62px'}));

const FullWidthBlockDiv = styled('div',  () =>  ({
  display: 'block',
  width: '100%'
}));

const ContentColumnOne = styled('div',  ({$theme}) =>  ({
   display: 'flex', flex: '1 1 0%'}));

const ContentColumnTwo = styled('div',  ({$theme}) =>  ({
    margin: '0px 8px', display: 'flex',  flex: '1 1 0%'}));
 

const itemProps = {
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const wideItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({$theme}) => ({
        width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
      }),
    },
  },
};

const Spaned = styled('span', ({$theme}) => ({
  display: 'inline-flex',
  fontSize: $theme.sizing.scale500,
}));

const SpanedLargefonts = styled('span', ({$theme}) => ({
  display: 'inline-flex',
  fontSize: $theme.sizing.scale600,
  fontWeight: 600
}));

const SpanedBlock = styled('span', ({$theme}) => ({
  display: 'block',
}));

const MenuContainerDiv = styled('div', ({$theme}) => ({
  marginTop: '9px'
}));

export const EmployeeList = (props) => {

  const { employees , fetchSingleEmployee} = props;

  return (
    <StatefulMenu
    items={employees}
    onItemSelect={(data) => fetchSingleEmployee(data.item.id)}
    overrides={{
      List: {
        style: {
          width: '100%',
        },
      },
      Option: {
        props: {
          overrides: {
          ListItem: {
            component: React.forwardRef((props, ref) => {


              return (<MenuAdapter
                      {...props}
                      ref={ref}
                      artwork={props.item.icon}
                      artworkSize={ARTWORK_SIZES.LARGE}
                      endEnhancer={() => <ChevronRight />}
                      > 
                  
                      <MenuContainerDiv data-testid="employee-record">
                        <SpanedLargefonts>
                        {props.item.name}
                        </SpanedLargefonts>
                        <SpanedBlock> 
                        {`Age: ${props.item.age} years`}
                        {`, `}
                        {`Employee Id: ${props.item.employeeId}`}
                        </SpanedBlock>
                      </MenuContainerDiv>
                      </MenuAdapter>)
            }),
          },
        },
        },
      },
    }}
  />
  );
}

export const Addresses = (props) => {
  const [css] = useStyletron();

  const { employee , loading} = props;
  const { addresses , name , employeeId } = employee
  return (
    <>
      {(addresses && addresses.length == 0) ? 
         (<FullWidthBlockDiv data-testid="employee-addresses">
            <FullWidthBlockDiv>
                <Caption>
                  <Block><b>{`${name}'s`}</b> doesn't have any address</Block>
                </Caption>
            </FullWidthBlockDiv>
         </FullWidthBlockDiv>) : null}
     
      {(addresses && addresses.length > 0) ? 
         (<FullWidthBlockDiv data-testid="employee-addresses">
          <FullWidthBlockDiv>
                
              <Caption>
                <Block><b>{`${name}'s`}</b> Addresses are following:</Block>
              </Caption>
            
              <ul
              className={css({
                width: '100%',
                height: 'auto',
                display: 'block',
                paddingLeft: 0,
                paddingRight: 0,
                marginTop:0
              })}
              >      
                {(addresses.map((addr) => {
                  return (
                          <React.Fragment key={addr.id} >
                          <ListItem >
                            <ListItemLabel>
                            <span data-testid="employee-address-location">{addr.location}</span>
                            </ListItemLabel>
                          </ListItem>
                          </React.Fragment>
                          )
                }))}
              </ul>  
          </FullWidthBlockDiv> 
        </FullWidthBlockDiv>) : null
      }
    </>
    
  )
};

export default function LandingPage (props) {

  const { fetchEmployees, fetchSingleEmployee , 
          employees , singleSelectedEmployee,
          loading } = props;

  useEffect(
    () => {
      fetchEmployees()
    },
    []
  )
  
  return (
    <section className="centered" >
      
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
        <> 
          <HeadingLevel>
            <Centered>
              <Heading data-testid="list-caption"  styleLevel={4}>Customer List</Heading>
            </Centered>
          </HeadingLevel>

          <PageContainer>
            
            <ContentContainer>
            
              <ContentColumnOne data-testid="employee-list" >           
                  { (employees && employees.length <= 0) ? <LoadingIndicator/> : null}
                  { (employees && employees.length > 0) ? 
                    <EmployeeList employees={employees}  fetchSingleEmployee={fetchSingleEmployee} /> : null
                  }
              </ContentColumnOne>

              <ContentColumnTwo>
                  {( (!singleSelectedEmployee) && !loading) ?
                    (<Caption>{`Select An employee in the left column to see the employee\'s address`}</Caption>) : null
                  }

                  {( !!loading) ? (<LoadingIndicator/>) : null}


                  {singleSelectedEmployee ? <Addresses employee={singleSelectedEmployee}/> : null}

              </ContentColumnTwo>

            </ContentContainer>
          </PageContainer>
        </>
        </BaseProvider>
      </StyletronProvider>
    </section>
  );
}