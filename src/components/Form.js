import React, { useState } from 'react';
import shortid from 'shortid';
import { StyleSheet, css } from 'aphrodite-jss';
import classnames from 'classnames';

const style = StyleSheet.create({
    form: {
        display:'flex',
        padding: '15px',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    },
    form__itemOne: {
        minWidth: '70%',
        width: 'max-content',
        marginRight:'10px'
    },
    form__itemTwo: {
        width: '100%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between'
    },
    form__input: {
        boxSizing:'border-box',
        display: 'block',
        width:'100%',
        padding: '10px',
        fontSize:'16px',
        border:'none',
        backgroundColor: 'transparent',
        boxShadow: '0 0 3px'
    },
    form__inputTitle: {
        marginBottom:'10px',
    },
    form__inputContent: {
        resize:'none'
    },
    form__titleHashtags: {
        display:'block',
        paddingBottom: '5px',
        fontWeight:'bold'
    },
    form__hashtags: {
        width: '100%',
        paddingLeft:'10px',
        border: 'none',
        background: 'transparent',
        boxShadow: '0 0 3px'
    },
    form__submit: {
        padding: '10px',
        fontSize: '16px',
        textTransform:'uppercase',
        background: '#00CC00',
        color: 'black',
        borderRadius: '10px',
        boxShadow: '0 0 2px 1px',
        cursor:'pointer'
    },
    form__submitEnabled: {
        background: '#FF0800',
        boxShadow: '0 0 2px 1px'
    }
})

function Form({ handlerSubmit }) {

    const [inputTitleValue, setInputTitleValue] = useState('');
    const [inputContentValue, setInputContentValue] = useState('');
    const [inputTagValue, setInputTagValue] = useState([]);

    function handlerDropdown(el) {

         setInputTagValue(prev => {
             return prev.includes('#' + el) ? prev : [...prev, '#' + el];
        })
    }
    return (
        <form className={css(style.form)}
            onSubmit={e => {e.preventDefault();
            
                const article = {
                    title: inputTitleValue,
                    content: inputContentValue,
                    hashtags: inputTagValue,
                    id: shortid(),
                };

                setInputTitleValue('');
                setInputContentValue('');
                setInputTagValue([]);
                handlerSubmit(article);

                e.target.reset();
            }}>
            
            <div className={css(style.form__itemOne)}>
                <input
                    className={css(style.form__input, style.form__inputTitle)}
                    type='text'
                    placeholder='title'
                    onInput={e => setInputTitleValue(e.target.value)}
                />

                <textarea
                    className={css(style.form__input, style.form__inputContent)}
                    rows='10'
                    placeholder='content'
                    onChange={e => setInputContentValue(e.target.value)}
                ></textarea>
            </div>

            <div className={css(style.form__itemTwo)}>
                <div>
                    <label className={css(style.form__titleHashtags)}
                        htmlFor='hashtags'>Choose a category</label>
                    <select className={css(style.form__hashtags)}
                        id='hashtags'
                        multiple
                        size='5'
                        onInput={e => {
                            handlerDropdown(e.target.value);
                            const indexSelectedOption = e.target.options.selectedIndex;
                            e.target.options[indexSelectedOption].style.display = 'none';
                        }}>
                        <option >sport</option>
                        <option >hobby</option>
                        <option >travels</option>
                        <option >tasks</option>
                        <option >psychology</option>
                        <option >work</option>
                        <option >music</option>
                        <option >courses</option>
                        <option >shoping</option>
                    </select>
                </div>

                <button className={classnames(
                    css(style.form__submit),
                        {[css(style.form__submitEnabled)]:
                        !inputTitleValue || !inputContentValue || !inputTagValue.length}
                )}
                    type='submit'
                    disabled={!inputTitleValue.trim()
                        || !inputContentValue.trim()
                        || !inputTagValue.length
                    }
                    onClick={() => {
                        const options = document.querySelectorAll('option');
                        options.forEach(el => el.style.display = 'block')
                    }}
                >
                    Create article
                </button>
            </div>
        </form>
    )
}

export default Form;