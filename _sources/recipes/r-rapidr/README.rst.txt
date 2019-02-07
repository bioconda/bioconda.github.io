.. title:: Package Recipe 'r-rapidr'
.. highlight: bash


r-rapidr
========

.. conda:recipe:: r-rapidr
   :replaces_section_title:

   Package to perform non\-invasive fetal testing for aneuploidies using sequencing count data from cell\-free DNA

   :homepage: https://CRAN.R-project.org/package=RAPIDR
   :license: GPL3 / GPL-3
   :recipe: /`r-rapidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr/meta.yaml>`_

   


.. conda:package:: r-rapidr

   |downloads_r-rapidr| |docker_r-rapidr|

   :versions: 0.1.1

   :depends: :conda:package:`bioconductor-biostrings`  :conda:package:`bioconductor-genomicalignments`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-rsamtools`  :conda:package:`r-base` 3.4.1* :conda:package:`r-data.table`  :conda:package:`r-propcis`  

   :required~by: |required_by_r-rapidr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rapidr

   and update with::

      conda update r-rapidr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rapidr


.. |required_by_r-rapidr| conda:required_by:: r-rapidr
.. |downloads_r-rapidr| image:: https://img.shields.io/conda/dn/bioconda/r-rapidr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rapidr| image:: https://quay.io/repository/biocontainers/r-rapidr/status
   :target: https://quay.io/repository/biocontainers/r-rapidr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rapidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rapidr/README.html

