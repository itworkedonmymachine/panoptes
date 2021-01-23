import { readable, derived } from 'svelte/store';

const getOverallStatusCodeOf = (statusJson) =>
  statusJson.result.status_overall.status_code;

const getStatusOf = async (statusId) => {
  const response = await fetch(`https://status.io/1.0/status/${statusId}`);
  return response.json();
};

const getSummarizedStatusOf = (rawStatusPair) => {
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
    minor: statusCode > 200 && statusCode < 500,
    major: statusCode >= 500,
    maintenance: statusCode === 200,
  };
};

const storeValueOf = (platform, status = null) => ({ platform, status });

export const createRawStatusStore = (platform, statusId) => {
  const statusioRawStatusStore = readable(
    storeValueOf(platform),
    async (set) => {
      const updateStatus = async () => {
        const status = await getStatusOf(statusId);
        set(storeValueOf(platform, status));
      };

      await updateStatus();
      const interval = setInterval(updateStatus, 90_000);
      return () => clearInterval(interval);
    }
  );

  return statusioRawStatusStore;
};

export const createSummarizedStatusStore = (rawStatusStore) =>
  derived(rawStatusStore, ($rawStatusPair) =>
    getSummarizedStatusOf($rawStatusPair)
  );
