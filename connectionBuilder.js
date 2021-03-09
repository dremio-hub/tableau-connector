(function dsbuilder(attr) {
    var urlBuilder = "jdbc:dremio:direct=" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + ";";
    
    return [urlBuilder];
})