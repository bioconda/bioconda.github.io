:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterexperiment'
.. highlight: bash

bioconductor-clusterexperiment
==============================

.. conda:recipe:: bioconductor-clusterexperiment
   :replaces_section_title:
   :noindex:

   Compare Clusterings for Single\-Cell Sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/clusterExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterexperiment/meta.yaml>`_
   :links: biotools: :biotools:`clusterexperiment`

   Provides functionality for running and comparing many different clusterings of single\-cell sequencing data or other large mRNA Expression data sets.


.. conda:package:: bioconductor-clusterexperiment

   |downloads_bioconductor-clusterexperiment| |docker_bioconductor-clusterexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.14.0-2</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.4-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0a0``
   :depends bioconductor-mbkmeans: ``>=1.22.0,<1.23.0``
   :depends bioconductor-mbkmeans: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-zinbwave: ``>=1.28.0,<1.29.0``
   :depends bioconductor-zinbwave: ``>=1.28.0,<1.29.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-ape: ``>=5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-kernlab: 
   :depends r-locfdr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nmf: 
   :depends r-phylobase: 
   :depends r-pracma: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-scales: 
   :depends r-stringr: 
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

      mamba install bioconductor-clusterexperiment

   and update with::

      mamba update bioconductor-clusterexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clusterexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterexperiment:<tag>

   (see `bioconductor-clusterexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterexperiment
   :alt:   (downloads)
.. |docker_bioconductor-clusterexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-clusterexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterexperiment
.. _`bioconductor-clusterexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterexperiment";
        var versions = ["2.26.0","2.22.0","2.22.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterexperiment/README.html