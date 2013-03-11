/* MTRepetition クラス
   JavaScript の for 文による反復をマルチスレッド化するためのクラスです。
   
  usage:
    for(
      int i=0; // 初期化処理
      i<N;     // 判定処理
      i++){    // インクリメント処理
      some();  // 反復内容
      sleep(0);// スレッドスリープ
    }
    は下記のように実装できます。
    var m = new MTRepetition();
    m.start(
      function(){m.i=0; }, //初期化処理
      function(){m.i<N  }, //判定処理
      function(){m.i++; }, //インクリメント処理
      function(){some();}, //反復内容
    );
    
    for スコープ内でのスタティック変数、
    例えば i などは m.i などとしておけば
    スタティックに記憶されます。
*/
var MTRepetition = function(){
  /* start(initFunc, condFunc, nextFunc, mainFunc)
    繰り返しの定義と開始
    initfunc = 繰り返しの初めに実行される関数
    condfunc = 反復継続するかの判定をする関数。true/false の戻り値が必要。
    nextfunc = インクリメント用に実行される関数。
    mainfunc = 実際に反復される処理が書かれた関数。
  */
  MTRepetition.prototype.start = function(initFunc, condFunc, nextFunc, mainFunc){
    this.condFunc = condFunc;
    this.nextFunc = nextFunc;
    this.mainFunc = mainFunc;
    initFunc();
    MTRepetition.queue.push(this);
    setTimeout(MTRepetition.repeat, 0);
  };
  MTRepetition.prototype.repeat = function(){
    if(this.condFunc()){
      this.mainFunc();
      this.nextFunc();
      MTRepetition.queue.push(this);
      setTimeout(MTRepetition.repeat, 0);
    }
  }
  MTRepetition.repeat = function(){
    MTRepetition.queue.shift().repeat();
  };
};
/* キュー。呼び出し元のオブジェクトが入れられる。 */
MTRepetition.queue = [];
