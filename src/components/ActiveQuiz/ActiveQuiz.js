import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <b>{ props.answerNumber }.&nbsp;</b>
                { props.question }
            </span>

            <small>{ props.answerNumber } из { props.quizLength }</small>
            </p>

            <ul>
                <AnswersList 
                state={props.state}
                    answers={props.answers}
                    onAnswerClick={props.onAnswerClick}
                />
            </ul>
        </div>
    )
}

export default ActiveQuiz