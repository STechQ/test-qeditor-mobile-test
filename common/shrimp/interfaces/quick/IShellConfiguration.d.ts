import { IMessage, LogType } from "../../helpers/logger";
import { ElementLocation } from "../ComponentInterfaces/ElementLocation";
import { CType } from "../ComponentInterfaces/ICompJson";
import { IComponent, IComponentClassEngine } from "../ComponentInterfaces/IComponent";
import { IComponentCollection, ILightComponentCollection, ScopedSlotCreatorFunc } from "../ComponentInterfaces/IComponentCollection";
import { IComponentInstanceTracker } from "../ComponentInterfaces/IComponentInstanceTracker";
import { ICreatedComponent } from "../ComponentInterfaces/ICreatedComponent";
import { IDirectiveElement } from "../ComponentInterfaces/IDirectiveCollection";
import { IQJSon } from "../ComponentInterfaces/IQJson";
import { StyleValue } from "../ComponentInterfaces/IStyle";
import { IVnode } from "../ComponentInterfaces/IVnode";
import { IDictionary } from "../IDictionary";
import { IHostResponseData } from "../IHostResponseData";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { INetwork } from "./IContainerServices";
import { ICookieAccess } from "./ICookieAccess";
import { IFormatConfiguration } from "./IFormatConfiguration";
import { IFormattingDefinition } from "./IFormattingDefinition";
import { IPlatform } from "./IPlatform";
import { ILocationPosition } from "./ILocationPosition";
import { IProcessManager } from "./IProcessManager";
import { IShellGlobalMethods } from "./IShellGlobalMethods";
import { IStorageAccess } from "./IStore";
import { IUrlOptions } from "./IUrl";
import { IExcel } from "./IExcel";
export interface IShellConfiguration {
    network: INetwork;
    lridHelper?: (label: string, params: Object) => string;
    go?: Function;
    go2?(qjsonPath: string, options?: {
        newTab?: boolean;
        store?: boolean;
    }): void;
    triggerPreviousPage?: Function;
    nemoComponents?: object;
    storeAccess?: IStorageAccess;
    cookieAccess?: ICookieAccess;
    platform?: IPlatform;
    getCurrentPosition?: () => Promise<ILocationPosition> | undefined;
    compPropsAutoLrid?: boolean;
    osGlobalObjects?: IDictionary<any>;
    shellGlobalMethods?: IShellGlobalMethods;
    formatConfiguration?: IFormatConfiguration;
    componentInstanceTracker?: IComponentInstanceTracker;
    historyBasedConf?: IHistoryBasedShellConfiguration;
    logHandler?: {
        timer?: number;
        cb: (logs: IMessage) => void;
        clear?: () => void;
    };
    processManager?: IProcessManager;
    dynamicCompHandler?: ({ createdComps, referenceComp, compLocater, parentCollection, append, childName }: {
        createdComps: Array<IComponentCollection>;
        referenceComp?: IComponentCollection;
        compLocater: ElementLocation;
        parentCollection?: IComponentCollection;
        append?: boolean;
        childName: string;
    }) => void;
    deleteComponent?: (compCollection: IComponentCollection) => void;
    coreComponentOverrider?(componentName: string): IComponentClassEngine | null;
    roleBaseViewHelper?: (key: string) => boolean;
    resetTimeTextField?: (componentContext: any) => void;
    redirectTo?({ url }: {
        url: string;
    }): void;
    performance?(): number;
    getUrl?(options?: {
        noQueryString?: boolean;
    }): string | undefined;
    exportToXlsxHandler?: (excelFile: IExcel) => void;
    setComponentClass?: (componentInstance: IComponentCollection, classes: Array<string>) => void;
    setComponentsProperty?: (componentCollection: IComponentCollection, propertyName: string, propertyValue: any) => void;
    setTheme?: (newTheme: string) => void;
    getThemeList?: () => Array<string> | undefined;
    addTheme?: (themeName: string) => void;
    removeTheme?: (themeName: string) => void;
    setRegion?: (regionName: string) => void;
    getRegionList?: () => Array<string> | undefined;
    getCurrentRegion?: () => string | undefined;
    getFormattingDefinitionByCurrentRegion?: () => IFormattingDefinition | undefined;
    setVisibility(compCollection: IComponentCollection, compVisibility: boolean): void;
    getComponentValue(compCollection: IComponentCollection): any;
    setComponentValue(compCollection: IComponentCollection, value: string): void;
    getComponentStyle(comp: IComponent): any;
    setComponentStyle(compCollection: IComponentCollection, prop: string, value: string): void;
    redirect?({ url, options }: {
        url: string;
        options?: IUrlOptions;
    }): void;
    onComponentDestroy?: ({ parentComponent, childVDomElement, childKey }: {
        parentComponent: IComponent;
        childVDomElement: IVnode;
        childKey: string;
    }) => void;
    createComponentQValue?: (compCollection: IComponentCollection) => void;
    hostTrigger?: (functionName: string, params: Record<string, any>, pageNameArray: Array<string>) => Promise<IHostResponseData> | undefined;
    onLRChange?: (region: string) => void;
    setDarkTheme?: (compCollection: IComponentCollection, isDark: boolean) => void;
    clearPageClose?: () => void;
    setPageClose?: () => void;
    scrollIntoView?: (component: IComponent) => void;
    YOffset?: () => Number;
    XOffset?: () => Number;
    toTop?: () => void;
    getEnvironmentVariable?: () => any;
    getPageTitle?: () => void;
    getFavicon?: () => void;
    setPageTitle?: (value: string) => void;
    copyToClipboard?: (value: string) => void;
    setFavicon?: (favicon: string) => void;
    getYamlLogType?: () => LogType;
    cryptoGenerateKeyPair?: () => Record<string, string>;
    cryptoStore?: (keyPair: Record<string, string>) => void;
    cryptoSha512?: (value: string) => string;
    cryptoSign?: (value: string, privateKey: string, options?: {
        digestAlgorithm: string | "sha512";
        padding: string | "pkcs15";
    }) => string;
    getMinEngineLogType?: () => LogType | undefined;
    downloadHandler?: (responseFile: {
        data: string;
        name: string;
    }) => boolean;
}
export interface IHistoryBasedShellConfiguration {
    isEditor: boolean;
    createComponent: CreateComponentDelegate;
    componentHasProp: ComponentHasPropDelegate;
    retrieveCjson: RetrieveCjsonDelegate;
    createContainerView?: CreateContainerViewDelegate;
    updateContainerView?: UpdateContainerViewDelegate;
}
export declare type CreateComponentDelegate = ({ componentName, props, events, asChildType, asChildName, slots, scopedSlots, compClass, text, attrs, pageName, componentCollection, directives, styles, }: {
    componentName: string;
    props: IDictionary<any>;
    events: IDictionary<Function>;
    asChildType: CType | null;
    asChildName?: string;
    scopedSlots?: IDictionary<ScopedSlotCreatorFunc>;
    slots?: IDictionary<Array<IVnode>>;
    compClass?: string;
    text?: string;
    attrs?: IDictionary<any>;
    pageName?: string;
    componentCollection: ILightComponentCollection;
    directives?: Array<IDirectiveElement>;
    styles?: StyleValue;
}) => ICreatedComponent;
export declare type ComponentHasPropDelegate = ({ componentName, propName }: {
    componentName: string;
    propName: string;
}) => boolean;
export declare type ComponentDomLocator = (compInst: IComponent, childIndex: number) => IDomElement | null;
export declare type RetrieveCjsonDelegate = ({ qjsonPath, }: {
    qjsonPath: string;
}) => Promise<IQJSon | undefined>;
export declare type CreateContainerViewDelegate = (compUID: string) => unknown;
export declare type UpdateContainerViewDelegate = ({ givenObject, elements, pageShift, }: {
    givenObject: unknown;
    elements?: Array<unknown> | string;
    pageShift: boolean;
}) => void;
//# sourceMappingURL=IShellConfiguration.d.ts.map