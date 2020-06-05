:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqbias'
.. highlight: bash

bioconductor-seqbias
====================

.. conda:recipe:: bioconductor-seqbias
   :replaces_section_title:
   :noindex:

   Estimation of per\-position bias in high\-throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/seqbias.html
   :license: LGPL-3
   :recipe: /`bioconductor-seqbias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias/meta.yaml>`_

   This package implements a model of per\-position sequencing bias in high\-throughput sequencing data using a simple Bayesian network\, the structure and parameters of which are trained on a set of aligned reads and a reference genome sequence.


.. conda:package:: bioconductor-seqbias

   |downloads_bioconductor-seqbias| |docker_bioconductor-seqbias|

   :versions:
      
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-rhtslib: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqbias

   and update with::

      conda update bioconductor-seqbias

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqbias:<tag>

   (see `bioconductor-seqbias/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqbias| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqbias.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqbias
   :alt:   (downloads)
.. |docker_bioconductor-seqbias| image:: https://quay.io/repository/biocontainers/bioconductor-seqbias/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqbias
.. _`bioconductor-seqbias/tags`: https://quay.io/repository/biocontainers/bioconductor-seqbias?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqbias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqbias/README.html