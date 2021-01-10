import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../helper/statuspageHelper';

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

export const statuspageStores = platformStatuspageIdpairs.map((pair) =>
  createRawStatusStore(pair.platform, pair.pageId)
);
export const statuspageTickerStores = statuspageStores.map((rawStatusStore) =>
  createSummarizedStatusStore(rawStatusStore)
);
