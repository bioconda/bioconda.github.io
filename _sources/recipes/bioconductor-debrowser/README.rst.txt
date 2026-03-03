:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-debrowser'
.. highlight: bash

bioconductor-debrowser
======================

.. conda:recipe:: bioconductor-debrowser
   :replaces_section_title:
   :noindex:

   Interactive Differential Expresion Analysis Browser

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/debrowser.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-debrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debrowser/meta.yaml>`_

   Bioinformatics platform containing interactive plots and tables for differential gene and region expression studies. Allows visualizing expression data much more deeply in an interactive and faster way. By changing the parameters\, users can easily discover different parts of the data that like never have been done before. Manually creating and looking these plots takes time. With DEBrowser users can prepare plots without writing any code. Differential expression\, PCA and clustering analysis are made on site and the results are shown in various plots such as scatter\, bar\, box\, volcano\, ma plots and Heatmaps.


.. conda:package:: bioconductor-debrowser

   |downloads_bioconductor-debrowser| |docker_bioconductor-debrowser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.2-0</code>,  <code>1.26.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.2-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.2-0``,  ``1.26.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.88.0,<1.89.0``
   :depends bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends bioconductor-apeglm: ``>=1.32.0,<1.33.0``
   :depends bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-harman: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
   :depends bioconductor-pathview: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends r-ashr: 
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-colourpicker: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-heatmaply: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-stringi: 
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

      mamba install bioconductor-debrowser

   and update with::

      mamba update bioconductor-debrowser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-debrowser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-debrowser:<tag>

   (see `bioconductor-debrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-debrowser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-debrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-debrowser
   :alt:   (downloads)
.. |docker_bioconductor-debrowser| image:: https://quay.io/repository/biocontainers/bioconductor-debrowser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-debrowser
.. _`bioconductor-debrowser/tags`: https://quay.io/repository/biocontainers/bioconductor-debrowser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-debrowser";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.2","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-debrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-debrowser/README.html