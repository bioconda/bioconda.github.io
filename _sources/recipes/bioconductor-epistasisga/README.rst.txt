:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epistasisga'
.. highlight: bash

bioconductor-epistasisga
========================

.. conda:recipe:: bioconductor-epistasisga
   :replaces_section_title:
   :noindex:

   An R package to identify multi\-snp effects in nuclear family studies using the GADGETS method

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/epistasisGA.html
   :license: GPL-3
   :recipe: /`bioconductor-epistasisga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistasisga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistasisga/meta.yaml>`_

   This package runs the GADGETS method to identify epistatic effects in nuclear family studies. It also provides functions for permutation\-based inference and graphical visualization of the results.


.. conda:package:: bioconductor-epistasisga

   |downloads_bioconductor-epistasisga| |docker_bioconductor-epistasisga|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-batchtools: 
   :depends r-bh: 
   :depends r-bigmemory: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-qgraph: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-survival: 
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

      mamba install bioconductor-epistasisga

   and update with::

      mamba update bioconductor-epistasisga

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epistasisga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epistasisga:<tag>

   (see `bioconductor-epistasisga/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epistasisga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epistasisga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epistasisga
   :alt:   (downloads)
.. |docker_bioconductor-epistasisga| image:: https://quay.io/repository/biocontainers/bioconductor-epistasisga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epistasisga
.. _`bioconductor-epistasisga/tags`: https://quay.io/repository/biocontainers/bioconductor-epistasisga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epistasisga";
        var versions = ["1.2.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epistasisga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epistasisga/README.html