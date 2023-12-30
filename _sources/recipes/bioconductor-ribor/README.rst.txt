:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribor'
.. highlight: bash

bioconductor-ribor
==================

.. conda:recipe:: bioconductor-ribor
   :replaces_section_title:
   :noindex:

   An R Interface for Ribo Files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ribor.html
   :license: GPL-3
   :recipe: /`bioconductor-ribor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribor/meta.yaml>`_

   The ribor package provides an R Interface for .ribo files. It provides functionality to read the .ribo file\, which is of HDF5 format\, and performs common analyses on its contents.


.. conda:package:: bioconductor-ribor

   |downloads_bioconductor-ribor| |docker_bioconductor-ribor|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-yaml: 
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

      mamba install bioconductor-ribor

   and update with::

      mamba update bioconductor-ribor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ribor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribor:<tag>

   (see `bioconductor-ribor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribor
   :alt:   (downloads)
.. |docker_bioconductor-ribor| image:: https://quay.io/repository/biocontainers/bioconductor-ribor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribor
.. _`bioconductor-ribor/tags`: https://quay.io/repository/biocontainers/bioconductor-ribor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribor";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribor/README.html