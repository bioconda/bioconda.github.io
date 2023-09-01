:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crossmeta'
.. highlight: bash

bioconductor-crossmeta
======================

.. conda:recipe:: bioconductor-crossmeta
   :replaces_section_title:
   :noindex:

   Cross Platform Meta\-Analysis of Microarray Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/crossmeta.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crossmeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crossmeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crossmeta/meta.yaml>`_

   Implements cross\-platform and cross\-species meta\-analyses of Affymentrix\, Illumina\, and Agilent microarray data. This package automates common tasks such as downloading\, normalizing\, and annotating raw GEO data. The user then selects control and treatment samples in order to perform differential expression analyses for all comparisons. After analysing each contrast seperately\, the user can select tissue sources for each contrast and specify any tissue sources that should be grouped for the subsequent meta\-analyses.


.. conda:package:: bioconductor-crossmeta

   |downloads_bioconductor-crossmeta| |docker_bioconductor-crossmeta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.15.0-1</code>,  <code>1.15.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.15.0-1``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affxparser: ``>=1.72.0,<1.73.0``
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-oligo: ``>=1.64.0,<1.65.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: ``>=1.30.4``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dbi: ``>=1.0.0``
   :depends r-dt: ``>=0.2``
   :depends r-fdrtool: ``>=1.2.15``
   :depends r-matrixstats: ``>=0.51.0``
   :depends r-metama: ``>=3.1.2``
   :depends r-miniui: ``>=0.1.1``
   :depends r-rcurl: ``>=1.95.4.11``
   :depends r-reader: ``>=1.0.6``
   :depends r-readxl: ``>=1.3.1``
   :depends r-rsqlite: ``>=2.1.1``
   :depends r-shiny: ``>=1.0.0``
   :depends r-shinybs: ``>=0.61``
   :depends r-shinyjs: ``>=2.0.0``
   :depends r-shinypanel: ``>=0.1.0``
   :depends r-shinywidgets: ``>=0.5.3``
   :depends r-stringr: ``>=1.2.0``
   :depends r-tibble: 
   :depends r-xml: ``>=3.98.1.17``
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

      mamba install bioconductor-crossmeta

   and update with::

      mamba update bioconductor-crossmeta

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crossmeta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crossmeta:<tag>

   (see `bioconductor-crossmeta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crossmeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crossmeta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crossmeta
   :alt:   (downloads)
.. |docker_bioconductor-crossmeta| image:: https://quay.io/repository/biocontainers/bioconductor-crossmeta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crossmeta
.. _`bioconductor-crossmeta/tags`: https://quay.io/repository/biocontainers/bioconductor-crossmeta?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crossmeta";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crossmeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crossmeta/README.html