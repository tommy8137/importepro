module.exports = [
  {
    'xlsxKey': 'CI1RI0',
    'rowIndex': 0,
    'cellIndex': 0,
    'label': 'A.材料費',
    'type': 'formula',
    'description': '=(CI1RI14*CI1RI15*CI1RI4*CI1RI5)*CI1RI3/1000000*(1+CI1RI17)',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI1',
    'rowIndex': 1,
    'cellIndex': 0,
    'label': '材料',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI1',
        'rowIndex': 1,
        'cellIndex': 1,
        'label': 'Material',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmmaterial',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI2',
        'rowIndex': 2,
        'cellIndex': 1,
        'label': 'Material Remark',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmMaterialRemark',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI3',
        'rowIndex': 3,
        'cellIndex': 1,
        'label': 'Material Price',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.hmmaterialprice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI4',
        'rowIndex': 4,
        'cellIndex': 1,
        'label': 'Thickness (mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmthickness',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI5',
        'rowIndex': 5,
        'cellIndex': 1,
        'label': '密度 D',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.hmmaterialdensity.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI6',
        'rowIndex': 6,
        'cellIndex': 1,
        'label': 'L (mm) 成品長度',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmpartssizespec.hmpartssizelength',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI7',
        'rowIndex': 7,
        'cellIndex': 1,
        'label': 'W (mm) 成品寬度',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmpartssizespec.hmpartssizewidth',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI8',
        'rowIndex': 8,
        'cellIndex': 1,
        'label': 'H (mm) 成品高度',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmpartssizespec.hmpartssizehigh',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI9',
        'rowIndex': 9,
        'cellIndex': 1,
        'label': 'L2 (mm) 成品展開尺寸',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmpartsexpandsize.hmpartsexpandlength',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI10',
        'rowIndex': 10,
        'cellIndex': 1,
        'label': 'W2 (mm) 成品展開尺寸',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmUser.hmpartsexpandsize.hmpartsexpandwidth',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI11',
        'rowIndex': 11,
        'cellIndex': 1,
        'label': '穴數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.Price.housingMetal.hmToolingHoleCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI12',
        'rowIndex': 12,
        'cellIndex': 1,
        'label': '邊料尺寸 L (mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingMaterialSize.hmToolingMaterialLength',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI13',
        'rowIndex': 13,
        'cellIndex': 1,
        'label': '邊料尺寸 W (mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingMaterialSize.hmToolingMaterialWidth',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI14',
        'rowIndex': 14,
        'cellIndex': 1,
        'label': 'L (mm) 素材展開尺寸',
        'type': 'formula',
        'description': '=CI1RI9 + CI1RI12',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI15',
        'rowIndex': 15,
        'cellIndex': 1,
        'label': 'W (mm) 素材展開尺寸',
        'type': 'formula',
        'description': '=CI1RI13+CI1RI10',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI16',
        'rowIndex': 16,
        'cellIndex': 1,
        'label': '毛重(素材重量)(g)',
        'type': 'formula',
        'description': '=CI1RI14*CI1RI15*CI1RI4*CI1RI5/1000000*1000',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI17',
        'rowIndex': 17,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.hmMaterialLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI18',
        'rowIndex': 18,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(素材展開尺寸(W) * 素材展開尺寸(L) * Thickmess(mm) * 密度 D) * Material Price / 100000 * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      }
    ]
  },
  {
    'xlsxKey': 'CI1RI19',
    'rowIndex': 19,
    'cellIndex': 0,
    'label': 'B.沖壓費',
    'type': 'formula',
    'description': {
      'type': 'sum',
      'set': [
        {
          'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
          'byKey': 'stamping_price',
        }
      ],
      'wrapper': 'IFERROR(FORMULA, 0)',
    },
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI20',
    'rowIndex': 20,
    'cellIndex': 0,
    'label': '沖壓',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI20',
        'rowIndex': 20,
        'cellIndex': 1,
        'label': '模具型式',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'hmStampingMouldType.value',
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistprice.forDebug.debugInfo.stamping',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      },
      {
        'xlsxKey': 'CI1RI21',
        'rowIndex': 21,
        'cellIndex': 1,
        'label': '工程數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'hmStampingCount.value',
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistprice.forDebug.debugInfo.stamping',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      },
      {
        'xlsxKey': 'CI1RI22',
        'rowIndex': 22,
        'cellIndex': 1,
        'label': '沖壓機台(T)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'hmStampingMachineTonnage',
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistvalue.Price.housingMetal.stamping',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      },
      {
        'xlsxKey': 'CI1RI23',
        'rowIndex': 23,
        'cellIndex': 1,
        'label': '機台費',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'hmToolingModuleRate.value',
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistprice.forDebug.debugInfo.stamping',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      },
      {
        'xlsxKey': 'CI1RI24',
        'rowIndex': 24,
        'cellIndex': 1,
        'label': 'Loss Rate(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'hmToolingStampingSingleLossRate.value',
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistprice.forDebug.debugInfo.stamping',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      },
      {
        'xlsxKey': 'CI1RI25',
        'rowIndex': 25,
        'cellIndex': 1,
        'label': 'FCST寬放值(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'hmToolingStampingSingleAllowance.value',
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistprice.forDebug.debugInfo.stamping',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      },
      {
        'xlsxKey': 'CI1RI26',
        'rowIndex': 26,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '工程數*機台費/穴數*(1+LossRate)*(1+FCST寬放值)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI27',
        'rowIndex': 27,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI21*CI1RI23/$C$21*(1+CI1RI24)*(1+CI1RI25)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'parentKey': '沖壓',
        'parent': 'partlistprice.forDebug.debugInfo.stamping',
        'byKey': 'stamping_price',
        'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
      }
    ]
  },
  {
    'xlsxKey': 'CI1RI28',
    'rowIndex': 28,
    'cellIndex': 0,
    'label': 'C.二次加工費',
    'type': 'formula',
    'description': '=SUM(CI1RI52,CI1RI34,CI1RI41,CI1RI47,CI1RI62,CI1RI67,CI1RI72,CI1RI77,CI1RI82,CI1RI87,CI1RI92,CI1RI97,CI1RI105,CI1RI110,CI1RI118,CI1RI123,CI1RI127)',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI0RI29',
    'rowIndex': 29,
    'cellIndex': 0,
    'label': '陽極(一陽)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI29',
        'rowIndex': 29,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.productExpendSize.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI30',
        'rowIndex': 30,
        'cellIndex': 1,
        'label': 'Color',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.Price.housingMetal.cmfProcessListFirstAnodeColor',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI31',
        'rowIndex': 31,
        'cellIndex': 1,
        'label': 'U/P (USD/M²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListFirstAnodePrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI32',
        'rowIndex': 32,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListFirstAnodeLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI33',
        'rowIndex': 33,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(加工面積(mm²) / 1000000)  * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI34',
        'rowIndex': 34,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=(CI1RI29/1000000)*CI1RI31*(1+CI1RI32)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListAnode.cmfProcessListFirstAnodeCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListAnode.cmfProcessListFirstAnodeCheckBox',
  },
  {
    'xlsxKey': 'CI0RI35',
    'rowIndex': 35,
    'cellIndex': 0,
    'label': '陽極(二陽)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI35',
        'rowIndex': 35,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.productExpendSize.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI36',
        'rowIndex': 36,
        'cellIndex': 1,
        'label': 'Color',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListAnode.cmfProcessListSecondAnodeColor',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI37',
        'rowIndex': 37,
        'cellIndex': 1,
        'label': '製程次數(二陽=1;預陽=0.5)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListSecondAnodeQty.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI38',
        'rowIndex': 38,
        'cellIndex': 1,
        'label': 'U/P (USD/M²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListSecondAnodePrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI39',
        'rowIndex': 39,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListSecondAnodeLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI40',
        'rowIndex': 40,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(加工面積(mm²) / 1000000) *製程次數 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI41',
        'rowIndex': 41,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=(CI1RI35/1000000)*CI1RI38*CI1RI37*(1+CI1RI39)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListAnode.cmfProcessListSecondAnodeCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListAnode.cmfProcessListSecondAnodeCheckBox',
  },
  {
    'xlsxKey': 'CI0RI42',
    'rowIndex': 42,
    'cellIndex': 0,
    'label': '噴砂',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI42',
        'rowIndex': 42,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.productExpendSize.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI43',
        'rowIndex': 43,
        'cellIndex': 1,
        'label': 'U/P (USD/M²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.sandBlastUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI44',
        'rowIndex': 44,
        'cellIndex': 1,
        'label': '單雙面',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListSandBlastSideCount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI45',
        'rowIndex': 45,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.sandBlastLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI46',
        'rowIndex': 46,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(加工面積(mm²) / 1000000) * 單雙面 *  U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI47',
        'rowIndex': 47,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=(CI1RI42/1000000)*CI1RI43*CI1RI44*(1+CI1RI45)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListSandBlastCheckBox',
      }
    ],
    'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListSandBlastCheckBox',
  },
  {
    'xlsxKey': 'CI0RI48',
    'rowIndex': 48,
    'cellIndex': 0,
    'label': '髮絲',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI48',
        'rowIndex': 48,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListHairLine.cmfProcessListHairLineArea',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI49',
        'rowIndex': 49,
        'cellIndex': 1,
        'label': 'U/P (USD/M²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.hairLineUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI50',
        'rowIndex': 50,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.hairLineLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI51',
        'rowIndex': 51,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(加工面積(mm²) / 1000000)  * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI52',
        'rowIndex': 52,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=(CI1RI48/1000000)*CI1RI49*(1+CI1RI50)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListHairLineCheckBox',
      }
    ],
    'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListHairLineCheckBox',
  },
  {
    'xlsxKey': 'CI0RI53',
    'rowIndex': 53,
    'cellIndex': 0,
    'label': 'Thermal Bonding_熱壓',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI53',
        'rowIndex': 53,
        'cellIndex': 1,
        'label': '膠水型號',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListThermalBonding.cmfProcessListThermalBondingGlueType',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI54',
        'rowIndex': 54,
        'cellIndex': 1,
        'label': '路徑總長(mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListThermalBonding.cmfProcessListThermalBondingPathLength',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI55',
        'rowIndex': 55,
        'cellIndex': 1,
        'label': '針筒內徑(mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListThermalBonding.cmfProcessListThermalBondingGlueSyringeDiameter',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI56',
        'rowIndex': 56,
        'cellIndex': 1,
        'label': '膠水重量(g)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListThermalBondingGlueWeight.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI57',
        'rowIndex': 57,
        'cellIndex': 1,
        'label': '膠水U/P (USD/g)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListThermalBondingGluePrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI58',
        'rowIndex': 58,
        'cellIndex': 1,
        'label': 'Cycle Time(sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListThermalBondingCycleTimeValue.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI59',
        'rowIndex': 59,
        'cellIndex': 1,
        'label': 'Cycle Time U/P (USD/sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.thermalBondingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI60',
        'rowIndex': 60,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.thermalBondingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI61',
        'rowIndex': 61,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(膠水重量(g) * 膠水U/P + Cycle Time(sec) * Cycle Time U/P)  * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI62',
        'rowIndex': 62,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=(CI1RI56*CI1RI57+CI1RI58*CI1RI59)*(1+CI1RI60)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListThermalBondingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListThermalBondingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI63',
    'rowIndex': 63,
    'cellIndex': 0,
    'label': '攻牙',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI63',
        'rowIndex': 63,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSingleTapping.cmfProcessListSingleTappingCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI64',
        'rowIndex': 64,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.singleTappingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI65',
        'rowIndex': 65,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.singleTappingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI66',
        'rowIndex': 66,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '數量 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI67',
        'rowIndex': 67,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI63*CI1RI64*(1+CI1RI65)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListSingleTappingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListSingleTappingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI68',
    'rowIndex': 68,
    'cellIndex': 0,
    'label': '點焊',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI68',
        'rowIndex': 68,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSingleSpotWelding.cmfProcessListSingleSpotWeldingCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI69',
        'rowIndex': 69,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.singleSpotWeldingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI70',
        'rowIndex': 70,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.singleSpotWeldingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI71',
        'rowIndex': 71,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '數量 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI72',
        'rowIndex': 72,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI68*CI1RI69*(1+CI1RI70)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListSingleSpotWeldingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListSingleSpotWeldingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI73',
    'rowIndex': 73,
    'cellIndex': 0,
    'label': '鉚釘',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI73',
        'rowIndex': 73,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSingleRivet.cmfProcessListSingleRivetCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI74',
        'rowIndex': 74,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.singleRivetUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI75',
        'rowIndex': 75,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.singleRivetLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI76',
        'rowIndex': 76,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '數量 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI77',
        'rowIndex': 77,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI73*CI1RI74*(1+CI1RI75)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSingleRivet.cmfProcessListSingleRivetCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSingleRivet.cmfProcessListSingleRivetCheckBox',
  },
  {
    'xlsxKey': 'CI0RI78',
    'rowIndex': 78,
    'cellIndex': 0,
    'label': '拉鉚釘',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI78',
        'rowIndex': 78,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListRivet.cmfProcessListRivetCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI79',
        'rowIndex': 79,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.rivetUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI80',
        'rowIndex': 80,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.rivetLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI81',
        'rowIndex': 81,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '數量 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI82',
        'rowIndex': 82,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI78*CI1RI79*(1+CI1RI80)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListMultiRivet.cmfProcessListMultiRivetCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListMultiRivet.cmfProcessListMultiRivetCheckBox',
  },
  {
    'xlsxKey': 'CI0RI83',
    'rowIndex': 83,
    'cellIndex': 0,
    'label': 'Printing網印',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI83',
        'rowIndex': 83,
        'cellIndex': 1,
        'label': '次',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListScreenPrinting.cmfProcessListScreenPrintingCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI84',
        'rowIndex': 84,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.screenPrintingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI85',
        'rowIndex': 85,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.screenPrintingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI86',
        'rowIndex': 86,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '次 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI87',
        'rowIndex': 87,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI83*CI1RI84*(1+CI1RI85)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListScreenPrintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.Price.housingMetal.cmfProcessListScreenPrintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI88',
    'rowIndex': 88,
    'cellIndex': 0,
    'label': 'Printing移印',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI88',
        'rowIndex': 88,
        'cellIndex': 1,
        'label': '次',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListPadPrinting.cmfProcessListPadPrintingCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI89',
        'rowIndex': 89,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.padPrintingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI90',
        'rowIndex': 90,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.padPrintingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI91',
        'rowIndex': 91,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '次 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI92',
        'rowIndex': 92,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI88*CI1RI89*(1+CI1RI90)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListPadPrinting.cmfProcessListPadPrintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListPadPrinting.cmfProcessListPadPrintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI93',
    'rowIndex': 93,
    'cellIndex': 0,
    'label': 'Silk Print',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI93',
        'rowIndex': 93,
        'cellIndex': 1,
        'label': '次',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSilkPrint.cmfProcessListSilkPrintCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI94',
        'rowIndex': 94,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.silkPrintUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI95',
        'rowIndex': 95,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.silkPrintLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI96',
        'rowIndex': 96,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '次 * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI97',
        'rowIndex': 97,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI93*CI1RI94*(1+CI1RI95)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSilkPrint.cmfProcessListSilkPrintCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListSilkPrint.cmfProcessListSilkPrintCheckBox',
  },
  {
    'xlsxKey': 'CI0RI98',
    'rowIndex': 98,
    'cellIndex': 0,
    'label': 'CNC',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI98',
        'rowIndex': 98,
        'cellIndex': 1,
        'label': 'Cycle Time(sec)',
        'type': 'formula',
        'description': '=CI1RI99/CI1RI100+CI1RI101',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'contents': [],
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListCNC.cmfProcessListCNCSec',
      },
      {
        'xlsxKey': 'CI1RI99',
        'rowIndex': 99,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListCNCArea.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI100',
        'rowIndex': 100,
        'cellIndex': 1,
        'label': '加工速率(mm²/sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.CNCProcessingSpeed.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI101',
        'rowIndex': 101,
        'cellIndex': 1,
        'label': '取放時間(sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.CNCTransferTime.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI102',
        'rowIndex': 102,
        'cellIndex': 1,
        'label': 'U/P (USD/sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.CNCUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI103',
        'rowIndex': 103,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.CNCLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI104',
        'rowIndex': 104,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Cycle Time(sec)(含取放時間)  * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI105',
        'rowIndex': 105,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI98*CI1RI102*(1+CI1RI103)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListCNC.cmfProcessListCNCCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListCNC.cmfProcessListCNCCheckBox',
  },
  {
    'xlsxKey': 'CI0RI106',
    'rowIndex': 106,
    'cellIndex': 0,
    'label': '鐳雕',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI106',
        'rowIndex': 106,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListLaserPrint.cmfProcessListLaserPrintArea',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI107',
        'rowIndex': 107,
        'cellIndex': 1,
        'label': 'U/P (USD/M²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.laserPrintUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI108',
        'rowIndex': 108,
        'cellIndex': 1,
        'label': 'Loss Rate',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.laserPrintLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI109',
        'rowIndex': 109,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '(加工面積(mm²) / 1000000) * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI110',
        'rowIndex': 110,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=(CI1RI106/1000000)*CI1RI107*(1+CI1RI108)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListLaserPrint.cmfProcessListLaserPrintCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListLaserPrint.cmfProcessListLaserPrintCheckBox',
  },
  {
    'xlsxKey': 'CI0RI111',
    'rowIndex': 111,
    'cellIndex': 0,
    'label': '打磨',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI111',
        'rowIndex': 111,
        'cellIndex': 1,
        'label': 'Cycle Time(sec)',
        'type': 'formula',
        'description': '=CI1RI112/CI1RI113+CI1RI114',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'contents': [],
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListPolishing.cmfProcessListPolishingAutoSec',
      },
      {
        'xlsxKey': 'CI1RI112',
        'rowIndex': 112,
        'cellIndex': 1,
        'label': '加工面積(mm²)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListPolishingAutoArea.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI113',
        'rowIndex': 113,
        'cellIndex': 1,
        'label': '加工速率(mm²/sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.polishingProcessingSpeed.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI114',
        'rowIndex': 114,
        'cellIndex': 1,
        'label': '取放時間(sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.polishingTrasnsferTime.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI115',
        'rowIndex': 115,
        'cellIndex': 1,
        'label': 'U/P (USD/sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.polishingAutoUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI116',
        'rowIndex': 116,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.polishingAutoLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI117',
        'rowIndex': 117,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'Cycle Time(sec)(含取放時間)  * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI118',
        'rowIndex': 118,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI111*CI1RI115*(1+CI1RI116)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListPolishing.cmfProcessListPolishingAutoCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListPolishing.cmfProcessListPolishingAutoCheckBox',
  },
  {
    'xlsxKey': 'CI0RI119',
    'rowIndex': 119,
    'cellIndex': 0,
    'label': '雷焊',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI119',
        'rowIndex': 119,
        'cellIndex': 1,
        'label': '數量',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListLaserWelding.cmfProcessListLaserWeldingCount',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI120',
        'rowIndex': 120,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListLaserWeldingPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI121',
        'rowIndex': 121,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListLaserWeldingLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI122',
        'rowIndex': 122,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '數量  * U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI123',
        'rowIndex': 123,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI119*CI1RI120*(1+CI1RI121)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListLaserWelding.cmfProcessListLaserWeldingExist',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListLaserWelding.cmfProcessListLaserWeldingExist',
  },
  {
    'xlsxKey': 'CI0RI124',
    'rowIndex': 124,
    'cellIndex': 0,
    'label': '清洗',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI124',
        'rowIndex': 124,
        'cellIndex': 1,
        'label': 'U/P (USD/pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListNormalCleanPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI125',
        'rowIndex': 125,
        'cellIndex': 1,
        'label': 'Loss Rate (%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfProcessListNormalCleanLossRate.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI126',
        'rowIndex': 126,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': 'U/P * (1 + Loss Rate)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI127',
        'rowIndex': 127,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=CI1RI124*(1+CI1RI125)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListNormalClean.cmfProcessListNormalCleanExist',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfProcessListNormalClean.cmfProcessListNormalCleanExist',
  },
  {
    'xlsxKey': 'CI1RI128',
    'rowIndex': 128,
    'cellIndex': 0,
    'label': 'D.塗裝噴漆費',
    'type': 'formula',
    'description': '=CI1RI152+CI1RI164+CI1RI176+CI1RI148',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI129',
    'rowIndex': 129,
    'cellIndex': 0,
    'label': '噴塗製程',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI129',
        'rowIndex': 129,
        'cellIndex': 1,
        'label': '噴漆類型 TYPE',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingType',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI130',
        'rowIndex': 130,
        'cellIndex': 1,
        'label': 'Color 色系',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingColor',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI131',
        'rowIndex': 131,
        'cellIndex': 1,
        'label': '塗料廠商',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingVendor',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI132',
        'rowIndex': 132,
        'cellIndex': 1,
        'label': '噴漆膜厚(um)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingThickness',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI133',
        'rowIndex': 133,
        'cellIndex': 1,
        'label': '噴塗面-長 (L/mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingLength',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI134',
        'rowIndex': 134,
        'cellIndex': 1,
        'label': '噴塗面-寬 (W/mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingWidth',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI135',
        'rowIndex': 135,
        'cellIndex': 1,
        'label': '噴塗面-高 (H/mm)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingHeight',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI136',
        'rowIndex': 136,
        'cellIndex': 1,
        'label': '頂(正)面x幾道',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingAreaLW',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI137',
        'rowIndex': 137,
        'cellIndex': 1,
        'label': '長側面x幾道',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingAreaLH',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI138',
        'rowIndex': 138,
        'cellIndex': 1,
        'label': '寬側面x幾道',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPaintingAreaWH',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI139',
        'rowIndex': 139,
        'cellIndex': 1,
        'label': '噴漆工時(Day/hrs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingWorkTime.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI140',
        'rowIndex': 140,
        'cellIndex': 1,
        'label': '日產能(Pcs/Day)',
        'type': 'formula',
        'description': '=IFERROR(60*60/(CI1RI143/CI1RI142)*CI1RI139*(1-CI1RI141),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      },
      {
        'xlsxKey': 'CI1RI141',
        'rowIndex': 141,
        'cellIndex': 1,
        'label': '噴塗不良率(%)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '0.0%',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.paintingDefectRateValue.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI142',
        'rowIndex': 142,
        'cellIndex': 1,
        'label': '一次可噴成品數量 (pcs)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPcs.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI143',
        'rowIndex': 143,
        'cellIndex': 1,
        'label': 'Cycle time (Sec)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPaintingCycleTime.value',
        'contents': []
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI144',
    'rowIndex': 144,
    'cellIndex': 0,
    'label': '單件人工費用_x000D_\r\n(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI144',
        'rowIndex': 144,
        'cellIndex': 1,
        'label': '總人工費用(USD/Day)',
        'type': 'formula',
        'description': '=CI1RI146*60*CI1RI139*CI1RI145',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      },
      {
        'xlsxKey': 'CI1RI145',
        'rowIndex': 145,
        'cellIndex': 1,
        'label': '噴塗線人工數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.printing_workers.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI146',
        'rowIndex': 146,
        'cellIndex': 1,
        'label': '人工費用(usd per man/min)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingUP.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI147',
        'rowIndex': 147,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '總人工費用(USD/Day) / 日產能(Pcs/Day)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI148',
        'rowIndex': 148,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI129="N/A"),0,CI1RI144/CI1RI140),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI149',
    'rowIndex': 149,
    'cellIndex': 0,
    'label': '噴漆機台費用_x000D_\r\n(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0.00000',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI149',
        'rowIndex': 149,
        'cellIndex': 1,
        'label': '機台類型',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPaintingMachineType.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI150',
        'rowIndex': 150,
        'cellIndex': 1,
        'label': '噴漆機台費用(min)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPaintingMachinePrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI151',
        'rowIndex': 151,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '噴漆機台費用 * 60 * 噴漆工時(Day/hrs) / 日產能(Pcs/Day)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI152',
        'rowIndex': 152,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR", CI1RI129="N/A"),0, CI1RI150*60*CI1RI139/CI1RI140), 0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI153',
    'rowIndex': 153,
    'cellIndex': 0,
    'label': '單件底漆費用_x000D_\r\n(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI153',
        'rowIndex': 153,
        'cellIndex': 1,
        'label': 'Paintingable amount (pcs/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.printingable_amount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI154',
        'rowIndex': 154,
        'cellIndex': 1,
        'label': '底漆 Coating數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPrimerQTY.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI155',
        'rowIndex': 155,
        'cellIndex': 1,
        'label': '主劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerMainUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI156',
        'rowIndex': 156,
        'cellIndex': 1,
        'label': '硬化劑/固化劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerHardenerUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI157',
        'rowIndex': 157,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerSolventUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI158',
        'rowIndex': 158,
        'cellIndex': 1,
        'label': '主劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerMainAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI159',
        'rowIndex': 159,
        'cellIndex': 1,
        'label': '硬化劑/固化劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerHardenerAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI160',
        'rowIndex': 160,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerSolventAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI161',
        'rowIndex': 161,
        'cellIndex': 1,
        'label': '底塗油漆單價(USD/KG)',
        'type': 'formula',
        'description': '=IFERROR(CI1RI155*(CI1RI158/(CI1RI158+CI1RI159+CI1RI160))+CI1RI156*(CI1RI159/(CI1RI158+CI1RI159+CI1RI160))+CI1RI157*(CI1RI160/(CI1RI158+CI1RI159+CI1RI160)),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingPrimerPrice.value',
      },
      {
        'xlsxKey': 'CI1RI162',
        'rowIndex': 162,
        'cellIndex': 1,
        'label': '固含量比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.paintingSolidContentRatioValue.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI163',
        'rowIndex': 163,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '底塗油漆單價(USD/KG) / Paintingable amount (pcs/kg) * 底漆 Coating數 * 固含量比例 * (1 + 噴塗不良率(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI164',
        'rowIndex': 164,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI129="N/A"),0, (CI1RI161/CI1RI153*CI1RI154*CI1RI162*(1+CI1RI141))), 0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI0RI165',
    'rowIndex': 165,
    'cellIndex': 0,
    'label': '單件面漆費用(USD/Pcs)',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thin',
        'bottomBorderStyle': 'thin',
      },
      'numberFormat': '#,##0',
    },
    'contents': [
      {
        'xlsxKey': 'CI1RI165',
        'rowIndex': 165,
        'cellIndex': 1,
        'label': 'Paintingable amount (pcs/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.printingable_amount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI166',
        'rowIndex': 166,
        'cellIndex': 1,
        'label': '面漆 Coating數',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPTopcoatQTY.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI167',
        'rowIndex': 167,
        'cellIndex': 1,
        'label': '主劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatMainUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI168',
        'rowIndex': 168,
        'cellIndex': 1,
        'label': '硬化劑/固化劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatHardenerUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI169',
        'rowIndex': 169,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑單價 (USD/kg)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatSolventUnitPrice.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI170',
        'rowIndex': 170,
        'cellIndex': 1,
        'label': '主劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatMainAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI171',
        'rowIndex': 171,
        'cellIndex': 1,
        'label': '硬化劑/固化劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatHardenerAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI172',
        'rowIndex': 172,
        'cellIndex': 1,
        'label': '溶劑/稀釋劑 比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatSolventAmount.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI173',
        'rowIndex': 173,
        'cellIndex': 1,
        'label': '面塗油漆單價(USD/KG)',
        'type': 'formula',
        'description': '=IFERROR(CI1RI167*(CI1RI170/(CI1RI170+CI1RI171+CI1RI172))+CI1RI168*(CI1RI171/(CI1RI170+CI1RI171+CI1RI172))+CI1RI169*(CI1RI172/(CI1RI170+CI1RI171+CI1RI172)),0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.cmfPPaintingTopcoatPrice.value',
      },
      {
        'xlsxKey': 'CI1RI174',
        'rowIndex': 174,
        'cellIndex': 1,
        'label': '固含量比例',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.paintingSolidContentRatioValue.value',
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI175',
        'rowIndex': 175,
        'cellIndex': 1,
        'label': '公式',
        'type': 'value',
        'description': '面塗油漆單價(USD/KG) / Paintingable amount (pcs/kg) * 面漆 Coating數 * 固含量比例 * (1 + 噴塗不良率(%))',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.00000',
        },
        'contents': []
      },
      {
        'xlsxKey': 'CI1RI176',
        'rowIndex': 176,
        'cellIndex': 1,
        'label': 'Price',
        'type': 'formula',
        'description': '=IFERROR(IF(OR($C$9="IMR",CI1RI129="N/A"),0, CI1RI173/CI1RI165*CI1RI166*CI1RI174*(1+CI1RI141)), 0)',
        'style': {
          'color': null,
          'border': {
            'topBorderStyle': 'thin',
            'bottomBorderStyle': 'thin',
          },
          'numberFormat': '#,##0.0####',
        },
        'contents': [],
        'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
      }
    ],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI1RI177',
    'rowIndex': 177,
    'cellIndex': 0,
    'label': 'A. 材料費',
    'type': 'formula',
    'description': '=CI1RI0',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI178',
    'rowIndex': 178,
    'cellIndex': 0,
    'label': 'B. 沖壓費',
    'type': 'formula',
    'description': {
      'type': 'sum',
      'set': [
        {
          'groupIdPath': 'partlistvalue.formData.toolingPartList.hmTooling.hmToolingStamping',
          'byKey': 'stamping_price',
        }
      ],
      'wrapper': 'IFERROR(FORMULA, 0)',
    },
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI179',
    'rowIndex': 179,
    'cellIndex': 0,
    'label': 'C. 二次加工費',
    'type': 'formula',
    'description': '=CI1RI28',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI180',
    'rowIndex': 180,
    'cellIndex': 0,
    'label': 'D. 塗裝噴漆費',
    'type': 'formula',
    'description': '=CI1RI128',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': [],
    'existKey': 'partlistvalue.formData.CMFProcessList.cmfPPainting.cmfPPaintingCheckBox',
  },
  {
    'xlsxKey': 'CI1RI181',
    'rowIndex': 181,
    'cellIndex': 0,
    'label': '管銷&利潤倍數',
    'style': {
      'color': null,
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '0.0####%',
    },
    'byKey': 'partlistprice.forDebug.debugInfo.housingMetal.profit_percent.value',
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI182',
    'rowIndex': 182,
    'cellIndex': 0,
    'label': 'E.管銷&利潤',
    'type': 'formula',
    'description': '=CI1RI178*CI1RI181',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  },
  {
    'xlsxKey': 'CI1RI183',
    'rowIndex': 183,
    'cellIndex': 0,
    'label': 'F. 成品總價',
    'type': 'formula',
    'description': '=CI1RI177+CI1RI178+CI1RI179+CI1RI182+CI1RI180',
    'style': {
      'color': '0000FF',
      'border': {
        'topBorderStyle': 'thick',
        'bottomBorderStyle': 'thick',
      },
      'numberFormat': '#,##0.0####',
    },
    'contents': []
  }
]
