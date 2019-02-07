.. title:: Package Recipe 'r-bedr'
.. highlight: bash


r-bedr
======

.. conda:recipe:: r-bedr
   :replaces_section_title:

   Genomic regions processing using open\-source command line tools such as \'BEDTools\'\, \'BEDOPS\' and \'Tabix\'.  These tools offer scalable and efficient utilities to perform genome arithmetic e.g indexing\, formatting and merging. bedr API enhances access to these tools as well as offers additional utilities for genomic regions processing.

   :homepage: https://CRAN.R-project.org/package=bedr
   :license: GPL2 / GPL-2
   :recipe: /`r-bedr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedr/meta.yaml>`_

   


.. conda:package:: r-bedr

   |downloads_r-bedr| |docker_r-bedr|

   :versions: 1.0.4

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-data.table` >=1.8.11 :conda:package:`r-r.utils` >=2.0.2 :conda:package:`r-testthat` >=0.7.1 :conda:package:`r-venndiagram` >=1.6.4 :conda:package:`r-yaml` >=2.1.10 

   :required~by: |required_by_r-bedr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bedr

   and update with::

      conda update r-bedr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bedr


.. |required_by_r-bedr| conda:required_by:: r-bedr
.. |downloads_r-bedr| image:: https://img.shields.io/conda/dn/bioconda/r-bedr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bedr| image:: https://quay.io/repository/biocontainers/r-bedr/status
   :target: https://quay.io/repository/biocontainers/r-bedr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bedr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bedr/README.html

