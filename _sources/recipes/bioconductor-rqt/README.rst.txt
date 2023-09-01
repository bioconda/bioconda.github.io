:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rqt'
.. highlight: bash

bioconductor-rqt
================

.. conda:recipe:: bioconductor-rqt
   :replaces_section_title:
   :noindex:

   rqt\: utilities for gene\-level meta\-analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rqt.html
   :license: GPL
   :recipe: /`bioconductor-rqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqt/meta.yaml>`_

   Despite the recent advances of modern GWAS methods\, it still remains an important problem of addressing calculation an effect size and corresponding p\-value for the whole gene rather than for single variant. The R\- package rqt offers gene\-level GWAS meta\-analysis. For more information\, see\: \"Gene\-set association tests for next\-generation sequencing data\" by Lee et al \(2016\)\, Bioinformatics\, 32\(17\)\, i611\-i619\, \<doi\:10.1093\/bioinformatics\/btw429\>.


.. conda:package:: bioconductor-rqt

   |downloads_bioconductor-rqt| |docker_bioconductor-rqt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ropls: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-compquadform: 
   :depends r-glmnet: 
   :depends r-matrix: 
   :depends r-metap: 
   :depends r-pls: 
   :depends r-runit: 
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

      mamba install bioconductor-rqt

   and update with::

      mamba update bioconductor-rqt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rqt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rqt:<tag>

   (see `bioconductor-rqt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rqt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rqt
   :alt:   (downloads)
.. |docker_bioconductor-rqt| image:: https://quay.io/repository/biocontainers/bioconductor-rqt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqt
.. _`bioconductor-rqt/tags`: https://quay.io/repository/biocontainers/bioconductor-rqt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rqt";
        var versions = ["1.26.0","1.24.0","1.19.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqt/README.html