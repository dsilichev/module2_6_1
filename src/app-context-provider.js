import { AppContext } from "./context";

export const AppContextProvider = ({userValue, children}) => {
  return (
    <AppContext.Provider value={userValue}>
      {children}
    </AppContext.Provider>
  )
}
