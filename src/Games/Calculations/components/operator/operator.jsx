import { Button } from '../button/button';
import styles from './operator.module.css';

const listItem = ['+', '-', 'X', '/'];

export const Operator = ({operatorList, setOperatorList, setStartGame}) => {

  const clickHandler = (item) => {

    const idxNum = operatorList.findIndex(el => el === item);
    let prevList = [...operatorList];

    if(idxNum === -1) {
      prevList = [...prevList, item];
    } 
    else {
      prevList.splice(idxNum, 1);
    }
    
    setOperatorList([...prevList]);
  }

  const renderList = () => {
    return (
      listItem.map(el => {

        const isSelected = operatorList.find(item => item === el);

        return (
          <div key={el} className={styles.operator_item}
            style={isSelected? {
              borderColor: '#1976d2', backgroundColor: '#1976d2',
              color: '#fff'
            }: {}}
            onClick={()=> clickHandler(el)}
          >
            {el}
          </div>
        )
      })
    )
  }


  return (
    <div className={styles.container}>

      <div className={styles.operator_list} >
        {renderList()}
      </div>

      <div className={styles.buttonContainer} >
        <Button onClick={()=> setStartGame(true)}
          disabled={operatorList.length > 0 ? false: true}
        > 
          Start Game 
        </Button>
      </div>

    </div>
  )
};