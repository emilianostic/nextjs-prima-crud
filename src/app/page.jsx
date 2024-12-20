import { prisma } from "@/libs/prisma";
import TaskCard from "@/componentes/TaskCard";
async function loadTasks() {
  return await prisma.task.findMany();
  //se puede hacer una petición con fetch también
}

async function HomePage() {
  const tasks = await loadTasks();
  
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
