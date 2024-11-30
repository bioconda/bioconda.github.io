:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwena'
.. highlight: bash

bioconductor-gwena
==================

.. conda:recipe:: bioconductor-gwena
   :replaces_section_title:
   :noindex:

   Pipeline for augmented co\-expression analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GWENA.html
   :license: GPL-3
   :recipe: /`bioconductor-gwena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwena/meta.yaml>`_

   The development of high\-throughput sequencing led to increased use of co\-expression analysis to go beyong single feature \(i.e. gene\) focus. We propose GWENA \(Gene Whole co\-Expression Network Analysis\) \, a tool designed to perform gene co\-expression network analysis and explore the results in a single pipeline. It includes functional enrichment of modules of co\-expressed genes\, phenotypcal association\, topological analysis and comparison of networks configuration between conditions.


.. conda:package:: bioconductor-gwena

   |downloads_bioconductor-gwena| |docker_bioconductor-gwena|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: ``>=2.1.0``
   :depends r-dplyr: ``>=0.8.3``
   :depends r-dynamictreecut: ``>=1.63-1``
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-gprofiler2: ``>=0.1.6``
   :depends r-igraph: ``>=1.2.4.1``
   :depends r-magrittr: ``>=1.5``
   :depends r-matrixstats: ``>=0.55.0``
   :depends r-netrep: ``>=1.2.1``
   :depends r-purrr: ``>=0.3.3``
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-rlist: ``>=0.4.6.1``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tibble: ``>=2.1.1``
   :depends r-tidyr: ``>=1.0.0``
   :depends r-wgcna: ``>=1.67``
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

      mamba install bioconductor-gwena

   and update with::

      mamba update bioconductor-gwena

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gwena

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwena:<tag>

   (see `bioconductor-gwena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwena
   :alt:   (downloads)
.. |docker_bioconductor-gwena| image:: https://quay.io/repository/biocontainers/bioconductor-gwena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwena
.. _`bioconductor-gwena/tags`: https://quay.io/repository/biocontainers/bioconductor-gwena?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwena";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwena/README.html