:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-radiogx'
.. highlight: bash

bioconductor-radiogx
====================

.. conda:recipe:: bioconductor-radiogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Radio\-Genomic Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RadioGx.html
   :license: GPL-3
   :recipe: /`bioconductor-radiogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-radiogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-radiogx/meta.yaml>`_

   Computational tool box for radio\-genomic analysis which integrates radio\-response data\, radio\-biological modelling and comprehensive cell line annotations for hundreds of cancer cell lines. The \'RadioSet\' class enables creation and manipulation of standardized datasets including information about cancer cells lines\, radio\-response assays and dose\-response indicators. Included methods allow fitting and plotting dose\-response data using established radio\-biological models along with quality control to validate results. Additional functions related to fitting and plotting dose response curves\, quantifying statistical correlation and calculating area under the curve \(AUC\) or survival fraction \(SF\) are included. For more details please see the included documentation\, references\, as well as\: Manem\, V. et al \(2018\) \<doi\:10.1101\/449793\>.


.. conda:package:: bioconductor-radiogx

   |downloads_bioconductor-radiogx| |docker_bioconductor-radiogx|

   :versions:
      
      

      ``2.2.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-coregx: ``>=2.2.0,<2.3.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-catools: 
   :depends r-data.table: 
   :depends r-downloader: 
   :depends r-magicaxis: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-radiogx

   and update with::

      conda update bioconductor-radiogx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-radiogx:<tag>

   (see `bioconductor-radiogx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-radiogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-radiogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-radiogx
   :alt:   (downloads)
.. |docker_bioconductor-radiogx| image:: https://quay.io/repository/biocontainers/bioconductor-radiogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-radiogx
.. _`bioconductor-radiogx/tags`: https://quay.io/repository/biocontainers/bioconductor-radiogx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-radiogx";
        var versions = ["2.2.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-radiogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-radiogx/README.html