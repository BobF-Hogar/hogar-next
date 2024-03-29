interface RouteInfo {
    url: string,
    callToServer: boolean,
    callToControl: boolean,
    callToThing: boolean,
    toString: () => string,
}

function setRouteInfo(url: string, callToServer: boolean = true, callToControl: boolean = false, callToThing: boolean = false): RouteInfo {
    return { url, callToServer, callToControl, callToThing, toString: () => { return url } };
}

const apiRoutes = {
    LOGIN: setRouteInfo("/site/login"),
    REGISTER: setRouteInfo("/site/register"),
    REGISTER_GET_VERIFY_CODE: setRouteInfo("/site/register-get-verify-code"),
    REGISTER_CONFIRM_VERIFY_CODE: setRouteInfo("/site/register-confirm"),
    REFRESH_TOKEN: setRouteInfo("/site/refresh-token"),
    UPDATE_PROFILE: setRouteInfo("/customer/update-profile"),
    UPDATE_PROFILE_CONFIRM: setRouteInfo("/customer/update-profile-confirm"),
    RESET_PASSWORD: setRouteInfo("/customer/reset-pass"),
    FORGOT_PASSOWRD: setRouteInfo("/customer/forgot-pass"),
    FORGOT_PASSOWRD_BY_EMAIL: setRouteInfo("/customer/forgot-pass-by-email"),
    FORGOT_PASSOWRD_BY_MOBILE: setRouteInfo("/customer/forgot-pass-by-phone"),
    CHANGE_PASSOWRD: setRouteInfo("/customer/change-pass"),
    FORGOT_PASSOWRD_CONFIRM_VERIFYCODE: setRouteInfo("/customer/forgot-pass-confirm"),
    FORGOT_PASSOWRD_CONFIRM_VERIFYCODE_BY_EMAIL: setRouteInfo("/customer/forgot-pass-confirm-by-email"),
    FORGOT_PASSOWRD_CONFIRM_VERIFYCODE_BY_MOBILE: setRouteInfo("/customer/forgot-pass-confirm-by-phone"),
    GET_LIST_HOME: setRouteInfo("/home/list-by-user"),
    ADD_HOME: setRouteInfo("/home/add-home"),
    EDIT_HOME: setRouteInfo("/home/edit-home"),
    DELETE_HOME: setRouteInfo("/home/delete-home"),
    DELETE_HOME_CONFIRM: setRouteInfo("/home/delete-home-confirm"),
    CHECK_INFO_USER: setRouteInfo("/customer/check-info"),
    GET_USER_INFOR: setRouteInfo("/customer/info"),
    ADD_USERID_DEVICE: setRouteInfo("/customer-map-device/add-token"),
    REMOVE_USERID_DEVICE: setRouteInfo("/customer-map-device/delete-token"),
  
    NCT_SONG_GET_TOP20: setRouteInfo("/nct/song/gettop20"),
    NCT_SONG_SEARCH: setRouteInfo("/nct/song/search"),
    NCT_PLAYLIST_GET_TOP20: setRouteInfo("/nct/playlist/gettop20"),
    NCT_PLAYLIST_SEARCH: setRouteInfo("/nct/playlist/search"),
  
    NCT_MYPLAYLIST_GETALL: setRouteInfo("/nct/myplaylist/getall"),
    NCT_MYPLAYLIST_ADD: setRouteInfo("/nct/myplaylist/add"),
    NCT_MYPLAYLIST_EDIT: setRouteInfo("/nct/myplaylist/edit"),
    NCT_MYPLAYLIST_DELETE: setRouteInfo("/nct/myplaylist/delete"),
    NCT_MYPLAYLIST_ADD_SONG: setRouteInfo("/nct/myplaylist/addsong"),
    NCT_MYPLAYLIST_REMOVE_SONG: setRouteInfo("/nct/myplaylist/removesong"),
  
    PUSH_CONFIG: setRouteInfo("/home-config/push-config-to-thing", false, false, true),
    PUSH_CONFTROL: setRouteInfo("/home-control/push-control-to-thing", false, true),
    GET_CONFIG_BY_HOME: setRouteInfo("/home-config/get-list-config-by-home", false),
    CONFIG_SYSTEM_HC: setRouteInfo("/home/config-system-hc"),
    GET_STATUS_DEVICES: setRouteInfo("/device/get-status-devices", false, true),
  
    CONFIG_LOGIN_LOCAL: setRouteInfo("https://192.168.150.1:3001/user/login"), // http://192.168.150.1 for hcv2
    CONFIG_GET_WIFI_LIST: setRouteInfo("https://192.168.150.1:3001/wifi/list"),
    CONFIG_SETUP_WIFI: setRouteInfo("https://192.168.150.1:3001/wifi/config"),
    CONFIG_SETUP_LAN: setRouteInfo("https://192.168.150.1:3001/device/config-lan"),
    CONFIG_SETUP_3G: setRouteInfo("https://192.168.150.1:3001/device/config-3g"),
    HCG1_LOGIN_LOCAL: setRouteInfo(":3001/user/login"),
    HCG1_AUTHEN_LOCAL: setRouteInfo(":3001/user/authen"),
    BASE_CONFIG_URL: setRouteInfo("https://192.168.150.1"),
  
    CONFIG_CHECK_EXIST_AUTHORIZED_CODE: setRouteInfo("/mac/check-exist-authorized-code"),
    CONFIG_CHECK_WIFI_CODE: setRouteInfo("/mac/check-hc-network"),
    CONFIG_ADD_MAC_TO_HOME: setRouteInfo("/mac/add-hc-to-home"),
  
    GET_LOG_SYSTEM: setRouteInfo("/system-log/log-system"),
    GET_LOG_USER: setRouteInfo("/system-log/system-log-by-customer"),
    GET_LOG_DEVICE: setRouteInfo("/device/get-log-device-by-id"),
    GET_LOG_DEVICES: setRouteInfo("/log/log-device"),
    GET_LOG_HC: setRouteInfo("/log/log-hc"),
    GET_LOG_RULE: setRouteInfo("/log/log-rule"),
    GET_LOG_ACCOUNT: setRouteInfo("/log/log-account"),
    RESET_FACTORY: setRouteInfo("/home/reset-factory"),
    RESET_FACTORY_CONFIRM: setRouteInfo("/home/reset-factory-confirm"),
    GET_LIST_NOTIFI: setRouteInfo("/notify/list"),
    GET_DETAIL_NOTIFI: setRouteInfo("/notify/detail"),
    READ_NOTIFI: setRouteInfo("/notify/is-read"),
    DELETE_NOTIFI: setRouteInfo("/notify/is-hidden"),
    GET_STATUS_HCS: setRouteInfo("/home-status/get-status-hcs"),
    GET_LIST_MUSIC_FROM_HC: setRouteInfo("/hc-music/get-list-music-info", false),
    GET_DETAIL_MUSIC_FROM_HC: setRouteInfo("/hc-music/get-detail-music-file", false),
    ENABLE_VOICE_SERVICE: setRouteInfo("/customer/enable-voice-service"),
    IRV2_GET_LIST_TYPE: setRouteInfo("/ir-template/list-device-type"),
    IRV2_GET_LIST_MANUFACTURE: setRouteInfo("/ir-template/list-manufacture"),
    IRV2_GET_LIST_DATA: setRouteInfo("/ir-template/get-ir-data-by-keys"),
    BACKUP_DATA: setRouteInfo("/home-config/backup"),
    GET_LIST_BACKUPS: setRouteInfo("/home-config/list-backups"),
    RESTORE_DATA: setRouteInfo("/home-config/restore"),
    PIN_CODE_UPDATE: setRouteInfo("/customer/update-pin-code"),
    FORGOT_PIN_CODE: setRouteInfo("/customer/forgot-pin-code"),
    VERIFY_PIN_CODE: setRouteInfo("/customer/verify-pin-code"),
    SET_AUTO_OTA: setRouteInfo("/home/set-hc-auto-ota"),
    GET_LAST_FIRMWARE_VERSION: setRouteInfo("/mac/get-latest-firmware-version"),
    FORCE_UPDATE_OTA: setRouteInfo("/mac/force-update-ota"),
    GET_INFO_HOUSE: setRouteInfo("/home-config/home-config-info"),
    DELETE_BACKUP_DATA: setRouteInfo("/home-config/delete-backup"),
    MILO_LOGIN: setRouteInfo("http://192.168.150.1:3001/login"),
    MILO_SET_MODE: setRouteInfo("http://192.168.150.1:3001/device/config"),
    MILO_GET_LIST_WIFI: setRouteInfo("http://192.168.150.1:3001/network/wifi/bss"),
    MILO_SET_WIFI: setRouteInfo("http://192.168.150.1:3001/network/wifi/sta"),
    MILO_GET_DEVICE_INFO: setRouteInfo("http://192.168.150.1:3001/device/info"),
    MILO_GET_DEVICE_MODE: setRouteInfo("http://192.168.150.1:3001/device/config"),
    MILO_GET_SETTING_INFO: setRouteInfo("http://192.168.150.1:3001/milo"),
    MILO_GET_LIST: setRouteInfo("/milo/list-by-home-id"),
    MILO_GET_INFO: setRouteInfo("/milo/detail"),
    MILO_MAP_HOME: setRouteInfo("/milo/link-milo-with-home"),
    MILO_CHECK_NETWORK: setRouteInfo("/mac/check-hc-network"),
    MILO_CHECK_RESET: setRouteInfo("/milo/check-milo-reset"),
    MILO_ADD_TO_ROOM: setRouteInfo("/milo/add-to-room"),
    MILO_ON_OFF_BLUETOOH: setRouteInfo("/milo/on-off-bluetooth"),
    MILO_CHANGE_VOLUME: setRouteInfo("/milo/change-volume"),
    MILO_SET_TIME_SILENT: setRouteInfo("/milo/set-time-silent"),
    MILO_EDIT: setRouteInfo("/milo/edit"),
    MILO_GET_LIST_VOICE: setRouteInfo("/milo/region-voice-key-list"),
    MILO_CHANGE_VOICE: setRouteInfo("/milo/change-voice"),
    MILO_DELETE: setRouteInfo("/milo/delete"),
    MILO_MUTE: setRouteInfo("/milo/mute"),
    MILO_GET_LIST_BUTTON: setRouteInfo("/milo/scene-virtual-button-list"),
    MILO_LINK_BUTTON: setRouteInfo("/milo/link-button-with-scene"),
    MILO_UNLINK_BUTTON: setRouteInfo("/milo/unlink-button-with-scene"),
    CAMERA_ADD_SERIAL_NUMBER: setRouteInfo("/camera/add"),
    CAMERA_CHECK_SERIAL_NUMBER: setRouteInfo("/camera/check-status-serial-number"),
    CAMERA_GET_HOME_SECRET: setRouteInfo("/camera/home-secret-from-ows"),
    CAMERA_ADD_RECORD: setRouteInfo("/camera/add-record-to-ows"),
    CAMERA_STOP_RECORD: setRouteInfo("/camera/stop-record-from-ows"),
    CAMERA_RECORDING: setRouteInfo("/camera/recording-from-ows"),
    YALE_LOCK_SET_USERNAME: setRouteInfo("/yale-lock/set-username"),
    YALE_LOCK_GET_LOG: setRouteInfo("/yale-lock/get-log"),
    YALE_LOCK_VERIFY_SERIAL_NUMBER: setRouteInfo("/yale-lock/verify-serial-number"),
    NOTIFI_COUNT_UNREAD: setRouteInfo("/notify/number-is-not-read"),
    FEEDBACK_GET_INFO: setRouteInfo("/customer-feedback/get-info"),
    FEEDBACK_UPDATE_INFO: setRouteInfo("/customer-feedback/update-info"),
    FEEDBACK_GET_ALL: setRouteInfo("/customer-feedback/get-feedbacks"),
    FEEDBACK_CREATE: setRouteInfo("/customer-feedback/create"),
    FEEDBACK_UPDATE: setRouteInfo("/customer-feedback/update"),
    FEEDBACK_GET_DETAIL: setRouteInfo("/customer-feedback/get-feedback"),
    AGENCY_ADD_HC: setRouteInfo("/active-hc/add"),
    AGENCY_CONFIRM: setRouteInfo("/active-hc/confirm"),
    AGENCY_SEARCH: setRouteInfo("/active-hc/search"),
    REPLACE_HC: setRouteInfo("/home-config/replace"),
    GET_STATISTIC_DATA: setRouteInfo("/home-status/get-statistic-data", false),
};

export default apiRoutes;