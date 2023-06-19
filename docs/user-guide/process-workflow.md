# Creating Processes and Workflows

In this section, we will guide you through the process of creating processes and workflows using Pygeoweaver. Pygeoweaver provides a convenient interface for defining and managing geoweaver processes and workflows in Python.

## Prerequisites

Before you can start creating processes and workflows with Pygeoweaver, make sure you have the following prerequisites:

- Python installed on your system
- Pygeoweaver package installed (you can install it via `pip install pygeoweaver`)

## Creating Processes

Processes in Pygeoweaver represent individual computational tasks. They can be created by providing the necessary information such as programming language, description, name, and code. The `create_process` function allows you to create a process with the following parameters:

```python
def create_process(lang, description, name, code, owner="111111", confidential=False):
    """
    Function to create a process with given data if valid.

    Parameters:
    - lang: The programming language of the process
    - description: The description of the process
    - name: The name of the process
    - code: The code of the process
    - owner: The owner of the process (default: "111111")
    - confidential: The confidentiality status of the process (default: False)

    Returns:
    - The id of the created process
    """
```

To create a process, follow these steps:

1. Import the necessary modules:

```python
import json
import requests
import pandas as pd
from pydantic import BaseModel

from pygeoweaver.utils import (
    download_geoweaver_jar,
    get_geoweaver_jar_path,
    get_java_bin_path,
    get_root_dir,
    check_ipython,
)
```

2. Define the `ProcessData` model using `BaseModel` from `pydantic`:

```python
class ProcessData(BaseModel):
    type: str = "process"
    lang: str
    description: str
    name: str
    code: str
    owner: str = "111111"
    confidential: bool = False
```

3. Implement the `create_process` function:

```python
def create_process(lang, description, name, code, owner="111111", confidential=False):
    """
    Function to create a process with given data if valid.

    Parameters:
    - lang: The programming language of the process
    - description: The description of the process
    - name: The name of the process
    - code: The code of the process
    - owner: The owner of the process (default: "111111")
    - confidential: The confidentiality status of the process (default: False)

    Returns:
    - The id of the created process
    """
    download_geoweaver_jar()
    process = ProcessData(
        type="process",
        lang=lang,
        description=description,
        name=name,
        code=code,
        owner=owner,
        confidential=confidential,
    )
    data_json = process.json()
    r = requests.post(
        f"{constants.GEOWEAVER_DEFAULT_ENDPOINT_URL}/web/add/process",
        data=data_json,
        headers=constants.COMMON_API_HEADER,
    )
    if check_ipython() and r.ok:
        df = pd.DataFrame(json.loads(data_json).items(), columns=["Key", "Value"])
        return df
    else:
        return r.json()
```

4. Use the `create_process` function to create a process:

```python
process = create_process(
    lang="python",
    description="This process prints 'Hello, Pygeoweaver!'

",
    name="HelloProcess",
    code="print('Hello, Pygeoweaver!')",
)
```

The `create_process` function will return the ID of the created process, which can be used for further operations or analysis.

## Creating Workflows

Workflows in Pygeoweaver represent a collection of interconnected processes. They can be created by providing the necessary information such as description, edges, name, and nodes. The `create_workflow` function allows you to create a workflow with the following parameters:

```python
def create_workflow(
    description, edges, name, nodes, owner="111111", confidential=False
):
    """
    Function to create a workflow with given data if valid.

    Parameters:
    - description: The description of the workflow
    - edges: The edges of the workflow
    - name: The name of the workflow
    - nodes: The nodes of the workflow
    - owner: The owner of the workflow (default: "111111")
    - confidential: The confidentiality status of the workflow (default: False)

    Returns:
    - The id of the created workflow
    """
```

To create a workflow, follow these steps:

1. Import the necessary modules:

```python
import json
import requests
import pandas as pd
from pydantic import BaseModel

from pygeoweaver.utils import (
    download_geoweaver_jar,
    get_geoweaver_jar_path,
    get_java_bin_path,
    get_root_dir,
    check_ipython,
)
```

2. Define the `WorkflowData` model using `BaseModel` from `pydantic`:

```python
class WorkflowData(BaseModel):
    type: str = "workflow"
    confidential: bool = False
    description: str
    edges: str
    name: str
    nodes: str
    owner: str = "111111"
```

3. Implement the `create_workflow` function:

```python
def create_workflow(
    description, edges, name, nodes, owner="111111", confidential=False
):
    """
    Function to create a workflow with given data if valid.

    Parameters:
    - description: The description of the workflow
    - edges: The edges of the workflow
    - name: The name of the workflow
    - nodes: The nodes of the workflow
    - owner: The owner of the workflow (default: "111111")
    - confidential: The confidentiality status of the workflow (default: False)

    Returns:
    - The id of the created workflow
    """
    download_geoweaver_jar()
    workflow = WorkflowData(
        type="workflow",
        confidential=confidential,
        description=description,
        edges=edges,
        name=name,
        nodes=nodes,
        owner=owner,
    )
    data_json = workflow.json()
    r = requests.post(
        f"{constants.GEOWEAVER_DEFAULT_ENDPOINT_URL}/web/add/workflow",
        data=data_json,
        headers=constants.COMMON_API_HEADER,
    )
    if check_ipython():
        return pd.DataFrame(json.loads(data_json).items(), columns=["Key", "Value"])
    else:
        return r.json()
```

4. Use the `create_workflow` function to create a workflow:

```python
workflow = create_workflow(
    description="This workflow executes a series of processes",
    edges="process1 -> process2 -> process3",
    name="MyWorkflow",
    nodes="process1, process2, process3",
)
```

The `create_workflow` function will return the ID of the created workflow, which can be used for further operations or analysis.

## Conclusion

Congratulations! You have learned how to create processes and workflows using Pygeoweaver. By leveraging these functions, you can define and manage complex geospatial processing tasks in a structured and efficient manner. Feel free to explore more features and functionalities offered by Pygeoweaver to enhance your geospatial workflows.