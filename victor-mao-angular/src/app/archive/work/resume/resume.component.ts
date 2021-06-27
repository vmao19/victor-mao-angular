import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../../models/timeline-item';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  timelineItems: TimelineItem[] = [
    {
      title: 'Software Developer I - N.E.R.D Program',
      date: 'Jun 2020 - Present',
      location: 'Charles Schwab | Westlake, TX',
      icon: 'fas fa-briefcase',
      logo: 'https://stockplanservices.schwab.com/spm/images/CS-logo-DIGITAL.jpg',
      logo_class: '',
      logo_alt: 'Charles Schwab Logo'
    },
    {
      title: 'M.S. Information Technology and Management',
      date: 'Jan 2029 - May 2020',
      location: 'University of Texas at Dallas | Richardson, TX',
      icon: 'fas fa-user-graduate',
      logo: 'https://www.utdallas.edu/brand/files/ut-dallas-border-5.png',
      logo_class: 'wide-logo',
      logo_alt: 'UT-Dallas Logo'
    },
    {
      title: 'Software Developer Intern',
      date: 'Jun 2019 - Jul 2019',
      location: 'Charles Schwab | Westlake, TX',
      icon: 'fas fa-briefcase',
      logo: 'https://stockplanservices.schwab.com/spm/images/CS-logo-DIGITAL.jpg',
      logo_class: '',
      logo_alt: 'Charles Schwab Logo'
    },
    {
      title: 'B.S. Computer Science',
      date: 'Aug 2016 - May 2019',
      location: 'University of Texas at Dallas | Richardson, TX',
      icon: 'fas fa-user-graduate',
      logo: 'https://www.utdallas.edu/brand/files/ut-dallas-border-5.png',
      logo_class: 'wide-logo',
      logo_alt: 'UT-Dallas Logo'
    },
    {
      title: 'Introduction to Data Science - Study Abroad',
      date: 'Aug 2018',
      location: 'London School of Economics | London, UK',
      icon: 'fas fa-user-graduate',
      logo: 'https://blogsmedia.lse.ac.uk/blogs.dir/76/files/2019/10/cropped-LSE-Logo_Master-File_RGB_Txt_Blk_e0112b.png',
      logo_class: 'wide-logo',
      logo_alt: 'LSE Logo'
    },
    {
      title: 'IT Intern',
      date: 'May 2018 - Aug 2018',
      location: 'Automated-Health Systems | Pittsburgh, PA',
      icon: 'fas fa-briefcase',
      logo: 'https://www.automated-health.com/wp-content/uploads/2018/06/logo.png',
      logo_class: 'wide-logo',
      logo_alt: 'AHS Logo'
    },
    {
      title: 'Pennsylvania Governor\'s School for the Sciences',
      date: 'Jul 2015',
      location: 'Carnegie Mellon University | Pittsburgh, PA',
      icon: 'fas fa-user-graduate',
      logo: 'https://pgss-applications.pa-gov-schools.org/assets/logo-6b5a1ac09c4c86c95839abd5029c1b1e29345cd2a23adcb6c4dbc28410b0f806.png',
      logo_class: '',
      logo_alt: 'PGSS Logo'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
