import { IContextItem } from "../../../../shrimp/context";
import { IUrlOptions } from "../../../../shrimp/interfaces/quick/IUrl";
import { IGoHistoryOptions } from "../../../../shrimp/interfaces/RenderingInterfaces/IDory";
export declare const NavigationManagerContextName: string;
export interface INavigationManager extends IContextItem {
    getUrl?(options?: {
        noQueryString?: boolean;
    }): string | undefined;
    backOverride?(options: IGoHistoryOptions): any;
    redirectFunc?({ url }: {
        url: string;
    }): any;
    redirect({ url, options }: {
        url: string;
        options?: IUrlOptions;
    }): void;
    go?(...args: any[]): void;
    go2?(qjsonPath: string, options?: {
        newTab?: boolean;
        store?: boolean;
    }, cb?: () => void): void;
}
//# sourceMappingURL=INavigationManager.d.ts.map