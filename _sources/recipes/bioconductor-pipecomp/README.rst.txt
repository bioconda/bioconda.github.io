:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pipecomp'
.. highlight: bash

bioconductor-pipecomp
=====================

.. conda:recipe:: bioconductor-pipecomp
   :replaces_section_title:
   :noindex:

   pipeComp pipeline benchmarking framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pipeComp.html
   :license: GPL
   :recipe: /`bioconductor-pipecomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipecomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipecomp/meta.yaml>`_

   A simple framework to facilitate the comparison of pipelines involving various steps and parameters. The \`pipelineDefinition\` class represents pipelines as\, minimally\, a set of functions consecutively executed on the output of the previous one\, and optionally accompanied by step\-wise evaluation and aggregation functions. Given such an object\, a set of alternative parameters\/methods\, and benchmark datasets\, the \`runPipeline\` function then proceeds through all combinations arguments\, avoiding recomputing the same step twice and compiling evaluations on the fly to avoid storing potentially large intermediate data.


.. conda:package:: bioconductor-pipecomp

   |downloads_bioconductor-pipecomp| |docker_bioconductor-pipecomp|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-aricode: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-intrinsicdimension: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-randomcolor: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-uwot: 
   :depends r-viridislite: 
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

      mamba install bioconductor-pipecomp

   and update with::

      mamba update bioconductor-pipecomp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pipecomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pipecomp:<tag>

   (see `bioconductor-pipecomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pipecomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pipecomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pipecomp
   :alt:   (downloads)
.. |docker_bioconductor-pipecomp| image:: https://quay.io/repository/biocontainers/bioconductor-pipecomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pipecomp
.. _`bioconductor-pipecomp/tags`: https://quay.io/repository/biocontainers/bioconductor-pipecomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pipecomp";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pipecomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pipecomp/README.html