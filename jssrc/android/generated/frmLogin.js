function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ce55de5959b94f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0ce55de5959b94f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlexBG",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ce55de5959b94f.setDefaultUnit(kony.flex.DP);
    var Image0cf597456f0a449 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100dp",
        "id": "Image0cf597456f0a449",
        "isVisible": true,
        "skin": "slImage",
        "src": "join4fun.png",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "3%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "skFlexLogin",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxLogin.setDefaultUnit(kony.flex.DP);
    flxLogin.add();
    FlexContainer0ce55de5959b94f.add(Image0cf597456f0a449, flxLogin);
    frmLogin.add(FlexContainer0ce55de5959b94f);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
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
    frmLogin.info = {
        "kuid": "41c5a22259c44bd3b03985d0047ed1bf"
    };
};