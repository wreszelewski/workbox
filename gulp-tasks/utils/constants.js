module.exports = {
  // This is a directory that should not be commited
  // to git and will be removed and rebuilt between
  // test runs.
  PACKAGE_BUILD_DIRNAME: 'builds',
  BROWSER_BUILD_DIRNAME: 'browser',
  TEST_BUNDLES_BUILD_DIRNAME: 'bundle-builds',

  // This is the namespace of the workbox module.
  NAMESPACE_PREFIX: 'google.workbox',

  // This is the environments that we should use for NODE_ENV.
  BUILD_TYPES: [undefined, 'prod'],
};
