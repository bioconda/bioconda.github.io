:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-onlinefdr'
.. highlight: bash

bioconductor-onlinefdr
======================

.. conda:recipe:: bioconductor-onlinefdr
   :replaces_section_title:
   :noindex:

   Online error control

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/onlineFDR.html
   :license: GPL-3
   :recipe: /`bioconductor-onlinefdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onlinefdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onlinefdr/meta.yaml>`_

   This package allows users to control the false discovery rate \(FDR\) or familywise error rate \(FWER\) for online hypothesis testing\, where hypotheses arrive sequentially in a stream. In this framework\, a null hypothesis is rejected based only on the previous decisions\, as the future p\-values and the number of hypotheses to be tested are unknown.


.. conda:package:: bioconductor-onlinefdr

   |downloads_bioconductor-onlinefdr| |docker_bioconductor-onlinefdr|

   :versions:
      
      

      ``2.0.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-progress: 
   :depends r-rcpp: 
   :depends r-rcppprogress: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-onlinefdr

   and update with::

      conda update bioconductor-onlinefdr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-onlinefdr:<tag>

   (see `bioconductor-onlinefdr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-onlinefdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onlinefdr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-onlinefdr
   :alt:   (downloads)
.. |docker_bioconductor-onlinefdr| image:: https://quay.io/repository/biocontainers/bioconductor-onlinefdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onlinefdr
.. _`bioconductor-onlinefdr/tags`: https://quay.io/repository/biocontainers/bioconductor-onlinefdr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onlinefdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onlinefdr/README.html