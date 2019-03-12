:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-profia'
.. highlight: bash

bioconductor-profia
===================

.. conda:recipe:: bioconductor-profia
   :replaces_section_title:

   Flow Injection Analysis coupled to High\-Resolution Mass Spectrometry is a promising approach for high\-throughput metabolomics. FIA\- HRMS data\, however\, cannot be pre\-processed with current software tools which rely on liquid chromatography separation\, or handle low resolution data only. Here we present the proFIA package\, which implements a new methodology to pre\-process FIA\-HRMS raw data \(netCDF\, mzData\, mzXML\, and mzML\) including noise modelling and injection peak reconstruction\, and generate the peak table. The workflow includes noise modelling\, band detection and filtering then signal matching and missing value imputation. The peak table can then be exported as a .tsv file for further analysis. Visualisations to assess the quality of the data and of the signal made are easely produced.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/proFIA.html
   :license: CeCILL
   :recipe: /`bioconductor-profia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-profia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-profia/meta.yaml>`_
   :links: biotools: :biotools:`profia`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-profia

   |downloads_bioconductor-profia| |docker_bioconductor-profia|

   :versions: 1.8.1-0, 1.8.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-ropls: >=1.14.0,<1.15.0
   
   :depends bioconductor-xcms: >=3.4.0,<3.5.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-minpack.lm: 
   
   :depends r-missforest: 
   
   :depends r-pracma: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-profia

   and update with::

      conda update bioconductor-profia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-profia:<tag>

   (see `bioconductor-profia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-profia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-profia.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-profia| image:: https://quay.io/repository/biocontainers/bioconductor-profia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-profia
.. _`bioconductor-profia/tags`: https://quay.io/repository/biocontainers/bioconductor-profia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-profia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-profia/README.html