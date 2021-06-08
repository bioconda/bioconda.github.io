:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-memes'
.. highlight: bash

bioconductor-memes
==================

.. conda:recipe:: bioconductor-memes
   :replaces_section_title:
   :noindex:

   motif matching\, comparison\, and de novo discovery using the MEME Suite

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/memes.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-memes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-memes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-memes/meta.yaml>`_

   A seamless interface to the MEME Suite family of tools for motif analysis. \'memes\' provides data aware utilities for using GRanges objects as entrypoints to motif analysis\, data structures for examining \& editing motif lists\, and novel data visualizations. \'memes\' functions and data structures are amenable to both base R and tidyverse workflows.


.. conda:package:: bioconductor-memes

   |downloads_bioconductor-memes| |docker_bioconductor-memes|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-universalmotif: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cmdfun: ``>=1.0.2``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-processx: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-usethis: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-memes

   and update with::

      conda update bioconductor-memes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-memes:<tag>

   (see `bioconductor-memes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-memes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-memes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-memes
   :alt:   (downloads)
.. |docker_bioconductor-memes| image:: https://quay.io/repository/biocontainers/bioconductor-memes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-memes
.. _`bioconductor-memes/tags`: https://quay.io/repository/biocontainers/bioconductor-memes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-memes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-memes/README.html