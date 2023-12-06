:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-runibic'
.. highlight: bash

bioconductor-runibic
====================

.. conda:recipe:: bioconductor-runibic
   :replaces_section_title:
   :noindex:

   runibic\: row\-based biclustering algorithm for analysis of gene expression data in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/runibic.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-runibic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-runibic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-runibic/meta.yaml>`_

   This package implements UbiBic algorithm in R. This biclustering algorithm for analysis of gene expression data was introduced by Zhenjia Wang et al. in 2016. It is currently considered the most promising biclustering method for identification of meaningful structures in complex and noisy data.


.. conda:package:: bioconductor-runibic

   |downloads_bioconductor-runibic| |docker_bioconductor-runibic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-2</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-2``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biclust: 
   :depends r-rcpp: ``>=0.12.12``
   :depends r-testthat: 
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

      mamba install bioconductor-runibic

   and update with::

      mamba update bioconductor-runibic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-runibic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-runibic:<tag>

   (see `bioconductor-runibic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-runibic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-runibic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-runibic
   :alt:   (downloads)
.. |docker_bioconductor-runibic| image:: https://quay.io/repository/biocontainers/bioconductor-runibic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-runibic
.. _`bioconductor-runibic/tags`: https://quay.io/repository/biocontainers/bioconductor-runibic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-runibic";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-runibic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-runibic/README.html