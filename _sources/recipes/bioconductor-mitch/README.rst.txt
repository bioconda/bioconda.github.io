:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitch'
.. highlight: bash

bioconductor-mitch
==================

.. conda:recipe:: bioconductor-mitch
   :replaces_section_title:
   :noindex:

   Multi\-Contrast Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mitch.html
   :license: CC BY-SA 4.0 + file LICENSE
   :recipe: /`bioconductor-mitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitch/meta.yaml>`_

   mitch is an R package for multi\-contrast enrichment analysis. At it’s heart\, it uses a rank\-MANOVA based statistical approach to detect sets of genes that exhibit enrichment in the multidimensional space as compared to the background. The rank\-MANOVA concept dates to work by Cox and Mann \(https\:\/\/doi.org\/10.1186\/1471\-2105\-13\-S16\-S12\). mitch is useful for pathway analysis of profiling studies with one\, two or more contrasts\, or in studies with multiple omics profiling\, for example proteomic\, transcriptomic\, epigenomic analysis of the same samples. mitch is perfectly suited for pathway level differential analysis of scRNA\-seq data. The main strengths of mitch are that it can import datasets easily from many upstream tools and has advanced plotting features to visualise these enrichments.


.. conda:package:: bioconductor-mitch

   |downloads_bioconductor-mitch| |docker_bioconductor-mitch|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-beeswarm: 
   :depends r-echarts4r: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
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

      mamba install bioconductor-mitch

   and update with::

      mamba update bioconductor-mitch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mitch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mitch:<tag>

   (see `bioconductor-mitch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mitch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitch
   :alt:   (downloads)
.. |docker_bioconductor-mitch| image:: https://quay.io/repository/biocontainers/bioconductor-mitch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitch
.. _`bioconductor-mitch/tags`: https://quay.io/repository/biocontainers/bioconductor-mitch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mitch";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitch/README.html