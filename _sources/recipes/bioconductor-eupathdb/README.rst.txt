:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eupathdb'
.. highlight: bash

bioconductor-eupathdb
=====================

.. conda:recipe:: bioconductor-eupathdb
   :replaces_section_title:

   Brings together annotation resources from the various EuPathDB databases \(PlasmoDB\, ToxoDB\, TriTrypDB\, etc.\) and makes them available in R using the AnnotationHub framework.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/EuPathDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-eupathdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eupathdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eupathdb/meta.yaml>`_

   


.. conda:package:: bioconductor-eupathdb

   |downloads_bioconductor-eupathdb| |docker_bioconductor-eupathdb|

   :versions: 1.0.1-2, 1.0.1-0
   
   :depends bioconductor-annotationhub: >=2.16.0,<2.17.0
   :depends bioconductor-annotationhubdata: >=1.14.0,<1.15.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodbdata: >=1.2.0,<1.3.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eupathdb

   and update with::

      conda update bioconductor-eupathdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eupathdb:<tag>

   (see `bioconductor-eupathdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eupathdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eupathdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eupathdb
   :alt:   (downloads)
.. |docker_bioconductor-eupathdb| image:: https://quay.io/repository/biocontainers/bioconductor-eupathdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eupathdb
.. _`bioconductor-eupathdb/tags`: https://quay.io/repository/biocontainers/bioconductor-eupathdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eupathdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eupathdb/README.html