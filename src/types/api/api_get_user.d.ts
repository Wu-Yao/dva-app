interface IGetUserReq {
    /** 页号 */
    pageNum: number;
    /** 单页条数 */
    pageSize: number;
}
interface IGetUserRes {
    /** 用户列表 */
    dataList: UserItem[];
}
