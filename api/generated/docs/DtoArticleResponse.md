# DtoArticleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_count** | **number** |  | [optional] [default to undefined]
**content** | **string** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**is_deleted** | **boolean** |  | [optional] [default to undefined]
**like_count** | **number** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**user** | [**DtoUserInfo**](DtoUserInfo.md) | 关联数据 | [optional] [default to undefined]
**user_id** | **number** |  | [optional] [default to undefined]
**view_count** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { DtoArticleResponse } from './api';

const instance: DtoArticleResponse = {
    comment_count,
    content,
    created_at,
    id,
    images,
    is_deleted,
    like_count,
    title,
    updated_at,
    user,
    user_id,
    view_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
