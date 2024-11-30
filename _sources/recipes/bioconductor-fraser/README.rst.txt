:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fraser'
.. highlight: bash

bioconductor-fraser
===================

.. conda:recipe:: bioconductor-fraser
   :replaces_section_title:
   :noindex:

   Find RAre Splicing Events in RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/FRASER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fraser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41467-020-20573-7`

   Detection of rare aberrant splicing events in transcriptome profiles. Read count ratio expectations are modeled by an autoencoder to control for confounding factors in the data. Given these expectations\, the ratios are assumed to follow a beta\-binomial distribution with a junction specific dispersion. Outlier events are then identified as read\-count ratios that deviate significantly from this distribution. FRASER is able to detect alternative splicing\, but also intron retention. The package aims to support diagnostics in the field of rare diseases where RNA\-seq is performed to identify aberrant splicing defects.


.. conda:package:: bioconductor-fraser

   |downloads_bioconductor-fraser| |docker_bioconductor-fraser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.99.4-0</code>,  <code>1.99.3-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.1-2</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``1.99.4-0``,  ``1.99.3-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-outrider: ``>=1.20.0,<1.21.0``
   :depends bioconductor-outrider: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rsubread: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rsubread: ``>=2.16.1,<3.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bbmisc: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-extradistr: 
   :depends r-generics: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-prroc: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-tibble: 
   :depends r-vgam: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-fraser

   and update with::

      mamba update bioconductor-fraser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fraser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fraser:<tag>

   (see `bioconductor-fraser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fraser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fraser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fraser
   :alt:   (downloads)
.. |docker_bioconductor-fraser| image:: https://quay.io/repository/biocontainers/bioconductor-fraser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fraser
.. _`bioconductor-fraser/tags`: https://quay.io/repository/biocontainers/bioconductor-fraser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fraser";
        var versions = ["1.99.4","1.99.3","1.14.0","1.12.1","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fraser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fraser/README.html