"use client";

import { createContainer } from "@/context/container";
import useStore from "./store";

const Passport = createContainer(useStore);

export const PassportProvider = Passport.Provider;
export const usePassport = Passport.useContainer;

export { default as WalletLoginButton } from "./components/WalletLoginButton";