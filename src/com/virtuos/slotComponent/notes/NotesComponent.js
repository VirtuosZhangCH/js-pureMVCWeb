/**
 * Created by zhangchi on 2014/9/9.
 */
/**
 * Created by zhangchi on 2014/9/9.
 */
var NotesComponent  = cc.Class.extend({

})
//================================ CONTROL BAR EVENTS ==================================================
NotesComponent.PAYTABLE_BUTTON_CLICKED = "NotesComponent::PAYTABLE_BUTTON_CLICKED";
NotesComponent.PAYTABLE_PREVIOUS_CLICKED = "NotesComponent::PAYTABLE_PREVIOUS_CLICKED";
NotesComponent.PAYTABLE_NEXT_CLICKED = "NotesComponent::PAYTABLE_NEXT_CLICKED";
NotesComponent.PAYTABLE_CLOSED = "NotesComponent::PAYTABLE_CLOSED";

NotesComponent.SPIN_FORCER_BUTTON_CLICKED = "NotesComponent::SPIN_FORCER_BUTTON_CLICKED";
NotesComponent.SPIN_FORCER_INDEX_UPDATED = "NotesComponent::SPIN_FORCER_INDEX_UPDATED";
NotesComponent.SPIN_FORCER_CLOSED = "NotesComponent::SPIN_FORCER_CLOSED";

NotesComponent.COIN_MINUS_BUTTON_CLICKED = "NotesComponent::COIN_MINUS_BUTTON_CLICKED";
NotesComponent.COIN_PLUS_BUTTON_CLICKED = "NotesComponent::COIN_PLUS_BUTTON_CLICKED";
NotesComponent.COIN_SIZE_WINDOW_CLICKED = "NotesComponent::COIN_SIZE_WINDOW_CLICKED";

NotesComponent.SPIN_CLICKED = "NotesComponent::SPIN_CLICKED";
NotesComponent.AUTO_SPIN_CLICKED = "NotesComponent::AUTO_SPIN_CLICKED";
NotesComponent.STOP_SPIN_CLICKED = "NotesComponent::STOP_SPIN_CLICKED";

NotesComponent.BET_LINES_MINUS_CLICKED = "NotesComponent::BET_LINES_MINUS_CLICKED";
NotesComponent.BET_LINES_PLUS_CLICKED = "NotesComponent::BET_LINES_PLUS_CLICKED";
NotesComponent.BET_ONE_CLICKED = "NotesComponent::BET_ONE_CLICKED";
NotesComponent.BET_MAX_CLICKED = "NotesComponent::BET_MAX_CLICKED";
NotesComponent.BET_MAX_LINES_CLICKED = "NotesComponent::BET_MAX_LINES_CLICKED";

NotesComponent.SHOW_BET_LINES = "NotesComponent::SHOW_BET_LINES";
NotesComponent.HIDE_BET_LINES = "NotesComponent::HIDE_BET_LINES";
NotesComponent.HIDE_WINLINE = "NotesComponent::HIDE_WINLINE";


//================================ TRIGGER SPIN ==================================================
NotesComponent.TAPPED_ON_SCREEN = "NotesComponent::TAPPED_ON_SCREEN";
NotesComponent.FREE_SPIN_PRESSED = "NotesComponent::FREE_SPIN_PRESSED";
NotesComponent.FREE_AUTO_SPIN_PRESSED = "NotesComponent::FREE_AUTO_SPIN_PRESSED";

//================================ COMPONENT EVENTS ==================================================
NotesComponent.A_WINNING_SYMBOL_ANIMATION_COMPLETE = "NotesComponent::A_WINNING_SYMBOL_ANIMATION_COMPLETE";

NotesComponent.REEL_SPIN_HIT_BOTTOM = "NotesComponent::REEL_SPIN_HIT_BOTTOM";
NotesComponent.ANTICIPATION_REEL_STOPPING = "NotesComponent::ANTICIPATION_REEL_STOPPING";
NotesComponent.FINAL_REEL_SPIN_HIT_BOTTOM = "NotesComponent::FINAL_REEL_SPIN_HIT_BOTTOM";
NotesComponent.REEL_SPIN_COMPLETE = "NotesComponent::REEL_SPIN_COMPLETE";
NotesComponent.FINAL_REEL_SPIN_COMPLETE = "NotesComponent::FINAL_REEL_SPIN_COMPLETE";
NotesComponent.SYMBOL_LANDING_ANIMATIONS_COMPLETE = "NotesComponent::SYMBOL_LANDING_ANIMATIONS_COMPLETE";
NotesComponent.DISPLAY_ALL_WINNING_LINES_COMPLETE = "NotesComponent::DISPLAY_ALL_WINNING_LINES_COMPLETE";
NotesComponent.NEXT_WIN_ANIMATION = "NotesComponent::NEXT_WIN_ANIMATION";
NotesComponent.DISPLAY_WIN_LINE_COUNT = "NotesComponent::DISPLAY_WIN_LINE_COUNT";
NotesComponent.SHOW_GAMBLE_BUTTON = "NotesComponent::SHOW_GAMBLE_BUTTON";
NotesComponent.GAMBLE_BUTTON_CLICKED = "NotesComponent::GAMBLE_BUTTON_CLICKED"; //===========================  MORE COMMENTS WILL ALWAYS BE APPRECIATED
NotesComponent.SKIP_WIN_ANIMATIONS = "NotesComponent::SKIP_WIN_ANIMATIONS"; // Used for skipping lengthy animations before a bonus round starts and ends
NotesComponent.CLOSE_PAYTABLE = "NotesComponent::CLOSE_PAYTABLE"; // Closes the paytable when a user taps the back button on their device
//=============================== SHIFTING REELS ============================================================
NotesComponent.SHIFT_REELS = "NotesComponent::SHIFT_REELS";
NotesComponent.SHIFTING_REELS_STARTED = "NotesComponent::SHIFTING_REELS_STARTED"; // 
NotesComponent.REELS_SHIFTING_ANIMATION_COMPLETE = "NotesComponent::REELS_SHIFTING_ANIMATION_COMPLETE"; // 