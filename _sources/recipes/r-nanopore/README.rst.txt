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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.9-7</code>,  <code>0.2.9-6</code>,  <code>0.2.9-5</code>,  <code>0.2.9-4</code>,  <code>0.2.9-3</code>,  <code>0.2.9-2</code>,  <code>0.2.9-1</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``0.2.9-7``,  ``0.2.9-6``,  ``0.2.9-5``,  ``0.2.9-4``,  ``0.2.9-3``,  ``0.2.9-2``,  ``0.2.9-1``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
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
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-nanopore

   and update with::

      mamba update r-nanopore

  To create a new environment, run::

      mamba create --name myenvname r-nanopore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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