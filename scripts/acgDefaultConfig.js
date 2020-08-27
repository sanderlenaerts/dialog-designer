module.exports = {
  ACG_DEFAULT_CONFIG: {
    'project-settings': {
      'code-owner': 'NewCo Incorporated',
      'bundle-path': 'core/src/main/java',
      'test-path': 'core/src/test/java',
      'apps-path': 'ui.apps/src/main/content/jcr_root/apps',
      'component-path': 'newco/components',
      'model-interface-pkg': 'com.newco.aem.base.core.models',
      'model-impl-pkg': 'com.newco.aem.base.core.models.impl',
    },
    name: 'demo-comp',
    title: 'Demo Component',
    group: 'NewCo Base',
    type: 'content',
    options: {
      js: true,
      jstxt: true,
      css: true,
      csstxt: true,
      html: true,
      'html-content': false,
      slingmodel: true,
      testclass: false,
      'junit-major-version': 5,
      'content-exporter': false,
      'model-adaptables': [
        'resource',
        'request',
      ],
      'generic-javadoc': false,
      'properties-tabs': [],
      'properties-shared-tabs': [],
      'properties-global-tabs': [],
      'properties-shared': [],
      'properties-global': [],
      properties: [],
    },
  },
};
