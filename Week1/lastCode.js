var __interpretation_started_timestamp__;
var pi = 3.141592653589793;

var main = function()
{
	__interpretation_started_timestamp__ = Date.now();
	
	brick.motor(M3).setPower(-(50));
	brick.motor(M4).setPower(-(50));
	
	script.wait(2000);
	
	brick.motor(M4).setPower(50);
	
	script.wait(1000);
	
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(2000);
	
	brick.motor(M4).setPower(-(50));
	
	script.wait(1000);
	
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(2000);
	
	brick.playTone(1000, 1000);
	
	brick.motor(M3).setPower(-(50));
	
	script.wait(1000);
	
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(2000);
	
	brick.led().red();
	brick.motor(M4).setPower(-(50));
	
	script.wait(1000);
	
	brick.led().off();
	brick.motor(M3).setPower(-(50));
	brick.motor(M4).setPower(-(50));
	
	script.wait(2000);
	
	brick.sadSmile();
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(4000);
	
	brick.motor(M4).setPower(-(50));
	
	script.wait(840);
	
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(4000);
	
	brick.motor(M3).setPower(-(50));
	brick.motor(M4).setPower(-(50));
	
	script.wait(2000);
	
	brick.motor(M4).setPower(50);
	
	script.wait(840);
	
	brick.display().addLabel("almost there", 1, 1, 20);
	brick.display().redraw();
	
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(2000);
	
	brick.motor(M4).setPower(-(50));
	
	script.wait(840);
	
	brick.motor(M3).setPower(50);
	brick.motor(M4).setPower(50);
	
	script.wait(2000);
	
	brick.motor(M3).setPower(-(50));
	brick.motor(M4).setPower(-(50));
	
	script.wait(4000);
	
	script.removeFile("~/log.txt");
	
	script.writeToFile("~/log.txt", "The task is finished");
	
	brick.motor(M1).powerOff();
	brick.motor(M2).powerOff();
	brick.motor(M3).powerOff();
	brick.motor(M4).powerOff();
	
	return;
}
