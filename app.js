const uploaderSarseConfig = { serverId: 6373, active: true };

const uploaderSarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6373() {
    return uploaderSarseConfig.active ? "OK" : "ERR";
}

console.log("Module uploaderSarse loaded successfully.");