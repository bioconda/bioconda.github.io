:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-specond'
.. highlight: bash

bioconductor-specond
====================

.. conda:recipe:: bioconductor-specond
   :replaces_section_title:

   This package performs a gene expression data analysis to detect condition\-specific genes. Such genes are significantly up\- or down\-regulated in a small number of conditions. It does so by fitting a mixture of normal distributions to the expression values. Conditions can be environmental conditions\, different tissues\, organs or any other sources that you wish to compare in terms of gene expression.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SpeCond.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-specond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond/meta.yaml>`_
   :links: biotools: :biotools:`specond`, doi: :doi:`10.1186/gb-2011-12-12-413`

   


.. conda:package:: bioconductor-specond

   |downloads_bioconductor-specond| |docker_bioconductor-specond|

   :versions: 1.36.0-0, 1.34.0-0, 1.32.0-0, 1.30.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fields: 
   :depends r-hwriter: >=1.1
   :depends r-mclust: >=3.3.1
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-specond

   and update with::

      conda update bioconductor-specond

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-specond:<tag>

   (see `bioconductor-specond/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-specond| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-specond.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-specond
   :alt:   (downloads)
.. |docker_bioconductor-specond| image:: https://quay.io/repository/biocontainers/bioconductor-specond/status
   :target: https://quay.io/repository/biocontainers/bioconductor-specond
.. _`bioconductor-specond/tags`: https://quay.io/repository/biocontainers/bioconductor-specond?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-specond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-specond/README.html