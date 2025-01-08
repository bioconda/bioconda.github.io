:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opencyto'
.. highlight: bash

bioconductor-opencyto
=====================

.. conda:recipe:: bioconductor-opencyto
   :replaces_section_title:
   :noindex:

   Hierarchical Gating Pipeline for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/openCyto.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-opencyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opencyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opencyto/meta.yaml>`_

   This package is designed to facilitate the automated gating methods in sequential way to mimic the manual gating strategy.


.. conda:package:: bioconductor-opencyto

   |downloads_bioconductor-opencyto| |docker_bioconductor-opencyto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-flowclust: ``>=3.44.0,<3.45.0``
   :depends bioconductor-flowclust: ``>=3.44.0,<3.45.0a0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-flowviz: ``>=1.70.0,<1.71.0``
   :depends bioconductor-flowviz: ``>=1.70.0,<1.71.0a0``
   :depends bioconductor-flowworkspace: ``>=4.18.0,<4.19.0``
   :depends bioconductor-flowworkspace: ``>=4.18.0,<4.19.0a0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-ncdfflow: ``>=2.52.0,<2.53.0``
   :depends bioconductor-ncdfflow: ``>=2.52.0,<2.53.0a0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-cpp11: 
   :depends r-data.table: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-opencyto

   and update with::

      mamba update bioconductor-opencyto

  To create a new environment, run::

      mamba create --name myenvname bioconductor-opencyto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-opencyto:<tag>

   (see `bioconductor-opencyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-opencyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opencyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opencyto
   :alt:   (downloads)
.. |docker_bioconductor-opencyto| image:: https://quay.io/repository/biocontainers/bioconductor-opencyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opencyto
.. _`bioconductor-opencyto/tags`: https://quay.io/repository/biocontainers/bioconductor-opencyto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-opencyto";
        var versions = ["2.18.0","2.14.0","2.12.0","2.10.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opencyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opencyto/README.html