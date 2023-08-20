export const helpers = {
  truncateAddress: (address = "", start = 5, end = 4) => {
    if (!address) return "";
    return (
      address.substr(0, start) +
      "..." +
      address.substr(address.length - end, end)
    );
  },
};
