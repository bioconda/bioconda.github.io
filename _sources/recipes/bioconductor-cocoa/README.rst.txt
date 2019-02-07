.. title:: Package Recipe 'bioconductor-cocoa'
.. highlight: bash


bioconductor-cocoa
==================

.. conda:recipe:: bioconductor-cocoa
   :replaces_section_title:

   COCOA is a method for understanding variation among samples and can be used with data that includes genomic coordinates such as DNA methylation. On a high level\, COCOA uses a database of \"region sets\" and principal component analysis \(PCA\) of your data to identify sources of variation among samples. A region set is a set of genomic regions that share a biological annotation\, for instance\, transcription factor binding regions\, histone modification regions\, or open chromatin regions. COCOA works in both supervised \(known groups of samples\) and unsupervised \(no groups\) situations and can be used as a complement to \"differential\" methods that find discrete differences between groups. COCOA can identify biologically meaningful sources of variation between samples and increase understanding of variation in your data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/COCOA.html
   :license: GPL-3
   :recipe: /`bioconductor-cocoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa/meta.yaml>`_

   


.. conda:package:: bioconductor-cocoa

   |downloads_bioconductor-cocoa| |docker_bioconductor-cocoa|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-mira` >=1.4.0,<1.5.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-cocoa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cocoa

   and update with::

      conda update bioconductor-cocoa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cocoa


.. |required_by_bioconductor-cocoa| conda:required_by:: bioconductor-cocoa
.. |downloads_bioconductor-cocoa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cocoa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cocoa| image:: https://quay.io/repository/biocontainers/bioconductor-cocoa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cocoa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cocoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cocoa/README.html

