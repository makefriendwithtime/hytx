export enum AppRouter {
    // 首页
    Home = '/pages/home/index',
    // 登录
    Login = '/pages/login/user/index',
	// 地图
	GPSMap = '/pages/gps/map',
	// 派工
    DispatchOrder = '/pages/dispatchorder/edit/index',
	// 派工单列表
    DispatchOrderList = '/pages/dispatchorder/list/index',
    // 派工单详情
    DispatchOrderDetails = '/pages/dispatchorder/details/index',
    // 用户注册
    UserReg = '/pages/login/reg/index',
    // 修改密码
    ChangePassword = '/pages/mine/changePassword',
    // 已审核用户列表
    UserList = '/pages/user/list/index',
    // 待审核用户列表
    UserVerifyList = '/pages/user/list/verify',
    // 用户编辑
    UserEdit = '/pages/user/edit/index',
    // 角色列表
    RolerList = '/pages/role/list/index',
    // 绑定用户
    BindUser = '/pages/role/bindUser/index',
    // 绑定权限
    BindMenu = '/pages/role/bindMenu/index',
    // 权限列表
    PerList = '/pages/permissions/list/index',
    // 权限编辑
    PerEdit = '/pages/permissions/edit/index',
    // 角色编辑
    RolerEdit = '/pages/role/edit/index',
    // 字典列表
    DictList = '/pages/dict/list/index',
    // 添加字典
    DictEdit = '/pages/dict/edit/index',
    // 我的车辆列表
    CarNumberList = '/pages/carnumber/list/index',
    // 添加我的车辆
    CarNumberEdit = '/pages/carnumber/edit/index',
    // 车辆列表
    CarList = '/pages/car/list/index',
    // 添加车辆
    CarEdit = '/pages/car/edit/index',
    // 车队列表
    FleetList = '/pages/fleet/list/index',
    // 添加车队
    FleetEdit = '/pages/fleet/edit/fleet',
    // 添加车队小组
    GroupEdit = '/pages/fleet/edit/group',
    // 分配车辆
    FleetCarEdit = '/pages/fleet/edit/fleetcar',
    // 日志列表
    LogList = '/pages/log/index',
    // 发车列表
    TransportList = '/pages/transport/list/index',
    // 收货列表
    TransportRList = '/pages/transport/rlist/index',
    // 完工运单列表
    TransportCList = '/pages/transport/clist/index',
    // 发车单编辑
    TransportEdit = '/pages/transport/edit/index',
    // 收货单编辑
    TransportREdit = '/pages/transport/redit/index',
    // 完工运单编辑
    TransportCEdit = '/pages/transport/cedit/index',
    // 发车单详情
    TransportDetails = '/pages/transport/details/index',
    // 收货单详情
    TransportRDetails = '/pages/transport/rdetails/index',
    // 统计
    Statistics = '/pages/statistics/index',
    // 驾驶员查询
    Driver = '/pages/search/driver',
    // 车辆查询
    Vehicle = '/pages/search/vehicle',
	// 出货厂家查询
    Outcompany = '/pages/search/outcompany',
	// 出货规格型号查询
    Outmodel = '/pages/search/outmodel',
	// 收货单位查询
    Incompany = '/pages/search/incompany',
	// 结算单位查询
    SettlementUnit = '/pages/search/settlementunit',
	// 产品规格查询
    Model = '/pages/search/model',
	// 车辆类型查询
    VehicleType = '/pages/search/vehicletype',
	// 销售类型查询
	SaleType = '/pages/search/saletype',
	// 收货规格型号查询
    Inmodel = '/pages/search/inmodel',
	// 定位选择
	Mapselect = '/pages/search/mapselect',
	// 更新APP版本
	UpdateVersion = '/pages/mine/version',
	// 变更车队
	ChangeFleet = '/pages/carnumber/edit/fleetcar'
}