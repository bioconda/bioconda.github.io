:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metavolcanor'
.. highlight: bash

bioconductor-metavolcanor
=========================

.. conda:recipe:: bioconductor-metavolcanor
   :replaces_section_title:
   :noindex:

   Gene Expression Meta\-analysis Visualization Tool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MetaVolcanoR.html
   :license: GPL-3
   :recipe: /`bioconductor-metavolcanor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavolcanor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavolcanor/meta.yaml>`_

   MetaVolcanoR combines differential gene expression results. It implements three strategies to summarize differential gene expression from different studies. i\) Random Effects Model \(REM\) approach\, ii\) a p\-value combining\-approach\, and iii\) a vote\-counting approach. In all cases\, MetaVolcano exploits the Volcano plot reasoning to visualize the gene expression meta\-analysis results.


.. conda:package:: bioconductor-metavolcanor

   |downloads_bioconductor-metavolcanor| |docker_bioconductor-metavolcanor|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.14-0``

      

   
   :depends bioconductor-topconfects: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-metafor: 
   :depends r-metap: 
   :depends r-plotly: 
   :depends r-rlang: 
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

      mamba install bioconductor-metavolcanor

   and update with::

      mamba update bioconductor-metavolcanor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metavolcanor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metavolcanor:<tag>

   (see `bioconductor-metavolcanor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metavolcanor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metavolcanor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metavolcanor
   :alt:   (downloads)
.. |docker_bioconductor-metavolcanor| image:: https://quay.io/repository/biocontainers/bioconductor-metavolcanor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metavolcanor
.. _`bioconductor-metavolcanor/tags`: https://quay.io/repository/biocontainers/bioconductor-metavolcanor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metavolcanor";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metavolcanor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metavolcanor/README.html