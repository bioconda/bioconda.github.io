:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-autonomics'
.. highlight: bash

bioconductor-autonomics
=======================

.. conda:recipe:: bioconductor-autonomics
   :replaces_section_title:
   :noindex:

   Unified statistal Modeling of Omics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/autonomics.html
   :license: GPL-3
   :recipe: /`bioconductor-autonomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-autonomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-autonomics/meta.yaml>`_

   This package unifies access to Statistal Modeling of Omics Data. Across linear modeling engines \(lm\, lme\, lmer\, limma\, and wilcoxon\). Across coding systems \(treatment\, difference\, deviation\, etc\). Across model formulae \(with\/without intercept\, random effect\, interaction or nesting\). Across omics platforms \(microarray\, rnaseq\, msproteomics\, affinity proteomics\, metabolomics\). Across projection methods \(pca\, pls\, sma\, lda\, spls\, opls\). Across clustering methods \(hclust\, pam\, cmeans\). It provides a fast enrichment analysis implementation. And an intuitive contrastogram visualisation to summarize contrast effects in complex designs.


.. conda:package:: bioconductor-autonomics

   |downloads_bioconductor-autonomics| |docker_bioconductor-autonomics|

   :versions:
      
      

      ``1.10.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-abind: 
   :depends r-assertive.base: 
   :depends r-assertive.files: 
   :depends r-assertive.numbers: 
   :depends r-assertive.sets: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit64: 
   :depends r-colorspace: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-r.utils: 
   :depends r-rappdirs: 
   :depends r-readxl: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringi: 
   :depends r-tidyr: 
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

      mamba install bioconductor-autonomics

   and update with::

      mamba update bioconductor-autonomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-autonomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-autonomics:<tag>

   (see `bioconductor-autonomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-autonomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-autonomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-autonomics
   :alt:   (downloads)
.. |docker_bioconductor-autonomics| image:: https://quay.io/repository/biocontainers/bioconductor-autonomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-autonomics
.. _`bioconductor-autonomics/tags`: https://quay.io/repository/biocontainers/bioconductor-autonomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-autonomics";
        var versions = ["1.10.2","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-autonomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-autonomics/README.html