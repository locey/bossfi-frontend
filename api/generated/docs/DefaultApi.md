# DefaultApi

All URIs are relative to *http://117.72.201.234/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**articlesGet**](#articlesget) | **GET** /articles | 获取文章列表|
|[**articlesIdDelete**](#articlesiddelete) | **DELETE** /articles/{id} | 删除文章|
|[**articlesIdGet**](#articlesidget) | **GET** /articles/{id} | 获取文章详情|
|[**articlesIdLikePost**](#articlesidlikepost) | **POST** /articles/{id}/like | 点赞文章|
|[**articlesIdPut**](#articlesidput) | **PUT** /articles/{id} | 更新文章|
|[**articlesIdUnlikeDelete**](#articlesidunlikedelete) | **DELETE** /articles/{id}/unlike | 取消点赞文章|
|[**articlesPost**](#articlespost) | **POST** /articles | 创建文章|
|[**authLoginPost**](#authloginpost) | **POST** /auth/login | 钱包签名登录|
|[**authLogoutPost**](#authlogoutpost) | **POST** /auth/logout | 用户登出|
|[**authNoncePost**](#authnoncepost) | **POST** /auth/nonce | 获取用于钱包签名的消息和 nonce|
|[**authProfileGet**](#authprofileget) | **GET** /auth/profile | 获取用户个人信息|
|[**authTestTokenPost**](#authtesttokenpost) | **POST** /auth/test-token | 获取测试用token|
|[**commentsGet**](#commentsget) | **GET** /comments | 获取评论列表|
|[**commentsIdLikePost**](#commentsidlikepost) | **POST** /comments/{id}/like | 点赞评论|
|[**commentsPost**](#commentspost) | **POST** /comments | 创建评论|
|[**healthGet**](#healthget) | **GET** /health | 健康检查|

# **articlesGet**
> DtoArticleListResponse articlesGet()

分页获取文章列表，支持排序和筛选

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //页码 (optional) (default to 1)
let pageSize: number; //每页数量 (optional) (default to 10)
let sortBy: 'created_at' | 'like_count' | 'view_count'; //排序字段 (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; //排序方向 (optional) (default to 'desc')
let userId: number; //用户ID (optional) (default to undefined)

const { status, data } = await apiInstance.articlesGet(
    page,
    pageSize,
    sortBy,
    sortOrder,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | 页码 | (optional) defaults to 1|
| **pageSize** | [**number**] | 每页数量 | (optional) defaults to 10|
| **sortBy** | [**&#39;created_at&#39; | &#39;like_count&#39; | &#39;view_count&#39;**]**Array<&#39;created_at&#39; &#124; &#39;like_count&#39; &#124; &#39;view_count&#39;>** | 排序字段 | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | 排序方向 | (optional) defaults to 'desc'|
| **userId** | [**number**] | 用户ID | (optional) defaults to undefined|


### Return type

**DtoArticleListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 文章列表 |  -  |
|**400** | 请求参数错误 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articlesIdDelete**
> { [key: string]: any; } articlesIdDelete()

删除文章（逻辑删除）

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //文章ID (default to undefined)

const { status, data } = await apiInstance.articlesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | 文章ID | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 删除成功 |  -  |
|**401** | 未认证 |  -  |
|**404** | 文章不存在 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articlesIdGet**
> DtoArticleResponse articlesIdGet()

根据文章ID获取文章详细信息

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //文章ID (default to undefined)

const { status, data } = await apiInstance.articlesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | 文章ID | defaults to undefined|


### Return type

**DtoArticleResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 文章信息 |  -  |
|**404** | 文章不存在 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articlesIdLikePost**
> { [key: string]: any; } articlesIdLikePost()

给文章点赞

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //文章ID (default to undefined)

const { status, data } = await apiInstance.articlesIdLikePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | 文章ID | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 点赞成功 |  -  |
|**400** | 已经点赞 |  -  |
|**401** | 未认证 |  -  |
|**404** | 文章不存在 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articlesIdPut**
> DtoArticleResponse articlesIdPut(request)

更新文章内容

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DtoUpdateArticleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //文章ID (default to undefined)
let request: DtoUpdateArticleRequest; //更新文章信息

const { status, data } = await apiInstance.articlesIdPut(
    id,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **DtoUpdateArticleRequest**| 更新文章信息 | |
| **id** | [**number**] | 文章ID | defaults to undefined|


### Return type

**DtoArticleResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 更新成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未认证 |  -  |
|**404** | 文章不存在 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articlesIdUnlikeDelete**
> { [key: string]: any; } articlesIdUnlikeDelete()

取消文章点赞

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //文章ID (default to undefined)

const { status, data } = await apiInstance.articlesIdUnlikeDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | 文章ID | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 取消点赞成功 |  -  |
|**400** | 未点赞 |  -  |
|**401** | 未认证 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articlesPost**
> DtoArticleResponse articlesPost(request)

创建一篇新文章

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DtoCreateArticleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let request: DtoCreateArticleRequest; //创建文章信息

const { status, data } = await apiInstance.articlesPost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **DtoCreateArticleRequest**| 创建文章信息 | |


### Return type

**DtoArticleResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 创建成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未认证 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLoginPost**
> ControllersLoginResponse authLoginPost(request)

使用钱包签名进行登录验证，验证成功后返回JWT令牌

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ControllersLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let request: ControllersLoginRequest; //登录信息

const { status, data } = await apiInstance.authLoginPost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **ControllersLoginRequest**| 登录信息 | |


### Return type

**ControllersLoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 登录成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 认证失败 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLogoutPost**
> { [key: string]: any; } authLogoutPost()

用户登出，清除服务器端会话信息

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.authLogoutPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 登出成功 |  -  |
|**401** | 未认证 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authNoncePost**
> ControllersGetNonceResponse authNoncePost(request)

前端调用此接口获取需要签名的消息和 nonce，用于钱包登录

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ControllersGetNonceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let request: ControllersGetNonceRequest; //钱包地址信息

const { status, data } = await apiInstance.authNoncePost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **ControllersGetNonceRequest**| 钱包地址信息 | |


### Return type

**ControllersGetNonceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 成功返回签名消息和nonce |  -  |
|**400** | 请求参数错误 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authProfileGet**
> { [key: string]: any; } authProfileGet()

获取当前登录用户的详细个人信息

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.authProfileGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 用户信息 |  -  |
|**401** | 未认证 |  -  |
|**404** | 用户不存在 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authTestTokenPost**
> ControllersTestTokenResponse authTestTokenPost(request)

直接获取JWT token用于API测试，仅限开发环境使用

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ControllersTestTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let request: ControllersTestTokenRequest; //钱包地址信息

const { status, data } = await apiInstance.authTestTokenPost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **ControllersTestTokenRequest**| 钱包地址信息 | |


### Return type

**ControllersTestTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 获取成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGet**
> DtoCommentListResponse commentsGet()

分页获取文章评论列表，支持按父评论筛选

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let articleId: number; //文章ID (default to undefined)
let page: number; //页码 (optional) (default to 1)
let pageSize: number; //每页数量 (optional) (default to 10)
let parentId: number; //父评论ID，用于获取回复 (optional) (default to undefined)

const { status, data } = await apiInstance.commentsGet(
    articleId,
    page,
    pageSize,
    parentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **articleId** | [**number**] | 文章ID | defaults to undefined|
| **page** | [**number**] | 页码 | (optional) defaults to 1|
| **pageSize** | [**number**] | 每页数量 | (optional) defaults to 10|
| **parentId** | [**number**] | 父评论ID，用于获取回复 | (optional) defaults to undefined|


### Return type

**DtoCommentListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 评论列表 |  -  |
|**400** | 请求参数错误 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsIdLikePost**
> { [key: string]: any; } commentsIdLikePost()

为指定评论点赞或取消点赞

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; //评论ID (default to undefined)

const { status, data } = await apiInstance.commentsIdLikePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | 评论ID | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 操作成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未认证 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsPost**
> DtoCommentResponse commentsPost(request)

为文章创建新评论，支持回复其他评论

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DtoCreateCommentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let request: DtoCreateCommentRequest; //创建评论信息

const { status, data } = await apiInstance.commentsPost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **DtoCreateCommentRequest**| 创建评论信息 | |


### Return type

**DtoCommentResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 创建成功 |  -  |
|**400** | 请求参数错误 |  -  |
|**401** | 未认证 |  -  |
|**500** | 服务器内部错误 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **healthGet**
> RoutesHealthResponse healthGet()

检查服务器是否正常运行，返回系统状态信息和TraceID

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.healthGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RoutesHealthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 服务正常 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

