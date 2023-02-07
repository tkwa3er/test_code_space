/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserCreateInput {
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username: string;
  password?: string;
  isValid?: boolean;
  roles: string[];
}

export interface User {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username: string;
  isValid?: boolean;
  roles: string[];
  products?: Product[];
}

export interface Product {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  title?: string;
  price?: number;
  user?: User[];
  description?: string;
}

export interface ForbiddenException {
  statusCode: number;
  message: string;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: "Default" | "Insensitive";
  not?: string;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: "Default" | "Insensitive";
  not?: string;
}

export interface UserWhereInput {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
}

export interface UserOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  firstName?: "Asc" | "Desc";
  lastName?: "Asc" | "Desc";
  username?: "Asc" | "Desc";
  password?: "Asc" | "Desc";
  isValid?: "Asc" | "Desc";
  roles?: "Asc" | "Desc";
}

export interface GetListUserDto {
  paginatedResult: User[];
  totalCount: number;
}

export interface FileDto {
  file: string;
}

export interface NotFoundException {
  statusCode: number;
  message: string;
}

export interface UserUpdateInput {
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  isValid?: boolean;
  roles?: string[];
}

export type UpdatePasswordDTO = object;

export interface FloatNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number;
}

export interface UserCredentials {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface EmailResetPasswordCredential {
  email: string;
}

export interface ResetPasswordCredential {
  access_token: string;
  password: string;
}

export interface GenerateLinkOptions {
  redirectTo?: string;
  password?: string;
  data?: object;
}

export interface InviteUserByEmailCredential {
  email: string;
  options?: GenerateLinkOptions;
}

export interface ResetEmailCredential {
  userId: string;
  email: string;
  password: string;
}

export interface AppConfigCreateInput {
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface AppConfig {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface AppConfigWhereInput {
  id?: StringFilter;
  value?: StringNullableFilter;
  key?: StringNullableFilter;
}

export interface AppConfigOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  value?: "Asc" | "Desc";
  key?: "Asc" | "Desc";
}

export interface GetListAppConfigDto {
  paginatedResult: AppConfig[];
  totalCount: number;
}

export interface AppConfigUpdateInput {
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface ProductCreateInput {
  deletedAt?: object;
  title?: string;
  price?: number;
  description?: string;
}

export interface ProductWhereInput {
  id?: StringFilter;
  title?: StringNullableFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
}

export interface ProductOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  title?: "Asc" | "Desc";
  price?: "Asc" | "Desc";
  description?: "Asc" | "Desc";
}

export interface GetListProductDto {
  paginatedResult: Product[];
  totalCount: number;
}

export interface ProductUpdateInput {
  deletedAt?: object;
  title?: string;
  price?: number;
  description?: string;
}

export interface ClientCreateInput {
  deletedAt?: object;
  name?: string;
  lastName?: string;
}

export interface Client {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  name?: string;
  lastName?: string;
}

export interface ClientWhereInput {
  id?: StringFilter;
  name?: StringNullableFilter;
  lastName?: StringNullableFilter;
}

export interface ClientOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  name?: "Asc" | "Desc";
  lastName?: "Asc" | "Desc";
}

export interface GetListClientDto {
  paginatedResult: Client[];
  totalCount: number;
}

export interface ClientUpdateInput {
  deletedAt?: object;
  name?: string;
  lastName?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;

  key?: string;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
  handleError?: void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/nest";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);
  private handleError?: (() => void | undefined) | undefined;

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  public setBaseApiParams = (data: RequestParams) => {
    this.baseApiParams = this.mergeRequestParams(data);
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any, requestParam: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any, requestParam) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          requestParam?.key || key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;
    const resp = await this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body, requestParams),
      },
    );
    if (cancelToken) {
      this.abortControllers.delete(cancelToken);
    }
    let data: T;
    let error: E;
    try {
      data = await resp[responseFormat || "json"]();
      if (!resp.ok) {
        if (data?.error?.statusCode === 401) this.handleError?.();
        throw { ...resp, error: data };
      } else return { ...resp, data, error };
    } catch (error) {
      if (error?.error?.statusCode) throw error;
      console.log(error);
    }
  };
}

/**
 * @title My app
 * @version khtabl3q
 * @baseUrl /nest
 * @contact
 *
 *
 *
 * ## Congratulations! Your application is ready.
 *
 *     Please note that all endpoints are secured with JWT Bearer authentication.Use the authentification service of supabase to authenticate.
 *     (https://supabase.com/docs/gotrue/server/about#put-user)
 *     Learn more in [our docs](https://docs.amplication.com)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreate
     * @request POST:/api/users
     * @secure
     */
    userControllerCreate: (data: UserCreateInput, params: RequestParams = {}) =>
      this.request<User, ForbiddenException>({
        path: `/api/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindMany
     * @request GET:/api/users
     * @secure
     */
    userControllerFindMany: (
      query?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListUserDto, void>({
        path: `/api/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateMany
     * @request POST:/api/users/createMany
     * @secure
     */
    userControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<User, ForbiddenException>({
        path: `/api/users/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindDataForExcel
     * @request GET:/api/users/fileExcel
     * @secure
     */
    userControllerFindDataForExcel: (params: RequestParams = {}, query: object) =>
      this.request<FileDto, void>({
        path: `/api/users/fileExcel`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindOne
     * @request GET:/api/users/{id}
     * @secure
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdate
     * @request PATCH:/api/users/{id}
     * @secure
     */
    userControllerUpdate: (id: string, data: UserUpdateInput, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDelete
     * @request DELETE:/api/users/{id}
     * @secure
     */
    userControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdatePassword
     * @request PATCH:/api/users/{id}/resetPassword
     * @secure
     */
    userControllerUpdatePassword: (id: string, data: UpdatePasswordDTO, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}/resetPassword`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindManyProducts
     * @request GET:/api/users/{id}/products
     * @secure
     */
    userControllerFindManyProducts: (
      id: string,
      query?: {
        id?: StringFilter;
        title?: StringNullableFilter;
        price?: FloatNullableFilter;
        description?: StringNullableFilter;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${id}/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateProducts
     * @request POST:/api/users/{id}/products
     * @secure
     */
    userControllerCreateProducts: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdateProducts
     * @request PATCH:/api/users/{id}/products
     * @secure
     */
    userControllerUpdateProducts: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/products`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDeleteProducts
     * @request DELETE:/api/users/{id}/products
     * @secure
     */
    userControllerDeleteProducts: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/products`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignUp
     * @request POST:/api/sign_up
     */
    authControllerSignUp: (data: UserCredentials, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/sign_up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignIn
     * @request POST:/api/sign_in
     */
    authControllerSignIn: (data: Credentials, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/sign_in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSendEmailResetPassword
     * @request POST:/api/send_email_reset_password
     */
    authControllerSendEmailResetPassword: (data: EmailResetPasswordCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/send_email_reset_password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerResetPassword
     * @request POST:/api/reset_password
     */
    authControllerResetPassword: (data: ResetPasswordCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/reset_password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerInviteUserByEmail
     * @request POST:/api/invite_user_by_email
     */
    authControllerInviteUserByEmail: (data: InviteUserByEmailCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/invite_user_by_email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerChangeEmail
     * @request POST:/api/change_email
     */
    authControllerChangeEmail: (data: ResetEmailCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/change_email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerCreate
     * @request POST:/api/app-configs
     * @secure
     */
    appConfigControllerCreate: (data: AppConfigCreateInput, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException>({
        path: `/api/app-configs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindMany
     * @request GET:/api/app-configs
     * @secure
     */
    appConfigControllerFindMany: (
      query?: {
        where?: AppConfigWhereInput;
        orderBy?: AppConfigOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListAppConfigDto, void>({
        path: `/api/app-configs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerCreateMany
     * @request POST:/api/app-configs/createMany
     * @secure
     */
    appConfigControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException>({
        path: `/api/app-configs/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindDataForExcel
     * @request GET:/api/app-configs/fileExcel
     * @secure
     */
    appConfigControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/app-configs/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindOne
     * @request GET:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerUpdate
     * @request PATCH:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerUpdate: (id: string, data: AppConfigUpdateInput, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerDelete
     * @request DELETE:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerCreate
     * @request POST:/api/products
     * @secure
     */
    productControllerCreate: (data: ProductCreateInput, params: RequestParams = {}) =>
      this.request<Product, ForbiddenException>({
        path: `/api/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerFindMany
     * @request GET:/api/products
     * @secure
     */
    productControllerFindMany: (
      query?: {
        where?: ProductWhereInput;
        orderBy?: ProductOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListProductDto, void>({
        path: `/api/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerCreateMany
     * @request POST:/api/products/createMany
     * @secure
     */
    productControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<Product, ForbiddenException>({
        path: `/api/products/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerFindDataForExcel
     * @request GET:/api/products/fileExcel
     * @secure
     */
    productControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/products/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerFindOne
     * @request GET:/api/products/{id}
     * @secure
     */
    productControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Product, ForbiddenException | NotFoundException>({
        path: `/api/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerUpdate
     * @request PATCH:/api/products/{id}
     * @secure
     */
    productControllerUpdate: (id: string, data: ProductUpdateInput, params: RequestParams = {}) =>
      this.request<Product, ForbiddenException | NotFoundException>({
        path: `/api/products/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerDelete
     * @request DELETE:/api/products/{id}
     * @secure
     */
    productControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Product, ForbiddenException | NotFoundException>({
        path: `/api/products/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerFindManyUser
     * @request GET:/api/products/{id}/user
     * @secure
     */
    productControllerFindManyUser: (
      id: string,
      query?: {
        id?: StringFilter;
        firstName?: StringNullableFilter;
        lastName?: StringNullableFilter;
        username?: StringFilter;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/products/${id}/user`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerCreateUser
     * @request POST:/api/products/{id}/user
     * @secure
     */
    productControllerCreateUser: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/products/${id}/user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerUpdateUser
     * @request PATCH:/api/products/{id}/user
     * @secure
     */
    productControllerUpdateUser: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/products/${id}/user`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductControllerDeleteUser
     * @request DELETE:/api/products/{id}/user
     * @secure
     */
    productControllerDeleteUser: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/products/${id}/user`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerCreate
     * @request POST:/api/clients
     * @secure
     */
    clientControllerCreate: (data: ClientCreateInput, params: RequestParams = {}) =>
      this.request<Client, ForbiddenException>({
        path: `/api/clients`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerFindMany
     * @request GET:/api/clients
     * @secure
     */
    clientControllerFindMany: (
      query?: {
        where?: ClientWhereInput;
        orderBy?: ClientOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListClientDto, void>({
        path: `/api/clients`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerCreateMany
     * @request POST:/api/clients/createMany
     * @secure
     */
    clientControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<Client, ForbiddenException>({
        path: `/api/clients/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerFindDataForExcel
     * @request GET:/api/clients/fileExcel
     * @secure
     */
    clientControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/clients/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerFindOne
     * @request GET:/api/clients/{id}
     * @secure
     */
    clientControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Client, ForbiddenException | NotFoundException>({
        path: `/api/clients/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerUpdate
     * @request PATCH:/api/clients/{id}
     * @secure
     */
    clientControllerUpdate: (id: string, data: ClientUpdateInput, params: RequestParams = {}) =>
      this.request<Client, ForbiddenException | NotFoundException>({
        path: `/api/clients/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags clients
     * @name ClientControllerDelete
     * @request DELETE:/api/clients/{id}
     * @secure
     */
    clientControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Client, ForbiddenException | NotFoundException>({
        path: `/api/clients/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HealthControllerHealthLive
     * @request GET:/api/_health/live
     */
    healthControllerHealthLive: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/_health/live`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name HealthControllerHealthReady
     * @request GET:/api/_health/ready
     */
    healthControllerHealthReady: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/_health/ready`,
        method: "GET",
        ...params,
      }),
  };
}
