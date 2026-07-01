type Transfer = {
  amount: number;
  currency: string;
  recipient: string;
};

const supportedCurrencies = ["USD", "EUR", "ILS"];

export const validateTransfer = (transfer: Transfer) => {
  if (transfer.amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }

  if (!transfer.recipient.trim()) {
    throw new Error("Recipient is required");
  }

  if (!supportedCurrencies.includes(transfer.currency)) {
    throw new Error("Unsupported currency");
  }

  return true;
};
