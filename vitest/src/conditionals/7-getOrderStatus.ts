export const getOrderStatus = (
  isPaid: boolean,
  isShipped: boolean,
  isDelivered: boolean
) => {
  if (!isPaid) return "Awaiting Payment";
  if (!isShipped) return "Preparing Shipment";
  if (!isDelivered) return "In Transit";
  return "Delivered";
};