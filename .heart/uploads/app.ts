import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    Loading: true,
    Statistics: {
      userToday: 0,
      userTotal: 0,
      orderToday: 0,
      orderTotal: 0,
      tranToday: 0,
      tranTotal: 0,
      receiveToday: 0,
      receiveTotal: 0,
      complateToday: 0,
      complateTotal: 0
    },
    DriverKeyword: {},
    VehicleKeyword: {},
    OutcompanyKeyword: {},
    OutmodelKeyword: {},
    IncompanyKeyword: {},
    InmodelKeyword: {},
	SourceKeyword: {},
	DestKeyword: {},
	PositionKeyword: {},
	SettlementUnitKeyword: {},
	ModelKeyword: {},
	VehicleTypeKeyword: {},
	SaleTypeKeyword: {},
    VehicleKeywordList: [],
    ModelKeywordList: [],
    VehicleTypeKeywordList: []
  }),

  actions: {
    setLoading(status: boolean) {
      this.Loading = status
    },

    setStatistics(data: any) {
      this.Statistics = data
    },

    setDriver(data: any) {
      this.DriverKeyword = data
    },

    setVehicle(data: any) {
      this.VehicleKeyword = data
    },

    setOutcompany(data: any) {
      this.OutcompanyKeyword = data
    },

    setOutmodel(data: any) {
      this.OutmodelKeyword = data
    },

    setIncompany(data: any) {
      this.IncompanyKeyword = data
    },

    setInmodel(data: any) {
      this.InmodelKeyword = data
    },
	
	setSource(data: any) {
	  this.SourceKeyword = data
	},
	
	setDest(data: any) {
	  this.DestKeyword = data
	},
	
	setPosition(data: any) {
	  this.PositionKeyword = data
	},
	
	setSettlementUnit(data: any) {
	  this.SettlementUnitKeyword = data
	},
	
	setModel(data: any) {
	  this.ModelKeyword = data
	},
	
	setVehicleType(data: any) {
	  this.VehicleTypeKeyword = data
	},
	
	setSaleType(data: any) {
	  this.SaleTypeKeyword = data
	},
	
    setVehicleList(data: any) {
      this.VehicleKeywordList = data
    },
	
    setModelList(data: any) {
      this.ModelKeywordList = data
    },
	
    setVehicleTypeList(data: any) {
      this.VehicleTypeKeywordList = data
    },
  }
})
