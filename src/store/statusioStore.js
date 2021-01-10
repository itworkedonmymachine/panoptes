import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../helper/statusioHelper';

const generatePair = (platform, statusId) => ({
  platform,
  statusId,
});

const platformStatusIdpairs = [
  generatePair('Docker Hub', '533c6539221ae15e3f000031'),
  generatePair('GitLab', '5b36dc6502d06804c08349f7'),
  generatePair("Let's Encrypt", '55957a99e800baa4470002da'),
];

export const statusioStores = platformStatusIdpairs.map((pair) =>
  createRawStatusStore(pair.platform, pair.statusId)
);
export const statusioTickerStores = statusioStores.map((rawStatusStore) =>
  createSummarizedStatusStore(rawStatusStore)
);
