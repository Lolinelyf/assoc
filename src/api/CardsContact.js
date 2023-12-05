const CardsContactItems = [
  {
    id: 1,
    name: 'Фарход Эркинов',
    position:
      'Заместитель начальника управления - руководитель Центра развития карьеры и молодёжного предпринимательства',
    image: '/images/nophoto.png',
    phones: ['8 (962) 740-17-9', '8 (8652) 33-06-65'],
    address: 'Адрес: г. Ставрополь, ул. Пушкина 1, НБ-304',
    mail: 'fgerkinov@ncfu.ru',
  },
  {
    id: 2,
    name: 'Вечканова Вероника',
    position:
      'Делопроизводитель Центра развития карьеры и молодёжного предпринимательства',
    image: '/images/nophoto.png',
    phones: ['8 (918) 775-35-93'],
    address: 'Адрес: г. Ставрополь, ул. Пушкина 1, НБ-304',
    mail: 'vvechkanova@ncfu.ru',
  },
];

export function getCardsItem() {
  return CardsContactItems;
}
