:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-catalyst'
.. highlight: bash

bioconductor-catalyst
=====================

.. conda:recipe:: bioconductor-catalyst
   :replaces_section_title:
   :noindex:

   Cytometry dATa anALYSis Tools

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CATALYST.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-catalyst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst/meta.yaml>`_

   Mass cytometry \(CyTOF\) uses heavy metal isotopes rather than fluorescent tags as reporters to label antibodies\, thereby substantially decreasing spectral overlap and allowing for examination of over 50 parameters at the single cell level. While spectral overlap is significantly less pronounced in CyTOF than flow cytometry\, spillover due to detection sensitivity\, isotopic impurities\, and oxide formation can impede data interpretability. We designed CATALYST \(Cytometry dATa anALYSis Tools\) to provide a pipeline for preprocessing of cytometry data\, including i\) normalization using bead standards\, ii\) single\-cell deconvolution\, and iii\) bead\-based compensation.


.. conda:package:: bioconductor-catalyst

   |downloads_bioconductor-catalyst| |docker_bioconductor-catalyst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.6-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.6-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-consensusclusterplus: ``>=1.64.0,<1.65.0``
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends bioconductor-flowsom: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-drc: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nnls: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
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
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
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