// expo db 연동
import { SQLite } from "expo";
const db = SQLite.openDatabase("kokdb");

// componentdidMount()에 들어가야하는 값
const selectJurneyData = function(data) {
  db.transaction(tx => {
    tx.executeSql(
      `select * from jurney where username = ?;`,
      [data.username],
      (_, { rows: { _array } }) => {
        _array.array.forEach(element => {
          const { information } = this.state;
          this.setState({
            information: information.concat({ id: this.id++, ...element })
          });
        });
      }
    );
  });
};

// TODO mapping 하는방법
// const list = data.map(
//   (info, index) => (<PhoneInfo key={index} info={info}/>)
// );
