:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.rnorvegicus.biomart.igis'
.. highlight: bash

bioconductor-txdb.rnorvegicus.biomart.igis
==========================================

.. conda:recipe:: bioconductor-txdb.rnorvegicus.biomart.igis
   :replaces_section_title:

   Exposes an annotation databases generated from BioMart by exposing these as TxDb objects

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/TxDb.Rnorvegicus.BioMart.igis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.rnorvegicus.biomart.igis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.biomart.igis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.biomart.igis/meta.yaml>`_

   


.. conda:package:: bioconductor-txdb.rnorvegicus.biomart.igis

   |downloads_bioconductor-txdb.rnorvegicus.biomart.igis| |docker_bioconductor-txdb.rnorvegicus.biomart.igis|

   :versions: 2.3.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.rnorvegicus.biomart.igis

   and update with::

      conda update bioconductor-txdb.rnorvegicus.biomart.igis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis:<tag>

   (see `bioconductor-txdb.rnorvegicus.biomart.igis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.rnorvegicus.biomart.igis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.rnorvegicus.biomart.igis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-txdb.rnorvegicus.biomart.igis| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis
.. _`bioconductor-txdb.rnorvegicus.biomart.igis/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.biomart.igis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.biomart.igis/README.html