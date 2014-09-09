/**
 * Created by zhangchi on 2014/9/9.
 */
var NotesApplication  = cc.Class.extend({

})

NotesApplication.STARTUP="NotesApplication::STARTUP";
NotesApplication.HANDSHAKE_COMPLETE = "NotesApplication::HANDSHAKE_COMPLETE";
NotesApplication.NEW_GAME_EVENT = "NotesApplication::NEW_GAME_EVENT";
NotesApplication.LANGUAGE_UPDATE_REQUIRED = "NotesApplication::LANGUAGE_CHANGED";

NotesApplication.SLOT_GAME_STATE_CHANGED = "NotesApplication::SLOT_GAME_STATE_CHANGED";
NotesApplication.SLOT_GAME_MODE_CHANGED = "NotesApplication::SLOT_GAME_MODE_CHANGED";

NotesApplication.APPLICATION_ACTIVATED = "NotesApplication::APPLICATION_ACTIVATED";
NotesApplication.APPLICATION_DEACTIVATED = "NotesApplication::APPLICATION_DEACTIVATED";

NotesApplication.APPLICATION_DEBUG_MODE_CHANGED = "NotesApplication::APPLICATION_DEBUG_MODE_CHANGED";
NotesApplication.APPLICATION_RESET_GAME = "NotesApplication::APPLICATION_RESET_GAME";

NotesApplication.APPLICATION_BALANCE_UPDATE_REQUEST = "NotesApplication::APPLICATION_BALANCE_UPDATE_REQUEST";
NotesApplication.APPLICATION_COUNT_UP_WINNING_REQUEST = "NotesApplication::APPLICATION_COUNT_UP_WINNING_REQUEST";
NotesApplication.APPLICATION_SPIN_COMPLETE_UPDATE_REQUEST = "NotesApplication::APPLICATION_SPIN_COMPLETE_UPDATE_REQUEST";