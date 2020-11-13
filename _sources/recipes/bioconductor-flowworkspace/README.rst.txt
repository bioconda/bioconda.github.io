:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspace'
.. highlight: bash

bioconductor-flowworkspace
==========================

.. conda:recipe:: bioconductor-flowworkspace
   :replaces_section_title:
   :noindex:

   Infrastructure for representing and interacting with gated and ungated cytometry data sets.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowWorkspace.html
   :license: file LICENSE
   :recipe: /`bioconductor-flowworkspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace/meta.yaml>`_
   :links: biotools: :biotools:`flowworkspace`, doi: :doi:`10.1186/1471-2105-13-252`

   This package is designed to facilitate comparison of automated gating methods against manual gating done in flowJo. This package allows you to import basic flowJo workspaces into BioConductor and replicate the gating from flowJo using the flowCore functionality. Gating hierarchies\, groups of samples\, compensation\, and transformation are performed so that the output matches the flowJo analysis.


.. conda:package:: bioconductor-flowworkspace

   |downloads_bioconductor-flowworkspace| |docker_bioconductor-flowworkspace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.0.1-0</code>,  <code>3.34.0-0</code>,  <code>3.32.0-1</code>,  <code>3.30.2-0</code>,  <code>3.30.1-0</code>,  <code>3.28.2-0</code>,  <code>3.26.2-0</code>,  </span></summary>
      

      ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.1-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.30.2-0``,  ``3.30.1-0``,  ``3.28.2-0``,  ``3.26.2-0``,  ``3.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-cytolib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-ncdfflow: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rbgl: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rgraphviz: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rhdf5lib: ``>=1.12.0,<1.13.0``
   :depends bioconductor-rprotobuflib: ``>=2.2.0,<2.3.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-aws.s3: 
   :depends r-aws.signature: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bh: ``>=1.62.0-1``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: ``>=4.4.2-1``
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html