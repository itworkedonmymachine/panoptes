import StatusioStoreInterface from '../interface/statusioStoreInterface';
import StatuspageStoreInterface from '../interface/statuspageStoreInterface';
import platformStatusIdPairs from '../static/statusioPairs';
import platformPageIdPairs from '../static/statuspagePairs';

const statusStorePool = {};

platformPageIdPairs.forEach((pair) => {
  const { platform, pageId } = pair;
  const store = new StatuspageStoreInterface(platform, pageId);
  statusStorePool[platform] = store;
});

platformStatusIdPairs.forEach((pair) => {
  const { platform, statusId } = pair;
  const store = new StatusioStoreInterface(platform, statusId);
  statusStorePool[platform] = store;
});

export const platforms = Object.keys(statusStorePool);

export default statusStorePool;
