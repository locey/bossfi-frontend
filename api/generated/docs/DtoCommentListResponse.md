# DtoCommentListResponse

评论列表的响应数据结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**Array&lt;DtoCommentResponse&gt;**](DtoCommentResponse.md) | 评论列表 | [optional] [default to undefined]
**page** | **number** | 当前页码 | [optional] [default to undefined]
**page_size** | **number** | 每页数量 | [optional] [default to undefined]
**total** | **number** | 总评论数 | [optional] [default to undefined]

## Example

```typescript
import { DtoCommentListResponse } from './api';

const instance: DtoCommentListResponse = {
    comments,
    page,
    page_size,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
