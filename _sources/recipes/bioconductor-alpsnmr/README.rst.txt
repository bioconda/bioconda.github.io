:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alpsnmr'
.. highlight: bash

bioconductor-alpsnmr
====================

.. conda:recipe:: bioconductor-alpsnmr
   :replaces_section_title:
   :noindex:

   Automated spectraL Processing System for NMR

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/AlpsNMR.html
   :license: file LICENSE
   :recipe: /`bioconductor-alpsnmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpsnmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpsnmr/meta.yaml>`_

   Reads Bruker NMR data directories both zipped and unzipped. It provides automated and efficient signal processing for untargeted NMR metabolomics. It is able to interpolate the samples\, detect outliers\, exclude regions\, normalize\, detect peaks\, align the spectra\, integrate peaks\, manage metadata and visualize the spectra. After spectra proccessing\, it can apply multivariate analysis on extracted data. Efficient plotting with 1\-D data is also available. Basic reading of 1D ACD\/Labs exported JDX samples is also available.


.. conda:package:: bioconductor-alpsnmr

   |downloads_bioconductor-alpsnmr| |docker_bioconductor-alpsnmr|

   :versions:
      
      

      ``3.1.5-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-mixomics: ``>=6.16.0,<6.17.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-baseline: ``>=1.2-1``
   :depends r-dplyr: ``>=0.7.5``
   :depends r-fs: ``>=1.2.6``
   :depends r-furrr: ``>=0.1.0``
   :depends r-future: ``>=1.10.0``
   :depends r-ggally: ``>=1.4.0``
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-ggrepel: ``>=0.8.0``
   :depends r-glue: ``>=1.2.0``
   :depends r-htmltools: ``>=0.3.6``
   :depends r-magrittr: ``>=1.5``
   :depends r-matrixstats: ``>=0.54.0``
   :depends r-pcapp: ``>=1.9-73``
   :depends r-plyr: ``>=1.8.4``
   :depends r-purrr: ``>=0.2.5``
   :depends r-readxl: ``>=1.1.0``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rlang: ``>=0.3.0.1``
   :depends r-rmarkdown: ``>=1.10``
   :depends r-signal: ``>=0.7-6``
   :depends r-speaq: ``>=2.4.0``
   :depends r-stringr: ``>=1.3.1``
   :depends r-tibble: ``>=1.3.4``
   :depends r-tidyr: ``>=1.0.0``
   :depends r-tidyselect: ``>=0.2.5``
   :depends r-writexl: ``>=1.0``
   :depends r-zip: ``>=2.0.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alpsnmr

   and update with::

      conda update bioconductor-alpsnmr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alpsnmr:<tag>

   (see `bioconductor-alpsnmr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alpsnmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpsnmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alpsnmr
   :alt:   (downloads)
.. |docker_bioconductor-alpsnmr| image:: https://quay.io/repository/biocontainers/bioconductor-alpsnmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpsnmr
.. _`bioconductor-alpsnmr/tags`: https://quay.io/repository/biocontainers/bioconductor-alpsnmr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpsnmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpsnmr/README.html