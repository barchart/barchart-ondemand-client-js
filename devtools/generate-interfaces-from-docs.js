const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");
const axios = require("axios");

const pathToTypesFile = path.join(process.cwd(), "src", "interfaces.ts");

const supportedResources = new Set([
    "getQuote",
    "getLeaders",
    "getTechnicals",
    "getProfile",
    "getInstrumentDefinition",
    "getFuturesSpecifications",
    "getFuturesExpirations",
    "getFuturesOptionsExpirations",
    "getCompetitors",
    "getInsiders",
    "getHighsLows",
    "getMomentum",
    "getSignal",
    "getRatings",
    "getChart",
    "getHistory",
    "getFuturesOptions",
    "getEquityOptions",
    "getSpecialOptions",
    "getSpecialOptionsClassification",
    "getWeather",
    "getUSDAGrainPrices",
    "getEarningsEstimates",
    "getCorporateActions",
    "getIndexMembers",
    "getFinancialHighlights",
    "getIncomeStatements",
    "getFinancialRatios",
    "getSECFilings",
    "getETFDetails",
    "getSymbolLookup",
    "getNews",
    "getBalanceSheets",
    "getClosePrice",
    // used with get method ->
    "getEquityOptionsIntraday",
    "getCashFlow",
    "getCmdtyCalendar",
    "getHistoricHighsLows",
    "getForexForwardCurves",
    "getCmdtyStats",
    "getGrainBids",
]);



function inputTypeMapper(input, resourceName, fieldName, values) {
    switch (true) {
        case input.startsWith("list (") && input.endsWith("string.)"): {
            return "string | string[]";
        }
        case input.startsWith("date ("):
        case input.startsWith("dateTime ("):
        case input.startsWith("string ("): {
            return "string";
        }
        case input.startsWith("list-enum ("): {
            if (resourceName !== "GetUSDAGrainPrices" && resourceName !== "GetCmdtyCalendar") {
                return "string[]";
            }
            // leek to "enum (" case
        }
        case input.startsWith("enum ("): {
            if (resourceName === "GetIndexMembers") {
                return "string[]";
            }
            if (resourceName === "GetNews" && fieldName === "subCategory") {
                return "string[]";
            }

            const union = "(" + values.split(",").map(x => `"${x.trim()}"`).join(" | ") + ")";  
            if (fieldName.endsWith("s")) {
                return union + "[]";
            }
            return union ;
        }
        case input.startsWith("integer ("):
        case input.startsWith("double ("):
        case input.startsWith("int ("): {
            return "number";
        }
        case input.startsWith("boolean ("): {
            if (resourceName === "GetNews") {
                return "boolean";
            }
            if (resourceName === "GetEquityOptions" && fieldName === "legacySymbols") {
                return "1 | 0";
            }
            return "never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] \n please check docs of specific method for given property. \n please fix in barchart-ondemand-client-js as well! */"
        }
    }
}

function outputTypeMapper(output, resourceName, fieldName) {
    switch (output) {
        case "string":
        case "dateTime": // DateTime (YYYY-MM-DD HH:MI:SS + Z)
        case "date": // Date only (YYYY-MM-DD)
        case "list":
            return "string";
        case "int":
        case "integer":
        case "double":
            return "number";
        case "boolean":
            return "boolean";

        // this part is scary i guess
        // map bad type to new Interface
        // ignore the way its done :'(

        case "array": {
            // multiple resources return's same interface
            if (resourceName === "GetRatings") {
                return "{ current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; }";
            }
            return undefined;
        }
        case "enum": {
            switch (resourceName + "." + fieldName) {
                case "GetETFDetails.classification": {
                    return "{ region: string; country: string; sector: string; equity_index: string; leveraged_family: string; country_listing: string; }";
                }
                case "GetNews.relatedSymbols": {
                    return "string[]";
                }
                case "GetSpecialOptionsClassification.root": {
                    return "string";
                }
                case "GetSpecialOptionsClassification.category": {
                    const dataPart = " data: { symbol: string; name: string; } "; // note its not object
                    const subCategory = `{ "sub-categories": { subCategoryName: string; ${dataPart} }[] }`;
                    return `( { categoryName: string; } & ({ ${dataPart} } | ${subCategory}) )[]`;
                }
                case "GetForexForwardCurves.forwardCurves": {
                    return "{ symbol: string; name: string; bid: number; ask: number; mid: number; open: number; high: number; low: number; last: number; previous: number; lastUpdate: string; }[]";
                }
                case "GetGrainBids.bids": {
                    return "{ active: boolean; as_of: string; basis: string; basisRollingSymbol: string; basisSymbol: string; basiscwt: number; basismonth: string; basistonee: number; cashPriceRollingSymbol: string; cashPriceSymbol: string; cashprice: string; cashpricetonne: string; change: string; commodity: string; commodity_display_name: string; commodity_id: string; currency: string; customer_commodity_id: string; deliveryMonth: string; deliveryYear: string; delivery_end: string; delivery_end_raw: string; delivery_sort: string; delivery_start: string; delivery_start_raw: string; id: string; nodeId: string; notes: null | any; pctchange: string; price: string; pricecwt: string; pricetonne: string; rawchange: number; sym_root: string; symbol: string; timestamp: number; unitvalue: number; unitweight: number; usesCurrencyConversion: boolean; usesVolumeConversion: boolean; }[]";
                }
                case "GetGrainBids.commodities": {
                    return "null | any";
                }
                case "GetCmdtyStats.measurements":
                case "GetCmdtyStats.sources":
                case "GetCmdtyStats.contents": {
                    return "string[]";
                }
                case "GetCmdtyStats.stats": {
                    return "{ date: string; value: string; }[]";
                }
                case "GetHistory.daysToExpiration":{
                    return "number /* valid values are from 0-60 */";
                }
            }
            return undefined;
        }
    }
}


function generateInputTypes(doc, name) {
    const x = doc.querySelector("#nav-summary > div:first-child").firstElementChild;
    const inputTs = [];
    for (let i = 1; i < x.children.length; i++) {
        const el = x.children[i];

        const typeName = el.querySelector("p").firstChild.textContent.trim();
        const optionalOrRequired = el.querySelector("p sup em").textContent.includes("required") ? '' : '?';
        const typeForType = el.querySelector("div .font-light").textContent;
        const typeForTypeValues = el.querySelector("div div.font-light:last-child").textContent;

        const type = inputTypeMapper(typeForType, name, typeName, typeForTypeValues);
        if (!type) {
            throw Error(`Missing type mapping for "${typeForType}" in '${name}' resource and '${typeName}' field`);
        }

        inputTs.push(`${typeName}${optionalOrRequired}: ${type};`);
    }

    return `
export interface IOnDemand${name}Options {
    ${inputTs.join("\n\t")}
}`;

}

function generateOutputTypes(doc, name) {
    const x = doc.querySelector("#nav-summary > div:first-child").nextElementSibling.querySelector("div.w-full > .flex");
    const outputTs = [];
    for (let i = 0; i < x.children.length; i += 3) {
        const nameForType = x.children[i];
        const typeForType = x.children[i + 2].querySelector("em").textContent;

        const typeName = nameForType.firstChild.textContent.trim();
        const optionalOrRequired = nameForType.querySelector("span").textContent.includes("always returned") ? '' : '?';

        const type = outputTypeMapper(typeForType, name, typeName);
        if (!type) {
            throw Error(`Missing type mapping for "${typeForType}" in '${name}' resource and '${typeName}' field`);
        }

        outputTs.push(`${typeName}${optionalOrRequired}: ${type};`);
    }

    // const code = doc.querySelector("#nav-sample-queries code");
    const isArrayResponse = true; // code ? code.textContent.includes("\"results\": [") || code.textContent.includes("\"results\":[") : true;

    return `
export interface IOnDemand${name}Response extends IOnDemandResponse {
    results: {
        ${outputTs.join("\n\t\t")}
    }${isArrayResponse ? '[]' : ''};
};`;

}



(async () => {
    console.log("info: starting with generating types");

    console.log("info: loading base url where all available types are stored");
    const baseDocsURL = "https://www.barchart.com/ondemand/api";
    const { data: htmlStr } = await axios.get(baseDocsURL, { responseType: 'document' });

    const docsListDOM = new JSDOM(htmlStr);
    const docsLinkHolders = docsListDOM.window.document.querySelectorAll("body div.main-wrap-content .content-container-padding > .w-full");

    let allEndpoints = [];
    // skip first element, its not element we are looking for
    for (let i = 1; i < docsLinkHolders.length; i++) {
        const endpointElements = docsLinkHolders[i].querySelectorAll("div > div.flex > div:first-child a");
        for (const e of endpointElements) {
            const url = e.href;
            allEndpoints.push({ name: url.split("/").at(-1), url });
        }
    }

    // write types
    console.log("info: overriding existing types file", pathToTypesFile);

    const initialTypes = `
//
// THIS FILE IS AUTO GENERATED 
// PLEASE use "npm run generate" to update types
//

export interface IOnDemandResponse {
    results: unknown;
    status: {
        code: number;
        message: string;
    };
}


// missing docs

export interface IOnDemandGetHistoricHighsLowsOptions {
    symbols: string | string[];
}
export interface IOnDemandGetHistoricHighsLowsResponse extends IOnDemandResponse {
    results: {
        name: string;
        symbol: string;
        fiveDayHistory: Array<{ 
            change: number; 
            date: string; 
            high: number; 
            last: number; 
            low: number; 
            open: number; 
            pctchange: number;
            volume: number;
        }>;
        highsAndLows: Array<{ 
            dateSince: string;
            high: number;
            highDate: string;
            low: number;
            lowDate: string;
            percent: number;
            period: string;
        }>;
        newHighsAndLows: Array<{ 
            highPercent: number;
            lowPercent: number;
            madeLowHigh: number;
            madeNewHigh: number;
            period: string;
        }>;
    }[];
}


// regular

`;
    fs.writeFileSync(pathToTypesFile, initialTypes, { encoding: "utf-8" });


    for (const endpoint of allEndpoints) {
        if (!supportedResources.has(endpoint.name)) {
            console.log("info: skipping creating of " + endpoint.name + " resource types");
            continue;
        }

        console.log("info: attempting to create types for " + endpoint.name);
        const { data: resourceHtmlString } = await axios.get(endpoint.url, { responseType: 'document' });
        const resourceDOM = new JSDOM(resourceHtmlString);
        const interfaceName = endpoint.name[0].toUpperCase() + endpoint.name.substring(1);

        const inputTypes = generateInputTypes(resourceDOM.window.document, interfaceName);
        const outputTypes = generateOutputTypes(resourceDOM.window.document, interfaceName);

        // concat
        fs.appendFileSync(pathToTypesFile, inputTypes + "\n" + outputTypes, { encoding: "utf-8" });
    }

    console.log("info: finished with generating types")
})();
