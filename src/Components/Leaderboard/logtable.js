import React, { useEffect, useState } from "react";
import "./table.css";
// import axios from 'axios';
// import JSONData from './sampletable.json'

const get_leaderboard_data = () => {
  /*
    return new Promise ((resolve, reject) => {
        axios
            .get(endpoint)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    });
    */
  return new Promise((resolve, reject) => {
    resolve(JSONData);
  });
};

const Scores = (props) => {
  const [scores, setScores] = useState();
  const [isSortAsc, setIsSortAsc] = useState(true);

  useEffect(() => {
    get_leaderboard_data()
      .then((data) => {
        // sanitize the scores
        var player_score_object = {};
        data.map((score) => {
          if (!player_score_object.hasOwnProperty(score.contributor)) {
            player_score_object[score.contributor] = 0;
          }
          var clean_score = parseInt(score.points);
          player_score_object[score.contributor] += clean_score;
          return null;
        });

        // load into a list and sort
        var scores_array = [];
        for (var key in player_score_object) {
          scores_array.push({
            contributor: key,
            score: player_score_object[key],
          });
        }

        //console.log(scores_array)
        scores_array.sort((first, second) => second.score - first.score);
        setScores(scores_array);
        //console.log(scores_array)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const sortArray = () => {
    let sortedArr = [...scores];
    if (isSortAsc) {
      sortedArr.sort((a, b) => {
        return a.score - b.score;
      });
      setScores(sortedArr);
    } else {
      sortedArr.sort((a, b) => {
        return b.score - a.score;
      });
      setScores(sortedArr);
    }

    setIsSortAsc(!isSortAsc);
  };

  return (
    <>
      <button className="toggleSort" onClick={sortArray}>
        Toggle sort &#8593; &#8595;
      </button>
      <table align="center">
        <thead>
          <tr>
            <th> Position </th>
            <th> Contributor </th>
            <th> Bounty </th>
          </tr>
        </thead>
        <tbody>
          {scores &&
            scores.map((score, index) => {
              return (
                <tr key={score.contributor}>
                  <td> {index + 1} </td>
                  <td> {score.contributor} </td>
                  <td> {score.score} </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Scores;