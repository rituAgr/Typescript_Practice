
export interface InitParam {
    "configGlossary:installationAt": string;
    "configGlossary:adminEmail": string;
    "configGlossary:poweredBy": string;
    "configGlossary:poweredByIcon": string;
    "configGlossary:staticPath": string;
    templateProcessorClass: string;
    templateLoaderClass: string;
    templatePath: string;
    templateOverridePath: string;
    defaultListTemplate: string;
    defaultFileTemplate: string;
    useJSP: boolean;
    jspListTemplate: string;
    jspFileTemplate: string;
    cachePackageTagsTrack: number;
    cachePackageTagsStore: number;
    cachePackageTagsRefresh: number;
    cacheTemplatesTrack: number;
    cacheTemplatesStore: number;
    cacheTemplatesRefresh: number;
    cachePagesTrack: number;
    cachePagesStore: number;
    cachePagesRefresh: number;
    cachePagesDirtyRead: number;
    searchEngineListTemplate: string;
    searchEngineFileTemplate: string;
    searchEngineRobotsDb: string;
    useDataStore: boolean;
    dataStoreClass: string;
    redirectionClass: string;
    dataStoreName: string;
    dataStoreDriver: string;
    dataStoreUrl: string;
    dataStoreUser: string;
    dataStorePassword: string;
    dataStoreTestQuery: string;
    dataStoreLogFile: string;
    dataStoreInitConns: number;
    dataStoreMaxConns: number;
    dataStoreConnUsageLimit: number;
    dataStoreLogLevel: string;
    maxUrlLength: number;
    mailHost: string;
    mailHostOverride: string;
    log?: number;
    logLocation: string;
    logMaxSize: string;
    dataLog?: number;
    dataLogLocation: string;
    dataLogMaxSize: string;
    removePageCache: string;
    removeTemplateCache: string;
    fileTransferFolder: string;
    lookInContext?: number;
    adminGroupID?: number;
    betaServer?: boolean;
}

export interface Servlet {
    'servlet-name': string;
    'servlet-class': string;
    'init-param': InitParam;
}

export interface ServletMapping {
    cofaxCDS: string;
    cofaxEmail: string;
    cofaxAdmin: string;
    fileServlet: string;
    cofaxTools: string;
}

export interface Taglib {
    'taglib-uri': string;
    'taglib-location': string;
}

export interface WebApp {
    servlet: Servlet[];
    'servlet-mapping': ServletMapping;
    taglib: Taglib;
}

export interface widget {
    'web-app': WebApp;
}


