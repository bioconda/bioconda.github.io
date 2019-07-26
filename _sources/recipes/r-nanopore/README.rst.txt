:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nanopore'
.. highlight: bash

r-nanopore
==========

.. conda:recipe:: r-nanopore
   :replaces_section_title:

   R methods\, associated with Nanopore tutorials\, for analysis and presentation of Oxford Nanopore Technologies long\-read sequence data

   :homepage: https://github.com/sagrudd/nanopoRe
   :license: OTHER / MPL-2.0
   :recipe: /`r-nanopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanopore/meta.yaml>`_

   


.. conda:package:: r-nanopore

   |downloads_r-nanopore| |docker_r-nanopore|

   :versions: 0.2.5-0
   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-ggbio: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-shortread: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-emojifont: 
   :depends r-gdata: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-pbmcapply: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-vcfr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nanopore

   and update with::

      conda update r-nanopore

   or use the docker container::

      docker pull quay.io/biocontainers/r-nanopore:<tag>

   (see `r-nanopore/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nanopore| image:: https://img.shields.io/conda/dn/bioconda/r-nanopore.svg?style=flat
   :target: https://anaconda.org/bioconda/r-nanopore
   :alt:   (downloads)
.. |docker_r-nanopore| image:: https://quay.io/repository/biocontainers/r-nanopore/status
   :target: https://quay.io/repository/biocontainers/r-nanopore
.. _`r-nanopore/tags`: https://quay.io/repository/biocontainers/r-nanopore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nanopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nanopore/README.html