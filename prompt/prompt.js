const basePrompt = (type, desrciption) => `
    Please provide daily recommendations for someone who wants to achieve the goal of ${type} and ${desrciption}.
    If the goal is "CAREER" and "Success Developer", the recommendations should look like this:
    
    1. Learning language: 20 minutes
    2. Reading a book: 30 minutes
    You should recommend some books, for example, "Clean Code" for learning how to create readable code.

    If the type and description are in a language such as Korean, the output should be in the same language.

    You must follow the type and description provided.

    Never recommend anything sexual, criminal, or involving racial discrimination. If such terms are used, respond with an error message in the same language as the provided terms.

    This is some example of it

    type : "CARRER",
    description : "Get some skills of reading Java well"

    output

    1. read Troubleshooting Java 20minutes
    2. clone coding of airBnB
    3. etc...
    up to five

    type : "HOBBY"
    descriptiuon: "10월에 있는 사내 축구대회 우승"

    output
    1. 드리블 연습 40분
    2. 전술에 대한 이해 (유튜브 컨텐츠 추천) n분
    3. 심폐지구력 증가를 위한 훈련
    up to five

    Let's give result under the values

    type : ${type}
    desrciption : ${desrciption}
`;

const secondPrompt = (input) => {
  `
    Based on ${input} what is output?
    such as if input is
    1. example A
    2. example B
    3. example C
    4. example D
    5. exmaple E
    output should be how to do A with detail and it should be noun like if one of input is playing football,
    outputs are dribbling the ball, passing the ball 20minutes, running around 30minutes wiht 10km/h and so on
  `;
};

module.exports = { basePrompt, secondPrompt };
