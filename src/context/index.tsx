import * as React from "react";

interface Dashboard {
  id: number;
  headerText: string;
  amount: string;
}

interface Team {
  name: string;
  dob: string;
  gender: string;
  email: string;
  department: string;
}

interface RCPState {
  dashboard?: Dashboard[];
  team?: Team[];
  isInViewMode?: boolean;
}

type RCPStateSetter = (
  RCPStateSetter: (RCPState: RCPState) => RCPState
) => void;

const RCPContext = React.createContext<
  | {
      RCPState: RCPState;
      setRCPState: RCPStateSetter;
    }
  | undefined
>(undefined);

interface RCPContextProviderProps {
  dashboard?: Dashboard[];
  team?: Team[];
  children?: React.ReactNode;
  isInViewMode?: boolean;
}

export default function RCPContextProvider({
  dashboard = [],
  team = [],
  children,
  isInViewMode = true,
}: RCPContextProviderProps) {
  const [RCPState, setRCPState] = React.useState<RCPState>({
    dashboard: dashboard,
    team: team,
    isInViewMode: isInViewMode,
  });
  const value = React.useMemo(
    () => ({
      RCPState,
      setRCPState,
    }),
    [RCPState]
  );

  return <RCPContext.Provider value={value}>{children}</RCPContext.Provider>;
}

export function useRCPContext() {
  const context = React.useContext(RCPContext);
  if (context === undefined) {
    throw new Error("useRCPContext must be used within RCPContextProvider ");
  }
  return context;
}
