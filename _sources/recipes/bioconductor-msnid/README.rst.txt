.. title:: Package Recipe 'bioconductor-msnid'
.. highlight: bash


bioconductor-msnid
==================

.. conda:recipe:: bioconductor-msnid
   :replaces_section_title:

   Extracts MS\/MS ID data from mzIdentML \(leveraging mzID package\) or text files. After collating the search results from multiple datasets it assesses their identification quality and optimize filtering criteria to achieve the maximum number of identifications while not exceeding a specified false discovery rate. Also contains a number of utilities to explore the MS\/MS results and assess missed and irregular enzymatic cleavages\, mass measurement accuracy\, etc.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MSnID.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msnid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnid/meta.yaml>`_
   :links: biotools: :biotools:`msnid`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-msnid

   |downloads_bioconductor-msnid| |docker_bioconductor-msnid|

   :versions: 1.16.1, 1.12.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`bioconductor-mzid` >=1.20.0,<1.21.0 :conda:package:`bioconductor-mzr` >=2.16.0,<2.17.0 :conda:package:`bioconductor-protgenerics` >=1.14.0,<1.15.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-iterators`  :conda:package:`r-r.cache`  :conda:package:`r-rcpp`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-msnid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msnid

   and update with::

      conda update bioconductor-msnid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msnid


.. |required_by_bioconductor-msnid| conda:required_by:: bioconductor-msnid
.. |downloads_bioconductor-msnid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msnid.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msnid| image:: https://quay.io/repository/biocontainers/bioconductor-msnid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msnid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msnid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msnid/README.html

