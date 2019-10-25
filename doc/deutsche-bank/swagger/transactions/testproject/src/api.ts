// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * dbapi-transactions
 * dbAPI
 *
 * The version of the OpenAPI document: v2
 * Contact: bank.api@db.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from './base';

/**
 * A cash account transaction.
 * @export
 * @interface CashAccountTransaction
 */
export interface CashAccountTransaction {
  /**
   * transaction\'s unique Id
   * @type {string}
   * @memberof CashAccountTransaction
   */
  id: string;
  /**
   * The IBAN of this account.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  originIban: string;
  /**
   * Amount of the transaction. If the amount is positive, the customer received money, if the amount is negative the customer lost money.
   * @type {number}
   * @memberof CashAccountTransaction
   */
  amount: number;
  /**
   * Name of the counter party
   * @type {string}
   * @memberof CashAccountTransaction
   */
  counterPartyName?: string;
  /**
   * IBAN of the counter party
   * @type {string}
   * @memberof CashAccountTransaction
   */
  counterPartyIban?: string;
  /**
   * Payment reference
   * @type {string}
   * @memberof CashAccountTransaction
   */
  paymentReference?: string;
  /**
   * Booking date. In the format YYYY-MM-DD.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  bookingDate: string;
  /**
   * ISO-code of the cash accounts\' currency.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  currencyCode?: string;
  /**
   * Specifies the business transaction code (GVC).
   * @type {string}
   * @memberof CashAccountTransaction
   */
  transactionCode?: string;
  /**
   * Specifies the bank transaction code domain, as published in an external bank transaction code domain code list according to ISO 20022.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  externalBankTransactionDomainCode?: string;
  /**
   * Specifies the external family code of the bank transaction code in the format of character string with a maximum length of 4 characters according to ISO 20022.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  externalBankTransactionFamilyCode?: string;
  /**
   * Specifies the bank transaction code sub-family, as published in an external bank transaction code sub-family code list according to ISO 20022.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  externalBankTransactionSubFamilyCode?: string;
  /**
   * MandateReference of the direct debit transaction, max length 35 characters.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  mandateReference?: string;
  /**
   * Creditor ID, max length 35 characters.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  creditorId?: string;
  /**
   * Unique identification given by the orderer to identify the order.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  e2eReference?: string;
  /**
   * Unique and unambiguous identification of a transaction, as assigned by any of the customer parties on the initiating side.
   * @type {string}
   * @memberof CashAccountTransaction
   */
  paymentIdentification?: string;
  /**
   * Value date of Transaction in ISO 8601 format (YYYY-MM-DD). In very specific cases, technical date is possible for e.g., (2020-02-30).
   * @type {string}
   * @memberof CashAccountTransaction
   */
  valueDate?: string;
}
/**
 * Default error response message
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
  /**
   * The error code
   * @type {number}
   * @memberof ErrorResponse
   */
  code: number;
  /**
   * Description of the belonging error code.
   * @type {string}
   * @memberof ErrorResponse
   */
  message: string;
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   * Cumulated number of items across all pages for your request parameters.
   * @type {number}
   * @memberof InlineResponse200
   */
  totalItems?: number;
  /**
   * Count of resources per request/page.
   * @type {number}
   * @memberof InlineResponse200
   */
  limit?: number;
  /**
   * Current page offset.
   * @type {number}
   * @memberof InlineResponse200
   */
  offset?: number;
  /**
   *
   * @type {Array<CashAccountTransaction>}
   * @memberof InlineResponse200
   */
  transactions?: Array<CashAccountTransaction>;
}

/**
 * TransactionApi - axios parameter creator
 * @export
 */
export const TransactionApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     * Reads a transaction by its id.
     * @summary Reads a transaction by id.
     * @param {string} transactionId the id of the requested transaction
     * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionIdGet(
      transactionId: string,
      correlationId?: string,
      options: any = {}
    ): RequestArgs {
      // verify required parameter 'transactionId' is not null or undefined
      if (transactionId === null || transactionId === undefined) {
        throw new RequiredError(
          'transactionId',
          'Required parameter transactionId was null or undefined when calling transactionIdGet.'
        );
      }
      const localVarPath = `/{transactionId}`.replace(
        `{${'transactionId'}}`,
        encodeURIComponent(String(transactionId))
      );
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication api_auth_code required
      // oauth required
      if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue =
          typeof configuration.accessToken === 'function'
            ? configuration.accessToken('api_auth_code', ['read_transactions'])
            : configuration.accessToken;
        localVarHeaderParameter['Authorization'] =
          'Bearer ' + localVarAccessTokenValue;
      }

      // authentication api_implicit required
      // oauth required
      if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue =
          typeof configuration.accessToken === 'function'
            ? configuration.accessToken('api_implicit', ['read_transactions'])
            : configuration.accessToken;
        localVarHeaderParameter['Authorization'] =
          'Bearer ' + localVarAccessTokenValue;
      }

      if (correlationId !== undefined && correlationId !== null) {
        localVarHeaderParameter['Correlation-Id'] = String(correlationId);
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...options.headers,
      };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TransactionApi - functional programming interface
 * @export
 */
export const TransactionApiFp = function(configuration?: Configuration) {
  return {
    /**
     * Reads a transaction by its id.
     * @summary Reads a transaction by id.
     * @param {string} transactionId the id of the requested transaction
     * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionIdGet(
      transactionId: string,
      correlationId?: string,
      options?: any
    ): (
      axios?: AxiosInstance,
      basePath?: string
    ) => AxiosPromise<CashAccountTransaction> {
      const localVarAxiosArgs = TransactionApiAxiosParamCreator(
        configuration
      ).transactionIdGet(transactionId, correlationId, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * TransactionApi - factory interface
 * @export
 */
export const TransactionApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Reads a transaction by its id.
     * @summary Reads a transaction by id.
     * @param {string} transactionId the id of the requested transaction
     * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionIdGet(
      transactionId: string,
      correlationId?: string,
      options?: any
    ) {
      return TransactionApiFp(configuration).transactionIdGet(
        transactionId,
        correlationId,
        options
      )(axios, basePath);
    },
  };
};

/**
 * TransactionApi - object-oriented interface
 * @export
 * @class TransactionApi
 * @extends {BaseAPI}
 */
export class TransactionApi extends BaseAPI {
  /**
   * Reads a transaction by its id.
   * @summary Reads a transaction by id.
   * @param {string} transactionId the id of the requested transaction
   * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionApi
   */
  public transactionIdGet(
    transactionId: string,
    correlationId?: string,
    options?: any
  ) {
    return TransactionApiFp(this.configuration).transactionIdGet(
      transactionId,
      correlationId,
      options
    )(this.axios, this.basePath);
  }
}

/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export const TransactionsApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     * Reads all transactions for a specific account of the current user. If given IBAN is not valid or does not represent an account of the current user, an empty result is returned. It is not apparent who issued a transaction, only whether the user gained or lost money by it (based on whether the amount is positive or negative respectively). The maximum number of transactions returned is 200.
     * @summary Reads all transactions of the current cash account.
     * @param {string} iban mandatory - IBAN representing an account of the current user.
     * @param {string} [currencyCode] optional - ISO-code of the transactions\&#39; currency. If not provided \&#39;EUR\&#39; will be chosen. Additional information: a cash account is unique only with the combination currencyCode.
     * @param {string} [bookingDateFrom] optional - booking date of original transaction. Date in ISO 8601 format, YYYY-MM-DD. If not provided, 1980-01-01 will be chosen if called with a PSD2-compliant strong customer authentication (SCA), or the date prior to today with a maximum PSD2-compliant daycount if not called with a PSD2-compliant SCA.
     * @param {string} [bookingDateTo] optional - booking Day until which the transactions to be searched for. Date in ISO 8601 format YYYY-MM-DD. If not provided, the current day will be chosen. bookingDateTo must be greater than or equal to bookingDateFrom.
     * @param {string} [sortBy] optional - order of transactions - supported sort orders are \&#39;bookingDate[ASC]\&#39; or \&#39;bookingDate[DESC]\&#39;.
     * @param {number} [limit] optional - limit defines count of resources per request/page.
     * @param {number} [offset] optional - pagination depending on the query parameter limit. Defines current page offset, starting with 0, default 0
     * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashAccountTransactions(
      iban: string,
      currencyCode?: string,
      bookingDateFrom?: string,
      bookingDateTo?: string,
      sortBy?: string,
      limit?: number,
      offset?: number,
      correlationId?: string,
      options: any = {}
    ): RequestArgs {
      // verify required parameter 'iban' is not null or undefined
      if (iban === null || iban === undefined) {
        throw new RequiredError(
          'iban',
          'Required parameter iban was null or undefined when calling getCashAccountTransactions.'
        );
      }
      const localVarPath = `/`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication api_auth_code required
      // oauth required
      if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue =
          typeof configuration.accessToken === 'function'
            ? configuration.accessToken('api_auth_code', ['read_transactions'])
            : configuration.accessToken;
        localVarHeaderParameter['Authorization'] =
          'Bearer ' + localVarAccessTokenValue;
      }

      // authentication api_implicit required
      // oauth required
      if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue =
          typeof configuration.accessToken === 'function'
            ? configuration.accessToken('api_implicit', ['read_transactions'])
            : configuration.accessToken;
        localVarHeaderParameter['Authorization'] =
          'Bearer ' + localVarAccessTokenValue;
      }

      if (iban !== undefined) {
        localVarQueryParameter['iban'] = iban;
      }

      if (currencyCode !== undefined) {
        localVarQueryParameter['currencyCode'] = currencyCode;
      }

      if (bookingDateFrom !== undefined) {
        localVarQueryParameter['bookingDateFrom'] = bookingDateFrom;
      }

      if (bookingDateTo !== undefined) {
        localVarQueryParameter['bookingDateTo'] = bookingDateTo;
      }

      if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
      }

      if (correlationId !== undefined && correlationId !== null) {
        localVarHeaderParameter['Correlation-Id'] = String(correlationId);
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...options.headers,
      };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TransactionsApi - functional programming interface
 * @export
 */
export const TransactionsApiFp = function(configuration?: Configuration) {
  return {
    /**
     * Reads all transactions for a specific account of the current user. If given IBAN is not valid or does not represent an account of the current user, an empty result is returned. It is not apparent who issued a transaction, only whether the user gained or lost money by it (based on whether the amount is positive or negative respectively). The maximum number of transactions returned is 200.
     * @summary Reads all transactions of the current cash account.
     * @param {string} iban mandatory - IBAN representing an account of the current user.
     * @param {string} [currencyCode] optional - ISO-code of the transactions\&#39; currency. If not provided \&#39;EUR\&#39; will be chosen. Additional information: a cash account is unique only with the combination currencyCode.
     * @param {string} [bookingDateFrom] optional - booking date of original transaction. Date in ISO 8601 format, YYYY-MM-DD. If not provided, 1980-01-01 will be chosen if called with a PSD2-compliant strong customer authentication (SCA), or the date prior to today with a maximum PSD2-compliant daycount if not called with a PSD2-compliant SCA.
     * @param {string} [bookingDateTo] optional - booking Day until which the transactions to be searched for. Date in ISO 8601 format YYYY-MM-DD. If not provided, the current day will be chosen. bookingDateTo must be greater than or equal to bookingDateFrom.
     * @param {string} [sortBy] optional - order of transactions - supported sort orders are \&#39;bookingDate[ASC]\&#39; or \&#39;bookingDate[DESC]\&#39;.
     * @param {number} [limit] optional - limit defines count of resources per request/page.
     * @param {number} [offset] optional - pagination depending on the query parameter limit. Defines current page offset, starting with 0, default 0
     * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashAccountTransactions(
      iban: string,
      currencyCode?: string,
      bookingDateFrom?: string,
      bookingDateTo?: string,
      sortBy?: string,
      limit?: number,
      offset?: number,
      correlationId?: string,
      options?: any
    ): (
      axios?: AxiosInstance,
      basePath?: string
    ) => AxiosPromise<InlineResponse200> {
      const localVarAxiosArgs = TransactionsApiAxiosParamCreator(
        configuration
      ).getCashAccountTransactions(
        iban,
        currencyCode,
        bookingDateFrom,
        bookingDateTo,
        sortBy,
        limit,
        offset,
        correlationId,
        options
      );
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * TransactionsApi - factory interface
 * @export
 */
export const TransactionsApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Reads all transactions for a specific account of the current user. If given IBAN is not valid or does not represent an account of the current user, an empty result is returned. It is not apparent who issued a transaction, only whether the user gained or lost money by it (based on whether the amount is positive or negative respectively). The maximum number of transactions returned is 200.
     * @summary Reads all transactions of the current cash account.
     * @param {string} iban mandatory - IBAN representing an account of the current user.
     * @param {string} [currencyCode] optional - ISO-code of the transactions\&#39; currency. If not provided \&#39;EUR\&#39; will be chosen. Additional information: a cash account is unique only with the combination currencyCode.
     * @param {string} [bookingDateFrom] optional - booking date of original transaction. Date in ISO 8601 format, YYYY-MM-DD. If not provided, 1980-01-01 will be chosen if called with a PSD2-compliant strong customer authentication (SCA), or the date prior to today with a maximum PSD2-compliant daycount if not called with a PSD2-compliant SCA.
     * @param {string} [bookingDateTo] optional - booking Day until which the transactions to be searched for. Date in ISO 8601 format YYYY-MM-DD. If not provided, the current day will be chosen. bookingDateTo must be greater than or equal to bookingDateFrom.
     * @param {string} [sortBy] optional - order of transactions - supported sort orders are \&#39;bookingDate[ASC]\&#39; or \&#39;bookingDate[DESC]\&#39;.
     * @param {number} [limit] optional - limit defines count of resources per request/page.
     * @param {number} [offset] optional - pagination depending on the query parameter limit. Defines current page offset, starting with 0, default 0
     * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashAccountTransactions(
      iban: string,
      currencyCode?: string,
      bookingDateFrom?: string,
      bookingDateTo?: string,
      sortBy?: string,
      limit?: number,
      offset?: number,
      correlationId?: string,
      options?: any
    ) {
      return TransactionsApiFp(configuration).getCashAccountTransactions(
        iban,
        currencyCode,
        bookingDateFrom,
        bookingDateTo,
        sortBy,
        limit,
        offset,
        correlationId,
        options
      )(axios, basePath);
    },
  };
};

/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export class TransactionsApi extends BaseAPI {
  /**
   * Reads all transactions for a specific account of the current user. If given IBAN is not valid or does not represent an account of the current user, an empty result is returned. It is not apparent who issued a transaction, only whether the user gained or lost money by it (based on whether the amount is positive or negative respectively). The maximum number of transactions returned is 200.
   * @summary Reads all transactions of the current cash account.
   * @param {string} iban mandatory - IBAN representing an account of the current user.
   * @param {string} [currencyCode] optional - ISO-code of the transactions\&#39; currency. If not provided \&#39;EUR\&#39; will be chosen. Additional information: a cash account is unique only with the combination currencyCode.
   * @param {string} [bookingDateFrom] optional - booking date of original transaction. Date in ISO 8601 format, YYYY-MM-DD. If not provided, 1980-01-01 will be chosen if called with a PSD2-compliant strong customer authentication (SCA), or the date prior to today with a maximum PSD2-compliant daycount if not called with a PSD2-compliant SCA.
   * @param {string} [bookingDateTo] optional - booking Day until which the transactions to be searched for. Date in ISO 8601 format YYYY-MM-DD. If not provided, the current day will be chosen. bookingDateTo must be greater than or equal to bookingDateFrom.
   * @param {string} [sortBy] optional - order of transactions - supported sort orders are \&#39;bookingDate[ASC]\&#39; or \&#39;bookingDate[DESC]\&#39;.
   * @param {number} [limit] optional - limit defines count of resources per request/page.
   * @param {number} [offset] optional - pagination depending on the query parameter limit. Defines current page offset, starting with 0, default 0
   * @param {string} [correlationId] Free form key controlled by the caller e.g. uuid
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionsApi
   */
  public getCashAccountTransactions(
    iban: string,
    currencyCode?: string,
    bookingDateFrom?: string,
    bookingDateTo?: string,
    sortBy?: string,
    limit?: number,
    offset?: number,
    correlationId?: string,
    options?: any
  ) {
    return TransactionsApiFp(this.configuration).getCashAccountTransactions(
      iban,
      currencyCode,
      bookingDateFrom,
      bookingDateTo,
      sortBy,
      limit,
      offset,
      correlationId,
      options
    )(this.axios, this.basePath);
  }
}
