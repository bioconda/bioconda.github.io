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
      
      

      ``2.0.2-0``,  ``1.2.1-0``,  ``1.1.1-0``

      

   
   :depends acpype: ``2020.10.*``
   :depends gromacs: ``2019.1.*``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends os_command_py: 
   :depends pandas: 
   :depends pdb2pqr_htmd_propka30: 
   :depends pdb_manip_py: 
   :depends python: ``>=3.5``
   :depends rdkit: ``2020.09.*``
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gromacs_py

   and update with::

      mamba update gromacs_py

  To create a new environment, run::

      mamba create --name myenvname gromacs_py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gromacs_py:<tag>

   (see `gromacs_py/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacs_py| image:: https://img.shields.io/conda/dn/bioconda/gromacs_py.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_py
   :alt:   (downloads)
.. |docker_gromacs_py| image:: https://quay.io/repository/biocontainers/gromacs_py/status
   :target: https://quay.io/repository/biocontainers/gromacs_py
.. _`gromacs_py/tags`: https://quay.io/repository/biocontainers/gromacs_py?tab=tags


.. raw:: html

    <script>
        var package = "gromacs_py";
        var versions = ["2.0.2","1.2.1","1.1.1"];
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