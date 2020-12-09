import { createStore, applyMiddleware } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/index";
import rootReducer from "./redux/reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Routes from "./pages/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/_vars.scss";
import "./styles/app.scss";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

function App() {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
  let persistor = persistStore(store);
  sagaMiddleWare.run(rootSaga);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
