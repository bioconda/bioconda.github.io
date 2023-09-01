:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bprmeth'
.. highlight: bash

bioconductor-bprmeth
====================

.. conda:recipe:: bioconductor-bprmeth
   :replaces_section_title:
   :noindex:

   Model higher\-order methylation profiles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BPRMeth.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-bprmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bprmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bprmeth/meta.yaml>`_

   The BPRMeth package is a probabilistic method to quantify explicit features of methylation profiles\, in a way that would make it easier to formally use such profiles in downstream modelling efforts\, such as predicting gene expression levels or clustering genomic regions or cells according to their methylation profiles.


.. conda:package:: bioconductor-bprmeth

   |downloads_bioconductor-bprmeth| |docker_bioconductor-bprmeth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.1-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.26.1-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-e1071: 
   :depends r-earth: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-kernlab: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrixcalc: 
   :depends r-mvtnorm: 
   :depends r-randomforest: 
   :depends r-rcpp: ``>=0.12.14``
   :depends r-rcpparmadillo: 
   :depends r-truncnorm: 
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

      mamba install bioconductor-bprmeth

   and update with::

      mamba update bioconductor-bprmeth

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bprmeth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bprmeth:<tag>

   (see `bioconductor-bprmeth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bprmeth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bprmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bprmeth
   :alt:   (downloads)
.. |docker_bioconductor-bprmeth| image:: https://quay.io/repository/biocontainers/bioconductor-bprmeth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bprmeth
.. _`bioconductor-bprmeth/tags`: https://quay.io/repository/biocontainers/bioconductor-bprmeth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bprmeth";
        var versions = ["1.26.1","1.24.0","1.24.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bprmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bprmeth/README.html