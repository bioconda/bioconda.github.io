:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mait'
.. highlight: bash

bioconductor-mait
=================

.. conda:recipe:: bioconductor-mait
   :replaces_section_title:
   :noindex:

   Statistical Analysis of Metabolomic Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MAIT.html
   :license: GPL-2
   :recipe: /`bioconductor-mait <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mait>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mait/meta.yaml>`_

   The MAIT package contains functions to perform end\-to\-end statistical analysis of LC\/MS Metabolomic Data. Special emphasis is put on peak annotation and in modular function design of the functions.


.. conda:package:: bioconductor-mait

   |downloads_bioconductor-mait| |docker_bioconductor-mait|

   :versions:
      
      

      ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-camera: ``>=1.46.0,<1.47.0``
   :depends bioconductor-xcms: ``>=3.12.0,<3.13.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-agricolae: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-caret: 
   :depends r-class: 
   :depends r-e1071: 
   :depends r-gplots: 
   :depends r-mass: 
   :depends r-pls: 
   :depends r-plsgenomics: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mait

   and update with::

      conda update bioconductor-mait

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mait:<tag>

   (see `bioconductor-mait/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mait| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mait.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mait
   :alt:   (downloads)
.. |docker_bioconductor-mait| image:: https://quay.io/repository/biocontainers/bioconductor-mait/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mait
.. _`bioconductor-mait/tags`: https://quay.io/repository/biocontainers/bioconductor-mait?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mait/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mait/README.html