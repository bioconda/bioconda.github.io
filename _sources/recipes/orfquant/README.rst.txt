:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfquant'
.. highlight: bash

orfquant
========

.. conda:recipe:: orfquant
   :replaces_section_title:
   :noindex:

   SaTAnn is a method that annotates and quantifies translation at the single ORF level using Ribo\-seq data.

   :homepage: https://github.com/ohlerlab/ORFquant
   :license: GPL3 / GPL-3 or above
   :recipe: /`orfquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfquant/meta.yaml>`_

   


.. conda:package:: orfquant

   |downloads_orfquant| |docker_orfquant|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicfiles: 
   :depends bioconductor-rtracklayer: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cowplot: 
   :depends r-devtools: 
   :depends r-domc: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-multitaper: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orfquant

   and update with::

      conda update orfquant

   or use the docker container::

      docker pull quay.io/biocontainers/orfquant:<tag>

   (see `orfquant/tags`_ for valid values for ``<tag>``)


.. |downloads_orfquant| image:: https://img.shields.io/conda/dn/bioconda/orfquant.svg?style=flat
   :target: https://anaconda.org/bioconda/orfquant
   :alt:   (downloads)
.. |docker_orfquant| image:: https://quay.io/repository/biocontainers/orfquant/status
   :target: https://quay.io/repository/biocontainers/orfquant
.. _`orfquant/tags`: https://quay.io/repository/biocontainers/orfquant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfquant/README.html