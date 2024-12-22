:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amplican'
.. highlight: bash

bioconductor-amplican
=====================

.. conda:recipe:: bioconductor-amplican
   :replaces_section_title:
   :noindex:

   Automated analysis of CRISPR experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/amplican.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-amplican <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amplican>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amplican/meta.yaml>`_
   :links: biotools: :biotools:`amplican`

   \`amplican\` performs alignment of the amplicon reads\, normalizes gathered data\, calculates multiple statistics \(e.g. cut rates\, frameshifts\) and presents results in form of aggregated reports. Data and statistics can be broken down by experiments\, barcodes\, user defined groups\, guides and amplicons allowing for quick identification of potential problems.


.. conda:package:: bioconductor-amplican

   |downloads_bioconductor-amplican| |docker_bioconductor-amplican|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-shortread: ``>=1.64.0,<1.65.0``
   :depends bioconductor-shortread: ``>=1.64.0,<1.65.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: ``>=2.1.4``
   :depends r-data.table: ``>=1.10.4-3``
   :depends r-dplyr: ``>=0.7.2``
   :depends r-ggplot2: ``>=3.3.4``
   :depends r-ggthemes: ``>=3.4.0``
   :depends r-gridextra: ``>=2.2.1``
   :depends r-gtable: ``>=0.2.0``
   :depends r-knitr: ``>=1.16``
   :depends r-matrix: ``>=1.2-10``
   :depends r-matrixstats: ``>=0.52.2``
   :depends r-rcpp: 
   :depends r-rmarkdown: ``>=1.6``
   :depends r-stringr: ``>=1.2.0``
   :depends r-waffle: ``>=0.7.0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-amplican

   and update with::

      mamba update bioconductor-amplican

  To create a new environment, run::

      mamba create --name myenvname bioconductor-amplican

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amplican:<tag>

   (see `bioconductor-amplican/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amplican| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amplican.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amplican
   :alt:   (downloads)
.. |docker_bioconductor-amplican| image:: https://quay.io/repository/biocontainers/bioconductor-amplican/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amplican
.. _`bioconductor-amplican/tags`: https://quay.io/repository/biocontainers/bioconductor-amplican?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-amplican";
        var versions = ["1.28.0","1.24.0","1.24.0","1.22.1","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amplican/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amplican/README.html