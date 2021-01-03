const getOverallStatusCodeOf = (statusJson) =>
  statusJson.result.status_overall.status_code;

export const getStatusOf = async (statusId) => {
  const response = await fetch(`https://status.io/1.0/status/${statusId}`);
  return response.json();
};

export const getStatusTickerDataOf = (rawStatusPair) => {
  const { platform, status } = rawStatusPair;
  if (!status) {
    return {
      platform,
    };
  }

  const statusCode = getOverallStatusCodeOf(status);
  return {
    platform,
    fetching: false,
    minor: statusCode > 100 && statusCode < 500,
    major: statusCode >= 500,
  };
};
