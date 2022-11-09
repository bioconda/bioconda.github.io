:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nanopore'
.. highlight: bash

r-nanopore
==========

.. conda:recipe:: r-nanopore
   :replaces_section_title:
   :noindex:

   R methods\, associated with Nanopore tutorials\, for analysis and presentation of Oxford Nanopore Technologies long\-read sequence data

   :homepage: https://github.com/sagrudd/nanopoRe
   :license: OTHER / MPL-2.0
   :recipe: /`r-nanopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanopore/meta.yaml>`_

   


.. conda:package:: r-nanopore

   |downloads_r-nanopore| |docker_r-nanopore|

   :versions:
      
      

      ``0.2.9-5``,  ``0.2.9-4``,  ``0.2.9-3``,  ``0.2.9-2``,  ``0.2.9-1``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.5-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-ggbio: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-shortread: 
   :depends bioconductor-variantannotation: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-emojifont: 
   :depends r-fastmatch: 
   :depends r-gdata: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-irdisplay: 
   :depends r-jsonlite: 
   :depends r-kableextra: 
   :depends r-magrittr: 
   :depends r-pbmcapply: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-vcfr: 
   :depends r-writexl: 
   :depends r-yaml: 
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


.. raw:: html

    <script>
        var package = "r-nanopore";
        var versions = ["0.2.9","0.2.9","0.2.9","0.2.9","0.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nanopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nanopore/README.html