interface IJsonpFetchOptions {
    url: string;
    success: (data: any) => void;
    error: (error: { url: string; event: any; }) => void;
    data?: Record<string, any>;
    callback_name?: string;
}

export declare class JSONP {
    fetch(options?: IJsonpFetchOptions): HTMLScriptElement;
}