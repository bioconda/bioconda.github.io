:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlmm'
.. highlight: bash

bioconductor-rlmm
=================

.. conda:recipe:: bioconductor-rlmm
   :replaces_section_title:
   :noindex:

   A Genotype Calling Algorithm for Affymetrix SNP Arrays

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RLMM.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-rlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlmm/meta.yaml>`_
   :links: biotools: :biotools:`rlmm`, doi: :doi:`10.1093/bioinformatics/bti741`

   A classification algorithm\, based on a multi\-chip\, multi\-SNP approach for Affymetrix SNP arrays. Using a large training sample where the genotype labels are known\, this aglorithm will obtain more accurate classification results on new data. RLMM is based on a robust\, linear model and uses the Mahalanobis distance for classification. The chip\-to\-chip non\-biological variation is removed through normalization. This model\-based algorithm captures the similarities across genotype groups and probes\, as well as thousands other SNPs for accurate classification. NOTE\: 100K\-Xba only at for now.


.. conda:package:: bioconductor-rlmm

   |downloads_bioconductor-rlmm| |docker_bioconductor-rlmm|

   :versions:
      
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rlmm

   and update with::

      conda update bioconductor-rlmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlmm:<tag>

   (see `bioconductor-rlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlmm
   :alt:   (downloads)
.. |docker_bioconductor-rlmm| image:: https://quay.io/repository/biocontainers/bioconductor-rlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlmm
.. _`bioconductor-rlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-rlmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlmm/README.html