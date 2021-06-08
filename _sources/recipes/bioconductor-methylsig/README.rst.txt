:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylsig'
.. highlight: bash

bioconductor-methylsig
======================

.. conda:recipe:: bioconductor-methylsig
   :replaces_section_title:
   :noindex:

   MethylSig\: Differential Methylation Testing for WGBS and RRBS Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/methylSig.html
   :license: GPL-3
   :recipe: /`bioconductor-methylsig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylsig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylsig/meta.yaml>`_

   MethylSig is a package for testing for differentially methylated cytosines \(DMCs\) or regions \(DMRs\) in whole\-genome bisulfite sequencing \(WGBS\) or reduced representation bisulfite sequencing \(RRBS\) experiments.  MethylSig uses a beta binomial model to test for significant differences between groups of samples. Several options exist for either site\-specific or sliding window tests\, and variance estimation.


.. conda:package:: bioconductor-methylsig

   |downloads_bioconductor-methylsig| |docker_bioconductor-methylsig|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bsseq: ``>=1.28.0,<1.29.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-dss: ``>=2.40.0,<2.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylsig

   and update with::

      conda update bioconductor-methylsig

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylsig:<tag>

   (see `bioconductor-methylsig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylsig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylsig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylsig
   :alt:   (downloads)
.. |docker_bioconductor-methylsig| image:: https://quay.io/repository/biocontainers/bioconductor-methylsig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylsig
.. _`bioconductor-methylsig/tags`: https://quay.io/repository/biocontainers/bioconductor-methylsig?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylsig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylsig/README.html