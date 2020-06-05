:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metaboanalyst'
.. highlight: bash

r-metaboanalyst
===============

.. conda:recipe:: r-metaboanalyst
   :replaces_section_title:
   :noindex:

   MetaboAnalystR 2.0 contains the R functions and libraries underlying the popular MetaboAnalyst web server.

   :homepage: https://github.com/xia-lab/MetaboAnalystR
   :license: GPL-3
   :recipe: /`r-metaboanalyst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metaboanalyst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metaboanalyst/meta.yaml>`_

   


.. conda:package:: r-metaboanalyst

   |downloads_r-metaboanalyst| |docker_r-metaboanalyst|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends bioconductor-biocparallel: 
   :depends bioconductor-camera: 
   :depends bioconductor-fgsea: 
   :depends bioconductor-genefilter: 
   :depends bioconductor-globalancova: 
   :depends bioconductor-globaltest: 
   :depends bioconductor-impute: 
   :depends bioconductor-kegggraph: 
   :depends bioconductor-keggrest: 
   :depends bioconductor-limma: 
   :depends bioconductor-msnbase: 
   :depends bioconductor-pcamethods: 
   :depends bioconductor-preprocesscore: 
   :depends bioconductor-rgraphviz: 
   :depends bioconductor-siggenes: 
   :depends bioconductor-sspa: 
   :depends bioconductor-sva: 
   :depends bioconductor-xcms: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cairo: 
   :depends r-car: 
   :depends r-caret: 
   :depends r-catools: 
   :depends r-data.table: 
   :depends r-e1071: 
   :depends r-ellipse: 
   :depends r-fitdistrplus: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-lars: 
   :depends r-lattice: 
   :depends r-magrittr: 
   :depends r-metap: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-pls: 
   :depends r-proc: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reshape: 
   :depends r-reshape2: 
   :depends r-rjsonio: 
   :depends r-rocr: 
   :depends r-rserve: 
   :depends r-scales: 
   :depends r-scatterplot3d: 
   :depends r-som: 
   :depends r-spls: 
   :depends r-tibble: 
   :depends r-tidyverse: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metaboanalyst

   and update with::

      conda update r-metaboanalyst

   or use the docker container::

      docker pull quay.io/biocontainers/r-metaboanalyst:<tag>

   (see `r-metaboanalyst/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metaboanalyst| image:: https://img.shields.io/conda/dn/bioconda/r-metaboanalyst.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metaboanalyst
   :alt:   (downloads)
.. |docker_r-metaboanalyst| image:: https://quay.io/repository/biocontainers/r-metaboanalyst/status
   :target: https://quay.io/repository/biocontainers/r-metaboanalyst
.. _`r-metaboanalyst/tags`: https://quay.io/repository/biocontainers/r-metaboanalyst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metaboanalyst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metaboanalyst/README.html