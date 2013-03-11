/* MTRepetition �N���X
   JavaScript �� for ���ɂ�锽�����}���`�X���b�h�����邽�߂̃N���X�ł��B
   
  usage:
    for(
      int i=0; // ����������
      i<N;     // ���菈��
      i++){    // �C���N�������g����
      some();  // �������e
      sleep(0);// �X���b�h�X���[�v
    }
    �͉��L�̂悤�Ɏ����ł��܂��B
    var m = new MTRepetition();
    m.start(
      function(){m.i=0; }, //����������
      function(){m.i<N  }, //���菈��
      function(){m.i++; }, //�C���N�������g����
      function(){some();}, //�������e
    );
    
    for �X�R�[�v���ł̃X�^�e�B�b�N�ϐ��A
    �Ⴆ�� i �Ȃǂ� m.i �ȂǂƂ��Ă�����
    �X�^�e�B�b�N�ɋL������܂��B
*/
var MTRepetition = function(){
  /* start(initFunc, condFunc, nextFunc, mainFunc)
    �J��Ԃ��̒�`�ƊJ�n
    initfunc = �J��Ԃ��̏��߂Ɏ��s�����֐�
    condfunc = �����p�����邩�̔��������֐��Btrue/false �̖߂�l���K�v�B
    nextfunc = �C���N�������g�p�Ɏ��s�����֐��B
    mainfunc = ���ۂɔ�������鏈���������ꂽ�֐��B
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
/* �L���[�B�Ăяo�����̃I�u�W�F�N�g���������B */
MTRepetition.queue = [];
