package zsdgzsrg;


import java.awt.*;
import java.util.*;
import java.awt.event.*;
import javax.swing.*;
import javax.sound.midi.*;

public class BetBox {

		JPanel mainPanel;
		ArrayList<JCheckBox> checkboxList;                  //храним флажки в масиве ArrayList
		Sequencer sequencer;
		Sequence sequence;
		Track track;
		JFrame theFrame;
		
        //названияя инструментов в ввиде строкового массива ,предназначены для создания меток в пользовательском интерфейсе
		String[] instrumentNames = {"Bass Drum", "Closed Hi-Hat", "Open Hi-Hat","Acoustic Snare", "Crash Cymbal", "Hand Clap",
				"Higt Tom", "Hi Bongo", "Maracas", "Whistle", "Low Conga", "Cowbell", "Vibraslap", "Low-mid Tom", "High Agogo", "Open Hi Conga"};
		
		//числа представляют собой борабанные клавиши
		int[] instruments = {35,42,46,38,49,39,50,60,70,72,64,56,58,47,67,63};
		
		public static void main (String[] args){
		BetBox  BeatBox2 = new BetBox ();
		BeatBox2.buildGUI();
		}

		public void buildGUI(){
			theFrame = new JFrame("Cyber BeatBox");
			theFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			BorderLayout layout = new BorderLayout();
			JPanel background = new JPanel(layout);
			background.setBorder(BorderFactory.createEmptyBorder(10,10,10,10));//пустая граница позволяет создать поля между краями панели и местами размещения компонентов
			
			checkboxList = new ArrayList<JCheckBox>();
			Box buttonBox = new Box(BoxLayout.Y_AXIS);
			
			JButton start = new JButton ("Start");
			start.addActionListener(new MyStartListener());
			buttonBox.add(start);
			
			JButton stop = new JButton ("Stop");
			stop.addActionListener(new MyStopListener());
			buttonBox.add(stop);
			
			JButton upTempo = new JButton ("Tempo Up");
			upTempo.addActionListener(new MyUpTempoListener());
			buttonBox.add(upTempo);
			
			JButton downTempo = new JButton ("Tempo Down");
			downTempo.addActionListener(new MyDownTempoListener());
			buttonBox.add(downTempo);
			
		    Box nameBox = new Box(BoxLayout.Y_AXIS);
		    for (int i = 0;i < 16; i++){
		    	nameBox.add(new Label (instrumentNames[i]));
		    }
		    
		    background.add(BorderLayout.EAST, buttonBox);
		    background.add(BorderLayout.WEST, nameBox);
			
		    theFrame.getContentPane().add(background);
		    
		    GridLayout grid = new GridLayout(16,16);
		    grid.setVgap(1);
		    grid.setHgap(2);
		    mainPanel = new JPanel(grid);
		    background.add(BorderLayout.CENTER, mainPanel);
		    
		    for (int i = 0; i < 256; i++){                 //создаем флажки ,присваиваем им значения fals(чтобы они не были установлены)а затем добавляем их в масив ArrayList и на панель
		    	JCheckBox c = new JCheckBox();
		    	c.setSelected(false);
		    	checkboxList.add(c);
		    	mainPanel.add(c);
		    }
		    
			setUpMidi();
			
			theFrame.setBounds(50,50,300,300);
			theFrame.pack();
			theFrame.setVisible(true);
		}
		
		public void setUpMidi(){
			
			try{
				//обычный midi код для получения синтезатора, секвенсора и дорожки
				sequencer = MidiSystem.getSequencer();
				sequencer.open();
				sequence = new Sequence(Sequence.PPQ,4);
				track = sequence.createTrack();
				sequencer.setTempoInBPM(120);
				
			} catch (Exception e) {e.printStackTrace();}
		}

		//Преобразоввуем состояния флажков в midiсобытия и добавляем их на дорожку
		public void buildTrackAndStart(){
			
			int[] trackList = null;                   //создаем массив из 16 элементов, чтобы сохранить значение для каждого елемента на все 16 тактов
			
			sequence.deleteTrack(track);              //избавляемся от старой дорожки и создаем новую
			track = sequence.createTrack();
			
			for (int i = 0; i < 16; i++){             //делаем это для каждого из 16 рядов
				
				trackList = new int[16];
				int key = instruments[i];             //задаем клавишу которая представляет собой инструмент . массив содержит  midi-числа для каждого инструмента
				
				for (int j = 0; j < 16; j++){         //делаем это для каждого такта текущего ряда
					
					JCheckBox jc = (JCheckBox) checkboxList.get(j + (16*i));
					if (jc.isSelected()){            //установлен ли флажокна этом такте?если да--
						trackList[j] = key;          //--то помещаем значение клавиши в текущую ячейку массива
					} else {                         //--(ячейку которая представляет такт)если нет то инструмент не доолжен играть в этом такте, поэтому присвоим ему 0.
						trackList[j] = 0;
					}
				}
				
				makeTracks(trackList);               //для этого инструмента и для всех 16 тактов создаем события и добавляем их на дорожку.
				track.add(makeEvent(176,1,127,0,16));
			}
			
			track.add(makeEvent(192,9,1,0,15));      //мы всегда должны быть уверенны что события в такте 16 существует(от 0 до 15) иначе betbox может не пройти все 16 тактов перед тем как заново начнет последовательность.
			try {
				
				sequencer.setSequence(sequence);
				sequencer.setLoopCount(sequencer.LOOP_CONTINUOUSLY);// позволяет задать количество повторений цикла или как в этом случае, непрерывный цикл.
				sequencer.start();
				sequencer.setTempoInBPM(120);
			} catch (Exception e) {e.printStackTrace();}
			 
		}
		
		public class MyStartListener implements ActionListener {  //первый из внутренних классов - слушатель для кнопки
			public void actionPerformed(ActionEvent a){
				buildTrackAndStart();
			}
		}
		
		public class MyStopListener implements ActionListener {
			public void actionPerformed(ActionEvent a){
				sequencer.stop();
			}
		}
		
		public class MyUpTempoListener implements ActionListener {
			public void actionPerformed(ActionEvent a){
				float tempoFactor = sequencer.getTempoFactor();
			    sequencer.setTempoFactor((float)(tempoFactor * 1.03));//коефициент темпа определяет темп синтезатора.по умолчанию он равен 1.0 поэтому щелчком мыши можно изменить +\- 3%
			}
		}
		
		public class MyDownTempoListener implements ActionListener {
			public void actionPerformed(ActionEvent a){
				float tempoFactor = sequencer.getTempoFactor();
			    sequencer.setTempoFactor((float)(tempoFactor * .97));
			}
		}
		
		public void makeTracks(int[] list){ //метод создает события для одного инструмента за каждый проход цикла для всех 16 тактов.можно получить int[] для bass drumи и каждый елемент массива будет содержать либо клавишу этого елемента либо ноль.
			                                 //если ноль то инсремент не должен играть на текущем такте.иначе нужно создать событие и добавить эго в дорожку.  
			for (int i = 0; i < 16; i++){
				
				int key = list[i];
				if (key != 0){
					track.add(makeEvent(144,9,key, 100, i));//создаем события выключая и включая и добавляем их в дорожку.
					track.add(makeEvent(128,9,key, 100, i+1));
				}
			}
		}
		
		public MidiEvent makeEvent (int comd, int chan, int one, int two, int tick){
			
			MidiEvent event = null;
			try{
				ShortMessage a = new ShortMessage();
				a.setMessage(comd, chan, one, two);
				event = new MidiEvent(a, tick);
			}catch (Exception e) {e.printStackTrace();}
			return event;
			
		}
}


