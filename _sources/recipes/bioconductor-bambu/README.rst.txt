:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bambu'
.. highlight: bash

bioconductor-bambu
==================

.. conda:recipe:: bioconductor-bambu
   :replaces_section_title:
   :noindex:

   Context\-Aware Transcript Quantification from Long Read RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bambu.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bambu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bambu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bambu/meta.yaml>`_

   bambu is a R package for multi\-sample transcript discovery and quantification using long read RNA\-Seq data. You can use bambu after read alignment to obtain expression estimates for known and novel transcripts and genes. The output from bambu can directly be used for visualisation and downstream analysis such as differential gene expression or transcript usage.


.. conda:package:: bioconductor-bambu

   |downloads_bioconductor-bambu| |docker_bioconductor-bambu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8.3-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.2.4-0</code>,  <code>3.0.8-1</code>,  <code>3.0.8-0</code>,  <code>3.0.6-0</code>,  <code>3.0.5-0</code>,  <code>3.0.1-0</code>,  </span></summary>
      

      ``3.8.3-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.2.4-0``,  ``3.0.8-1``,  ``3.0.8-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.1-0``,  ``2.0.6-1``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-2``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
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
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-tidyr: 
   :depends r-xgboost: 
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

      mamba install bioconductor-bambu

   and update with::

      mamba update bioconductor-bambu

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bambu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bambu:<tag>

   (see `bioconductor-bambu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bambu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bambu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bambu
   :alt:   (downloads)
.. |docker_bioconductor-bambu| image:: https://quay.io/repository/biocontainers/bioconductor-bambu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bambu
.. _`bioconductor-bambu/tags`: https://quay.io/repository/biocontainers/bioconductor-bambu?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bambu";
        var versions = ["3.8.3","3.4.0","3.4.0","3.2.4","3.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bambu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bambu/README.html