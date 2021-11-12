:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-artms'
.. highlight: bash

bioconductor-artms
==================

.. conda:recipe:: bioconductor-artms
   :replaces_section_title:
   :noindex:

   Analytical R tools for Mass Spectrometry

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/artMS.html
   :license: GPL (>= 3) + file LICENSE
   :recipe: /`bioconductor-artms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-artms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-artms/meta.yaml>`_

   artMS provides a set of tools for the analysis of proteomics label\-free datasets. It takes as input the MaxQuant search result output \(evidence.txt file\) and performs quality control\, relative quantification using MSstats\, downstream analysis and integration. artMS also provides a set of functions to re\-format and make it compatible with other analytical tools\, including\, SAINTq\, SAINTexpress\, Phosfate\, and PHOTON. Check \[http\:\/\/artms.org\]\(http\:\/\/artms.org\) for details.


.. conda:package:: bioconductor-artms

   |downloads_bioconductor-artms| |docker_bioconductor-artms|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.2.6-0``,  ``1.0.10-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-msstats: ``>=4.2.0,<4.3.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bit64: 
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-corrplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-getopt: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-openxlsx: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-seqinr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :depends r-venndiagram: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-artms

   and update with::

      conda update bioconductor-artms

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-artms:<tag>

   (see `bioconductor-artms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-artms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-artms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-artms
   :alt:   (downloads)
.. |docker_bioconductor-artms| image:: https://quay.io/repository/biocontainers/bioconductor-artms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-artms
.. _`bioconductor-artms/tags`: https://quay.io/repository/biocontainers/bioconductor-artms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-artms";
        var versions = ["1.12.0","1.10.0","1.8.2","1.8.0","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-artms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-artms/README.html