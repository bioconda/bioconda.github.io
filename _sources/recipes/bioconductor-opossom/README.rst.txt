:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opossom'
.. highlight: bash

bioconductor-opossom
====================

.. conda:recipe:: bioconductor-opossom
   :replaces_section_title:
   :noindex:

   Comprehensive analysis of transcriptome data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/oposSOM.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-opossom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opossom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opossom/meta.yaml>`_

   This package translates microarray expression data into metadata of reduced dimension. It provides various sample\-centered and group\-centered visualizations\, sample similarity analyses and functional enrichment analyses. The underlying SOM algorithm combines feature clustering\, multidimensional scaling and dimension reduction\, along with strong visualization capabilities. It enables extraction and description of functional expression modules inherent in the data.


.. conda:package:: bioconductor-opossom

   |downloads_bioconductor-opossom| |docker_bioconductor-opossom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fastica: 
   :depends r-fdrtool: 
   :depends r-igraph: ``>=1.0.0``
   :depends r-pixmap: 
   :depends r-png: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
   :depends r-rcurl: 
   :depends r-scatterplot3d: 
   :depends r-tsne: 
   :depends r-xml: 
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

      mamba install bioconductor-opossom

   and update with::

      mamba update bioconductor-opossom

  To create a new environment, run::

      mamba create --name myenvname bioconductor-opossom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-opossom:<tag>

   (see `bioconductor-opossom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-opossom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opossom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opossom
   :alt:   (downloads)
.. |docker_bioconductor-opossom| image:: https://quay.io/repository/biocontainers/bioconductor-opossom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opossom
.. _`bioconductor-opossom/tags`: https://quay.io/repository/biocontainers/bioconductor-opossom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-opossom";
        var versions = ["2.24.0","2.20.0","2.18.0","2.16.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opossom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opossom/README.html