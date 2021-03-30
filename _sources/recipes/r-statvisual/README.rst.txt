:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-statvisual'
.. highlight: bash

r-statvisual
============

.. conda:recipe:: r-statvisual
   :replaces_section_title:
   :noindex:

   Visualization functions in the applications of translational medicine \(TM\) and biomarker \(BM\) development to compare groups by statistically visualizing data and\/or results of analyses\, such as visualizing data by displaying in one figure different groups\' histograms\, boxplots\, densities\, scatter plots\, error\-bar plots\, or trajectory plots\, by displaying scatter plots of top principal components or dendrograms with data points colored based on group information\, or visualizing volcano plots to check the results of whole genome analyses for gene differential expression. 

   :homepage: https://CRAN.R-project.org/package=statVisual
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-statvisual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-statvisual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-statvisual/meta.yaml>`_

   


.. conda:package:: r-statvisual

   |downloads_r-statvisual| |docker_r-statvisual|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.9-0``,  ``1.1.8-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-limma: 
   :depends bioconductor-pvca: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-forestplot: 
   :depends r-gbm: 
   :depends r-ggally: 
   :depends r-ggdendro: 
   :depends r-ggfortify: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-multigroup: 
   :depends r-pheatmap: 
   :depends r-proc: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-rpart.plot: 
   :depends r-tibble: 
   :depends r-tidyverse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-statvisual

   and update with::

      conda update r-statvisual

   or use the docker container::

      docker pull quay.io/biocontainers/r-statvisual:<tag>

   (see `r-statvisual/tags`_ for valid values for ``<tag>``)


.. |downloads_r-statvisual| image:: https://img.shields.io/conda/dn/bioconda/r-statvisual.svg?style=flat
   :target: https://anaconda.org/bioconda/r-statvisual
   :alt:   (downloads)
.. |docker_r-statvisual| image:: https://quay.io/repository/biocontainers/r-statvisual/status
   :target: https://quay.io/repository/biocontainers/r-statvisual
.. _`r-statvisual/tags`: https://quay.io/repository/biocontainers/r-statvisual?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-statvisual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-statvisual/README.html