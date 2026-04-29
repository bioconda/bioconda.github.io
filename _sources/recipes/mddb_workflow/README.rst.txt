:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mddb_workflow'
.. highlight: bash

mddb_workflow
=============

.. conda:recipe:: mddb_workflow
   :replaces_section_title:
   :noindex:

   MDDB\-workflow is a tool for standardizing\, validating\, and analyzing molecular dynamics projects.

   :homepage: https://github.com/mmb-irb/MDDB-workflow
   :documentation: https://mddb-workflow.readthedocs.io/en/latest/
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`mddb_workflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mddb_workflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mddb_workflow/meta.yaml>`_

   The \*\*MDDB Workflow\*\* is a tool that standardizes\, validates\, and analyzes molecular
   dynamics projects by converting raw simulation outputs into normalized structure and
   trajectory files and running automated QA and analysis pipelines. Results and metadata
   are packaged for ingestion into the MDDB via the \[loader\]\(https\:\/\/github.com\/mmb\-irb\/MDDB\-loader\)\,
   making them immediately viewable in the \[MDposit client\]\(https\:\/\/mdposit.mddbr.eu\/\).
   The workflow is designed to run reproducibly on a laptop\, in containers\, or on HPC systems\,
   supporting multiple input formats\, automated checks\, and flexible deployment.



.. conda:package:: mddb_workflow

   |downloads_mddb_workflow| |docker_mddb_workflow|

   :versions:
      
      

      ``0.1.10-0``

      

   
   :depends on ambertools: 
   :depends on biobb_mem: ``5.1.2``
   :depends on biopython: ``>1.79``
   :depends on biotite: 
   :depends on cmip: 
   :depends on curves: 
   :depends on fpocket: 
   :depends on gromacs_mddb: ``2025.3 h61c8354_3``
   :depends on jinja2: 
   :depends on mdanalysis: 
   :depends on mdtraj: ``>=1.11.0``
   :depends on mordredcommunity: 
   :depends on numpy: 
   :depends on openssl: ``3.4.1``
   :depends on plotext: 
   :depends on python: ``>=3.11,<=3.12``
   :depends on python-xxhash: 
   :depends on pyyaml: 
   :depends on rdkit: 
   :depends on requests: 
   :depends on rich: 
   :depends on scipy: 
   :depends on vmd: ``1.9.3 hbf76b22_2``
   :depends on xmltodict: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install mddb_workflow

to add into an existing workspace instead, run::

    pixi add mddb_workflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mddb_workflow

Alternatively, to install into a new environment, run::

    conda create -n envname mddb_workflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mddb_workflow:<tag>

(see `mddb_workflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mddb_workflow| image:: https://img.shields.io/conda/dn/bioconda/mddb_workflow.svg?style=flat
   :target: https://anaconda.org/bioconda/mddb_workflow
   :alt:   (downloads)
.. |docker_mddb_workflow| image:: https://quay.io/repository/biocontainers/mddb_workflow/status
   :target: https://quay.io/repository/biocontainers/mddb_workflow
.. _`mddb_workflow/tags`: https://quay.io/repository/biocontainers/mddb_workflow?tab=tags


.. raw:: html

    <script>
        var package = "mddb_workflow";
        var versions = ["0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mddb_workflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mddb_workflow/README.html