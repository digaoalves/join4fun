function addWidgetsfrmPreferences() {
    frmPreferences.setDefaultUnit(kony.flex.DP);
    var FlexContainer090bccf352eb94b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer090bccf352eb94b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer090bccf352eb94b.setDefaultUnit(kony.flex.DP);
    var FlexContainer0fcc881547fdb49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "15%",
        "id": "FlexContainer0fcc881547fdb49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0fcc881547fdb49.setDefaultUnit(kony.flex.DP);
    var Image0139ac154df2248 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "Image0139ac154df2248",
        "isVisible": true,
        "skin": "slImage",
        "src": "join4fun.png",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0fcc881547fdb49.add(Image0139ac154df2248);
    var FlexContainer0504073343cff4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "85%",
        "id": "FlexContainer0504073343cff4a",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0504073343cff4a.setDefaultUnit(kony.flex.DP);
    var FlexContainer0038f833dd99c42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "FlexContainer0038f833dd99c42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0038f833dd99c42.setDefaultUnit(kony.flex.DP);
    var flxBasketball = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBasketball",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c8ac5c0dcf96445682bf1e947187d9d2,
        "skin": "CopyslFbox06ea3c4aeda0849",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxBasketball.setDefaultUnit(kony.flex.DP);
    var FlexContainer045fbb78ea89948 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "FlexContainer045fbb78ea89948",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "sknFlexTitleLayer",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    FlexContainer045fbb78ea89948.setDefaultUnit(kony.flex.DP);
    var Label02b84301dbc4945 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label02b84301dbc4945",
        "isVisible": true,
        "skin": "CopyslLabel0f7f6d43fbe754f",
        "text": "Basketball",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer045fbb78ea89948.add(Label02b84301dbc4945);
    var flxBasketBallCheck = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxBasketBallCheck",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0e67153023f2b49",
        "top": "2%",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    flxBasketBallCheck.setDefaultUnit(kony.flex.DP);
    var Image00539ffc08d7143 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "Image00539ffc08d7143",
        "isVisible": true,
        "skin": "slImage",
        "src": "check.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBasketBallCheck.add(Image00539ffc08d7143);
    var Image0a28b6467a7b044 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "Image0a28b6467a7b044",
        "isVisible": true,
        "skin": "slImage",
        "src": "basq.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBasketball.add(FlexContainer045fbb78ea89948, flxBasketBallCheck, Image0a28b6467a7b044);
    var flxSoccer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSoccer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_161ae68224174ffebfa506ca01c5deed,
        "skin": "CopyslFbox06ea3c4aeda0849",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxSoccer.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer00dd2a0f89f934d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer00dd2a0f89f934d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "sknFlexTitleLayer",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    CopyFlexContainer00dd2a0f89f934d.setDefaultUnit(kony.flex.DP);
    var CopyLabel0042f363248b943 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0042f363248b943",
        "isVisible": true,
        "skin": "CopyslLabel0f7f6d43fbe754f",
        "text": "Soccer",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer00dd2a0f89f934d.add(CopyLabel0042f363248b943);
    var flxSoccerCheck = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxSoccerCheck",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0e67153023f2b49",
        "top": "2%",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    flxSoccerCheck.setDefaultUnit(kony.flex.DP);
    var CopyImage079d28cc9c01d43 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage079d28cc9c01d43",
        "isVisible": true,
        "skin": "slImage",
        "src": "check.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSoccerCheck.add(CopyImage079d28cc9c01d43);
    var CopyImage0d5db8d3e65a143 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage0d5db8d3e65a143",
        "isVisible": true,
        "skin": "slImage",
        "src": "soccer.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSoccer.add(CopyFlexContainer00dd2a0f89f934d, flxSoccerCheck, CopyImage0d5db8d3e65a143);
    FlexContainer0038f833dd99c42.add(flxBasketball, flxSoccer);
    var CopyFlexContainer0c719adaefc054d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer0c719adaefc054d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0c719adaefc054d.setDefaultUnit(kony.flex.DP);
    var flxCricket = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxCricket",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_46f71591bc3b4151a8d729d09e5b95f0,
        "skin": "CopyslFbox06ea3c4aeda0849",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxCricket.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0c51a41c32da342 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer0c51a41c32da342",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "sknFlexTitleLayer",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    CopyFlexContainer0c51a41c32da342.setDefaultUnit(kony.flex.DP);
    var CopyLabel024179f533be746 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel024179f533be746",
        "isVisible": true,
        "skin": "CopyslLabel0f7f6d43fbe754f",
        "text": "Cricket",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0c51a41c32da342.add(CopyLabel024179f533be746);
    var flxCricketCheck = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxCricketCheck",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0e67153023f2b49",
        "top": "2%",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    flxCricketCheck.setDefaultUnit(kony.flex.DP);
    var CopyImage0233cd8e043344a = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage0233cd8e043344a",
        "isVisible": true,
        "skin": "slImage",
        "src": "check.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCricketCheck.add(CopyImage0233cd8e043344a);
    var CopyImage03db72091257c40 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage03db72091257c40",
        "isVisible": true,
        "skin": "slImage",
        "src": "cricket.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCricket.add(CopyFlexContainer0c51a41c32da342, flxCricketCheck, CopyImage03db72091257c40);
    var flxTennis = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTennis",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_21789595253746058dba193b3abc5133,
        "skin": "CopyslFbox06ea3c4aeda0849",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxTennis.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0cb382523084043 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer0cb382523084043",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "sknFlexTitleLayer",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    CopyFlexContainer0cb382523084043.setDefaultUnit(kony.flex.DP);
    var CopyLabel03acb3064c1484c = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel03acb3064c1484c",
        "isVisible": true,
        "skin": "CopyslLabel0f7f6d43fbe754f",
        "text": "Tennis",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0cb382523084043.add(CopyLabel03acb3064c1484c);
    var flxTennisCheck = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxTennisCheck",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0e67153023f2b49",
        "top": "2%",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    flxTennisCheck.setDefaultUnit(kony.flex.DP);
    var CopyImage002ea9a24df3342 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage002ea9a24df3342",
        "isVisible": true,
        "skin": "slImage",
        "src": "check.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTennisCheck.add(CopyImage002ea9a24df3342);
    var CopyImage047605f35348346 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage047605f35348346",
        "isVisible": true,
        "skin": "slImage",
        "src": "tennis.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTennis.add(CopyFlexContainer0cb382523084043, flxTennisCheck, CopyImage047605f35348346);
    CopyFlexContainer0c719adaefc054d.add(flxCricket, flxTennis);
    var CopyFlexContainer0a98f9e4c3cb94f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer0a98f9e4c3cb94f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a98f9e4c3cb94f.setDefaultUnit(kony.flex.DP);
    var flxFootball = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxFootball",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_05a2d51454584faebd4c30c6f12622cb,
        "skin": "CopyslFbox06ea3c4aeda0849",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxFootball.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer015f3d5abced948 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer015f3d5abced948",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "sknFlexTitleLayer",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    CopyFlexContainer015f3d5abced948.setDefaultUnit(kony.flex.DP);
    var CopyLabel020369161371948 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel020369161371948",
        "isVisible": true,
        "skin": "CopyslLabel0f7f6d43fbe754f",
        "text": "Football",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer015f3d5abced948.add(CopyLabel020369161371948);
    var flxFootballCheck = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxFootballCheck",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0e67153023f2b49",
        "top": "2%",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    flxFootballCheck.setDefaultUnit(kony.flex.DP);
    var CopyImage0992f54109d834a = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage0992f54109d834a",
        "isVisible": true,
        "skin": "slImage",
        "src": "check.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxFootballCheck.add(CopyImage0992f54109d834a);
    var CopyImage0f4dd77fe5a8b48 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage0f4dd77fe5a8b48",
        "isVisible": true,
        "skin": "slImage",
        "src": "afootball.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxFootball.add(CopyFlexContainer015f3d5abced948, flxFootballCheck, CopyImage0f4dd77fe5a8b48);
    var flxRun = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxRun",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_bb7123efd4c34d8b9d24e96dfc246422,
        "skin": "CopyslFbox06ea3c4aeda0849",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxRun.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0ebd2be63a1304e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "CopyFlexContainer0ebd2be63a1304e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "24dp",
        "skin": "sknFlexTitleLayer",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    CopyFlexContainer0ebd2be63a1304e.setDefaultUnit(kony.flex.DP);
    var CopyLabel02cfa363689b14e = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel02cfa363689b14e",
        "isVisible": true,
        "skin": "CopyslLabel0f7f6d43fbe754f",
        "text": "Run",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0ebd2be63a1304e.add(CopyLabel02cfa363689b14e);
    var flxRunCheck = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxRunCheck",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0e67153023f2b49",
        "top": "2%",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    flxRunCheck.setDefaultUnit(kony.flex.DP);
    var CopyImage0303769db5cba4b = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage0303769db5cba4b",
        "isVisible": true,
        "skin": "slImage",
        "src": "check.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxRunCheck.add(CopyImage0303769db5cba4b);
    var CopyImage074f0df300dd64c = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "CopyImage074f0df300dd64c",
        "isVisible": true,
        "skin": "slImage",
        "src": "run.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxRun.add(CopyFlexContainer0ebd2be63a1304e, flxRunCheck, CopyImage074f0df300dd64c);
    CopyFlexContainer0a98f9e4c3cb94f.add(flxFootball, flxRun);
    var FlexContainer01f47b56278fb41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "FlexContainer01f47b56278fb41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01f47b56278fb41.setDefaultUnit(kony.flex.DP);
    var Button08f368f46788b4a = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0ae121cb2f9574e",
        "height": "50dp",
        "id": "Button08f368f46788b4a",
        "isVisible": true,
        "left": "60dp",
        "onClick": AS_Button_5ead0be0808a4629a76da1e71023be82,
        "skin": "sknButtonDefault",
        "text": "Ok,let's go!",
        "top": "42dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer01f47b56278fb41.add(Button08f368f46788b4a);
    FlexContainer0504073343cff4a.add(FlexContainer0038f833dd99c42, CopyFlexContainer0c719adaefc054d, CopyFlexContainer0a98f9e4c3cb94f, FlexContainer01f47b56278fb41);
    FlexContainer090bccf352eb94b.add(FlexContainer0fcc881547fdb49, FlexContainer0504073343cff4a);
    frmPreferences.add(FlexContainer090bccf352eb94b);
};

function frmPreferencesGlobals() {
    frmPreferences = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPreferences,
        "enabledForIdleTimeout": false,
        "id": "frmPreferences",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm044e0c9e724494f"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmPreferences.info = {
        "kuid": "d7caa80302294e028c8eef3dfed7e161"
    };
};