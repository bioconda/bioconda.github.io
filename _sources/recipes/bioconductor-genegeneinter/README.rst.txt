:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genegeneinter'
.. highlight: bash

bioconductor-genegeneinter
==========================

.. conda:recipe:: bioconductor-genegeneinter
   :replaces_section_title:
   :noindex:

   Tools for Testing Gene\-Gene Interaction at the Gene Level

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GeneGeneInteR.html
   :license: GPL-3.0.-or-later
   :recipe: /`bioconductor-genegeneinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genegeneinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genegeneinter/meta.yaml>`_
   :links: biotools: :biotools:`genegeneinter`

   The aim of this package is to propose several methods for testing gene\-gene interaction in case\-control association studies. Such a test can be done by aggregating SNP\-SNP interaction tests performed at the SNP level \(SSI\) or by using gene\-gene multidimensionnal methods \(GGI\) methods. The package also proposes tools for a graphic display of the results. \<doi\:10.18637\/jss.v095.i12\>.


.. conda:package:: bioconductor-genegeneinter

   |downloads_bioconductor-genegeneinter| |docker_bioconductor-genegeneinter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-snpstats: ``>=1.56.0,<1.57.0``
   :depends bioconductor-snpstats: ``>=1.56.0,<1.57.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-factominer: 
   :depends r-igraph: 
   :depends r-kernlab: 
   :depends r-mvtnorm: 
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

      mamba install bioconductor-genegeneinter

   and update with::

      mamba update bioconductor-genegeneinter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genegeneinter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genegeneinter:<tag>

   (see `bioconductor-genegeneinter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genegeneinter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genegeneinter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genegeneinter
   :alt:   (downloads)
.. |docker_bioconductor-genegeneinter| image:: https://quay.io/repository/biocontainers/bioconductor-genegeneinter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genegeneinter
.. _`bioconductor-genegeneinter/tags`: https://quay.io/repository/biocontainers/bioconductor-genegeneinter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genegeneinter";
        var versions = ["1.32.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genegeneinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genegeneinter/README.html