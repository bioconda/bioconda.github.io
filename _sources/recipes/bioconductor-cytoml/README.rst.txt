:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytoml'
.. highlight: bash

bioconductor-cytoml
===================

.. conda:recipe:: bioconductor-cytoml
   :replaces_section_title:

   A GatingML Interface for Cross Platform Cytometry Data Sharing

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/CytoML.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytoml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml/meta.yaml>`_

   Uses platform\-specific implemenations of the GatingML2.0 standard to exchange gated cytometry data with other software platforms.


.. conda:package:: bioconductor-cytoml

   |downloads_bioconductor-cytoml| |docker_bioconductor-cytoml|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.1-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-cytolib: >=1.8.0,<1.9.0
   :depends bioconductor-flowcore: >=1.52.0,<1.53.0
   :depends bioconductor-flowworkspace: >=3.34.0,<3.35.0
   :depends bioconductor-ggcyto: >=1.14.0,<1.15.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-ncdfflow: >=2.32.0,<2.33.0
   :depends bioconductor-opencyto: >=1.24.0,<1.25.0
   :depends bioconductor-rbgl: >=1.62.0,<1.63.0
   :depends bioconductor-rgraphviz: >=2.30.0,<2.31.0
   :depends bioconductor-rprotobuflib: >=1.8.0,<1.9.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends libxml2: >=2.9.10,<2.10.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-base64enc: 
   :depends r-bh: >=1.62.0-1
   :depends r-corpcor: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-lattice: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
   :depends r-runit: 
   :depends r-xml: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytoml

   and update with::

      conda update bioconductor-cytoml

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytoml:<tag>

   (see `bioconductor-cytoml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytoml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytoml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytoml
   :alt:   (downloads)
.. |docker_bioconductor-cytoml| image:: https://quay.io/repository/biocontainers/bioconductor-cytoml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytoml
.. _`bioconductor-cytoml/tags`: https://quay.io/repository/biocontainers/bioconductor-cytoml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytoml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytoml/README.html