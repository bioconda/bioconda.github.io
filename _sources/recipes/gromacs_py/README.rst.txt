:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_py'
.. highlight: bash

gromacs_py
==========

.. conda:recipe:: gromacs_py
   :replaces_section_title:
   :noindex:

   Gromacs\_py is a python library allowing a simplified use of the gromacs MD simulation software.

   :homepage: https://github.com/samuelmurail/gromacs_py
   :documentation: https://gromacs-py.readthedocs.io/en/latest/
   
   :developer docs: https://gromacs-py.readthedocs.io/en/latest/contributing.html
   :license: GPL-2.0-only
   :recipe: /`gromacs_py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_py/meta.yaml>`_

   


.. conda:package:: gromacs_py

   |downloads_gromacs_py| |docker_gromacs_py|

   :versions:
      
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``1.2.1-0``,  ``1.1.1-0``

      

   
   :depends on acpype: 
   :depends on gromacs: ``>=2019.1``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on os_command_py: 
   :depends on pandas: 
   :depends on pdb2pqr_htmd_propka30: 
   :depends on pdb_manip_py: 
   :depends on python: ``>=3.5``
   :depends on rdkit: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install gromacs_py

to add into an existing workspace instead, run::

    pixi add gromacs_py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gromacs_py

Alternatively, to install into a new environment, run::

    conda create -n envname gromacs_py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gromacs_py:<tag>

(see `gromacs_py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gromacs_py| image:: https://img.shields.io/conda/dn/bioconda/gromacs_py.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_py
   :alt:   (downloads)
.. |docker_gromacs_py| image:: https://quay.io/repository/biocontainers/gromacs_py/status
   :target: https://quay.io/repository/biocontainers/gromacs_py
.. _`gromacs_py/tags`: https://quay.io/repository/biocontainers/gromacs_py?tab=tags


.. raw:: html

    <script>
        var package = "gromacs_py";
        var versions = ["2.0.3","2.0.2","1.2.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_py/README.html