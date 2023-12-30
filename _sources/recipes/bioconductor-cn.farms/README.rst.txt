:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cn.farms'
.. highlight: bash

bioconductor-cn.farms
=====================

.. conda:recipe:: bioconductor-cn.farms
   :replaces_section_title:
   :noindex:

   cn.FARMS \- factor analysis for copy number estimation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cn.farms.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-cn.farms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.farms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.farms/meta.yaml>`_
   :links: biotools: :biotools:`cn.farms`, doi: :doi:`10.1093/nar/gkr197`

   This package implements the cn.FARMS algorithm for copy number variation \(CNV\) analysis. cn.FARMS allows to analyze the most common Affymetrix \(250K\-SNP6.0\) array types\, supports high\-performance computing using snow and ff.


.. conda:package:: bioconductor-cn.farms

   |downloads_bioconductor-cn.farms| |docker_bioconductor-cn.farms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affxparser: ``>=1.74.0,<1.75.0``
   :depends bioconductor-affxparser: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-oligo: ``>=1.66.0,<1.67.0``
   :depends bioconductor-oligo: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-oligoclasses: ``>=1.64.0,<1.65.0``
   :depends bioconductor-oligoclasses: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-ff: 
   :depends r-lattice: 
   :depends r-snow: 
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

      mamba install bioconductor-cn.farms

   and update with::

      mamba update bioconductor-cn.farms

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cn.farms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cn.farms:<tag>

   (see `bioconductor-cn.farms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cn.farms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cn.farms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cn.farms
   :alt:   (downloads)
.. |docker_bioconductor-cn.farms| image:: https://quay.io/repository/biocontainers/bioconductor-cn.farms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cn.farms
.. _`bioconductor-cn.farms/tags`: https://quay.io/repository/biocontainers/bioconductor-cn.farms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cn.farms";
        var versions = ["1.50.0","1.48.0","1.46.0","1.46.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cn.farms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cn.farms/README.html