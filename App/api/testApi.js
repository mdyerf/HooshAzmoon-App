const getBooksGroups = (major) => [
  {
    GroupID: 1,
    Name: "ادبیات",
    Coefficient: 2,
    Books: [
      {
        BookID: 1,
        Name: "فارسی ۱",
        Coefficient: 1,
      },
      {
        BookID: 2,
        Name: "فارسی ۲",
        Coefficient: 1,
      },
      {
        BookID: 3,
        Name: "فارسی ۳",
        Coefficient: 2,
      },
    ],
  },
  {
    GroupID: 2,
    Name: "دین و زندگی",
    Coefficient: 2,
    Books: [
      {
        BookID: 4,
        Name: "دین و زندگی ۱",
        Coefficient: 1,
      },
      {
        BookID: 5,
        Name: "دین و زندگی ۱",
        Coefficient: 1,
      },
      {
        BookID: 6,
        Name: "دین و زندگی ۳",
        Coefficient: 2,
      },
    ],
  },
];

const getChapters = (bookId) => [
  {
    ChapterID: 1,
    Name: "فصل اول",
    Coefficient: 1,
  },
  {
    ChapterID: 2,
    Name: "فصل دوم",
    Coefficient: 1,
  },
  {
    ChapterID: 3,
    Name: "فصل سوم",
    Coefficient: 1,
  },
  {
    ChapterID: 4,
    Name: "فصل چهارم",
    Coefficient: 1,
  },
];

const getSubjects = (chapterId) => [
  {
    SbjectID: 1,
    Name: "مبحث شماره ی ",
    Coefficient: 1,
  },
  {
    SbjectID: 2,
    Name: "مبحث شماره ی ۲",
    Coefficient: 1,
  },
  {
    SbjectID: 3,
    Name: "مبحث شماره ی ۳",
    Coefficient: 1,
  },
];

const getLearningTests = (subjectId) => [
  {
    TestID: 1,
    TestText: "متن سوال شماره ی یک",
    AnswerText: "این پاسخ سوال شماره ی یک است",
    Choices: [
      {
        ChoiceID: 1,
        Text: "این گزینه",
      },
      {
        ChoiceID: 2,
        Text: "این یکی",
      },
      {
        ChoiceID: 3,
        Text: "اون گزینه",
      },
      {
        ChoiceID: 4,
        Text: "اون یکی",
      },
    ],
    TrueChoiceID: 4,
    TestImageUri: null,
    AnswerImageUri: null,
    Level: 3,
    PageNumber: 25,
    Hints: [
        {
            HintID: 1,
            Text: 'این نکته ی شماره ی یک است',
            ImageUri: null,
        }
    ]
  },
  {
    TestID: 2,
    TestText: "متن سوال شماره ی دو",
    AnswerText: "این پاسخ سوال شماره ی دو است",
    Choices: [
      {
        ChoiceID: 1,
        Text: "این گزینه",
      },
      {
        ChoiceID: 2,
        Text: "این یکی",
      },
      {
        ChoiceID: 3,
        Text: "اون گزینه",
      },
      {
        ChoiceID: 4,
        Text: "اون یکی",
      },
    ],
    TrueChoiceID: 4,
    TestImageUri: null,
    AnswerImageUri: null,
    Level: 3,
    PageNumber: 25,
    Hints: [
        {
            HintID: 2,
            Text: 'این نکته برای سوال ۲ است',
            ImageUri: null,
        }
    ]
  },
];

const getLearningTestsData = async (major) => [];

export default getLearningTestsData;