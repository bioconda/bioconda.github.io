:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-srnadiff'
.. highlight: bash

bioconductor-srnadiff
=====================

.. conda:recipe:: bioconductor-srnadiff
   :replaces_section_title:
   :noindex:

   Finding differentially expressed unannotated genomic regions from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/srnadiff.html
   :license: GPL-3
   :recipe: /`bioconductor-srnadiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srnadiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srnadiff/meta.yaml>`_

   srnadiff is a package that finds differently expressed regions from RNA\-seq data at base\-resolution level without relying on existing annotation. To do so\, the package implements the identify\-then\-annotate methodology that builds on the idea of combining two pipelines approachs differential expressed regions detection and differential expression quantification. It reads BAM files as input\, and outputs a list differentially regions\, together with the adjusted p\-values.


.. conda:package:: bioconductor-srnadiff

   |downloads_bioconductor-srnadiff| |docker_bioconductor-srnadiff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.11.0-0</code>,  <code>1.10.1-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.11.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bayseq: ``>=2.36.0,<2.37.0``
   :depends bioconductor-bayseq: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0a0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-edger: ``>=4.0.2,<4.1.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gviz: ``>=1.46.1,<1.47.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-devtools: 
   :depends r-rcpp: ``>=0.12.8``
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

      mamba install bioconductor-srnadiff

   and update with::

      mamba update bioconductor-srnadiff

  To create a new environment, run::

      mamba create --name myenvname bioconductor-srnadiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-srnadiff:<tag>

   (see `bioconductor-srnadiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-srnadiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-srnadiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-srnadiff
   :alt:   (downloads)
.. |docker_bioconductor-srnadiff| image:: https://quay.io/repository/biocontainers/bioconductor-srnadiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-srnadiff
.. _`bioconductor-srnadiff/tags`: https://quay.io/repository/biocontainers/bioconductor-srnadiff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-srnadiff";
        var versions = ["1.22.0","1.18.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-srnadiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-srnadiff/README.html