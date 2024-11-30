:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scopfunctions'
.. highlight: bash

r-scopfunctions
===============

.. conda:recipe:: r-scopfunctions
   :replaces_section_title:
   :noindex:

   An R package of functions for single cell \-omics analysis. 

   :homepage: https://github.com/CBMR-Single-Cell-Omics-Platform/SCOPfunctions
   :license: AGPL / AGPL-3
   :recipe: /`r-scopfunctions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scopfunctions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scopfunctions/meta.yaml>`_

   


.. conda:package:: r-scopfunctions

   |downloads_r-scopfunctions| |docker_r-scopfunctions|

   :versions:
      
      

      ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends bioconductor-mast: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-r.utils: 
   :depends r-sessioninfo: 
   :depends r-seurat: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-scopfunctions

   and update with::

      mamba update r-scopfunctions

  To create a new environment, run::

      mamba create --name myenvname r-scopfunctions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scopfunctions:<tag>

   (see `r-scopfunctions/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scopfunctions| image:: https://img.shields.io/conda/dn/bioconda/r-scopfunctions.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scopfunctions
   :alt:   (downloads)
.. |docker_r-scopfunctions| image:: https://quay.io/repository/biocontainers/r-scopfunctions/status
   :target: https://quay.io/repository/biocontainers/r-scopfunctions
.. _`r-scopfunctions/tags`: https://quay.io/repository/biocontainers/r-scopfunctions?tab=tags


.. raw:: html

    <script>
        var package = "r-scopfunctions";
        var versions = ["0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scopfunctions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scopfunctions/README.html