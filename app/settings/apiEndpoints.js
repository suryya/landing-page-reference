/* eslint-disable */
//export const BASE_URL = 'http://172.16.2.97:2525';
// export const BASE_URL = 'http://54.152.240.123';
// export const BASE_URL = 'https://bar-generic-dev-test.iaproducts.ai';
// export const BASE_URL = 'http://172.16.1.42:2525'
// export const BASE_URL = 'http://172.16.1.59:2525'
// export const BASE_URL = 'https://bar-generic-dev.iaproducts.ai';
// export const BASE_URL = 'http://172.16.1.59:2525';
export const BASE_URL = 'http://my-json-server.typicode.com';
//'https://markdown-test-dev.iaproducts.ai';
// export const BASE_URL = 'https://markdown-test-dev.iaproducts.ai'
// export const BASE_URL = 'http://172.16.1.59:2525';
// export const BASE_URL = 'http://user-gx4h.localhost.run';
export const AUTH_URL = 'https://promosmart-generic-dev.iaproducts.ai';
export const USER_LOGIN_POST = '/user/login';
export const EMPLOYEE_LIST = '/suryya/boring/employees';
export const EMPLOYEE_SINGLE = '/suryya/boring/employees/';

/*
export const GET_DASHBOARD_DATA = '/dashboard/dashBoardData';
export const GET_DEPARTMENTS = '/filter/Departments';
export const GET_CATEGORIES = '/filter/Classes';
export const GET_ASSORTMENTS = '/budget/getBudgetData';
export const GET_VENDORS = '/filter/Vendors';
export const CREATE_PLAN = '/dashboard/newPlan';
export const GET_DASHBOARD_CARD_DATA = '/dashboard/dashBoardDatatop';
export const GET_EDIT_PLAN_DATA = '/dashboard/DashboardByID';
export const DELETE_PLAN_DATA = '/dashboard/dashBoardDelete';
export const GET_CLUSTER_ATTRIBUTE_DATA = '/cluster/getAttributeSelection';
export const CREATE_SIMULATE_CLUSTER_DATA = '/cluster/simulateCluster';
export const DEPARTMENTS = '/filter/Departments';
export const GET_SUBCATEGORY_PERFORMANCE = '/budget/getSubcategoryPerformance?';
export const GET_SUBCATEGORY_ALLOCATION = '/budget/getSubcategoryAllocation?';
export const USER_LOGIN_POST = '/user/login';
export const GET_MONTHLY_DETAILS = '/budget/getMonthlyDetails?';
export const GET_OPTIMIZATION_DATA = '/optimize/optimizeCluster';
export const UPLOAD_PLAN_DATA = '/dashboard/uploadPlanData';
export const PLAN_DATA_EDIT = '/dashboard/UpdatedPlan';

export const GET_STORE_PERFORMANCE_ACROSS_KPI_DATA = '/cluster/finalizeCluster';
export const GET_STORE_PERFORMANCE_ACCROSS_ATTRIBUTES_DATA = '/cluster/ClusterAttr';
export const GET_STORE_PERFORMANCE_ACROSS_KPI_AND_ATTRIBUTES_DATA = '/cluster/ClusterSumm';

export const GET_SUBCATEGORY_BUDGETSPLIT = '/optimize/getsubCategoryData?';

export const GET_SUBCATEGORY_BUDGETALOCATION = '/optimize/getAttributeData?';
export const GET_SAVEDCLUSTER_DATA = '/cluster/savedClusters';
export const FINALIZE_BUY_DATA = '/optimize/getFinalizeBuy';
export const GET_ASSORTMENT_FINALIZE_DATA = `/optimize/getFinalizeAssortment?`;
export const GET_SAVED_CLASSES = '/cluster/savedClusters';
export const DELETE_SAVED_CLUSTER = '/cluster/deleteCluster';
export const SUBCATEGORY_MODAL_BAR = '/optimize/getSalesMetrics?';
// kpi=four&year=2017&subCategory=DENIM
export const SUBCATEGORY_MODAL_LINE = '/optimize/getLastYearSales?';
// kpi=four&subCategory=WOVENS

export const GET_DEPTH_AND_CHOICE_DATA = '/depth/getDepthChoice?';
export const GET_MANUAL_MAPPING_DATA = '/dashboard/manualMapping';
export const SAVE_MONTHLY_DETAILS_URL = '/budget/budgetMetrics';
export const SUBCATEGORY_MODAL_INPUT = '/optimize/metricData';
export const SAVE_NEW_CLUSTER_URL = '/cluster/savecNewluster';
export const GET_DEPTH_AND_CHOICE_GRAPH_DATA = '/depth/getYearMetrics?';
export const FETCH_SUBCATEGORY_EDIT = '/budget/updateSubcategoryAllocation';

export const FETCH_EDIT_DEPTH_TABLE = '/optimize/metricData';
export const UPDATE_DEPTH_TABLE = '/depth/updateMetrics';
export const SAVE_MULTIPLIER_DATA = '/optimize/updateDepthMultiplier';

export const UPDATE_PLAN_PROGRESS = '/cluster/progressbar';
export const SAVE_MULTIPLE_CLUSTERS = '/dashboard/uploadCluster';

// Allocation apis

export const GET_ALLOCATION_DASHBOARD_CARD = '/allocation/dashboard/getAllocationDashboardTop';
export const FETCH_ALLOCATION_DASHBOARD_TABLE = '/allocation/dashboard/getAllocatedPlans';
export const DELETE_ALLOCATION_DASHBOARD_TABLE = '/allocation/dashboard/deletePlanById';
export const GET_SKUS_BY_PLAN = '/allocation/getSkuByPlan';

// Filter for create new allocation plan
export const FILTER_ALLOCATION_PLAN = '/allocation/dashboard/getAllocationFilters';
export const GET_ALLOCATION_CREATEPLAN_SKULIST = '/allocation/getSKULists';
export const CREATE_ALLOCATION_PLAN = '/allocation/saveNewAllocation';
export const EDIT_ALLOCATION_PLAN = '/allocation/editAllocation'
export const GET_SKU_PLAN_BY_ID = '/allocation/getSkuByPlan'

export const GET_CONSTRAINTS = '/allocation/skuConstraints/getConstraints';
export const GET_CONSTRAINTS_STORE_LIMITS = '/allocation/skuConstraints/getConstraintStoreLimits';
export const SAVE_CONSTRAINTS_STORE_LIMITS = '/allocation/skuConstraints/saveConstraintStoreLimits';
export const SAVE_CONSTRAINTS_LIMITS = '/allocation/skuConstraints/saveConstraintLimits';
export const GET_SKUS_BY_CONSTRAINTS = '/allocation/skuConstraints/getSKUsByConstraints';
export const GET_SKUS_BY_STORE_CONSTRAINTS = '/allocation/skuConstraints/getSKUsByStoreConstraints';
export const GET_STORE_LIMITS_BY_SKU = '/allocation/getStoresLimitBySKUId';
export const GET_SAVED_STORE_LIMIT_BY_SKU = '/allocation/skuConstraints/getSavedStoreLimitBySKUId';

// export const GET_STORE_SKU_COUNT = 'allocation/storeSelection/getSKUStoreCount';
export const GET_STORES_BY_SKU = '/allocation/storeSelection/getSkuStoreCount';
export const SAVE_STORES_BY_SKU = 'allocation/storeSelection/saveStoresBySKU';

export const GET_STRATEGY_GRAPH_DATA = '/allocation/strategy/getStrategyGraphData';
export const GET_STRATEGY_RECOMMENDED_DATA = '/allocation/strategy/getStrategyRecommendedData';
export const GET_STRATEGY_RECOMMENDED_TABLE_DATA = '/allocation/strategy/getStrategyRecommendedTableData';
export const GET_SKU_TRENDS_BY_SKU = '/allocation/strategy/getSKUTrendsBySKU';
export const GET_SAVE_TREND = '/allocation/strategy/saveSKUTrendsBySKU';
export const GET_SAVE_STRATEGY_DATA = '/allocation/strategy/saveStrategyData';
export const GET_SAVE_PHASE_LIMIT_BY_PLAN = '/allocation/strategy/savePhaseLimitByPlanId'

export const GET_SKU_STORES_ALLOCATION = '/allocation/finalize/getFinalAllocation?';
export const GET_STORES_GEO_ANALYTICS_BY_PHASE =
  '/allocation/getStoreWiseData';
export const SAVE_FINALIZE_PLAN = '/allocation/finalize/saveFinalAllocation';
// Early Warning

export const GET_EARLY_WARNING_STORES = 'allocation/reports/getEarlyWarningStores';
export const GET_STOCK_OUT_DETAILS = 'allocation/reports/getStockOutDetails';
export const GET_REPORT_FILTERS = 'allocation/reports/getReportFilters';
export const GET_ALLOCATION_OVERVIEW_MAP = 'allocation/reports/getAllocationOverviewMap';
export const GET_ALLOCATION_OVERVIEW_DATA = 'allocation/reports/getAllocationOverviewData';
export const GET_STORE_PERFORMANCE_MAP = 'allocation/reports/getStorePerformanceMap';
export const GET_STORE_PERFORMANCE_DATA = 'allocation/reports/getStorePerformanceData';
export const GET_COMPARISON_DATA = 'allocation/reports/getComparisonData';

export const STORES_SELECTION = '/allocation/storeSelection/getSkuStoreTotal';
export const SAVE_SELECTED_STORES = '/allocation/storeSelection/saveStoresBySKU';

export const GET_ALL_STORES = '/allocation/getAllStores';
export const GET_FINALIZE_WEIGHTAGE = '/allocation/strategy/getFinalizeTrendsByWeightage'
*/