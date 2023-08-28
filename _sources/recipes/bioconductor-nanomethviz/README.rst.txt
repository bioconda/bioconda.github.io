:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanomethviz'
.. highlight: bash

bioconductor-nanomethviz
========================

.. conda:recipe:: bioconductor-nanomethviz
   :replaces_section_title:
   :noindex:

   Visualise methlation data from Oxford Nanopore sequencing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NanoMethViz.html
   :license: Apache License (>= 2.0)
   :recipe: /`bioconductor-nanomethviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanomethviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanomethviz/meta.yaml>`_

   NanoMethViz is a toolkit for visualising methylation data from Oxford Nanopore sequencing. It can be used to explore methylation patterns from reads derived from Oxford Nanopore direct DNA sequencing with methylation called by callers including nanopolish\, f5c and megalodon. The plots in this package allow the visualisation of methylation profiles aggregated over experimental groups and across classes of genomic features.


.. conda:package:: bioconductor-nanomethviz

   |downloads_bioconductor-nanomethviz| |docker_bioconductor-nanomethviz|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-bsseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cpp11: ``>=0.2.5``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-forcats: 
   :depends r-fs: 
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-ggrastr: 
   :depends r-glue: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rsqlite: 
   :depends r-scales: ``>=1.2.0``
   :depends r-scico: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-withr: 
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

      mamba install bioconductor-nanomethviz

   and update with::

      mamba update bioconductor-nanomethviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nanomethviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanomethviz:<tag>

   (see `bioconductor-nanomethviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanomethviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanomethviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanomethviz
   :alt:   (downloads)
.. |docker_bioconductor-nanomethviz| image:: https://quay.io/repository/biocontainers/bioconductor-nanomethviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanomethviz
.. _`bioconductor-nanomethviz/tags`: https://quay.io/repository/biocontainers/bioconductor-nanomethviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanomethviz";
        var versions = ["2.6.0","2.4.0","2.4.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanomethviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanomethviz/README.html