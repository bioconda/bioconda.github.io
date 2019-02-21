:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arraytools'
.. highlight: bash

bioconductor-arraytools
=======================

.. conda:recipe:: bioconductor-arraytools
   :replaces_section_title:

   This package is designed to provide solutions for quality assessment and to detect differentially expressed genes for the Affymetrix GeneChips\, including both 3\' \-arrays and gene 1.0\-ST arrays. The package generates comprehensive analysis reports in HTML format. Hyperlinks on the report page will lead to a series of QC plots\, processed data\, and differentially expressed gene lists. Differentially expressed genes are reported in tabular format with annotations hyperlinked to online biological databases.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ArrayTools.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-arraytools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraytools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraytools/meta.yaml>`_
   :links: biotools: :biotools:`arraytools`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-arraytools

   |downloads_bioconductor-arraytools| |docker_bioconductor-arraytools|

   :versions: 1.42.0-0, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-xtable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arraytools

   and update with::

      conda update bioconductor-arraytools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arraytools:<tag>

   (see `bioconductor-arraytools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arraytools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arraytools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-arraytools| image:: https://quay.io/repository/biocontainers/bioconductor-arraytools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arraytools
.. _`bioconductor-arraytools/tags`: https://quay.io/repository/biocontainers/bioconductor-arraytools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arraytools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arraytools/README.html