
import { useState } from 'react';
import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CoreComponent from './components/CoreComponent';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {
  const [ selectedTopic, setSelectedTopic] = useState('components');

  function hanldeSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header/>
      
      <main>
        <section id='core-concepts'>
        <h2>CORE CONCEPTS</h2>
        <ul>
          <CoreComponent 
                 title={CORE_CONCEPTS[0].title}
                 description={CORE_CONCEPTS[0].description}
                 image={CORE_CONCEPTS[0].image}
          />
                    <CoreComponent 
                 title={CORE_CONCEPTS[1].title}
                 description={CORE_CONCEPTS[1].description}
                 image={CORE_CONCEPTS[1].image}
          />
                    <CoreComponent 
                 title={CORE_CONCEPTS[2].title}
                 description={CORE_CONCEPTS[2].description}
                 image={CORE_CONCEPTS[2].image}
          />
                    <CoreComponent 
                 title={CORE_CONCEPTS[3].title}
                 description={CORE_CONCEPTS[3].description}
                 image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => hanldeSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => hanldeSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => hanldeSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => hanldeSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
