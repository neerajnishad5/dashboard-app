import WidgetCard from "../components/WidgetCard";
import WorkAllocatedTabs from "../components/WorkAllocatedTabs";
import EmployeeProgressTabs from "../components/EmployeeProgressTabs";
import PersonalNotepad from "../components/PersonalNotepad";
import DepartmentWiseAllocation from "../components/DepartmentWiseAllocation";
import OverdueTasks from "../components/OverdueTasks";
import Workflows from "../components/WorkFlows";

export default function Home() {
  const cards = [
    {
      logoPath: "/assets/icons/ai-review.svg",
      title: "22 Ai Review",
      labels: ["Manually Approve", "Completed", "Rejected by Ai"],
      values: [2, 10, 10, 5],
    },
    {
      logoPath: "/assets/icons/tasks-w-card.svg",
      title: "22 Tasks",
      labels: ["Ongoing", "Overdue", "Completed", "Pending"],
      values: [10, 2, 8, 2],
    },
    {
      logoPath: "/assets/icons/issues-w-card.svg",
      title: "22 Issues",
      labels: ["Ignored", "Resolved", "Open", "In Progress"],
      values: [2, 10, 5, 5],
    },
    {
      logoPath: "/assets/icons/forms-w-card.svg",
      title: "20 Forms",
      labels: ["Open Responses", "Submitted", "Draft", "Reviewed"],
      values: [0, 15, 3, 2],
    },
  ];

  const workAllocatedData = [
    {
      id: 3789,
      title: "How to Manage Stock",
      date: "22 June, 2024 (11:00 am)",
      status: "Ongoing",
      category: "Inventory",
      priority: true,
    },
    {
      id: 3789,
      title: "How to Manage Stock",
      date: "3 April, 2025 (11:00 am)",
      status: "Ongoing",
      category: "Inventory",
      priority: true,
    },
    {
      id: 7182,
      title: "Tracking Daily Earnings",
      date: "12 October, 2024 (11:00 am)",
      status: "Ongoing",
      category: "Inventory",
      priority: true,
    },
    {
      id: 6047,
      title: "Tool for Managing Reservations",
      date: "22 June, 2024 (11:00 am)",
      status: "Ongoing",
      category: "Inventory",
      priority: false,
    },
    {
      id: 6047,
      title: "Tool for Managing Reservations",
      date: "3 April, 2025 (11:00 am)",
      status: "Ongoing",
      category: "Inventory",
      priority: false,
    },
    {
      id: 4820,
      title: "Coordinating Employee Shifts",
      date: "12 October, 2024 (11:00 am)",
      status: "Ongoing",
      category: "Inventory",
      priority: false,
    },
  ];

  const employeeProgressData = {
    Tasks: [
      {
        name: "Ajita",
        department: "IT Services",
        assigned: 30,
        ongoing: 30,
        overdue: 30,
        completed: "30%",
      },
      {
        name: "Rahul",
        department: "Human Resources",
        assigned: 31,
        ongoing: 31,
        overdue: 31,
        completed: "31%",
      },
      {
        name: "Priya",
        department: "Sales Division",
        assigned: 45,
        ongoing: 45,
        overdue: 45,
        completed: "45%",
      },
      {
        name: "Vikram",
        department: "Research and Development",
        assigned: 79,
        ongoing: 79,
        overdue: 79,
        completed: "79%",
      },
      {
        name: "Ajita",
        department: "IT Services",
        assigned: 30,
        ongoing: 30,
        overdue: 30,
        completed: "30%",
      },
      {
        name: "Rahul",
        department: "Human Resources",
        assigned: 31,
        ongoing: 31,
        overdue: 31,
        completed: "31%",
      },
      {
        name: "Priya",
        department: "Sales Division",
        assigned: 45,
        ongoing: 45,
        overdue: 45,
        completed: "45%",
      },
    ],
    Issues: [
      {
        name: "Ajita",
        department: "IT Services",
        assigned: 25,
        ongoing: 25,
        overdue: 25,
        completed: "25%",
      },
      {
        name: "Rahul",
        department: "Human Resources",
        assigned: 28,
        ongoing: 28,
        overdue: 28,
        completed: "28%",
      },
    ],
    Workflows: [
      {
        name: "Priya",
        department: "Sales Division",
        assigned: 40,
        ongoing: 40,
        overdue: 40,
        completed: "40%",
      },
      {
        name: "Vikram",
        department: "Research and Development",
        assigned: 70,
        ongoing: 70,
        overdue: 70,
        completed: "70%",
      },
    ],
  };
  const taskData = [
    {
      title: "Make shift and assign",
      description:
        "Assign individuals to specific shifts based on availability and role requirements",
    },
    {
      title: "Menu correction",
      description:
        "Update the menu to show the dishes and ingredients clearly. Point out any new cooking methods or dietary options",
    },
  ];
  const barGraphData = {
    Tasks: [
      { department: "Sales", total: 100, assigned: 40, overdue: 30 },
      { department: "Marketing", total: 80, assigned: 25, overdue: 20 },
      { department: "Engineering", total: 120, assigned: 50, overdue: 40 },
      { department: "Engineering", total: 120, assigned: 50, overdue: 40 },
      { department: "Engineering", total: 120, assigned: 50, overdue: 40 },
      { department: "Engineering", total: 120, assigned: 50, overdue: 40 },
      { department: "Engineering", total: 120, assigned: 50, overdue: 40 },
    ],
    Issues: [
      { department: "Support", total: 90, assigned: 30, overdue: 20 },
      { department: "IT", total: 110, assigned: 45, overdue: 25 },
      { department: "HR", total: 70, assigned: 20, overdue: 15 },
    ],
    Forms: [
      { department: "Operations", total: 95, assigned: 35, overdue: 20 },
      { department: "Finance", total: 85, assigned: 30, overdue: 15 },
      { department: "R&D", total: 130, assigned: 60, overdue: 35 },
    ],
  };

  const overdueData = {
    Tasks: [
      {
        name: "Stock Management",
        assignedTo: "Ajita",
        status: "Overdue",
        dueDate: "12-07-2025",
        reassign: "Yes",
      },
      {
        name: "Employee Scheduling",
        assignedTo: "Rahul",
        status: "Overdue",
        dueDate: "10-07-2025",
        reassign: "No",
      },
      {
        name: "Report Generation",
        assignedTo: "Priya",
        status: "Overdue",
        dueDate: "15-07-2025",
        reassign: "Yes",
      },
    ],
    Issues: [
      {
        name: "Server Downtime",
        assignedTo: "Ajita",
        status: "Completed",
        dueDate: "09-07-2025",
        reassign: "Yes",
      },
      {
        name: "Payment Bug",
        assignedTo: "Rahul",
        status: "Overdue",
        dueDate: "11-07-2025",
        reassign: "No",
      },
    ],
    Workflows: [
      {
        name: "Workflow Review",
        assignedTo: "Priya",
        status: "Overdue",
        dueDate: "13-07-2025",
        reassign: "Yes",
      },
      {
        name: "Process Audit",
        assignedTo: "Vikram",
        status: "Overdue",
        dueDate: "14-07-2025",
        reassign: "No",
      },
    ],
  };

  const workFlowData = [
    {
      title: "Workflow Title",
      response: 35,
      tasks: 22,
    },
    {
      title: "Another Workflow",
      response: 40,
      tasks: 30,
    },
  ];

  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 max-w-[99%] px-2 sm:px-3 overflow-x-auto whitespace-nowrap pb-4 scrollbar-custom scroll-smooth">
        {cards.map((card, index) => (
          <WidgetCard
            key={index}
            logoPath={card.logoPath}
            title={card.title}
            labels={card.labels}
            values={card.values}
          />
        ))}
      </div>
      <WorkAllocatedTabs data={workAllocatedData} />
      <EmployeeProgressTabs data={employeeProgressData} />
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <PersonalNotepad tasks={taskData} />
        </div>
        <div className="w-full sm:w-1/2">
          <DepartmentWiseAllocation data={barGraphData} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
        <div className="w-full sm:w-1/2">
          <OverdueTasks data={overdueData} />
        </div>
        <div className="w-full sm:w-1/2">
          <Workflows data={workFlowData} />
        </div>
      </div>
    </div>
  );
}
