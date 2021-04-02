:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-erssa'
.. highlight: bash

bioconductor-erssa
==================

.. conda:recipe:: bioconductor-erssa
   :replaces_section_title:
   :noindex:

   Empirical RNA\-seq Sample Size Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ERSSA.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-erssa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erssa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erssa/meta.yaml>`_

   The ERSSA package takes user supplied RNA\-seq differential expression dataset and calculates the number of differentially expressed genes at varying biological replicate levels. This allows the user to determine\, without relying on any a priori assumptions\, whether sufficient differential detection has been acheived with their RNA\-seq dataset.


.. conda:package:: bioconductor-erssa

   |downloads_bioconductor-erssa| |docker_bioconductor-erssa|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-plyr: ``>=1.8.4``
   :depends r-rcolorbrewer: ``>=1.1-2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-erssa

   and update with::

      conda update bioconductor-erssa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-erssa:<tag>

   (see `bioconductor-erssa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-erssa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-erssa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-erssa
   :alt:   (downloads)
.. |docker_bioconductor-erssa| image:: https://quay.io/repository/biocontainers/bioconductor-erssa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-erssa
.. _`bioconductor-erssa/tags`: https://quay.io/repository/biocontainers/bioconductor-erssa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-erssa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-erssa/README.html