package shserthw45y;


import java.awt.*;
import java.util.*;
import javax.swing.*;
import javax.swing.event.*;
 
public class SliderTest {
 
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable()
		{
			public void run()
			{
				SliderTestFrame frame = new SliderTestFrame();
				frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
				frame.setVisible(true);
			}
		});
	}
 
}
/**
* ‘рейм с линейными регул€торами и полем редактировани€,
* отображающим текущее значение выбранного регул€тора.
*/
class SliderTestFrame extends JFrame 
{
	public SliderTestFrame()
	{
		setTitle("SliderTest");
		setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);
 
		sliderPanel = new JPanel();
		sliderPanel.setLayout(new FlowLayout(FlowLayout.LEFT));
 
		// ќбщий слушатель дл€ всех регул€торов.
		listener = new ChangeListener()
		{
			public void stateChanged(ChangeEvent event)
			{
				// ќбновление пол€ редактировани€ при
				// изменении значени€ регул€тора.
				JSlider source = (JSlider) event.getSource();
				textField.setText("" + source.getValue());
			}
		};
 
		// ƒобавление простого регул€тора.
 
		JSlider slider = new JSlider();
		addSlider(slider, "Plain");
 
		// ƒобавление регул€тора с основными
		// и вспомогательными делени€ми.
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(5);
		addSlider(slider, "Ticks");
 
		// ƒобавление регул€тора с прив€зкой к делени€м.
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setSnapToTicks(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(5);
		addSlider(slider, "Snap to ticks");
 
		// ƒобавление регул€тора без "дорожки"
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(5);
		slider.setPaintTrack(false);
		addSlider(slider, "No Track");
 
		// ƒобавление регул€тора с обратным направлением движени€.
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(5);
		slider.setInverted(true);
		addSlider(slider, "Inverted");
 
		// ƒобавление регул€тора с числовыми метками.
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setPaintLabels(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(5);
		addSlider(slider, "Labels");
 
		// ƒобавление регул€тора с буквенными метками.
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(5);
 
		Dictionary<Integer, Component> labelTable = new Hashtable<Integer, Component>();
		labelTable.put(0, new JLabel("A"));
		labelTable.put(20, new JLabel("B"));
		labelTable.put(40, new JLabel("C"));
		labelTable.put(60, new JLabel("D"));
		labelTable.put(80, new JLabel("E"));
		labelTable.put(100, new JLabel("F"));
 
		slider.setLabelTable(labelTable);
		addSlider(slider, "Custom labels");
 
		// ƒобавление регул€тора с метками в виде пиктограмм.
 
		slider = new JSlider();
		slider.setPaintTicks(true);
		slider.setPaintLabels(true);
		slider.setSnapToTicks(true);
		slider.setMajorTickSpacing(20);
		slider.setMinorTickSpacing(20);
 
		labelTable = new Hashtable<Integer, Component>();
 
		// ƒобавление изображений карт.
 
		labelTable.put(0, new JLabel(new ImageIcon("nine.gif")));
		labelTable.put(20, new JLabel(new ImageIcon("ten.gif")));
		labelTable.put(40, new JLabel(new ImageIcon("jack.gif")));
		labelTable.put(60, new JLabel(new ImageIcon("queen.gif")));
		labelTable.put(80, new JLabel(new ImageIcon("king.gif")));
		labelTable.put(100, new JLabel(new ImageIcon("ace.gif")));
 
		slider.setLabelTable(labelTable);
		addSlider(slider, "Icon labels");
 
		// ƒобавление пол€ редактировани€ дл€
		// отображени€ значени€ регул€тора.
 
		textField = new JTextField();
		add(sliderPanel, BorderLayout.CENTER);
		add(textField, BorderLayout.SOUTH);
	}
	/*
	 * ƒобавление регул€тора в панель и св€зывание его со слушателем.
	 * @param s –егул€тор
	 * @param description ќписание регул€тора
	 */
	public void addSlider(JSlider s, String description)
	{
		s.addChangeListener(listener);
		JPanel panel = new JPanel();
		panel.add(s);
		panel.add(new JLabel(description));
		sliderPanel.add(panel);
	}
	public static final int DEFAULT_WIDTH = 350;
	public static final int DEFAULT_HEIGHT = 450;
 
	private JPanel sliderPanel;
	private JTextField textField;
	private ChangeListener listener;
}