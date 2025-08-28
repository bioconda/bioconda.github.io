:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fraser'
.. highlight: bash

bioconductor-fraser
===================

.. conda:recipe:: bioconductor-fraser
   :replaces_section_title:
   :noindex:

   Find RAre Splicing Events in RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FRASER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fraser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41467-020-20573-7`

   Detection of rare aberrant splicing events in transcriptome profiles. Read count ratio expectations are modeled by an autoencoder to control for confounding factors in the data. Given these expectations\, the ratios are assumed to follow a beta\-binomial distribution with a junction specific dispersion. Outlier events are then identified as read\-count ratios that deviate significantly from this distribution. FRASER is able to detect alternative splicing\, but also intron retention. The package aims to support diagnostics in the field of rare diseases where RNA\-seq is performed to identify aberrant splicing defects.


.. conda:package:: bioconductor-fraser

   |downloads_bioconductor-fraser| |docker_bioconductor-fraser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>1.99.4-0</code>,  <code>1.99.3-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.1-2</code>,  <code>1.6.1-1</code>,  </span></summary>
      

      ``2.2.0-0``,  ``1.99.4-0``,  ``1.99.3-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-outrider: ``>=1.24.0,<1.25.0``
   :depends bioconductor-outrider: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-pcamethods: ``>=1.98.0,<1.99.0``
   :depends bioconductor-pcamethods: ``>=1.98.0,<1.99.0a0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-rsubread: ``>=2.20.0,<2.21.0``
   :depends bioconductor-rsubread: ``>=2.20.0,<2.21.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
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
        var versions = ["2.2.0","1.99.4","1.99.3","1.14.0","1.12.1"];
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