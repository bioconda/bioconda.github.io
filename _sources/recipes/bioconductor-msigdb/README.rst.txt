:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msigdb'
.. highlight: bash

bioconductor-msigdb
===================

.. conda:recipe:: bioconductor-msigdb
   :replaces_section_title:
   :noindex:

   An ExperimentHub Package for the Molecular Signatures Database \(MSigDB\)

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/msigdb.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-msigdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msigdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msigdb/meta.yaml>`_

   This package provides the Molecular Signatures Database \(MSigDB\) in a R accessible objects. Signatures are stored in GeneSet class objects form the GSEABase package and the entire database is stored in a GeneSetCollection object. These data are then hosted on the ExperimentHub. Data used in this package was obtained from the MSigDB of the Broad Institute. Metadata for each gene set is stored along with the gene set in the GeneSet class object.


.. conda:package:: bioconductor-msigdb

   |downloads_bioconductor-msigdb| |docker_bioconductor-msigdb|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-gseabase: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msigdb

   and update with::

      conda update bioconductor-msigdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msigdb:<tag>

   (see `bioconductor-msigdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msigdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msigdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msigdb
   :alt:   (downloads)
.. |docker_bioconductor-msigdb| image:: https://quay.io/repository/biocontainers/bioconductor-msigdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msigdb
.. _`bioconductor-msigdb/tags`: https://quay.io/repository/biocontainers/bioconductor-msigdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msigdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msigdb/README.html