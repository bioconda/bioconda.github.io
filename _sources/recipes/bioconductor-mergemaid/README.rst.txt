:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mergemaid'
.. highlight: bash

bioconductor-mergemaid
======================

.. conda:recipe:: bioconductor-mergemaid
   :replaces_section_title:

   The functions in this R extension are intended for cross\-study comparison of gene expression array data. Required from the user is gene expression matrices\, their corresponding gene\-id vectors and other useful information\, and they could be \'list\'\,\'matrix\'\, or \'ExpressionSet\'. The main function is \'mergeExprs\' which transforms the input objects into data in the merged format\, such that common genes in different datasets can be easily found. And the function \'intcor\' calculate the correlation coefficients. Other functions use the output from \'modelOutcome\' to graphically display the results and cross\-validate associations of gene expression data with survival.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MergeMaid.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mergemaid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergemaid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergemaid/meta.yaml>`_
   :links: biotools: :biotools:`mergemaid`, doi: :doi:`10.2202/1544-6115.1046`

   


.. conda:package:: bioconductor-mergemaid

   |downloads_bioconductor-mergemaid| |docker_bioconductor-mergemaid|

   :versions: 2.54.0-0, 2.52.0-0, 2.50.0-0, 2.48.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-mass: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mergemaid

   and update with::

      conda update bioconductor-mergemaid

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mergemaid:<tag>

   (see `bioconductor-mergemaid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mergemaid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mergemaid.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mergemaid| image:: https://quay.io/repository/biocontainers/bioconductor-mergemaid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mergemaid
.. _`bioconductor-mergemaid/tags`: https://quay.io/repository/biocontainers/bioconductor-mergemaid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mergemaid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mergemaid/README.html