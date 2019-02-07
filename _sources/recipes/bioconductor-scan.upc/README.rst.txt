.. title:: Package Recipe 'bioconductor-scan.upc'
.. highlight: bash


bioconductor-scan.upc
=====================

.. conda:recipe:: bioconductor-scan.upc
   :replaces_section_title:

   SCAN is a microarray normalization method to facilitate personalized\-medicine workflows. Rather than processing microarray samples as groups\, which can introduce biases and present logistical challenges\, SCAN normalizes each sample individually by modeling and removing probe\- and array\-specific background noise using only data from within each array. SCAN can be applied to one\-channel \(e.g.\, Affymetrix\) or two\-channel \(e.g.\, Agilent\) microarrays. The Universal exPression Codes \(UPC\) method is an extension of SCAN that estimates whether a given gene\/transcript is active above background levels in a given sample. The UPC method can be applied to one\-channel or two\-channel microarrays as well as to RNA\-Seq read counts. Because UPC values are represented on the same scale and have an identical interpretation for each platform\, they can be used for cross\-platform data integration.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SCAN.UPC.html
   :license: MIT
   :recipe: /`bioconductor-scan.upc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc/meta.yaml>`_
   :links: biotools: :biotools:`scan.upc`

   


.. conda:package:: bioconductor-scan.upc

   |downloads_bioconductor-scan.upc| |docker_bioconductor-scan.upc|

   :versions: 2.24.1, 2.22.0, 2.20.0, 2.18.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affyio` >=1.52.0,<1.53.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-foreach`  :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-scan.upc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scan.upc

   and update with::

      conda update bioconductor-scan.upc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scan.upc


.. |required_by_bioconductor-scan.upc| conda:required_by:: bioconductor-scan.upc
.. |downloads_bioconductor-scan.upc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scan.upc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scan.upc| image:: https://quay.io/repository/biocontainers/bioconductor-scan.upc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scan.upc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html

