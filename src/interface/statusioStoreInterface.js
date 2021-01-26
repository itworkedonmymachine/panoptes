import PlatformStatus from './storeInterface';
import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../store/statusioStore';

class StatusioStore extends PlatformStatus {
  constructor(platform, statusId) {
    const statusPageLink = `https://status.io/pages/${statusId}`;
    const rawStatusStore = createRawStatusStore(platform, statusId);
    const summarizedStatusStore = createSummarizedStatusStore(rawStatusStore);
    super(platform, statusPageLink, rawStatusStore, summarizedStatusStore);

    this._statusId = statusId;
  }
}

export default StatusioStore;
