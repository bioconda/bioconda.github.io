:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moma'
.. highlight: bash

bioconductor-moma
=================

.. conda:recipe:: bioconductor-moma
   :replaces_section_title:
   :noindex:

   Multi Omic Master Regulator Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MOMA.html
   :license: GPL-3
   :recipe: /`bioconductor-moma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moma/meta.yaml>`_

   This package implements the inference of candidate master regulator proteins from multi\-omics\' data \(MOMA\) algorithm\, as well as ancillary analysis and visualization functions.


.. conda:package:: bioconductor-moma

   |downloads_bioconductor-moma| |docker_bioconductor-moma|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.6.0,<2.7.0``
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-qvalue: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mkmisc: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-moma

   and update with::

      conda update bioconductor-moma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moma:<tag>

   (see `bioconductor-moma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moma
   :alt:   (downloads)
.. |docker_bioconductor-moma| image:: https://quay.io/repository/biocontainers/bioconductor-moma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moma
.. _`bioconductor-moma/tags`: https://quay.io/repository/biocontainers/bioconductor-moma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moma/README.html