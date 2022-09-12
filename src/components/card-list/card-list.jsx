import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log(this.props);
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-contaniner" key={id}>
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
