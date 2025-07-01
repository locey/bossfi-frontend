# DtoCreateCommentRequest

创建评论的请求参数

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_id** | **number** | 文章ID | [default to undefined]
**content** | **string** | 评论内容 | [default to undefined]
**parent_id** | **number** | 父评论ID，用于回复 | [optional] [default to undefined]

## Example

```typescript
import { DtoCreateCommentRequest } from './api';

const instance: DtoCreateCommentRequest = {
    article_id,
    content,
    parent_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
