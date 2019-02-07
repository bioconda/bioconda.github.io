.. title:: Package Recipe 'bioconductor-arrayqualitymetrics'
.. highlight: bash


bioconductor-arrayqualitymetrics
================================

.. conda:recipe:: bioconductor-arrayqualitymetrics
   :replaces_section_title:

   This package generates microarray quality metrics reports for data in Bioconductor microarray data containers \(ExpressionSet\, NChannelSet\, AffyBatch\). One and two color array platforms are supported.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/arrayQualityMetrics.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-arrayqualitymetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics/meta.yaml>`_
   :links: biotools: :biotools:`arrayqualitymetrics`

   


.. conda:package:: bioconductor-arrayqualitymetrics

   |downloads_bioconductor-arrayqualitymetrics| |docker_bioconductor-arrayqualitymetrics|

   :versions: 3.38.0, 3.36.0, 3.34.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affyplm` >=1.58.0,<1.59.0 :conda:package:`bioconductor-beadarray` >=2.32.0,<2.33.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cairo` >=1.4-6 :conda:package:`r-gridsvg` >=1.4-3 :conda:package:`r-hmisc`  :conda:package:`r-hwriter`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-setrng`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-arrayqualitymetrics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayqualitymetrics

   and update with::

      conda update bioconductor-arrayqualitymetrics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics


.. |required_by_bioconductor-arrayqualitymetrics| conda:required_by:: bioconductor-arrayqualitymetrics
.. |downloads_bioconductor-arrayqualitymetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayqualitymetrics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-arrayqualitymetrics| image:: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayqualitymetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayqualitymetrics/README.html

