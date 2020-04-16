/**
 * LandingPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { useEffect } from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import {
  LightTheme,
  BaseProvider,
  styled,
  useStyletron,
} from 'baseui';

import { Block } from 'baseui/block';

import './style.scss';

// eslint-disable-next-line baseui/no-deep-imports
import ChevronRight from 'baseui/icon/chevron-right';
import { StatefulMenu } from 'baseui/menu';
import { Heading, HeadingLevel } from 'baseui/heading';
import LoadingIndicator from 'components/LoadingIndicator';

import {
  ListItem,
  ListItemLabel,
  MenuAdapter,
  ARTWORK_SIZES,
} from 'baseui/list';

const engine = new Styletron();
const Centered = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
  width: '100%',
  position: 'fixed',
  zIndex: 10,
  background: $theme.colors.accent100,
}));

const Caption = styled('div', ({ $theme }) => ({
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '100%',
  background: $theme.colors.primary50,
}));

const PageContainer = styled('div', () => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  position: 'absolute',
}));

const ContentContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  marginTop: '62px',
}));

const FullWidthBlockDiv = styled('div', () => ({
  display: 'block',
  width: '100%',
}));

const ContentColumnOne = styled('div', () => ({
  display: 'flex',
  flex: '1 1 0%',
}));

const ContentColumnTwo = styled('div', () => ({
  margin: '0px 8px',
  display: 'flex',
  flex: '1 1 0%',
}));


const SpanedLargefonts = styled('span', ({ $theme }) => ({
  display: 'inline-flex',
  fontSize: $theme.sizing.scale600,
  fontWeight: 600,
}));

const SpanedBlock = styled('span', () => ({
  display: 'block',
}));

const MenuContainerDiv = styled('div', () => ({
  marginTop: '9px',
}));

export const EmployeeList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { employees, fetchSingleEmployee } = props;

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
                // eslint-disable-next-line react/display-name
                component: React.forwardRef((prop, ref) => (
                  <MenuAdapter
                    {...prop}
                    ref={ref}
                    artwork={prop.item.icon}
                    artworkSize={ARTWORK_SIZES.LARGE}
                    endEnhancer={() => <ChevronRight />}
                  >
                    <MenuContainerDiv data-testid="employee-record">
                      <SpanedLargefonts>{prop.item.name}</SpanedLargefonts>
                      <SpanedBlock>
                        {`Age: ${prop.item.age} years`}
                        {', '}
                        {`Employee Id: ${prop.item.employeeId}`}
                      </SpanedBlock>
                    </MenuContainerDiv>
                  </MenuAdapter>
                )),
              },
            },
          },
        },
      }}
    />
  );
};

export const Addresses = (props) => {
  const [css] = useStyletron();

  // eslint-disable-next-line react/prop-types
  const { employee } = props;
  const { addresses, name } = employee;
  return (
    <>
      {addresses && addresses.length === 0 ? (
        <FullWidthBlockDiv data-testid="employee-addresses">
          <FullWidthBlockDiv>
            <Caption>
              <Block>
                <b>{`${name}'s`}</b> {'doesn\'t have any address'}
              </Block>
            </Caption>
          </FullWidthBlockDiv>
        </FullWidthBlockDiv>
      ) : null}

      {addresses && addresses.length > 0 ? (
        <FullWidthBlockDiv data-testid="employee-addresses">
          <FullWidthBlockDiv>
            <Caption>
              <Block>
                <b>{`${name}'s`}</b> Addresses are following:
              </Block>
            </Caption>

            <ul
              className={css({
                width: '100%',
                height: 'auto',
                display: 'block',
                paddingLeft: 0,
                paddingRight: 0,
                marginTop: 0,
              })}
            >
              {addresses.map((addr) => (
                <React.Fragment key={addr.id}>
                  <ListItem>
                    <ListItemLabel>
                      <span data-testid="employee-address-location">
                        {addr.location}
                      </span>
                    </ListItemLabel>
                  </ListItem>
                </React.Fragment>
              ))}
            </ul>
          </FullWidthBlockDiv>
        </FullWidthBlockDiv>
      ) : null}
    </>
  );
};

export default function LandingPage(props) {
  const {
    // eslint-disable-next-line react/prop-types
    fetchEmployees, fetchSingleEmployee, employees, singleSelectedEmployee, loading
  } = props;

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <section className="centered">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <>
            <HeadingLevel>
              <Centered>
                <Heading data-testid="list-caption" styleLevel={4}>
                  Customer List
                </Heading>
              </Centered>
            </HeadingLevel>

            <PageContainer>
              <ContentContainer>
                <ContentColumnOne data-testid="employee-list">
                  {employees && employees.length <= 0 ? (
                    <LoadingIndicator />
                  ) : null}
                  {employees && employees.length > 0 ? (
                    <EmployeeList
                      employees={employees}
                      fetchSingleEmployee={fetchSingleEmployee}
                    />
                  ) : null}
                </ContentColumnOne>

                <ContentColumnTwo>
                  {!singleSelectedEmployee && !loading ? (
                    <Caption>{'Select An employee in the left column to see the employee\'s address'}</Caption>
                  ) : null}

                  {loading ? <LoadingIndicator /> : null}

                  {singleSelectedEmployee ? (
                    <Addresses employee={singleSelectedEmployee} />
                  ) : null}
                </ContentColumnTwo>
              </ContentContainer>
            </PageContainer>
          </>
        </BaseProvider>
      </StyletronProvider>
    </section>
  );
}
