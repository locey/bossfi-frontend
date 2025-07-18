/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * BossFi Backend API
 * BossFi区块链后端API服务，支持钱包登录、用户管理、区块链数据同步等功能
 * OpenAPI spec version: 1.0.0
 */

/**
 * 创建评论的请求参数
 */
export interface DtoCreateCommentRequest {
  /** 文章ID */
  article_id: number;
  /**
   * 评论内容
   * @maxLength 1000
   */
  content: string;
  /** 父评论ID，用于回复 */
  parent_id?: number;
}
