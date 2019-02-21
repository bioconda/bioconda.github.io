:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lymphoseqdb'
.. highlight: bash

bioconductor-lymphoseqdb
========================

.. conda:recipe:: bioconductor-lymphoseqdb
   :replaces_section_title:

   This package provides annotation databases that support the package LymphoSeq.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/LymphoSeqDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lymphoseqdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lymphoseqdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lymphoseqdb/meta.yaml>`_

   


.. conda:package:: bioconductor-lymphoseqdb

   |downloads_bioconductor-lymphoseqdb| |docker_bioconductor-lymphoseqdb|

   :versions: 0.99.2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lymphoseqdb

   and update with::

      conda update bioconductor-lymphoseqdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lymphoseqdb:<tag>

   (see `bioconductor-lymphoseqdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lymphoseqdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lymphoseqdb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lymphoseqdb| image:: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb
.. _`bioconductor-lymphoseqdb/tags`: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lymphoseqdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lymphoseqdb/README.html