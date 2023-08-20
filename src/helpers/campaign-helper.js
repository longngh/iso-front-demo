export default {
  statusColor(campaign) {
    if (!campaign || !campaign.status) return "#1890FF";
    switch (campaign.status) {
      case "newDeal":
      default:
        return "#1890FF";
      case "hot":
        return "#EC1D1D";
      case "expired":
      case "disabled":
        return "#A9A9A9";
      case "outOfStock":
        return "#E7C73B";
      case "active":
        return "#53B06C";
    }
  },
  statusTitle(status) {
    switch (status) {
      case "newDeal":
        return "New Deal";
      case "outOfStock":
        return "Out of Stock";
      case "active":
        return "Active";
      case "disabled":
        return "Disabled";
      case "expired":
        return "Expired";
      case "hot":
        return "Hot";
      default:
        return status;
    }
  },
};
