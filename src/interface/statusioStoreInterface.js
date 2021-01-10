import PlatformStatus from './storeInterface';
import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../helper/statusioHelper';

class StatusioStore extends PlatformStatus {
  constructor(platform, statusId) {
    const rawStatusStore = createRawStatusStore(platform, statusId);
    const summarizedStatusStore = createSummarizedStatusStore(rawStatusStore);
    super(platform, rawStatusStore, summarizedStatusStore);

    this.statusId = statusId;
  }
}

export default StatusioStore;
