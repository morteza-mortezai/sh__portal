import Api from "@/services/Api";
const ControllerName = "peoplerequest";

export default {
  // getAll(pageSize = 0, pageIndex = 0) {
  //   return Api.get(
  //     `/` +
  //       ControllerName +
  //       `/Get?PageSize=` +
  //       pageSize +
  //       `&PageNo=` +
  //       pageIndex
  //   );
  // },
  // getByFormulaTypeId(pageSize = 0, pageIndex = 0, formulaTypeId) {
  //   return Api.get(
  //     `/` +
  // ControllerName +
  //       `/Get?PageSize=` +
  //       pageSize +
  //       `&PageNo=` +
  //       pageIndex +
  //       `&DataField.FormulaTypeId=` +
  //       formulaTypeId
  //   );
  // },
  // searchBomFormula(pageSize = 0, pageIndex = 0, searchExperssion) {
  //   return Api.get(
  //     `/` +
  //       ControllerName +
  //       `/Get?PageSize=` +
  //       pageSize +
  //       `&PageNo=` +
  //       pageIndex +
  //       `&BomFormulaSearchExperssion=` +
  //       searchExperssion
  //   );
  // },
  add(model) {
    return Api.post(`/` + ControllerName + `/add`, model);
  },
  update(model) {
    return Api.put(`/` + ControllerName + `/Update`, model);
  },
  delete(model) {
    return Api.delete(`/` + ControllerName + `/Delete/` + model.id);
  },
};
