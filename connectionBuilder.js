(function dsbuilder(attr) {
    // Set keys for properties needed for connecting using JDBC.
    var KEY_USER = "user";
    var KEY_PASSWORD = "password";
    var KEY_SSL = "ssl";

    // Set connection properties from existing attributes.
    var params = [];
    params[KEY_USER] = attr[connectionHelper.attributeUsername];
    params[KEY_PASSWORD] = attr[connectionHelper.attributePassword];

    if (attr["sslmode"] !== "") {
        params[KEY_SSL] = "true";
    }

    var formattedParams = [];
    for (var key in params) {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    var urlBuilder = "jdbc:dremio:direct=" + attr["server"] + ":" + attr["port"] + ";";
    urlBuilder += formattedParams.join(";");
    
    return [urlBuilder];
})