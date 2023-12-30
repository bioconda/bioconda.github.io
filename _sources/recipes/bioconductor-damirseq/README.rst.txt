:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-damirseq'
.. highlight: bash

bioconductor-damirseq
=====================

.. conda:recipe:: bioconductor-damirseq
   :replaces_section_title:
   :noindex:

   Data Mining for RNA\-seq data\: normalization\, feature selection and classification

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DaMiRseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-damirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damirseq/meta.yaml>`_

   The DaMiRseq package offers a tidy pipeline of data mining procedures to identify transcriptional biomarkers and exploit them for both binary and multi\-class classification purposes. The package accepts any kind of data presented as a table of raw counts and allows including both continous and factorial variables that occur with the experimental setting. A series of functions enable the user to clean up the data by filtering genomic features and samples\, to adjust data by identifying and removing the unwanted source of variation \(i.e. batches and confounding factors\) and to select the best predictors for modeling. Finally\, a \"stacking\" ensemble learning technique is applied to build a robust classification model. Every step includes a checkpoint that the user may exploit to assess the effects of data management by looking at diagnostic plots\, such as clustering and heatmaps\, RLE boxplots\, MDS or correlation plot.


.. conda:package:: bioconductor-damirseq

   |downloads_bioconductor-damirseq| |docker_bioconductor-damirseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edaseq: ``>=2.36.0,<2.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-arm: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-corrplot: 
   :depends r-e1071: 
   :depends r-factominer: 
   :depends r-fselector: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-ineq: 
   :depends r-kknn: 
   :depends r-lubridate: 
   :depends r-mass: 
   :depends r-pheatmap: 
   :depends r-pls: 
   :depends r-plsvarsel: 
   :depends r-plyr: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rsnns: 
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

      mamba install bioconductor-damirseq

   and update with::

      mamba update bioconductor-damirseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-damirseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-damirseq:<tag>

   (see `bioconductor-damirseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-damirseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-damirseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-damirseq
   :alt:   (downloads)
.. |docker_bioconductor-damirseq| image:: https://quay.io/repository/biocontainers/bioconductor-damirseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-damirseq
.. _`bioconductor-damirseq/tags`: https://quay.io/repository/biocontainers/bioconductor-damirseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-damirseq";
        var versions = ["2.14.0","2.12.0","2.10.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-damirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-damirseq/README.html