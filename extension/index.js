"use strict";

module.exports = function (nodecg) {
  nodecg.Replicant("speakerReplicant", { defaultValue: "Puhuja" });
  nodecg.Replicant("titleReplicant", { defaultValue: "Puhujan titteli" });
};
