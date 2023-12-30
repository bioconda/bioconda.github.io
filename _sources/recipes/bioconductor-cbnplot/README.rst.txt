:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbnplot'
.. highlight: bash

bioconductor-cbnplot
====================

.. conda:recipe:: bioconductor-cbnplot
   :replaces_section_title:
   :noindex:

   plot bayesian network inferred from gene expression data based on enrichment analysis results

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CBNplot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cbnplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbnplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbnplot/meta.yaml>`_

   This package provides the visualization of bayesian network inferred from gene expression data. The networks are based on enrichment analysis results inferred from packages including clusterProfiler and ReactomePA. The networks between pathways and genes inside the pathways can be inferred and visualized.


.. conda:package:: bioconductor-cbnplot

   |downloads_bioconductor-cbnplot| |docker_bioconductor-cbnplot|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-depmap: ``>=1.16.0,<1.17.0``
   :depends bioconductor-enrichplot: ``>=1.22.0,<1.23.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-graphite: ``>=1.48.0,<1.49.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bnlearn: ``>=4.7``
   :depends r-dplyr: 
   :depends r-ggdist: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-graphlayouts: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-oaqc: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-pvclust: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmpfr: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-cbnplot

   and update with::

      mamba update bioconductor-cbnplot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cbnplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cbnplot:<tag>

   (see `bioconductor-cbnplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cbnplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbnplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbnplot
   :alt:   (downloads)
.. |docker_bioconductor-cbnplot| image:: https://quay.io/repository/biocontainers/bioconductor-cbnplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbnplot
.. _`bioconductor-cbnplot/tags`: https://quay.io/repository/biocontainers/bioconductor-cbnplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbnplot";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbnplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbnplot/README.html