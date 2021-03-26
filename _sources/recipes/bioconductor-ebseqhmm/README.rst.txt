:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebseqhmm'
.. highlight: bash

bioconductor-ebseqhmm
=====================

.. conda:recipe:: bioconductor-ebseqhmm
   :replaces_section_title:
   :noindex:

   Bayesian analysis for identifying gene or isoform expression changes in ordered RNA\-seq experiments

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/EBSeqHMM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ebseqhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseqhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseqhmm/meta.yaml>`_

   The EBSeqHMM package implements an auto\-regressive hidden Markov model for statistical analysis in ordered RNA\-seq experiments \(e.g. time course or spatial course data\). The EBSeqHMM package provides functions to identify genes and isoforms that have non\-constant expression profile over the time points\/positions\, and cluster them into expression paths.


.. conda:package:: bioconductor-ebseqhmm

   |downloads_bioconductor-ebseqhmm| |docker_bioconductor-ebseqhmm|

   :versions:
      
      

      ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-ebseq: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebseqhmm

   and update with::

      conda update bioconductor-ebseqhmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebseqhmm:<tag>

   (see `bioconductor-ebseqhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebseqhmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebseqhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebseqhmm
   :alt:   (downloads)
.. |docker_bioconductor-ebseqhmm| image:: https://quay.io/repository/biocontainers/bioconductor-ebseqhmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebseqhmm
.. _`bioconductor-ebseqhmm/tags`: https://quay.io/repository/biocontainers/bioconductor-ebseqhmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebseqhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebseqhmm/README.html