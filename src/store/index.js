import { createStore, combineReducers } from 'redux';

// const getDataReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'getData':
//       return action.payload
//     default:
//       return state;
//   }
// }
const initialPlan = { // 絞り込み条件を管理
  title: '',
  reward_min: 0,
  reward_max: Infinity,
  date_min: new Date('2017-01-01'),
  date_max: new Date(),
  term: '', 
  detail: [],
  place: [],
  necessarySkills: [],
  additionalSkills: [],
  devStyles: [],
  tool: [],
  others: [],
  language: [],
};
const planReducer = (state = initialPlan, action) => {
  switch(action.type) {
    case 'changePlan_title':
      return {
        ...state,
        title: action.payload
      }

    case 'changePlan_reward_min':
      return {
        ...state,
        reward_min: action.payload
      };

    case 'changePlan_reward_max':
      return {
        ...state,
        reward_max: action.payload
      };

    case 'changePlan_date_min':
      return{
        ...state,
        date_min: action.payload
      }
    case 'changePlan_date_max':
      return{
        ...state,
        date_max: action.payload
      }

    case 'changePlan_term':
      return {
        ...state,
        term: action.payload
      };

    case 'changePlan_detail':
      return {
        ...state,
        detail: action.payload
      };

    case 'changePlan_place':
      return {
        ...state,
        place: action.payload
      };

    case 'changePlan_necessarySkills':
      return {
        ...state,
        necessarySkills: action.payload
      };

    case 'changePlan_additionalSkills':
      return {
        ...state,
        additionalSkills: action.payload
      };

    case 'changePlan_devStyles':
      return {
        ...state,
        additionalSkills: action.payload
      };

    case 'changePlan_tool':
      return {
        ...state,
        additionalSkills: action.payload
      };

    case 'changePlan_others':
      return {
        ...state,
        others: action.payload
      };

    case 'changePlan_language':
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
}

const initialSelectedPlanData = { // 絞り込み条件を管理
  title: '',
  reward: '',
  date: '',
  term: [], // [検索開始,　検索s終了] 
  detail: [], // 箇条書きのスタイル
  place: [], // 箇条書きのスタイル
  necessarySkills: [], // 箇条書きのスタイル
  additionalSkills: [], // 箇条書きのスタイル
  devStyles: [], // 箇条書きのスタイル
  tool: [], // 箇条書きのスタイル
  others: [], // 箇条書きのスタイル
};
/**
 * @param {array} selectedIndex - true, falseで現在選択されているかの状態を格納する
 */
const initialState = {
  selectedIndex: null,
  selectableLanguages: [],
  selectedLanguages: [],
  selectedPlanData: initialSelectedPlanData,
  progressLang: true,
  progressPlans: true,
  data: [],
  resultTable: null,
  plan: initialPlan,
  page: 0,
  rowsPerPage: 10,
  modalOpen: false,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'changeSelectedIndex':
      return {
        ...state,
        selectedIndex: action.payload, 
      }
    case 'changeSelectableLanguages':
      return {
        ...state,
        selectableLanguages: action.payload, 
      }

    case 'changeSelectedLanguages':
      return {
        ...state,
        selectedLanguages: action.payload
      }
    
    case 'changeSelectedPlanData':
      return {
        ...state,
        selectedPlansData: action.payload
      }

    case 'changeProgressLang':
      return {
        ...state,
        progressLang: action.payload
      }
    case 'changeProgressPlans':
      return {
        ...state,
        progressPlans: action.payload
      }
    case 'changeData':
      return {
        ...state,
        data: action.payload
      }
    case 'changeResultTable':
      return {
        ...state,
        resultTable: action.payload
      }
    case 'changePlan':
      return {
        ...state,
        plan: action.payload
      }
    case 'changePage':
      return {
        ...state,
        page: action.payload
      }
    case 'changeRowsPerPage':
      return {
        ...state,
        rowPerPage: action.payload
      }
    case 'changeModalOpen':
      return {
        ...state,
        modalOpen: action.payload
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  planReducer,
  stateReducer,
  // getDataReducer,
})

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer);
export default store;