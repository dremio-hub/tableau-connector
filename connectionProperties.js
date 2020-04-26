(function propertiesbuilder(attr) {
    function isEmpty(str) {
        return (!str || 0 === str.length); 
    }

    var props = {};
    props["user"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];
    
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

    if (attr["sslmode"] !== "") {
        props["ssl"] = "true";
    }

    return props;
})