:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chimeraviz'
.. highlight: bash

bioconductor-chimeraviz
=======================

.. conda:recipe:: bioconductor-chimeraviz
   :replaces_section_title:
   :noindex:

   Visualization tools for gene fusions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/chimeraviz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chimeraviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimeraviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimeraviz/meta.yaml>`_

   chimeraviz manages data from fusion gene finders and provides useful visualization tools.


.. conda:package:: bioconductor-chimeraviz

   |downloads_bioconductor-chimeraviz| |docker_bioconductor-chimeraviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationfilter: ``>=1.30.0,<1.31.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bowtie2: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-gtools: 
   :depends r-magick: 
   :depends r-plyr: 
   :depends r-rcircos: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
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

      mamba install bioconductor-chimeraviz

   and update with::

      mamba update bioconductor-chimeraviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chimeraviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chimeraviz:<tag>

   (see `bioconductor-chimeraviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chimeraviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chimeraviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chimeraviz
   :alt:   (downloads)
.. |docker_bioconductor-chimeraviz| image:: https://quay.io/repository/biocontainers/bioconductor-chimeraviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chimeraviz
.. _`bioconductor-chimeraviz/tags`: https://quay.io/repository/biocontainers/bioconductor-chimeraviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chimeraviz";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chimeraviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chimeraviz/README.html