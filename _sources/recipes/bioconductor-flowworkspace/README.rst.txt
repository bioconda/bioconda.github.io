.. title:: Package Recipe 'bioconductor-flowworkspace'
.. highlight: bash


bioconductor-flowworkspace
==========================

.. conda:recipe:: bioconductor-flowworkspace
   :replaces_section_title:

   This package is designed to facilitate comparison of automated gating methods against manual gating done in flowJo. This package allows you to import basic flowJo workspaces into BioConductor and replicate the gating from flowJo using the flowCore functionality. Gating hierarchies\, groups of samples\, compensation\, and transformation are performed so that the output matches the flowJo analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowWorkspace.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowworkspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace/meta.yaml>`_
   :links: biotools: :biotools:`flowworkspace`, doi: :doi:`10.1186/1471-2105-13-252`

   


.. conda:package:: bioconductor-flowworkspace

   |downloads_bioconductor-flowworkspace| |docker_bioconductor-flowworkspace|

   :versions: 3.30.1, 3.28.2, 3.26.2, 3.24.4

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-cytolib` >=1.4.0,<1.5.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowviz` >=1.46.0,<1.47.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-ncdfflow` >=2.28.0,<2.29.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`bioconductor-rprotobuflib` >=1.4.0,<1.5.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh` >=1.62.0-1 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-gridextra`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-matrixstats`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp`  :conda:package:`r-scales`  :conda:package:`r-stringr`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-flowworkspace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowworkspace

   and update with::

      conda update bioconductor-flowworkspace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowworkspace


.. |required_by_bioconductor-flowworkspace| conda:required_by:: bioconductor-flowworkspace
.. |downloads_bioconductor-flowworkspace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowworkspace.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowworkspace| image:: https://quay.io/repository/biocontainers/bioconductor-flowworkspace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowworkspace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html

