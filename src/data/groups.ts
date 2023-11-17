export interface GROUPS {
  id: string;
  name: string;
  image: string;
  music_style: string;
  describe: string;
}

export const groups: GROUPS[] = [
  {
    id: '1',
    name: 'Queen',
    image:
      'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Queen-2048x1280.png',
    music_style: 'rock',
    describe: `Queen — британская рок-группа, основанная в 1970 году в Лондоне. Она стала одной из наиболее влиятельных и успешных групп в истории рок-музыки. В состав Queen входили Фредди Меркьюри (вокал, пианино), Брайан Мэй (гитара, вокал), Роджер Тейлор (ударные, вокал) и Джон Дикон (бас-гитара). Группа известна своим уникальным стилем, включающим в себя элементы рока, попа, оперы и фэнтези.
    Queen выпустили множество хитов, среди которых "Bohemian Rhapsody", "We Will Rock You", "We Are the Champions", "Somebody to Love" и многие другие. Они славились эпическими аранжировками, виртуозными выступлениями и творческим подходом к музыке. Фредди Меркьюри считается одним из величайших вокалистов в истории рока.
    Группа имеет огромную базу поклонников по всему миру и оставила неизгладимый след в истории музыки. После смерти Фредди Меркьюри в 1991 году группа продолжила свою деятельность, сотрудничая с различными вокалистами, но оригинальный состав остается великим символом золотой эры рока.
    `,
  },
  {
    id: '2',
    name: 'Metallica',
    image:
      'https://avatanplus.com/files/resources/original/57a8342ecf3cb156690bd701.png',
    music_style: 'metall',
    describe: '',
  },
  {
    id: '3',
    name: 'Beatles',
    image:
      'https://i.pinimg.com/originals/e4/29/d2/e429d23c674ac5e663c99b5a230eee61.png',
    music_style: 'rock',
    describe: '',
  },
];
