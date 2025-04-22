:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biovizbase'
.. highlight: bash

bioconductor-biovizbase
=======================

.. conda:recipe:: bioconductor-biovizbase
   :replaces_section_title:
   :noindex:

   Basic graphic utilities for visualization of genomic data.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biovizBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biovizbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biovizbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biovizbase/meta.yaml>`_
   :links: biotools: :biotools:`biovizbase`, doi: :doi:`10.1038/nmeth.3252`

   The biovizBase package is designed to provide a set of utilities\, color schemes and conventions for genomic data. It serves as the base for various high\-level packages for biological data visualization. This saves development effort and encourages consistency.


.. conda:package:: bioconductor-biovizbase

   |downloads_bioconductor-biovizbase| |docker_bioconductor-biovizbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-2</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.54.0-1``,  ``1.54.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.2-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-annotationfilter: ``>=1.30.0,<1.31.0``
   :depends bioconductor-annotationfilter: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dichromat: 
   :depends r-hmisc: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-biovizbase

   and update with::

      mamba update bioconductor-biovizbase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biovizbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biovizbase:<tag>

   (see `bioconductor-biovizbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biovizbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biovizbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biovizbase
   :alt:   (downloads)
.. |docker_bioconductor-biovizbase| image:: https://quay.io/repository/biocontainers/bioconductor-biovizbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biovizbase
.. _`bioconductor-biovizbase/tags`: https://quay.io/repository/biocontainers/bioconductor-biovizbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biovizbase";
        var versions = ["1.54.0","1.54.0","1.50.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biovizbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biovizbase/README.html