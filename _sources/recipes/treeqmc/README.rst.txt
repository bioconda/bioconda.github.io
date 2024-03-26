:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treeqmc'
.. highlight: bash

treeqmc
=======

.. conda:recipe:: treeqmc
   :replaces_section_title:
   :noindex:

   TREE\-QMC is a quartet\-based method for estimating species trees from gene trees.

   :homepage: https://github.com/molloy-lab/TREE-QMC
   :license: MIT / MIT
   :recipe: /`treeqmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treeqmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treeqmc/meta.yaml>`_

   


.. conda:package:: treeqmc

   |downloads_treeqmc| |docker_treeqmc|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install treeqmc

   and update with::

      mamba update treeqmc

  To create a new environment, run::

      mamba create --name myenvname treeqmc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treeqmc:<tag>

   (see `treeqmc/tags`_ for valid values for ``<tag>``)


.. |downloads_treeqmc| image:: https://img.shields.io/conda/dn/bioconda/treeqmc.svg?style=flat
   :target: https://anaconda.org/bioconda/treeqmc
   :alt:   (downloads)
.. |docker_treeqmc| image:: https://quay.io/repository/biocontainers/treeqmc/status
   :target: https://quay.io/repository/biocontainers/treeqmc
.. _`treeqmc/tags`: https://quay.io/repository/biocontainers/treeqmc?tab=tags


.. raw:: html

    <script>
        var package = "treeqmc";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treeqmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treeqmc/README.html