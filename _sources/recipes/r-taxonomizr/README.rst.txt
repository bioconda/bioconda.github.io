.. title:: Package Recipe 'r-taxonomizr'
.. highlight: bash


r-taxonomizr
============

.. conda:recipe:: r-taxonomizr
   :replaces_section_title:

   Functions for assigning taxonomy to NCBI accession numbers and taxon IDs based on NCBI\'s accession2taxid and taxdump files. This package allows the user to downloads NCBI data dumps and create a local database for fast and local taxonomic assignment.

   :homepage: https://CRAN.R-project.org/package=taxonomizr
   :license: GPL / GPL (>=2)
   :recipe: /`r-taxonomizr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-taxonomizr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-taxonomizr/meta.yaml>`_

   


.. conda:package:: r-taxonomizr

   |downloads_r-taxonomizr| |docker_r-taxonomizr|

   :versions: 0.5.1

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`parallel`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-knitr`  :conda:package:`r-markdown`  :conda:package:`r-r.utils`  :conda:package:`r-rsqlite`  :conda:package:`r-testthat`  

   :required~by: |required_by_r-taxonomizr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-taxonomizr

   and update with::

      conda update r-taxonomizr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-taxonomizr


.. |required_by_r-taxonomizr| conda:required_by:: r-taxonomizr
.. |downloads_r-taxonomizr| image:: https://img.shields.io/conda/dn/bioconda/r-taxonomizr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-taxonomizr| image:: https://quay.io/repository/biocontainers/r-taxonomizr/status
   :target: https://quay.io/repository/biocontainers/r-taxonomizr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-taxonomizr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-taxonomizr/README.html

