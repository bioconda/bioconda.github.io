:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mungesumstats'
.. highlight: bash

bioconductor-mungesumstats
==========================

.. conda:recipe:: bioconductor-mungesumstats
   :replaces_section_title:
   :noindex:

   Standardise summary statistics from GWAS

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MungeSumstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mungesumstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mungesumstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mungesumstats/meta.yaml>`_

   The \*MungeSumstats\* package is designed to facilitate the standardisation of GWAS summary statistics. It reformats inputted summary statisitics to include SNP\, CHR\, BP and can look up these values if any are missing. It also pefrorms dozens of QC and filtering steps to ensure high data quality and minimise inter\-study differences.


.. conda:package:: bioconductor-mungesumstats

   |downloads_bioconductor-mungesumstats| |docker_bioconductor-mungesumstats|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-googleauthr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-stringr: 
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

      mamba install bioconductor-mungesumstats

   and update with::

      mamba update bioconductor-mungesumstats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mungesumstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mungesumstats:<tag>

   (see `bioconductor-mungesumstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mungesumstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mungesumstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mungesumstats
   :alt:   (downloads)
.. |docker_bioconductor-mungesumstats| image:: https://quay.io/repository/biocontainers/bioconductor-mungesumstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mungesumstats
.. _`bioconductor-mungesumstats/tags`: https://quay.io/repository/biocontainers/bioconductor-mungesumstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mungesumstats";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mungesumstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mungesumstats/README.html