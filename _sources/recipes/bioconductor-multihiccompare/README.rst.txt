:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multihiccompare'
.. highlight: bash

bioconductor-multihiccompare
============================

.. conda:recipe:: bioconductor-multihiccompare
   :replaces_section_title:
   :noindex:

   Normalize and detect differences between Hi\-C datasets when replicates of each experimental condition are available

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multiHiCcompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-multihiccompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare/meta.yaml>`_

   multiHiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. This extension of the original HiCcompare package now allows for Hi\-C experiments with more than 2 groups and multiple samples per group. multiHiCcompare operates on processed Hi\-C data in the form of sparse upper triangular matrices. It accepts four column \(chromosome\, region1\, region2\, IF\) tab\-separated text files storing chromatin interaction matrices. multiHiCcompare provides cyclic loess and fast loess \(fastlo\) methods adapted to jointly normalizing Hi\-C data. Additionally\, it provides a general linear model \(GLM\) framework adapting the edgeR package to detect differences in Hi\-C data in a distance dependent manner.


.. conda:package:: bioconductor-multihiccompare

   |downloads_bioconductor-multihiccompare| |docker_bioconductor-multihiccompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-hiccompare: ``>=1.28.0,<1.29.0``
   :depends r-aggregation: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-pbapply: 
   :depends r-pheatmap: 
   :depends r-qqman: 
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

      mamba install bioconductor-multihiccompare

   and update with::

      mamba update bioconductor-multihiccompare

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multihiccompare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multihiccompare:<tag>

   (see `bioconductor-multihiccompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multihiccompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multihiccompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multihiccompare
   :alt:   (downloads)
.. |docker_bioconductor-multihiccompare| image:: https://quay.io/repository/biocontainers/bioconductor-multihiccompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multihiccompare
.. _`bioconductor-multihiccompare/tags`: https://quay.io/repository/biocontainers/bioconductor-multihiccompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multihiccompare";
        var versions = ["1.24.0","1.20.0","1.18.1","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html