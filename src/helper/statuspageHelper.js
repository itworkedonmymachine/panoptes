const getIndicatorOf = (statusJson) => statusJson.status.indicator;

export const getStatusOf = async (statuspageId) => {
  const response = await fetch(
    `https://${statuspageId}.statuspage.io/api/v2/summary.json`
  );
  return response.json();
};

export const getStatusSummaryOf = (rawStatusPair) => {
  const { platform, status } = rawStatusPair;
  if (!status) {
    return {
      platform,
    };
  }

  const indicator = getIndicatorOf(status);
  return {
    platform,
    fetching: false,
    minor: indicator === 'minor',
    major: indicator === 'major',
  };
};
