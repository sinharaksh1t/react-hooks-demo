import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.scss';
// Helpers
import Section from './helpers/Section';
// Examples
import { Greeting, GreetingClass } from './hooks/UseStateExample';
import { Context, ContextClass } from './hooks/UseContextExample';
import { Title, TitleClass } from './hooks/UseEffectExample';
import { CustomHook } from './hooks/UseCustomHooks';
import PokemonInfo from './hooks/UseReducerExample';
import Progress from './animations/Progress';
import Fade from './animations/Fade';

const VISIBLE = {
  IS_USE_STATE_VISIBLE: 'UseStateExample',
  IS_USE_CONTEXT_VISIBLE: 'UseContextExample',
  IS_USE_EFFECT_VISIBLE: 'UseEffectExample',
  IS_USE_CUSTOM_HOOKS_VISIBLE: 'UseCustomHooks',
  IS_USE_REDUCER_VISIBLE: 'UseReducerExample',
  IS_REACT_SPRING_1_VISIBLE: 'Progress',
  IS_REACT_SPRING_2_VISIBLE: 'Fade',
};

const App = () => {
  const state = {
    isVisible: [
      VISIBLE.IS_USE_STATE_VISIBLE,
      VISIBLE.IS_USE_CONTEXT_VISIBLE,
      VISIBLE.IS_USE_EFFECT_VISIBLE,
      VISIBLE.IS_USE_CUSTOM_HOOKS_VISIBLE,
      VISIBLE.IS_USE_REDUCER_VISIBLE,
    ],
  };

  const { isVisible } = state;
  const HOOKS_HEADING = <h1 className="heading">Hooks Way</h1>;
  const CLASSES_HEADING = <h1 className="heading">Classes way</h1>;

  return (
    <div>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_STATE_VISIBLE)}
        heading="useState"
        sectionBg="example-gradient-bg"
      >
        <div>
          {HOOKS_HEADING}
          <Greeting />
        </div>
        <div>
          {CLASSES_HEADING}
          <GreetingClass />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_CONTEXT_VISIBLE)}
        heading="useContext"
        sectionBg="example-gradient-bg"
      >
        <div>
          {HOOKS_HEADING}
          <Context />
        </div>
        <div>
          {CLASSES_HEADING}
          <ContextClass />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_EFFECT_VISIBLE)}
        heading="useEffect"
        sectionBg="example-gradient-bg"
      >
        <div>
          {HOOKS_HEADING}
          <Title />
        </div>
        <div>
          {CLASSES_HEADING}
          <TitleClass />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_CUSTOM_HOOKS_VISIBLE)}
        heading="useCustomHooks"
        sectionBg="example-gradient-bg"
      >
        <div>
          {HOOKS_HEADING}
          <CustomHook />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_REDUCER_VISIBLE)}
        heading="useReducer"
        sectionBg="example-gradient-bg"
      >
        <div>
          <h1 className="heading">Count Example</h1>
          <PokemonInfo />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_REACT_SPRING_1_VISIBLE)}
        heading="React Spring Progress Bar Example"
        sectionBg="gainsboro-bg"
      >
        <Progress />
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_REACT_SPRING_2_VISIBLE)}
        heading="React Spring Fade Bar Example"
        sectionBg="gainsboro-bg"
      >
        <Fade />
      </Section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
