import searchPlans from './search.js';

export const checkHandler = (event) => {
  const selectedIndex = [];
  const setBody = selectedLanguages.map((selectedLang => selectedLang));
  // 選択された言語のstateを更新
  setBody[index] = event.target.checked;
  dispatch(changeStateAction.changeSelectedLanguage(setBody));
  setBody.forEach((lang, index) => {
    if (lang) selectedIndex.push(index);
  });
  dispatch(changeStateAction.changeSelectedLanguage(selectedIndex.map(i => languages[i].language)));
  // searchPlans(props, selectedIndex, props.plan.reward_min, props.plan.reward_max, languages);
  console.log(selectedLanguages);
  searchPlans(selectedLanguages, plan, state);
}