:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgabiolinks'
.. highlight: bash

bioconductor-tcgabiolinks
=========================

.. conda:recipe:: bioconductor-tcgabiolinks
   :replaces_section_title:
   :noindex:

   TCGAbiolinks\: An R\/Bioconductor package for integrative analysis with GDC data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TCGAbiolinks.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tcgabiolinks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinks/meta.yaml>`_
   :links: biotools: :biotools:`tcgabiolinks`, doi: :doi:`10.1093/nar/gkv1507`

   The aim of TCGAbiolinks is \: i\) facilitate the GDC open\-access data retrieval\, ii\) prepare the data using the appropriate pre\-processing strategies\, iii\) provide the means to carry out different standard analyses and iv\) to easily reproduce earlier research results. In more detail\, the package provides multiple methods for analysis \(e.g.\, differential expression analysis\, identifying differentially methylated regions\) and methods for visualization \(e.g.\, survival plots\, volcano plots\, starburst plots\) in order to easily develop complete analysis pipelines.


.. conda:package:: bioconductor-tcgabiolinks

   |downloads_bioconductor-tcgabiolinks| |docker_bioconductor-tcgabiolinks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.28.3-0</code>,  <code>2.25.3-0</code>,  <code>2.22.1-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.28.3-0``,  ``2.25.3-0``,  ``2.22.1-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.3-0``,  ``2.10.0-0``,  ``2.8.4-0``,  ``2.6.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-tcgabiolinksgui.data: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-downloader: ``>=0.4``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-httr: ``>=1.2.1``
   :depends r-jsonlite: ``>=1.0.0``
   :depends r-knitr: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-rvest: ``>=0.3.0``
   :depends r-stringr: ``>=1.0.0``
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml: ``>=3.98.0``
   :depends r-xml2: 
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

      mamba install bioconductor-tcgabiolinks

   and update with::

      mamba update bioconductor-tcgabiolinks

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcgabiolinks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgabiolinks:<tag>

   (see `bioconductor-tcgabiolinks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgabiolinks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgabiolinks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgabiolinks
   :alt:   (downloads)
.. |docker_bioconductor-tcgabiolinks| image:: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks
.. _`bioconductor-tcgabiolinks/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgabiolinks";
        var versions = ["2.30.0","2.28.3","2.25.3","2.22.1","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgabiolinks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgabiolinks/README.html