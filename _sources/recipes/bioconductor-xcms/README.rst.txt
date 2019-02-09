.. title:: Package Recipe 'bioconductor-xcms'
.. highlight: bash


bioconductor-xcms
=================

.. conda:recipe:: bioconductor-xcms
   :replaces_section_title:

   Framework for processing and visualization of chromatographically separated and single\-spectra mass spectral data. Imports from AIA\/ANDI NetCDF\, mzXML\, mzData and mzML files. Preprocesses data for high\-throughput\, untargeted analyte profiling.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/xcms.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-xcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcms/meta.yaml>`_
   :links: biotools: :biotools:`xcms`

   


.. conda:package:: bioconductor-xcms

   |downloads_bioconductor-xcms| |docker_bioconductor-xcms|

   :versions: 3.4.2, 3.4.1, 3.0.0, 1.52.0, 1.50.1, 1.48.0, 1.46.0, 1.44.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-massspecwavelet` >=1.48.0,<1.49.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`bioconductor-mzr` >=2.16.0,<2.17.0 :conda:package:`bioconductor-protgenerics` >=1.14.0,<1.15.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-plyr`  :conda:package:`r-rann`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-robustbase`  

   :required~by: |required_by_bioconductor-xcms|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xcms

   and update with::

      conda update bioconductor-xcms

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-xcms


.. |required_by_bioconductor-xcms| conda:required_by:: bioconductor-xcms
.. |downloads_bioconductor-xcms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcms.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-xcms| image:: https://quay.io/repository/biocontainers/bioconductor-xcms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcms







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcms/README.html

