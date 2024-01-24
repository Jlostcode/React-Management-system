import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image':'https://picsum.photos/64​',
  'name':'소수빈',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},
{
'id': 2,
'image':'https://source.unsplash.com/user/haha/64x64',
'name':'하하',
'birthday':'900822',
'gender':'남자',
'job':'연예인'
},
{
'id': 3,
'image':'https://source.unsplash.com/user/jaeseok/64x64',
'name':'유재석',
'birthday':'801013',
'gender':'남자',
'job':'연예인'
},
]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
