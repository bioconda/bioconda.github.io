.. title:: Package Recipe 'bioconductor-ioniser'
.. highlight: bash


bioconductor-ioniser
====================

.. conda:recipe:: bioconductor-ioniser
   :replaces_section_title:

   IONiseR provides tools for the quality assessment of Oxford Nanopore MinION data. It extracts summary statistics from a set of fast5 files and can be used either before or after base calling.  In addition to standard summaries of the read\-types produced\, it provides a number of plots for visualising metrics relative to experiment run time or spatially over the surface of a flowcell.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IONiseR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ioniser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ioniser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ioniser/meta.yaml>`_
   :links: biotools: :biotools:`ioniser`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ioniser

   |downloads_bioconductor-ioniser| |docker_bioconductor-ioniser|

   :versions: 2.6.0, 2.4.0, 2.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bit64`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-magrittr`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-ioniser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ioniser

   and update with::

      conda update bioconductor-ioniser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ioniser


.. |required_by_bioconductor-ioniser| conda:required_by:: bioconductor-ioniser
.. |downloads_bioconductor-ioniser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ioniser.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ioniser| image:: https://quay.io/repository/biocontainers/bioconductor-ioniser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ioniser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ioniser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ioniser/README.html

