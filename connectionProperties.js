(function propertiesbuilder(attr) {
    function isEmpty(str) {
        return (!str || 0 === str.length); 
    }

    var props = {};
    var username = "";
    var password = "";

    var authMethod = attr[connectionHelper.attributeAuthentication];

    if (authMethod == "basic") {
        username = attr[connectionHelper.attributeUsername];
        password = attr[connectionHelper.attributePassword];
    } else if (authMethod == "token-auth") {
        password = attr[connectionHelper.attributeToken];
    }

    props["user"] = username;
    props["password"] = password;

    if (attr["sslmode"] !== "") {
        props["ssl"] = "true";
    }
    
    if (attr["workgroup-auth-mode"] == "db-impersonate") {
        var str = attr[":workgroup-auth-user"];
        
        if (!isEmpty(str)) {
            // Strip domain, if any
            var arr = str.split("\\");
            if (arr.length == 2) {
                props["impersonation_target"] = arr[1];
            } else {
                props["impersonation_target"] = str;
            }
        }
    }

    return props;
})
