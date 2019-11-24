import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ParcelComponent from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

function App({ userName }) {

  // eslint-disable-next-line no-undef
  const remoteImport = async url => await SystemJS.import(url);

  return (
    <div>
          <Router>
            <Route
              path="/suite/dashboard"
              render={() => (
                <ParcelComponent
                  config={remoteImport('@portal/dashboard')}
                  mountParcel={mountRootParcel}
                  wrapWith="section"
                  className="app-container"
                  userName={userName}
                />
              )}
            />
            <Route
              path="/suite/payment"
              render={() => (
                <ParcelComponent
                  config={remoteImport('@portal/payment')}
                  mountParcel={mountRootParcel}
                  wrapWith="section"
                  className="app-container"
                  userName={userName}
                />
              )}
            />
          </Router>
    </div>
  );
}

export default App;
