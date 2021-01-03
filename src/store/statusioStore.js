import { readable, derived } from 'svelte/store';
import { getStatusOf, getStatusTickerDataOf } from '../helper/statusioHelper';

const generatePair = (platform, statusId) => ({
  platform,
  statusId,
});

const platformStatusIdpairs = [
  generatePair('Docker Hub', '533c6539221ae15e3f000031'),
  generatePair('GitLab', '5b36dc6502d06804c08349f7'),
  generatePair("Let's Encrypt", '55957a99e800baa4470002da'),
];

const storeValueOf = (platform, status = null) => ({ platform, status });

const createStatusioReadableStore = (platform, statusId) => {
  const statusioReadableStore = readable(
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

  return statusioReadableStore;
};

export const statusioStores = platformStatusIdpairs.map((pair) =>
  createStatusioReadableStore(pair.platform, pair.statusId)
);
export const statusioTickerStores = statusioStores.map((rawStatusStore) =>
  derived(rawStatusStore, ($rawStatusPair) =>
    getStatusTickerDataOf($rawStatusPair)
  )
);
