class PlatformStatus {
  constructor(platform, rawStatusStore, summarizedStatusStore) {
    this.platform = platform;
    this.rawStatusStore = rawStatusStore;
    this.summarizedStatusStore = summarizedStatusStore;
  }

  get platform() {
    return this.platform;
  }

  get rawStatusStore() {
    return this.rawStatusStore;
  }

  get summarizedStatusStore() {
    return this.summarizedStatusStore;
  }
}

export default PlatformStatus;
