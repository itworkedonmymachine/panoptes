import { readable, derived } from 'svelte/store';
import { getStatusOf, getStatusSummaryOf } from '../helper/statuspageHelper';

const generatePair = (platform, pageId) => ({
  platform,
  pageId,
});

const platformStatuspageIdpairs = [
  generatePair('GitHub', 'kctbh9vrtdwd'),
  generatePair('npm', 'wyvgptkd90hm'),
  generatePair('CircleCI', '6w4r0ttlx5ft'),
  generatePair('Travis CI', 'pnpcptp8xh9k'),
  generatePair('Dropbox', 't34htyd6jblf'),
  generatePair('New Relic', 'nwg5xmnm9d17'),
  generatePair('Bitbucket', 'bqlf8qjztdtr'),
  generatePair('Sentry', 't687h3m0nh65'),
  generatePair('Datadog', '1k6wzpspjf99'),
];

const storeValueOf = (platform, status = null) => ({ platform, status });

const createStatuspageReadableStore = (platform, statuspageId) => {
  const statuspageReadableStore = readable(
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

  return statuspageReadableStore;
};

export const statuspageStores = platformStatuspageIdpairs.map((pair) =>
  createStatuspageReadableStore(pair.platform, pair.pageId)
);
export const statuspageSummaryStores = statuspageStores.map((rawStatusStore) =>
  derived(rawStatusStore, ($rawStatusPair) =>
    getStatusSummaryOf($rawStatusPair)
  )
);
