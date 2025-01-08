:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-catalyst'
.. highlight: bash

bioconductor-catalyst
=====================

.. conda:recipe:: bioconductor-catalyst
   :replaces_section_title:
   :noindex:

   Cytometry dATa anALYSis Tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CATALYST.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-catalyst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst/meta.yaml>`_

   CATALYST provides tools for preprocessing of and differential discovery in cytometry data such as FACS\, CyTOF\, and IMC. Preprocessing includes i\) normalization using bead standards\, ii\) single\-cell deconvolution\, and iii\) bead\-based compensation. For differential discovery\, the package provides a number of convenient functions for data processing \(e.g.\, clustering\, dimension reduction\)\, as well as a suite of visualizations for exploratory data analysis and exploration of results from differential abundance \(DA\) and state \(DS\) analysis in order to identify differences in composition and expression profiles at the subpopulation\-level\, respectively.


.. conda:package:: bioconductor-catalyst

   |downloads_bioconductor-catalyst| |docker_bioconductor-catalyst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.6-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-consensusclusterplus: ``>=1.70.0,<1.71.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowsom: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-drc: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nnls: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
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

      mamba install bioconductor-catalyst

   and update with::

      mamba update bioconductor-catalyst

  To create a new environment, run::

      mamba create --name myenvname bioconductor-catalyst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-catalyst:<tag>

   (see `bioconductor-catalyst/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-catalyst| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-catalyst.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-catalyst
   :alt:   (downloads)
.. |docker_bioconductor-catalyst| image:: https://quay.io/repository/biocontainers/bioconductor-catalyst/status
   :target: https://quay.io/repository/biocontainers/bioconductor-catalyst
.. _`bioconductor-catalyst/tags`: https://quay.io/repository/biocontainers/bioconductor-catalyst?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-catalyst";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-catalyst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-catalyst/README.html