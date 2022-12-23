import { SupportedChainId } from "../types";

export interface Addresses {
  LOOKS: string;
  EXCHANGE: string;
  TRANSFER_MANAGER: string;
  WETH: string;
  ORDER_VALIDATOR: string;
}

const mainnetAddresses: Addresses = {
  LOOKS: "",
  EXCHANGE: "",
  TRANSFER_MANAGER: "",
  WETH: "",
  ORDER_VALIDATOR: "",
};

const goerliAddresses: Addresses = {
  LOOKS: "",
  EXCHANGE: "",
  TRANSFER_MANAGER: "",
  WETH: "",
  ORDER_VALIDATOR: "",
};

export const addressesByNetwork: { [chainId in SupportedChainId]: Addresses } = {
  [SupportedChainId.MAINNET]: mainnetAddresses,
  [SupportedChainId.GOERLI]: goerliAddresses,
  [SupportedChainId.HARDHAT]: goerliAddresses,
};
