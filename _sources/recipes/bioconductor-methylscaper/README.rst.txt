:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylscaper'
.. highlight: bash

bioconductor-methylscaper
=========================

.. conda:recipe:: bioconductor-methylscaper
   :replaces_section_title:
   :noindex:

   Visualization of Methylation Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/methylscaper.html
   :license: GPL-2
   :recipe: /`bioconductor-methylscaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylscaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylscaper/meta.yaml>`_

   methylscaper is an R package for processing and visualizing data jointly profiling methylation and chromatin accessibility \(MAPit\, NOMe\-seq\, scNMT\-seq\, nanoNOMe\, etc.\). The package supports both single\-cell and single\-molecule data\, and a common interface for jointly visualizing both data types through the generation of ordered representational methylation\-state matrices. The Shiny app allows for an interactive seriation process of refinement and re\-weighting that optimally orders the cells or DNA molecules to discover methylation patterns and nucleosome positioning.


.. conda:package:: bioconductor-methylscaper

   |downloads_bioconductor-methylscaper| |docker_bioconductor-methylscaper|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.4-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-rfast: 
   :depends r-seqinr: 
   :depends r-seriation: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
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

      mamba install bioconductor-methylscaper

   and update with::

      mamba update bioconductor-methylscaper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylscaper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylscaper:<tag>

   (see `bioconductor-methylscaper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylscaper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylscaper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylscaper
   :alt:   (downloads)
.. |docker_bioconductor-methylscaper| image:: https://quay.io/repository/biocontainers/bioconductor-methylscaper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylscaper
.. _`bioconductor-methylscaper/tags`: https://quay.io/repository/biocontainers/bioconductor-methylscaper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylscaper";
        var versions = ["1.10.0","1.8.4","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylscaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylscaper/README.html