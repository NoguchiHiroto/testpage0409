/**
 * @module searchPlans
 * @param {array} selectedLanguages - 現在選択されている言語のリスト
 * @param {object} plan - 現在のstore上のplans
 * @param {object} state 現在のstore上のstate
 * @return {array} - 今回絞り込んだ結果表示する予定の案件リスト
*/
const searchPlans = (selectedLanguages, plan, state) => {
  /**
   * @param {Date} date1 対象となる日付
   * @param {Date} date2 対象となる日付
   * @returns {bool} date1がdate2以上ならtrue,そうでないならfalse
   */
  const twoDatesCompare = (date1, date2) => {
    const ret = (
      date1.getFullYear() >=  date2.getFullYear() ? 
        (1 +date1.getMonth() >=  1 +date2.getMonth() ? 
          (date1.getDate() >=  date2.getDate() ? true 
          : false) 
        : false) 
      : false
      )
    return ret;
    // return true;
  }

  const langlist = state.selectableLanguages.map((lang) => lang.language);
  // 初期化する
  const setBody = {
    plan: plan,
    resultTable: [],
    selectedLanguages: selectedLanguages,
    type: ''
  };
  if (plan.reward_min === '') setBody.plan.reward_min = 0;
  if (plan.reward_max === '') setBody.plan.reward_max = Infinity;
  const reward_min = setBody.plan.reward_min;
  const reward_max = setBody.plan.reward_max;
  const isRewardOk = result => ((parseInt(reward_min) <= result.reward) && (result.reward <= (reward_max === Infinity ? Infinity : parseInt(reward_max))));

  // 全てが選択されている場合
  if (selectedLanguages.includes(langlist[0])) {
    state.data.forEach((ret) => {
      if (isRewardOk(ret)) setBody.resultTable.push(ret);
    });
    setBody.type = 'all';
    return setBody
  }

  // 何も選択されていない場合
  else if (selectedLanguages.length === 0) {
    setBody.type = 'notAnyLanguagesSelected';
    return setBody;
  }
  
  // 全て以外の何か言語が選択されている場合
  else {
    state.data.forEach((ret) =>{
      let isInclude = false;
        for(let lang of ret.language) {
          if (selectedLanguages.includes(lang)) {
            isInclude = true;
            break;
          }
        }
      if (isInclude && isRewardOk(ret)) {
        setBody.resultTable.push(ret);
      }
    });
      
    // その他が選択されている場合
    if (selectedLanguages.includes(langlist[langlist.length - 1])) {
      state.data.forEach((ret) => {
        // 言語項目に登録されていないものを選択してpush
        console.log(ret);
        let isNotInclude = true;
        for(let lang of ret.language) {
          if (state.selectableLanguages.map(l => l.language).includes(lang)) {
            isNotInclude = false;
            break;
          }
        }
        if (isNotInclude && isRewardOk(ret)) {
          setBody.resultTable.push(ret);
        }
      });
    }
      setBody.type = 'anyLanguagesSelected';
      // regiは0時に登録された想定
      setBody.resultTable = setBody.resultTable.filter((body) => twoDatesCompare(new Date(body.regi_date), plan.date_min) && twoDatesCompare(plan.date_max, new Date(body.regi_date)));
      console.log(setBody);
      return setBody;
  }
}

export default searchPlans;