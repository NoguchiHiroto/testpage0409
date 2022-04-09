
function changePlan_title(payload) {
  return {
    type: 'changePlan_title',
    payload: payload
  }
}


function changePlan_reward_min(payload) {
  return {
    type: 'changePlan_reward_min',
    payload: payload
  }
}

function changePlan_reward_max(payload) {
  return {
    type: 'changePlan_reward_max',
    payload: payload
  }
}
function changePlan_date_min(payload) {
  return {
    type: 'changePlan_date_min',
    payload: payload
  }
}
function changePlan_date_max(payload) {
  return {
    type: 'changePlan_date_max',
    payload: payload
  }
}

function changePlan_term(payload) {
  return {
    type: 'changePlan_term',
    payload: payload
  }
}

function changePlan_detail(payload) {
  return {
    type: 'changePlan_detail',
    payload: payload
  }
}

function changePlan_place(payload) {
  return {
    type: 'changePlan_place',
    payload: payload
  }
}

function changePlan_necessarySkills(payload) {
  return {
    type: 'changePlan_necessarySkills',
    payload: payload
  }
}

function changePlan_additionalSkills(payload) {
  return {
    type: 'changePlan_additionalSkills',
    payload: payload
  }
}


function changePlan_devStyles(payload) {
  return {
    type: 'changePlan_devStyles',
    payload: payload
  }
}


function changePlan_tool(payload) {
  return {
    type: 'changePlan_tool',
    payload: payload
  }
}


function changePlan_others(payload) {
  return {
    type: 'changePlan_others',
    payload: payload
  }
}


function changePlan_language(payload) {
  return {
    type: 'changePlan_language',
    payload: payload
  }
}

function changeSelectedIndex(payload) {
  return {
    type: 'changeSelectedIndex',
    payload: payload
  }
}


function changeSelectableLanguages(payload) {
  return {
    type: 'changeSelectableLanguages',
    payload: payload
  }
}

function changeSelectedLanguages(payload) {
  return {
    type: 'changeSelectedLanguages',
    payload: payload
  }
}

function changeSelectedPlanData(payload) {
  return {
    type: 'changeSelectedPlanData',
    payload: payload
  }
}
 
function changeProgressLang(payload) {
  return {
    type: 'changeProgressLang',
    payload: payload
  }
}


function changeProgressPlans(payload) {
  return {
    type: 'changeProgressPlans',
    payload: payload
  }
}


function changeData(payload) {
  return {
    type: 'changeData',
    payload: payload
  }
}


function changeResultTable(payload) {
  return {
    type: 'changeResultTable',
    payload: payload
  }
}


function changePlan(payload) {
  return {
    type: 'changePlan',
    payload: payload
  }
}


function changePage(payload) {
  return {
    type: 'changePage',
    payload: payload
  }
}


function changeRowsPerPage(payload) {
  return {
    type: 'changeRowsPerPage',
    payload: payload
  }
}

function changeModalOpen(payload) {
  return {
    type: 'changeModalOpen',
    payload: payload
  }
}

// export function getData(url) {
//   return function(dispatch) {
//     const response = fetch(url);

//     dispatch({type: 'getData', payload: response.json()})
//   }
// }

// 案件についての情報
export const changePlansAction = {
  title: changePlan_title,
  reward_min: changePlan_reward_min,
  reward_max: changePlan_reward_max,
  date_min: changePlan_date_min,
  date_max: changePlan_date_max,
  term: changePlan_term,
  detail: changePlan_detail,
  place: changePlan_place,
  necessarySkills: changePlan_necessarySkills,
  additionalSkills: changePlan_additionalSkills,
  devStyles: changePlan_devStyles,
  tool: changePlan_tool,
  others: changePlan_others,
  language: changePlan_language
}

// 絞り込みを行うにあたっての情報
export const changeStateAction = {
  changeSelectedIndex: changeSelectedIndex,
  changeSelectableLanguages: changeSelectableLanguages,
  changeSelectedLanguages: changeSelectedLanguages,
  changeSelectedPlanData: changeSelectedPlanData,
  changeProgressLang: changeProgressLang,
  changeProgressPlans: changeProgressPlans,
  changeData: changeData,
  changeResultTable: changeResultTable,
  changePlan: changePlan,
  changePage: changePage,
  changeRowsPerPage: changeRowsPerPage,
  changeModalOpen: changeModalOpen,
}

