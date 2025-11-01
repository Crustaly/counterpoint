import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import './ArticleView.css';

// Article data moved to separate file to share between components
export const articleData = [
  { 
    id: 1, 
    category: 'US Politics', 
    title: "Judge rules Trump can't require citizenship proof on federal voting form – as it happened", 
    source: 'The Guardian',
    image: '/images/uspolitics.png',
    questions: [
      "How much do you support the judge blocking a citizenship-proof voting rule?",
      "To what extent do you agree with keeping SNAP benefits flowing during the shutdown?",
      "Do you agree with eliminating the Senate filibuster to end political gridlock?",
      "How concerned are you about U.S. strikes on alleged drug-smuggling boats?",
      "To what extent do you support restricting journalist access inside the White House?"
    ],
    content: `President Donald Trump's request to add a documentary proof of citizenship requirement to the federal voter registration form cannot be enforced, a federal judge ruled Friday.

US District Judge Colleen Kollar-Kotelly in Washington, DC, sided with Democratic and civil rights groups that sued the Trump administration over a March executive order to overhaul US elections.

She ruled that the proof-of-citizenship directive is an unconstitutional violation of the separation of powers, dealing a blow to the administration and its allies who have argued that such a mandate is necessary to restore public confidence that only Americans are voting in US elections.

"Because our Constitution assigns responsibility for election regulation to the States and to Congress, this Court holds that the President lacks the authority to direct such changes," Kollar-Kotelly wrote in her opinion.

She further emphasized that on matters related to setting qualifications for voting and regulating federal election procedures, "the Constitution assigns no direct role to the President in either domain."

Kollar-Kotelly echoed comments she made when she granted a preliminary injunction over the issue.

The ruling grants the plaintiffs a partial summary judgment that prohibits the proof-of-citizenship requirement from going into effect. It says the US Election Assistance Commission, which has been considering adding the requirement to the federal voter form, is permanently barred from taking action to do so.

In a statement, Sophia Lin Lakin of the ACLU, one of the plaintiffs in the case, called the ruling "a clear victory for our democracy. President Trump's attempt to impose a documentary proof of citizenship requirement on the federal voter registration form is an unconstitutional power grab."

A message seeking comment from the White House was not immediately returned.

While a top priority for Republicans, attempts to implement documentary proof-of-citizenship requirements for voting have been fraught. The US House passed a citizenship mandate last spring that has stalled in the Senate, and several attempts to pass similar legislation in the states have proved equally difficult.

Such requirements have created problems and confusion for voters when they have taken effect at the state level. It presents particular hurdles for married women who have changed their name, since they might need to show birth certificates and marriage certificates as well as state IDs. Those complications arose earlier this year when a proof-of-citizenship requirement took effect for the first time during local elections in New Hampshire.`
  },
  { 
    id: 2, 
    category: 'Geopolitics', 
    title: 'America and China Can Have a Normal Relationship', 
    source: 'Foreign Affairs',
    image: '/images/chinaforeignaffairs.png',
    questions: [
      "How much do you support the idea that the U.S. and China must avoid being enemies even if they aren't friends?",
      "To what extent do you agree with the claim that structural forces—not just leadership choices—shape U.S.–China relations?",
      "How much do you support a re-balanced U.S.–China relationship that emphasises coexistence over confrontation?",
      "How concerned are you about the current trade frictions and export restrictions between the U.S. and China?",
      "To what extent do you agree with the article's view that cooperation on global issues (such as climate, AI, health) remains crucial despite strategic rivalry?"
    ],
    content: `In the repeated cycles of confrontation and détente that define U.S.-Chinese relations, a paradox has emerged. Economic relations between the two countries are more fraught than ever: in early October, for the second time in just six months, the United States and China launched a trade war, imposing prohibitive export restrictions and threatening to raise tariffs to previously unthinkable levels.

Yet the U.S.-Chinese relationship also appears increasingly resilient. Although leaders in both Washington and Beijing have seemingly shrugged their shoulders at the rapid decoupling of the world's two largest economies, the first bout of trade escalation in April and May gave way to a period of relative calm. Over the past ten months and even during the final two years of the Biden administration, U.S.-Chinese relations have been showing signs of rebalancing. Each time a crisis has arisen, such as when a Chinese unmanned high-altitude balloon flew into American airspace in 2023, U.S. and Chinese leaders have sought to quickly stabilize ties, suggesting that the world's two largest economies still share a structural need for a broadly steady relationship.

These contradictory trends signal that the U.S.-Chinese relationship might be at an inflection point. Neither Washington nor Beijing harbors any illusions that the two countries can return to the pre-2017 era, in which interdependence and engagement, rather than decoupling and strategic competition, were its defining features. But short-term economic spats and tactical maneuvering for potential deals should not obscure the possibility that the United States and China can move beyond an era of adversarial competition toward a more normal relationship—one in which they can coexist peacefully in a state of cool but not hostile interactions. The meeting between U.S. President Donald Trump and Chinese leader Xi Jinping this week in South Korea presents a narrow but important opportunity for the United States and China to enter a new phase of bilateral relations.

The possibility of an inflection point stems in part from changes in U.S. foreign policy. From Beijing's perspective, Trump's first term marked the onset of a period of strategic competition in which the United States, viewing China as its most serious adversary and competitor, sought primarily to contain or slow China's economic and technological rise. It was, in other words, the United States versus China. Under President Joe Biden, Washington maintained the same goals but sought to do so in concert with its allies—the West versus China. For strategists and policymakers in China, both Trump and Biden believed that American and Chinese interests were fundamentally at odds, and therefore the only option was unyielding competition that left no room for compromise.

Although Trump has continued to pressure China in his second term, U.S. foreign policy has shifted. Trump has recalibrated the United States' economic and security relations with the entire world. His so-called Liberation Day tariffs in April, for instance, targeted more than 100 countries, including many U.S. allies. The Trump administration has repeatedly pressured longtime U.S. partners in Europe to pay for more of their own security, even at the cost of straining ties. Trump's approach can no longer be characterized as the United States or its allies versus China, but rather the United States versus the rest of the world.`
  },
  { 
    id: 3, 
    category: 'Censorship & Free Speech', 
    title: 'Free Speech At Risk in America\'s Schools', 
    source: 'ACLU',
    image: '/images/education-needs-free-speech-f.jpg',
    questions: [
      "How strongly do you support students having full freedom to voice opinions in school, without fear of censorship?",
      "To what extent do you agree that book bans and curriculum restrictions in schools threaten students' First Amendment rights?",
      "How much do you believe school-authorities' restrictions on speech are justified to maintain discipline and order?",
      "How concerned are you that efforts to ban or remove books disproportionately affect marginalized voices and viewpoints?",
      "To what extent do you agree that protecting free speech in K-12 education is essential for democracy and future civic engagement?"
    ],
    content: `From military bases to public universities, censorship is spreading. The ACLU is pushing back to protect the right to read, learn, and speak without fear.

Across the country, lawmakers and federal agencies are attempting to censor what students and educators can read, learn, and discuss in classrooms. These efforts—whether banning books in Department of Defense schools, silencing teachers in Oklahoma and Florida, or chilling protests at universities—strip away fundamental rights and limit opportunities for an honest, inclusive education.

At the ACLU, we know that our rights don't disappear at the schoolhouse gate. When government officials suppress ideas about race, gender, identity, or systemic inequality, they not only deny students an accurate education, they undermine democracy itself. That's why we're challenging these laws and policies in court: to ensure that classrooms remain places where young people can think critically, engage with diverse perspectives, and prepare to participate fully in civic life.

In 2025, 12 students in Department of Defense schools (DoDEA) on military bases around the world sued after the agency removed books and altered curricula related to race, gender, and LGBTQ issues. These actions followed executive orders banning "gender ideology" and so-called "divisive concepts" in federal agencies. The case highlights how presidential edicts can directly impact educational content for military families.

At the ACLU, we know that DoDEA's actions violate students' First Amendment rights and deny them a comprehensive and high-quality education. Censorship undermines students' ability to learn and signals to marginalized students that their identities and experiences are less valued. Protecting access to diverse content is essential to uphold both constitutional rights and educational standards.

The outcome could set a precedent for educational censorship. A ruling in favor of students would affirm the right to inclusive, diverse, and fact-based education. It would also strengthen protections for LGBTQ+ youth and students of color nationwide.`
  },
  { 
    id: 4, 
    category: 'Tech Influence & Ethics', 
    title: "Philanthropists to invest €427 million to curbs tech giants' influence on new AI", 
    source: 'EuroNews',
    image: '/images/euronews.png',
    questions: [
      "How much do you support philanthropic investment of $500 million over five years to rebalance AI development away from tech-giants?",
      "To what extent do you agree that AI should be designed with human flourishing rather than mere efficiency and profit as its goal?",
      "Do you agree with the idea that a small number of large tech companies should not have disproportionate influence over the future of AI?",
      "How concerned are you that current AI deployment may be worsening issues like job loss, misinformation, and climate impact rather than helping people?",
      "To what extent do you support the idea that AI-funding coalitions should prioritise areas like democracy, education, artists' rights, and work equity over purely commercial AI use-cases?"
    ],
    content: `Many are questioning whether AI's rapid deployment is actually improving their quality of life.

Artificial intelligence (AI) is a matter of design – not destiny.

That's the message from 10 philanthropic foundations aiming to loosen the grip that the technology's moneyed developers, fueled by an investing frenzy, hold over its evolution.

Launched Tuesday under the name Humanity AI, the coalition is committing $500 million (€427 million) across the next five years to place human interests at the forefront of the technology's rapid integration into daily life.

"The future belongs to those who actively create it, and that shan't be a few leaders in Silicon Valley. It's all of us," Mozilla Foundation Executive Director Nabiha Syed said in an emailed statement.

"The systems shaping our lives must be powered by people, open by design, and fueled by imagination," Syed added.

AI has been embraced as a productivity booster in fields such as software engineering or medicine. It could help students with a range of visual, speech, language, and hearing impairments to execute tasks that come easily to others.

Humanitarian groups are testing its ability to translate important documents for refugees. And some farmers find it useful for detecting pests in their hard-to-survey fields.

But others question whether its deployment is actually improving their quality of life. Some point out that real harms exist for children turning to AI chatbots for companionship. AI-generated deepfake videos contribute to the online spread of misinformation and disinformation.`
  },
  { 
    id: 5, 
    category: 'Healthcare Systems', 
    title: 'Millions of Americans brace for healthcare insurance costs to spike', 
    source: 'BBC',
    image: '/images/healthcar.png',
    questions: [
      "How much do you support maintaining healthcare subsidies to keep insurance costs down?",
      "To what extent do you agree that the government should intervene to prevent massive increases in healthcare costs?",
      "How concerned are you about millions of Americans potentially losing healthcare coverage?",
      "Do you agree that the Affordable Care Act marketplace should receive continued federal support?",
      "To what extent do you support emergency healthcare plans as an alternative to full coverage?"
    ],
    content: `Americans are expected to see skyrocketing health care prices as the open enrollment period for insurance through the Affordable Care Act marketplace begins on Saturday.

About 24 million people buy health insurance through the marketplace, the majority of whom used to receive tax credits to lower the monthly price of insurance.

Without credits, the monthly cost could rise by 114% on average, according to health research nonprofit KFF. This could mean an extra $1,000 a year, and in some cases much more.

Democrats have demanded the healthcare subsidies, which expire at the end of the year, be extended in exchange for ending the month-long federal government shutdown.

Republican leaders have argued the health insurance issue should be dealt with separately, and after the government reopens. Though some conservative lawmakers have expressed concerns with the subsidies ending.

For those who have previously made use of the tax credits, the new costs could be a shock.

Stacy Cox and her husband, who are small business owners in Utah, were paying $495 (£376) a month for health insurance.

Ms Cox said that without the tax credits, their monthly premiums are estimated to rise to $2,168, a 338% increase.

"It's horrific to actually see real numbers," she said.

If the subsidies are not extended, Ms Cox said she and her husband will cancel their health plan and buy some type of emergency insurance, which would not cover any of their routine and preventative health care costs.

The back-up plan is worrying for Ms Cox, who has an autoimmune disease, and her husband, who has hereditary cardiovascular disease.

"It's horribly stressful, because what I know is that the emergency plan is not going to cover what I need," she said.

Experts say that about seven million people like Ms Cox are expected to stop buying health insurance through the marketplace if the tax credits end. Of those, around four to five million are expected to lose health care coverage altogether because they won't be able to find other means.`
  }
];

function ArticleView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = articleData.find(a => a.id === parseInt(id)) || articleData[0];
  
  // Initialize state with 5 answers, all set to 0
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate back to landing page after submission
    navigate('/');
  };

  const handleSliderChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseFloat(value);
    setAnswers(newAnswers);
  };

  const paragraphs = article.content.split('\n\n').filter(p => p.trim());

  return (
    <div>
      <Header />
      <div className="article-view">
        <h1 className="article-title">
          {article.title}
        </h1>
      <div className="article-image">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="article-body">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <form className="opinion-form" onSubmit={handleSubmit}>
        <h2 className="opinion-header">your opinions:</h2>
        {article.questions && article.questions.map((question, index) => (
          <div key={index} className="slider-question">
            <label className="question-label">{question}</label>
            <input
              type="range"
              className="opinion-slider"
              min="0"
              max="100"
              step="0.1"
              value={answers[index]}
              onChange={(e) => handleSliderChange(index, e.target.value)}
              style={{
                background: `linear-gradient(to right, #FFD700 0%, #FFD700 ${answers[index]}%, #333 ${answers[index]}%, #333 100%)`
              }}
            />
          </div>
        ))}
        <button type="submit" className="submit-button primary-button">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default ArticleView;

