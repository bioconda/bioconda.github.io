:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dualks'
.. highlight: bash

bioconductor-dualks
===================

.. conda:recipe:: bioconductor-dualks
   :replaces_section_title:

   This package implements a Kolmogorov Smirnov rank\-sum based algorithm for training \(i.e. discriminant analysis\-\-identification of genes that discriminate between classes\) and classification of gene expression data sets.  One of the chief strengths of this approach is that it is amenable to the \"multiclass\" problem. That is\, it can discriminate between more than 2 classes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/dualKS.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-dualks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dualks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dualks/meta.yaml>`_

   


.. conda:package:: bioconductor-dualks

   |downloads_bioconductor-dualks| |docker_bioconductor-dualks|

   :versions: 1.42.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dualks

   and update with::

      conda update bioconductor-dualks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dualks:<tag>

   (see `bioconductor-dualks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dualks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dualks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dualks
   :alt:   (downloads)
.. |docker_bioconductor-dualks| image:: https://quay.io/repository/biocontainers/bioconductor-dualks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dualks
.. _`bioconductor-dualks/tags`: https://quay.io/repository/biocontainers/bioconductor-dualks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dualks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dualks/README.html