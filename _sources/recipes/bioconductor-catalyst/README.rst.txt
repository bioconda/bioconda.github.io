:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-catalyst'
.. highlight: bash

bioconductor-catalyst
=====================

.. conda:recipe:: bioconductor-catalyst
   :replaces_section_title:
   :noindex:

   Cytometry dATa anALYSis Tools

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CATALYST.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-catalyst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst/meta.yaml>`_

   Mass cytometry \(CyTOF\) uses heavy metal isotopes rather than fluorescent tags as reporters to label antibodies\, thereby substantially decreasing spectral overlap and allowing for examination of over 50 parameters at the single cell level. While spectral overlap is significantly less pronounced in CyTOF than flow cytometry\, spillover due to detection sensitivity\, isotopic impurities\, and oxide formation can impede data interpretability. We designed CATALYST \(Cytometry dATa anALYSis Tools\) to provide a pipeline for preprocessing of cytometry data\, including i\) normalization using bead standards\, ii\) single\-cell deconvolution\, and iii\) bead\-based compensation.


.. conda:package:: bioconductor-catalyst

   |downloads_bioconductor-catalyst| |docker_bioconductor-catalyst|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.6-0``,  ``1.6.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-consensusclusterplus: ``>=1.58.0,<1.59.0``
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends bioconductor-flowsom: ``>=2.2.0,<2.3.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-scater: ``>=1.22.0,<1.23.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-catalyst

   and update with::

      conda update bioconductor-catalyst

   or use the docker container::

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
        var versions = ["1.18.0","1.16.0","1.14.0","1.14.0","1.12.1"];
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