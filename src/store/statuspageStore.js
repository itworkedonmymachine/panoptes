import { readable, derived } from 'svelte/store';

const getIndicatorOf = (statusJson) => statusJson.status.indicator;

const getStatusOf = async (statuspageId) => {
  const response = await fetch(
    `https://${statuspageId}.statuspage.io/api/v2/summary.json`
  );
  return response.json();
};

const getSummarizedStatusOf = (rawStatusPair) => {
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
    maintenance: indicator === 'maintenance',
  };
};

const storeValueOf = (platform, status = null) => ({ platform, status });

export const createRawStatusStore = (platform, statuspageId) => {
  const statuspageRawStatusStore = readable(
    storeValueOf(platform),
    async (set) => {
      const updateStatus = async () => {
        const status = await getStatusOf(statuspageId);
        set(storeValueOf(platform, status));
      };

      await updateStatus();
      const interval = setInterval(updateStatus, 90_000);
      return () => clearInterval(interval);
    }
  );

  return statuspageRawStatusStore;
};

export const createSummarizedStatusStore = (rawStatusStore) =>
  derived(rawStatusStore, ($rawStatusPair) =>
    getSummarizedStatusOf($rawStatusPair)
  );
