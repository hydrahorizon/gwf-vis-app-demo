export default class extends HTMLElement {
  obtainHeaderCallback = () => `Data Provider`;
  obtainDataProviderIdentifiersCallback = () => ["demo"];

  queryDataCallback = async (_identifier, _dataSource, _queryObject) => [
    1, 2, 3, 4, 5,
  ];
}
