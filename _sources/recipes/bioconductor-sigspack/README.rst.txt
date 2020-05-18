:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigspack'
.. highlight: bash

bioconductor-sigspack
=====================

.. conda:recipe:: bioconductor-sigspack
   :replaces_section_title:

   Mutational Signature Estimation for Single Samples

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SigsPack.html
   :license: GPL-3
   :recipe: /`bioconductor-sigspack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigspack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigspack/meta.yaml>`_

   Single sample estimation of exposure to mutational signatures. Exposures to known mutational signatures are estimated for single samples\, based on quadratic programming algorithms. Bootstrapping the input mutational catalogues provides estimations on the stability of these exposures. The effect of the sequence composition of mutational context can be taken into account by normalising the catalogues.


.. conda:package:: bioconductor-sigspack

   |downloads_bioconductor-sigspack| |docker_bioconductor-sigspack|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-variantannotation: >=1.34.0,<1.35.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-quadprog: >=1.5-5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigspack

   and update with::

      conda update bioconductor-sigspack

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigspack:<tag>

   (see `bioconductor-sigspack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigspack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigspack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigspack
   :alt:   (downloads)
.. |docker_bioconductor-sigspack| image:: https://quay.io/repository/biocontainers/bioconductor-sigspack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigspack
.. _`bioconductor-sigspack/tags`: https://quay.io/repository/biocontainers/bioconductor-sigspack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigspack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigspack/README.html