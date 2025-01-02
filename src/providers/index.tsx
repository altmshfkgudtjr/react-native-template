import { useMemo } from 'react';
// providers
import ThemeProvider from './ThemeProvider';
import AssetProvider from './AssetProvider';
// type
import type { PropsWithChildren } from 'react';

/**
 * 복수개의 Providers 병합 함수
 */
export const composeProviders = (
  children,
  providers: {
    Component: (props: PropsWithChildren) => React.ReactNode;
    excludeComponents?: (() => React.ReactNode)[];
  }[],
) => {
  return providers.reduceRight((children, provider) => {
    const Provider = provider.Component as (props: any) => React.ReactElement;

    return (
      <Provider>
        {children}
        {provider.excludeComponents &&
          provider.excludeComponents.map((Component, index) => {
            return <Component key={index} />;
          })}
      </Provider>
    );
  }, children);
};

const Providers = ({ children }: PropsWithChildren) => {
  const providers = useMemo(
    () =>
      composeProviders(children, [
        { Component: ThemeProvider, excludeComponents: [AssetProvider] },
      ]),
    [],
  );

  return <>{providers}</>;
};

export default Providers;
