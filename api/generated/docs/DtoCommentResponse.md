# DtoCommentResponse

评论的响应数据结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_id** | **number** | 文章ID | [optional] [default to undefined]
**content** | **string** | 评论内容 | [optional] [default to undefined]
**created_at** | **string** | 创建时间 | [optional] [default to undefined]
**id** | **number** | 评论ID | [optional] [default to undefined]
**is_deleted** | **boolean** | 是否已删除 | [optional] [default to undefined]
**like_count** | **number** | 点赞数 | [optional] [default to undefined]
**parent_id** | **number** | 父评论ID | [optional] [default to undefined]
**replies** | [**Array&lt;DtoCommentResponse&gt;**](DtoCommentResponse.md) | 回复列表 | [optional] [default to undefined]
**user** | [**DtoUserInfo**](DtoUserInfo.md) | 关联数据 | [optional] [default to undefined]
**user_id** | **number** | 用户ID | [optional] [default to undefined]

## Example

```typescript
import { DtoCommentResponse } from './api';

const instance: DtoCommentResponse = {
    article_id,
    content,
    created_at,
    id,
    is_deleted,
    like_count,
    parent_id,
    replies,
    user,
    user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
