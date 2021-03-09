export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'success',
      text: 'Overview',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Organization Management',
    route: '/organization',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'User Management',
        to: '/organization/user-management',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Branches',
        to: '/organization/branch-management'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff ',
        to: '/organization/staff-management'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Location Master',
        to: '/organization/location-management'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Gender Master',
        to: '/organization/gender-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Title Master',
        to: '/organization/title-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Specialty Master',
        to: '/organization/specialty-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ref. Center Category  Master',
        to: '/organization/ref-center-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'SMS API Setup',
        to: '/organization/sms-api'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Email API Setup',
        to: '/organization/email-api'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Facebook API Setup',
        to: '/organization/fb-api'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Instagram API Setup',
        to: '/organization/instagram-api'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Whatsapp API Setup',
        to: '/organization/whatsapp-api'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Company Calender Setup',
        to: '/organization/company-calender-setup'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Contact management',
    route: '/contact',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Patient',
        to: '/contact/patient'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Referring Person',
        to: '/contact/referring-person'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Referring Center',
        to: '/contact/referring-center'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Guardian',
        to: '/contact/guardian'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'HMO Master',
        to: '/contact/HMO-master'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Registration & Billing',
    route: '/registration-billing',
    icon: 'cil-task',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Billing',
        to: '/registration-billing/new-billing'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Bills',
        to: '/registration-billing/all-billing'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Appointments',
        to: '/registration-billing/appointments'
      }

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Accession',
    route: '/accession',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Accessed',
        to: '/accession/Accessed',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pending Accession',
        to: '/accession/pending-accession',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Perform Tests',
    route: '/perform-tests',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Incomplete',
        to: '/perform-tests/incomplete'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Partially Completed',
        to: '/perform-tests/partially-completed'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fully Completed',
        to: '/perform-tests/fully-completed'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Signed',
        to: '/perform-tests/signed'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Delivered',
        to: '/perform-tests/delivered'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Tests',
        to: '/perform-tests/all-tests'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Operational Dashboard',
    route: '/operational-dashboard',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Tests',
        route: '/operational-dashboard/all-tests'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Incomplete',
        route: '/operational-dashboard/incomplete'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Partially Completed',
        route: '/operational-dashboard/partially-completed'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fully Completed',
        route: '/operational-dashboard/fully-completed'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Signed',
        route: '/operational-dashboard/signed'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Delivered',
        route: '/operational-dashboard/delivered'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Test Configuration',
    route: '/test-configuration',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Master',
        to: '/test-configuration/test-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sample Master',
        to: '/test-configuration/sample-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Category Master',
        to: '/test-configuration/category-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Department Master',
        to: '/test-configuration/department-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Units Master',
        to: '/test-configuration/units-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Profile Master',
        to: '/test-configuration/profile-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Report Format Master',
        to: '/test-configuration/report-format-master'
      },
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Expenses & Inventory']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Warehouse Inventory',
    route: '/warehouse-inventory',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '  Stock Management',
        to: '/warehouse-inventory/stock-management'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Inventory Purchase',
        to: '/warehouse-inventory/inventory-purchase'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Supplier Master',
        to: '/warehouse-inventory/supplier-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Product Master',
        to: '/warehouse-inventory/product-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Inventory Reports',
        to: '/warehouse-inventory/inventory-reports'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Expense Master',
        to: '/warehouse-inventory/expense-master'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Make Expense',
        to: '/warehouse-inventory/make-expense'
      },
      {
        _tag: 'CSidebarNavItem',
        name: '  Expense Report',
        to: '/warehouse-inventory/expense-report'
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Branch Inventory',
    route: '/branch-inventory',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Stock Management',
        to: '/branch-inventory/stock-management'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inventory Request',
        to: '/branch-inventory/inventory-request'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inventory Reports',
        to: '/branch-inventory/inventory-reports'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Make Expense',
        to: '/branch-inventory/make-expense'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Expense Report',
        to: '/branch-inventory/expense-report'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Map Test to Products',
        to: '/branch-inventory/map-test-to-product'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: '  Finance',
    route: '/finance',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Finance Dashboard',
        to: '/financ/finance-dashboard'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Patients Finances',
        to: '/financ/patients-finances'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Referral Person Finances',
        to: '/financ/referral-person-financ'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Referral Center Finances',
        to: '/financ/referral-center-financ'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Expense Reports',
        to: '/financ/expense-reports'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sales Reports',
        to: '/financ/sales-reports'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff Payments',
        to: '/financ/staff-payments'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Operational Analytics',
    route: '/operational-analytics',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Analytics',
        to: '/operational-analytics/test-analytics'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Activity Log',
        to: '/operational-analytics/activity-log'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'TAT Analytics',
        to: '/operational-analytics/TAT-analytics'
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Communication & Marketing',
    route: '/communication-marketing',
    icon: 'cil-star',
    _children: [

      {
        _tag: 'CSidebarNavDropdown',
        name: 'Chat with Colleagues',
        to: '/communication-marketing/chat-with-colleagues',
      },
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Chat with Clients',
        to: '/communication-marketing/chat-with-clients',
      },
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Send SMS/Email',
        to: '/communication-marketing/send-SMS/email',
      },
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Publish on Social Media',
        to: '/communication-marketing/publish-social-media',
      },

    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Machine Interfacing',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

