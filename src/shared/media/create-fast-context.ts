import React from "react";

export const createFastContext = <T>(p: any) => {
  const Ctx = React.createContext<T>(p);
  const Provider = Ctx.Provider;
  const Consumer = Ctx.Consumer;

  const useCtx = () => {
    const ctx = React.useContext(Ctx);
    return ctx;
  };

  return {
    Ctx,
    Provider,
    Consumer,
    useCtx,
  };
};
