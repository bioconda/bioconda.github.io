:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgx'
.. highlight: bash

bioconductor-bgx
================

.. conda:recipe:: bioconductor-bgx
   :replaces_section_title:
   :noindex:

   Bayesian Gene eXpression

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/bgx.html
   :license: GPL-2
   :recipe: /`bioconductor-bgx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgx/meta.yaml>`_

   Bayesian integrated analysis of Affymetrix GeneChips


.. conda:package:: bioconductor-bgx

   |downloads_bioconductor-bgx| |docker_bioconductor-bgx|

   :versions:
      
      

      ``1.58.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-gcrma: ``>=2.64.0,<2.65.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bgx

   and update with::

      conda update bioconductor-bgx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgx:<tag>

   (see `bioconductor-bgx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgx
   :alt:   (downloads)
.. |docker_bioconductor-bgx| image:: https://quay.io/repository/biocontainers/bioconductor-bgx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgx
.. _`bioconductor-bgx/tags`: https://quay.io/repository/biocontainers/bioconductor-bgx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgx/README.html