/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * BossFi Backend API
 * BossFi区块链后端API服务，支持钱包登录、用户管理、区块链数据同步等功能
 * OpenAPI spec version: 1.0.0
 */

export type GetCategoriesParams = {
/**
 * 页码
 */
page?: number;
/**
 * 每页数量
 */
page_size?: number;
/**
 * 是否只查询活跃分类
 */
is_active?: boolean;
};
