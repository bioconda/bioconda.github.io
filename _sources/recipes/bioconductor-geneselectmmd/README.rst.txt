:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneselectmmd'
.. highlight: bash

bioconductor-geneselectmmd
==========================

.. conda:recipe:: bioconductor-geneselectmmd
   :replaces_section_title:

   Gene selection based on the marginal distributions of gene profiles that characterized by a mixture of three\-component multivariate distributions

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GeneSelectMMD.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geneselectmmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselectmmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselectmmd/meta.yaml>`_

   Gene selection based on a mixture of marginal distributions


.. conda:package:: bioconductor-geneselectmmd

   |downloads_bioconductor-geneselectmmd| |docker_bioconductor-geneselectmmd|

   :versions: 2.32.0-0, 2.30.0-0, 2.28.0-1, 2.26.0-1, 2.26.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgfortran: >=4.0.0,<5.0.0.a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneselectmmd

   and update with::

      conda update bioconductor-geneselectmmd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneselectmmd:<tag>

   (see `bioconductor-geneselectmmd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneselectmmd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneselectmmd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneselectmmd
   :alt:   (downloads)
.. |docker_bioconductor-geneselectmmd| image:: https://quay.io/repository/biocontainers/bioconductor-geneselectmmd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneselectmmd
.. _`bioconductor-geneselectmmd/tags`: https://quay.io/repository/biocontainers/bioconductor-geneselectmmd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneselectmmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneselectmmd/README.html