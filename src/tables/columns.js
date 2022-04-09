import arrayProperties from "./arrayProperties.js";

const arrayProp = arrayProperties.map((prop) => {
  return {
    id: prop[0],
    label: prop[1],
    minWidth: prop[2]
  }
})
const columns = [
  {id: 'regi_date', label: '登録日', minWidth: 70 },
  {id: 'title', label: 'タイトル', minWidth: 300 },
  {id: 'reward',label: '報酬',minWidth: 50},
  {id: 'term',label: '期間',minWidth: 170},
  ...arrayProp,
];

export default columns;