# tagatame.py last updated 20/10/2019

#  -------------------------Import Modules and Classes-------------------------
from sikuli import *
import time
from inspect import currentframe, getframeinfo
import os


# Define class for story quest
class storyQ(object):
	def __init__(self, type, chapter, subChapter, stage):
		self.type = type	#main, seiseki, babel
		self.chapter = chapter
		self.subChapter = subChapter	#applicable to mainStory only
		self.stage = stage

class slot(int):
	def __init__(self, number, position):
		self.number = number
		self.position = position

#  -------------------------Settings-------------------------
#Settings.MinSimilarity = 0.8


# Waiting time
short = 0.1
normal = 1
double = 2
changePage = 5
extend = 7
long = 180
wTime = FOREVER



#  -------------------------Assets-------------------------
# External
fiddler = "fiddler.png"


# Homepage
home = "home.png"
settings = "settings.png"
mainMenu = "mainMenu.png"
quest = "quest.png"
SP = Pattern("mainMenu.png").targetOffset(-270,350)	# Location of Special Quest in respect to main men button
SPX = Pattern("mainMenu.png").targetOffset(-365,470)	# Location of Special Quest (type 2) in respect to main men button
questArrow = Pattern("mainMenu.png").targetOffset(-180,495)	# Location of down arrow in respect to main menu button
missionNew = "missionNew.png"
rewardGet = "rewardGet.png"


# Battle menu

noQuota = "noQuota.png"
noAP = "noAP.png"
leaf60 = "leaf60.png"
leaf120 = "leaf120.png"
leaf614 = "leaf614.png"
okAP = "okAP.png"
restoredAP = Pattern("restoredAP.png").targetOffset(0,215)	# Location of OK button in respect to the message
teamArrow = "teamArrow.png"
btStart = "btStart.png"
back = "back.png"


# Team slot (slot 8 not applicable to tower)
# Story and event team list stored separately
# Event includes Seiseki & Babel

slot1 = Pattern("teamArrow.png").targetOffset(70,56)	# Offset(70,56)
slot2 = Pattern("teamArrow.png").targetOffset(70,102)	# Offset(70,102)
slot3 = Pattern("teamArrow.png").targetOffset(70,148)	# Offset(70,148)
slot4 = Pattern("teamArrow.png").targetOffset(70,194)	# Offset(70,194)
slot5 = Pattern("teamArrow.png").targetOffset(70,240)	# Offset(70,240)
slot6 = Pattern("teamArrow.png").targetOffset(70,286)	# Offset(70,286)
slot7 = Pattern("teamArrow.png").targetOffset(70,332)	# Offset(70,332)
slot8 = Pattern("teamArrow.png").targetOffset(70,378)	# Offset(70,378)
teamNext = Pattern("teamArrow.png").targetOffset(170,340)	# Offset(170,340)

# Battle
birdView = "birdView.png"
toggleAuto = "toggleAuto.png"
autoOn = "autoOn.png"
btMenu = "btMenu.png"
quitQuest = "quitQuest.png"
btAgain = "btAgain.png"
confirm = "confirm.png"
btNext = "btNext.png"
questMission = "questMission.png"
visionMax = Pattern("visionMax.png").targetOffset(0,440)	# Location of OK button in respect to the title bar
btEnd = "btEnd.png"

shop = Pattern("shop.png").targetOffset(-85,210)



#  -------------------------Define Function-------------------------
# Debug message
def sysMsg(text):
	now = time.localtime()
	print("%02d:%02d:%02d " % (now.tm_hour, now.tm_min, now.tm_sec) + text)


# Click object (optional: delay = length(ms), loop = repeat until no longer exists, remark = use class.remark or customized message on log)
def clkObj(object, delay=0, loop=0, remark=0):
	if remark == 0:
		subject = repr(object)
	else:
		if remark == 1:
			subject = object.remark
		else:
			subject = remark
	if not exists(object):
		sysMsg("Waiting for " + subject)
		wait(object, wTime)
	if delay != 0:
		sysMsg("Delay clicking on " + subject + " for " + str(delay))
		sleep(delay)
	if loop == 0:
		click(object)
		sysMsg("Clicked on " + subject)
	else:
		try:
			click(object)
			sleep(normal)
			sysMsg("Repeat clicking on " + subject)
		except FindFailed:
			sysMsg("Cannot find object")


# Wait for object and press ESC (optional: delay = length(ms))
def esc(object, delay=0):
	if remark == 0:
		subject = repr(object)
	else:
		if remark == 1:
			subject = object.remark
		else:
			subject = remark
	if not exists(object):
		sysMsg("Waiting for " + subject)
		wait(object, wTime)
	if delay != 0:
		sysMsg("Delay ESC for " + subject + " for " + str(delay))
		sleep(delay)
	if loop == 0:
		type(Key.ESC)
		sysMsg("ESC on " + subject)
	else:
		try:
			type(Key.ESC)
			sleep(normal)
			sysMsg("Repeat ESC on " + subject)
		except FindFailed:
			sysMsg("Cannot find object")


# Restore AP (optional: object = leaf type)
def resAP(object=leaf120):
	if exists(noAP):
		clkObj(object)
		clkObj(okAP)
		clkObj(restoredAP)
	else:
		sysMsg("Invalid command - no insufficient AP message")

# After entering battle, toggle Auto if not On, and complete.
def btAction():
	wait(btMenu, 20)
	if exists(toggleAuto, normal):
		click(toggleAuto)
		sysMsg("Toggled auto")
		sleep(short)
	else:
		sysMsg("Auto already on")
	clkObj(questMission)
	sysMsg("Quest completed")
	while exists(visionMax):
		sysMsg("Vision achieved")
		sleep(normal)
		esc(visionMax)
	else:	
		sleep(changePage)
		type(Key.ESC)


# After entering battle, quit.
def btQuit():
	click(btMenu)
	click(quitQuest)
	click(confirm)


# Select team
# Tower: Page 1 [1-7] // Page 2 [8-12] // Page 3 [13-16] // Page 4 [17-20]
def teamSelect(slot, page=1):
	p = 1
	sysMsg("Changing team @ page " + str(page))
	clkObj(teamArrow)
	sleep(normal)
	while p < page:
		clkObj(teamNext)
		sysMsg("Turned to team page " + str(page))
	clkObj(slot)
	sysMsg("Team changed to " + str(slot))



# Get reward from completed mission
def getReward():
	clkObj(mainMenu)
	clkObj(missionNew)
	while exists(rewardGet):
		clkObj(rewardGet, None, True)
		sleep(normal)
		type(key.ESC)
	sysMsg("Claimed reward")

sysMsg("Imported tagatame.sikuli")