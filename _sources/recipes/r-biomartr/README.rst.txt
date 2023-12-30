:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-biomartr'
.. highlight: bash

r-biomartr
==========

.. conda:recipe:: r-biomartr
   :replaces_section_title:
   :noindex:

   Perform large scale genomic data retrieval and functional annotation retrieval. This package aims to provide users with a standardized way to automate genome\, proteome\, \'RNA\'\, coding sequence \(\'CDS\'\)\, \'GFF\'\, and metagenome retrieval from \'NCBI RefSeq\'\, \'NCBI Genbank\'\, \'ENSEMBL\'\, \'ENSEMBLGENOMES\'\, and \'UniProt\' databases. Furthermore\, an interface to the \'BioMart\' database \(Smedley et al. \(2009\) \<doi\:10.1186\/1471\-2164\-10\-22\>\) allows users to retrieve functional annotation for genomic loci. In addition\, users can download entire databases such as \'NCBI RefSeq\' \(Pruitt et al. \(2007\) \<doi\:10.1093\/nar\/gkl842\>\)\, \'NCBI nr\'\, \'NCBI nt\'\, \'NCBI Genbank\' \(Benson et al. \(2013\) \<doi\:10.1093\/nar\/gks1195\>\)\, etc. as well as \'ENSEMBL\' and \'ENSEMBLGENOMES\' with only one command.

   :homepage: https://docs.ropensci.org/biomartr, https://github.com/ropensci/biomartr
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-biomartr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomartr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomartr/meta.yaml>`_

   


.. conda:package:: r-biomartr

   |downloads_r-biomartr| |docker_r-biomartr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: 
   :depends bioconductor-biostrings: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-data.table: ``>=1.9.4``
   :depends r-downloader: ``>=0.3``
   :depends r-dplyr: ``>=0.3.0``
   :depends r-fs: 
   :depends r-httr: ``>=0.6.1``
   :depends r-jsonlite: 
   :depends r-philentropy: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rcurl: ``>=1.95_4.5``
   :depends r-readr: ``>=1.4.0``
   :depends r-stringr: ``>=0.6.2``
   :depends r-tibble: 
   :depends r-withr: 
   :depends r-xml: ``>=3.98_1.1``
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

      mamba install r-biomartr

   and update with::

      mamba update r-biomartr

  To create a new environment, run::

      mamba create --name myenvname r-biomartr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-biomartr:<tag>

   (see `r-biomartr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-biomartr| image:: https://img.shields.io/conda/dn/bioconda/r-biomartr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-biomartr
   :alt:   (downloads)
.. |docker_r-biomartr| image:: https://quay.io/repository/biocontainers/r-biomartr/status
   :target: https://quay.io/repository/biocontainers/r-biomartr
.. _`r-biomartr/tags`: https://quay.io/repository/biocontainers/r-biomartr?tab=tags


.. raw:: html

    <script>
        var package = "r-biomartr";
        var versions = ["1.0.7","1.0.7","1.0.6","1.0.6","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biomartr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biomartr/README.html