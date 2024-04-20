import {
  binaryOptionsTrading,
  forexTrading,
  futureAndOptions,
  stockMarketConsultancy,
  shareMarketConsultancy,
  cryptoCurrencyTrading,
} from "../assets";

const services = [
  {
    name: "Binary Options Trading",
    description:
      "Speculative, high-risk financial instrument with fixed payout or loss",
    image: binaryOptionsTrading,
  },
  {
    name: "Future and Options",
    description:
      "Derivative contracts, hedging, speculation, price agreement, market risk management",
    image: futureAndOptions,
  },
  {
    name: "Forex Trading",
    description:
      "Global currency exchange market, trading pairs, high liquidity, speculative",
    image: forexTrading,
  },
  {
    name: "Stock Market Consultancy",
    description:
      "Professional advice, investment strategies, market analysis, portfolio management services",
    image: stockMarketConsultancy,
  },
  {
    name: "Share Market Consultancy",
    description:
      "Equity advisory, trading guidance, financial planning, risk assessment, diversification",
    image: shareMarketConsultancy,
  },
  {
    name: "Crypto Currency Trading",
    description:
      "Digital asset exchange, blockchain-based, volatile, decentralized, peer-to-peer.",
    image: cryptoCurrencyTrading,
  },
];

export default services;
