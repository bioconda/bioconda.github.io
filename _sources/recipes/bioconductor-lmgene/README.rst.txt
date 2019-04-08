:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lmgene'
.. highlight: bash

bioconductor-lmgene
===================

.. conda:recipe:: bioconductor-lmgene
   :replaces_section_title:

   LMGene package for analysis of microarray data using a linear model and glog data transformation

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LMGene.html
   :license: LGPL
   :recipe: /`bioconductor-lmgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lmgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lmgene/meta.yaml>`_
   :links: biotools: :biotools:`lmgene`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-lmgene

   |downloads_bioconductor-lmgene| |docker_bioconductor-lmgene|

   :versions: 2.38.0-1, 2.38.0-0, 2.36.0-0, 2.34.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lmgene

   and update with::

      conda update bioconductor-lmgene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lmgene:<tag>

   (see `bioconductor-lmgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lmgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lmgene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lmgene| image:: https://quay.io/repository/biocontainers/bioconductor-lmgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lmgene
.. _`bioconductor-lmgene/tags`: https://quay.io/repository/biocontainers/bioconductor-lmgene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lmgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lmgene/README.html