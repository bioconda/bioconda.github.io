:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popgen-entropy'
.. highlight: bash

popgen-entropy
==============

.. conda:recipe:: popgen-entropy
   :replaces_section_title:

   This program is for inferring population structure from autopolyploid and mixed\-ploidy individuals\, similar to structure\, but using genotype\-likelihood data for low\- to medium\-coverage sequencing depth.

   :homepage: https://bitbucket.org/buerklelab/mixedploidy-entropy/src/master/
   :license: BSD
   :recipe: /`popgen-entropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popgen-entropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popgen-entropy/meta.yaml>`_
   :links: biotools: :biotools:`popgen-entropy`

   


.. conda:package:: popgen-entropy

   |downloads_popgen-entropy| |docker_popgen-entropy|

   :versions: 2.0-0
   
   :depends gsl: >=2.5,<2.6.0a0
   :depends hdf5: >=1.10.5,<1.10.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends mkl: >=2019.5,<2020.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install popgen-entropy

   and update with::

      conda update popgen-entropy

   or use the docker container::

      docker pull quay.io/biocontainers/popgen-entropy:<tag>

   (see `popgen-entropy/tags`_ for valid values for ``<tag>``)


.. |downloads_popgen-entropy| image:: https://img.shields.io/conda/dn/bioconda/popgen-entropy.svg?style=flat
   :target: https://anaconda.org/bioconda/popgen-entropy
   :alt:   (downloads)
.. |docker_popgen-entropy| image:: https://quay.io/repository/biocontainers/popgen-entropy/status
   :target: https://quay.io/repository/biocontainers/popgen-entropy
.. _`popgen-entropy/tags`: https://quay.io/repository/biocontainers/popgen-entropy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popgen-entropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popgen-entropy/README.html