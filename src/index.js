import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.scss';
// Helpers
import Section from './helpers/Section';

// Hooks import
import UseState1Example from './hooks/UseState1Example';
import UseState2Example from './hooks/UseState2Example';
import UseContextExample from './hooks/UseContextExample';
import UseEffectExample from './hooks/UseEffectExample';
import UseYourOwnHookExample from './hooks/UseYourOwnHookExample';

// Classes Import
import ClassesState1Example from './hooks/ClassesState1Example';
import ClassesState2Example from './hooks/ClassesState2Example';
import ClassesContextExample from './hooks/ClassesContextExample';
import ClassesEffectExample from './hooks/ClassesEffectExample';

const VISIBLE = {
  IS_USE_STATE1: 'UseHooksExample',
  IS_USE_STATE2: 'UseState2Example',
  IS_USE_CONTEXT: 'UseContextExample',
  IS_USE_EFFECT: 'UseEffectExample',
  IS_USE_YOUR_OWN_HOOK: 'UseYourOwnHookExample',
};

const App = () => {
  const state = {
    isVisible: [
      VISIBLE.IS_USE_STATE1,
      // VISIBLE.IS_USE_STATE2,
      // VISIBLE.IS_USE_CONTEXT,
      // VISIBLE.IS_USE_EFFECT,
      // VISIBLE.IS_USE_YOUR_OWN_HOOK,
      // VISIBLE.IS_USE_REDUCER_VISIBLE,
    ],
  };

  const { isVisible } = state;
  const HOOKS_HEADING = <h1 className="heading">Hooks Way</h1>;
  const CLASSES_HEADING = <h1 className="heading">Classes way</h1>;

  return (
    <div>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_STATE1)}
        heading="useState1"
        sectionBg="example-gradient-bg"
      >
        <div>
          {CLASSES_HEADING}
          <ClassesState1Example />
        </div>
        <div>
          {HOOKS_HEADING}
          <UseState1Example />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_STATE2)}
        heading="useState2"
        sectionBg="example-gradient-bg"
      >
        <div>
          {CLASSES_HEADING}
          <ClassesState2Example />
        </div>
        <div>
          {HOOKS_HEADING}
          <UseState2Example />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_CONTEXT)}
        heading="useContext"
        sectionBg="example-gradient-bg"
      >
        <div>
          {CLASSES_HEADING}
          <ClassesContextExample />
        </div>
        <div>
          {HOOKS_HEADING}
          <UseContextExample />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_EFFECT)}
        heading="useEffect"
        sectionBg="example-gradient-bg"
      >
        <div>
          {CLASSES_HEADING}
          <ClassesEffectExample />
        </div>
        <div>
          {HOOKS_HEADING}
          <UseEffectExample />
        </div>
      </Section>
      <Section
        isVisible={isVisible.includes(VISIBLE.IS_USE_YOUR_OWN_HOOK)}
        heading="useYourOwnHook"
        sectionBg="example-gradient-bg"
      >
        <div>
          {CLASSES_HEADING}
          <p>No custom hooks in classes :(</p>
        </div>
        <div>
          {HOOKS_HEADING}
          <UseYourOwnHookExample />
        </div>
      </Section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
