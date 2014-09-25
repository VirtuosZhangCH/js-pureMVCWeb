var res = {

    s_paytable:"res/paytable.png",
    s_paytableList:"res/paytable.plist",

    s_symbols:"res/Symbols.png",
    s_symbolsList:"res/Symbols.plist",

    s_winningSymbols:"res/WinningSymbols.png",
    s_winningSymbolsList:"res/WinningSymbols.plist",

    s_winningSymbols2:"res/WinningSymbolsw.png",
    s_winningSymbolsList2:"res/WinningSymbolsw.plist",

    s_controlBar:"res/controlBar_P.png",
    s_controlBarList:"res/controlBar_P.plist",

    s_bonus:"res/bonus.png",
    s_bonusList:"res/bonus.plist",

    s_blur:"res/blurSymbols.png",
    s_blurList:"res/blurSymbols.plist",

    m_bonusBell:"res/SOUND/bonus_anticipation.mp3",
    m_bonusEnd:"res/SOUND/bonus_end.mp3",
    m_bonusIntr:"res/SOUND/bonus_intro.mp3",
    m_bonusLoop:"res/SOUND/bonus_loop.mp3",
    m_bonusRetr:"res/SOUND/bonus_retrigger.mp3",
    m_anticipation:"res/SOUND/bonus_anticipation.mp3",
    m_stampede:"res/SOUND/bonus_stampede.mp3",
    //m_scatter:["res/SOUND/scatter_0.mp3","res/SOUND/scatter_1.mp3","res/SOUND/scatter_2.mp3","res/SOUND/scatter_3.mp3","res/SOUND/scatter_4.mp3"],
    m_game_intro:"res/SOUND/game_intro.mp3",
    m_reel_stop:"res/SOUND/reelstop.mp3",
    //m_spin:["res/SOUND/spin_0.mp3","res/SOUND/spin_1.mp3","res/SOUND/spin_2.mp3","res/SOUND/spin_3.mp3","res/SOUND/spin_4.mp3","res/SOUND/spin_5.mp3"],
    //m_win:["res/SOUND/win_0.mp3","res/SOUND/win_1.mp3","res/SOUND/win_2.mp3","res/SOUND/win_3.mp3","res/SOUND/win_4.mp3","res/SOUND/win_5.mp3"],

    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}