class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }

  setupTowers () {
    for (let i = 0; i < 3; i++) {
      const $ul = $('<ul></ul>');
      this.$el.append($ul);
      // for (let j = 0; j < 3; j++) {
      //   const $li = $('<li></li>');
      //   $ul.append($li);
      //
      // }
      if (i === 0) {
        const $li1 = $('<li></li>');
        $li1.addClass('disc1');
        const $li2 = $('<li></li>');
        $li2.addClass('disc2');
        const $li3 = $('<li></li>');
        $li3.addClass('disc3');

        $ul.append($li1);
        $ul.append($li2);
        $ul.append($li3);

      }
    }
  }



}


module.exports = View;
