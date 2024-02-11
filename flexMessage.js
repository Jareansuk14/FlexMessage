var source = {
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://s3-symbol-logo.tradingview.com/cp-all--big.svg",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover",
    "action": {
      "type": "uri",
      "uri": "http://linecorp.com/"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "{{name}}",
        "weight": "bold",
        "size": "lg"
      },
      {
        "type": "box",
        "layout": "baseline",
        "margin": "md",
        "contents": [
          {
            "type": "text",
            "size": "md",
            "flex": 0,
            "text": "ข้อมูลราคา",
            "weight": "bold"
          },
          {
            "type": "text",
            "text": "{{date}}",
            "margin": "lg",
            "flex": 0,
            "size": "xs",
            "color": "#72767d"
          }
        ],
        "justifyContent": "space-between",
        "height": "30px"
      },
      {
        "type": "separator",
        "color": "#6c757d"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "1 วัน",
                "size": "xs",
                "color": "#fbb034",
                "weight": "bold"
              }
            ],
            "width": "40%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "52 สัปดาห์",
                "size": "xs",
                "color": "#fbb034",
                "weight": "bold"
              }
            ],
            "width": "40%"
          }
        ],
        "justifyContent": "space-between",
        "margin": "lg"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "filler"
                  }
                ],
                "backgroundColor": "#3683d8",
                "width": "70%",
                "height": "6px"
              }
            ],
            "height": "6px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "filler"
                  }
                ],
                "backgroundColor": "#3683d8",
                "width": "30%",
                "height": "6px"
              }
            ],
            "height": "6px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          }
        ],
        "justifyContent": "space-between",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "margin": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "{{low}}",
                "size": "xxs",
                "weight": "bold"
              },
              {
                "type": "text",
                "text": "{{high}}",
                "size": "xxs",
                "weight": "bold",
                "align": "end"
              }
            ],
            "width": "40%",
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "{{weeklow}}",
                "size": "xxs",
                "weight": "bold"
              },
              {
                "type": "text",
                "text": "{{weekHigh}}",
                "size": "xxs",
                "weight": "bold",
                "align": "end"
              }
            ],
            "width": "40%",
            "justifyContent": "space-between"
          }
        ],
        "justifyContent": "space-between"
      },
      {
        "type": "separator",
        "margin": "md",
        "color": "#6c757d"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ล่าสุด",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "เปลี่ยนแปลง",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{last}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{change}}",
                    "size": "sm",
                    "color": "#ff3c3c",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          }
        ]
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          }
        ],
        "justifyContent": "space-between",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "สูงสุด",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ต่ำสุด",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{high}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{low}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          }
        ],
        "margin": "xs"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          }
        ],
        "justifyContent": "space-between",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ราคาปิดก่อนหน้า",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ราคาเปิด",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{prior}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{open}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          }
        ]
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          }
        ],
        "justifyContent": "space-between",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ปริมาณ (หุ้น)",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "มูลค่า('000บาท)",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{volumeShares}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{valueBaht}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          }
        ]
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "backgroundColor": "#ced4da",
            "width": "40%",
            "height": "1px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "backgroundColor": "#ced4da",
            "width": "40%",
            "height": "1px"
          }
        ],
        "justifyContent": "space-between",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ราคาเฉลี่ย",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ราคาพาร์",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{average}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{par}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          }
        ]
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "height": "1px",
            "backgroundColor": "#ced4da",
            "width": "40%"
          }
        ],
        "justifyContent": "space-between",
        "margin": "md"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ราคา Floor",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ราคา Ceiling",
                    "size": "xs"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{floor}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "{{ceiling}}",
                    "size": "sm",
                    "weight": "bold"
                  }
                ],
                "width": "40%"
              }
            ],
            "justifyContent": "space-between"
          }
        ]
      },
      {
        "type": "separator",
        "margin": "lg",
        "color": "#6c757d"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Bid",
                "color": "#00889b"
              }
            ],
            "flex": 0
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "filler"
                          }
                        ],
                        "backgroundColor": "#2bc2f2",
                        "width": "70%",
                        "height": "8px"
                      }
                    ],
                    "height": "8px",
                    "backgroundColor": "#c50550"
                  }
                ],
                "margin": "md",
                "cornerRadius": "5px",
                "width": "95%"
              }
            ],
            "alignItems": "center"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Offer",
                "color": "#c50550"
              }
            ],
            "alignItems": "flex-end",
            "flex": 0
          }
        ],
        "margin": "xl"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "ราคาเสนอซื้อ/ปริมาณ (หุ้น)",
                "size": "xs"
              }
            ],
            "width": "50%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "ราคาเสนอขาย/ปริมาณ (หุ้น)",
                "size": "xs"
              }
            ],
            "width": "50%",
            "alignItems": "flex-end"
          }
        ],
        "justifyContent": "space-between",
        "margin": "xs"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "54.00 / 572,000",
                "size": "xs",
                "weight": "bold"
              }
            ],
            "width": "50%"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "54.25 / 250,200",
                "size": "xs",
                "weight": "bold"
              }
            ],
            "width": "50%",
            "alignItems": "flex-end"
          }
        ],
        "justifyContent": "space-between",
        "margin": "xs"
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "ดูข้อมูลเชิงลึก",
              "uri": "https://www.set.or.th/th/market/product/stock/quote/CPALL/price"
            }
          }
        ],
        "margin": "sm",
        "cornerRadius": "10px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": []
      }
    ],
    "flex": 0
  },
  "size": "giga"
}
var template = Handlebars.compile(source);


var data = {
  "name": "บริษัท ซีพี ออลล์ จำกัด (มหาชน)",
  "date": "ข้อมูลล่าสุด 09 ก.พ. 2567 21:13:03",
  "weekLow": "50.50",
  "weekHigh": "67.75",
  "last": "54.25",
  "change": "-0.50 (-0.91%)",
  "high": "54.50",
  "low": "53.75",
  "prior": "54.75",
  "open": "54.50",
  "volumeShares": "12,723,137",
  "valueBaht": "688,565.19",
  "average": "54.12",
  "par": "1.00",
  "floor": "38.50",
  "ceiling": "71.00",
}
var result = template(data);