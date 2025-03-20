:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspace'
.. highlight: bash

bioconductor-flowworkspace
==========================

.. conda:recipe:: bioconductor-flowworkspace
   :replaces_section_title:
   :noindex:

   Infrastructure for representing and interacting with gated and ungated cytometry data sets.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowWorkspace.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-flowworkspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace/meta.yaml>`_
   :links: biotools: :biotools:`flowworkspace`, doi: :doi:`10.1186/1471-2105-13-252`

   This package is designed to facilitate comparison of automated gating methods against manual gating done in flowJo. This package allows you to import basic flowJo workspaces into BioConductor and replicate the gating from flowJo using the flowCore functionality. Gating hierarchies\, groups of samples\, compensation\, and transformation are performed so that the output matches the flowJo analysis.


.. conda:package:: bioconductor-flowworkspace

   |downloads_bioconductor-flowworkspace| |docker_bioconductor-flowworkspace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.18.0-1</code>,  <code>4.18.0-0</code>,  <code>4.14.0-0</code>,  <code>4.12.0-0</code>,  <code>4.10.0-1</code>,  <code>4.10.0-0</code>,  <code>4.6.0-2</code>,  <code>4.6.0-1</code>,  <code>4.6.0-0</code>,  </span></summary>
      

      ``4.18.0-1``,  ``4.18.0-0``,  ``4.14.0-0``,  ``4.12.0-0``,  ``4.10.0-1``,  ``4.10.0-0``,  ``4.6.0-2``,  ``4.6.0-1``,  ``4.6.0-0``,  ``4.4.0-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.1-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.30.2-0``,  ``3.30.1-0``,  ``3.28.2-0``,  ``3.26.2-0``,  ``3.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-cytolib: ``>=2.18.0,<2.19.0``
   :depends bioconductor-cytolib: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-ncdfflow: ``>=2.52.0,<2.53.0``
   :depends bioconductor-ncdfflow: ``>=2.52.0,<2.53.0a0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0a0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-rprotobuflib: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rprotobuflib: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: ``>=1.62.0-1``
   :depends r-cpp11: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-scales: ``>=1.3.0``
   :depends r-xml: 
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

      mamba install bioconductor-flowworkspace

   and update with::

      mamba update bioconductor-flowworkspace

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowworkspace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowworkspace:<tag>

   (see `bioconductor-flowworkspace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowworkspace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowworkspace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowworkspace
   :alt:   (downloads)
.. |docker_bioconductor-flowworkspace| image:: https://quay.io/repository/biocontainers/bioconductor-flowworkspace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowworkspace
.. _`bioconductor-flowworkspace/tags`: https://quay.io/repository/biocontainers/bioconductor-flowworkspace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowworkspace";
        var versions = ["4.18.0","4.18.0","4.14.0","4.12.0","4.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html