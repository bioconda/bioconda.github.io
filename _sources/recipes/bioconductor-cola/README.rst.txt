:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cola'
.. highlight: bash

bioconductor-cola
=================

.. conda:recipe:: bioconductor-cola
   :replaces_section_title:
   :noindex:

   A Framework for Consensus Partitioning

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cola.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cola <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cola>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cola/meta.yaml>`_

   Subgroup classification is a basic task in genomic data analysis\, especially for gene expression and DNA methylation data analysis. It can also be used to test the agreement to known clinical annotations\, or to test whether there exist significant batch effects. The cola package provides a general framework for subgroup classification by consensus partitioning. It has the following features\: 1. It modularizes the consensus partitioning processes that various methods can be easily integrated. 2. It provides rich visualizations for interpreting the results. 3. It allows running multiple methods at the same time and provides functionalities to straightforward compare results. 4. It provides a new method to extract features which are more efficient to separate subgroups. 5. It automatically generates detailed reports for the complete analysis. 6. It allows applying consensus partitioning in a hierarchical manner.


.. conda:package:: bioconductor-cola

   |downloads_bioconductor-cola| |docker_bioconductor-cola|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-brew: 
   :depends r-circlize: ``>=0.4.7``
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-crayon: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-eulerr: 
   :depends r-foreach: 
   :depends r-getoptlong: 
   :depends r-globaloptions: ``>=0.1.0``
   :depends r-httr: 
   :depends r-irlba: 
   :depends r-knitr: ``>=1.4.0``
   :depends r-markdown: ``>=1.6``
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-microbenchmark: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-skmeans: 
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

      mamba install bioconductor-cola

   and update with::

      mamba update bioconductor-cola

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cola

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cola:<tag>

   (see `bioconductor-cola/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cola| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cola.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cola
   :alt:   (downloads)
.. |docker_bioconductor-cola| image:: https://quay.io/repository/biocontainers/bioconductor-cola/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cola
.. _`bioconductor-cola/tags`: https://quay.io/repository/biocontainers/bioconductor-cola?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cola";
        var versions = ["2.8.0","2.6.0","2.4.0","2.4.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cola/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cola/README.html