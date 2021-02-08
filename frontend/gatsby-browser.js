import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || '/', { replace: true });
};


export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain="dev-gmazn56s.eu.auth0.com"
      clientId="yEpqSE110Sym0FF5qBokXoGNHs0Ew4H2"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};