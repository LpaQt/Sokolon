#ErrorStdOut
#NoTrayIcon
#MaxHotkeysPerInterval 99999999999999999999
#HotkeyInterval 0
#SingleInstance Off

stdout := FileOpen("*", "w")

$~v::
	If WinActive("ahk_pid 1572") {
		GetModifierState() {
			If GetKeyState("Shift", "P")
				Modifiers .= "+"
			If GetKeyState("Control", "P")
				Modifiers .= "^"
			If GetKeyState("Alt", "P")
				Modifiers .= "!"

			return Modifiers
		}

		StripAllModifiers(PressedKey) {
			StringReplace, PressedKey, PressedKey, ^
			StringReplace, PressedKey, PressedKey, +
			StringReplace, PressedKey, PressedKey, !
			StringReplace, PressedKey, PressedKey, *
			StringReplace, PressedKey, PressedKey, ~
			StringReplace, PressedKey, PressedKey, $
	
			return PressedKey
		}

		StripModifiers(PressedKey) {
			StringReplace, PressedKey, PressedKey, ~
			StringReplace, PressedKey, PressedKey, $
	
			return PressedKey
		}

		UnmodifiedKey := StripAllModifiers(A_ThisHotkey)
		WritenHotkey := StripModifiers(A_ThisHotkey)
		ThisHotkey := GetModifierState() UnmodifiedKey

		while GetKeyState(UnmodifiedKey, "P")
			&& ((instr(ThisHotkey, "+") && GetKeyState("Shift", "P")) || !instr(ThisHotkey, "+"))
			&& ((instr(ThisHotkey, "^") && GetKeyState("Ctrl", "P")) || !instr(ThisHotkey, "^"))
			&& ((instr(ThisHotkey, "!") && GetKeyState("Alt", "P")) || !instr(ThisHotkey, "!"))
		{
			stdout.Write(WritenHotkey " down")
			stdout.Read(0)
			Sleep, 10
		}

		stdout.Write(WritenHotkey " up")
		stdout.Read(0)
	}
	Return
