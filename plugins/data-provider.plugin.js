export default class extends HTMLElement {
  notifyLoadingDelegate;

  obtainHeaderCallback = () => `Data Provider`;
  obtainDataProviderIdentifiersCallback = () => ["demo"];

  queryDataCallback = async (_identifier, _dataSource, _queryObject) => {
    const EndLoadingDelegate = this.notifyLoadingDelegate?.();
    await this.timeKiller(2000);
    EndLoadingDelegate?.();
    return [1, 2, 3, 4, 5];
  };

  async timeKiller(timeout) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, timeout)
    );
  }
}
