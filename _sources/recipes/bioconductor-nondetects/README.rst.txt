:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nondetects'
.. highlight: bash

bioconductor-nondetects
=======================

.. conda:recipe:: bioconductor-nondetects
   :replaces_section_title:
   :noindex:

   Non\-detects in qPCR data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/nondetects.html
   :license: GPL-3
   :recipe: /`bioconductor-nondetects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nondetects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nondetects/meta.yaml>`_
   :links: biotools: :biotools:`nondetects`

   Methods to model and impute non\-detects in the results of qPCR experiments.


.. conda:package:: bioconductor-nondetects

   |downloads_bioconductor-nondetects| |docker_bioconductor-nondetects|

   :versions:
      
      

      ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-htqpcr: ``>=1.46.0,<1.47.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends r-arm: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nondetects

   and update with::

      conda update bioconductor-nondetects

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nondetects:<tag>

   (see `bioconductor-nondetects/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nondetects| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nondetects.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nondetects
   :alt:   (downloads)
.. |docker_bioconductor-nondetects| image:: https://quay.io/repository/biocontainers/bioconductor-nondetects/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nondetects
.. _`bioconductor-nondetects/tags`: https://quay.io/repository/biocontainers/bioconductor-nondetects?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nondetects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nondetects/README.html