:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scan.upc'
.. highlight: bash

bioconductor-scan.upc
=====================

.. conda:recipe:: bioconductor-scan.upc
   :replaces_section_title:
   :noindex:

   Single\-channel array normalization \(SCAN\) and Universal exPression Codes \(UPC\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SCAN.UPC.html
   :license: MIT
   :recipe: /`bioconductor-scan.upc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc/meta.yaml>`_
   :links: biotools: :biotools:`scan.upc`

   SCAN is a microarray normalization method to facilitate personalized\-medicine workflows. Rather than processing microarray samples as groups\, which can introduce biases and present logistical challenges\, SCAN normalizes each sample individually by modeling and removing probe\- and array\-specific background noise using only data from within each array. SCAN can be applied to one\-channel \(e.g.\, Affymetrix\) or two\-channel \(e.g.\, Agilent\) microarrays. The Universal exPression Codes \(UPC\) method is an extension of SCAN that estimates whether a given gene\/transcript is active above background levels in a given sample. The UPC method can be applied to one\-channel or two\-channel microarrays as well as to RNA\-Seq read counts. Because UPC values are represented on the same scale and have an identical interpretation for each platform\, they can be used for cross\-platform data integration.


.. conda:package:: bioconductor-scan.upc

   |downloads_bioconductor-scan.upc| |docker_bioconductor-scan.upc|

   :versions:
      
      

      ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``

      

   
   :depends bioconductor-affy: ``>=1.66.0,<1.67.0``
   :depends bioconductor-affyio: ``>=1.58.0,<1.59.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-geoquery: ``>=2.56.0,<2.57.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-oligo: ``>=1.52.0,<1.53.0``
   :depends bioconductor-sva: ``>=3.36.0,<3.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-foreach: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scan.upc

   and update with::

      conda update bioconductor-scan.upc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scan.upc:<tag>

   (see `bioconductor-scan.upc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scan.upc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scan.upc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scan.upc
   :alt:   (downloads)
.. |docker_bioconductor-scan.upc| image:: https://quay.io/repository/biocontainers/bioconductor-scan.upc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scan.upc
.. _`bioconductor-scan.upc/tags`: https://quay.io/repository/biocontainers/bioconductor-scan.upc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html