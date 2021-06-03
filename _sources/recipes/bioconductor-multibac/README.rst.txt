:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multibac'
.. highlight: bash

bioconductor-multibac
=====================

.. conda:recipe:: bioconductor-multibac
   :replaces_section_title:
   :noindex:

   Multiomic Batch effect Correction

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MultiBaC.html
   :license: GPL-3
   :recipe: /`bioconductor-multibac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multibac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multibac/meta.yaml>`_

   MultiBaC is a strategy to correct batch effects from multiomic datasets distributed across different labs or data acquisition events. MultiBaC is the first Batch effect correction algorithm that dealing with batch effect correction in multiomics datasets. MultiBaC is able to remove batch effects across different omics generated within separate batches provided that at least one common omic data type is included in all the batches considered.


.. conda:package:: bioconductor-multibac

   |downloads_bioconductor-multibac| |docker_bioconductor-multibac|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-ropls: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multibac

   and update with::

      conda update bioconductor-multibac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multibac:<tag>

   (see `bioconductor-multibac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multibac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multibac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multibac
   :alt:   (downloads)
.. |docker_bioconductor-multibac| image:: https://quay.io/repository/biocontainers/bioconductor-multibac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multibac
.. _`bioconductor-multibac/tags`: https://quay.io/repository/biocontainers/bioconductor-multibac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multibac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multibac/README.html