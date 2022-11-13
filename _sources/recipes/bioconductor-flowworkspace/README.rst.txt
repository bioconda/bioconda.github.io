:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspace'
.. highlight: bash

bioconductor-flowworkspace
==========================

.. conda:recipe:: bioconductor-flowworkspace
   :replaces_section_title:
   :noindex:

   Infrastructure for representing and interacting with gated and ungated cytometry data sets.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/flowWorkspace.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-flowworkspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace/meta.yaml>`_
   :links: biotools: :biotools:`flowworkspace`, doi: :doi:`10.1186/1471-2105-13-252`

   This package is designed to facilitate comparison of automated gating methods against manual gating done in flowJo. This package allows you to import basic flowJo workspaces into BioConductor and replicate the gating from flowJo using the flowCore functionality. Gating hierarchies\, groups of samples\, compensation\, and transformation are performed so that the output matches the flowJo analysis.


.. conda:package:: bioconductor-flowworkspace

   |downloads_bioconductor-flowworkspace| |docker_bioconductor-flowworkspace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.10.0-0</code>,  <code>4.6.0-2</code>,  <code>4.6.0-1</code>,  <code>4.6.0-0</code>,  <code>4.4.0-0</code>,  <code>4.2.0-2</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.0.1-0</code>,  </span></summary>
      

      ``4.10.0-0``,  ``4.6.0-2``,  ``4.6.0-1``,  ``4.6.0-0``,  ``4.4.0-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.1-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.30.2-0``,  ``3.30.1-0``,  ``3.28.2-0``,  ``3.26.2-0``,  ``3.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-cytolib: ``>=2.10.0,<2.11.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-ncdfflow: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rbgl: ``>=1.74.0,<1.75.0``
   :depends bioconductor-rgraphviz: ``>=2.42.0,<2.43.0``
   :depends bioconductor-rhdf5lib: ``>=1.20.0,<1.21.0``
   :depends bioconductor-rprotobuflib: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: ``>=1.62.0-1``
   :depends r-cpp11: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-scales: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowworkspace

   and update with::

      conda update bioconductor-flowworkspace

   or use the docker container::

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
        var versions = ["4.10.0","4.6.0","4.6.0","4.6.0","4.4.0"];
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