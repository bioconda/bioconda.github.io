:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytoml'
.. highlight: bash

bioconductor-cytoml
===================

.. conda:recipe:: bioconductor-cytoml
   :replaces_section_title:

   Uses platform\-specific implemenations of the GatingML2.0 standard to exchange gated cytometry data with other software platforms.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CytoML.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytoml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml/meta.yaml>`_

   


.. conda:package:: bioconductor-cytoml

   |downloads_bioconductor-cytoml| |docker_bioconductor-cytoml|

   :versions: 1.8.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   :depends bioconductor-flowutils: >=1.46.0,<1.47.0
   :depends bioconductor-flowworkspace: >=3.30.0,<3.31.0
   :depends bioconductor-ggcyto: >=1.10.0,<1.11.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-ncdfflow: >=2.28.0,<2.29.0
   :depends bioconductor-opencyto: >=1.20.0,<1.21.0
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-base64enc: 
   :depends r-data.table: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-xml: 
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