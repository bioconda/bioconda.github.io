:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interminer'
.. highlight: bash

bioconductor-interminer
=======================

.. conda:recipe:: bioconductor-interminer
   :replaces_section_title:

   Databases based on the InterMine platform such as FlyMine\, modMine \(modENCODE\)\, RatMine\, YeastMine\, HumanMine and TargetMine are integrated databases of genomic\, expression and protein data for various organisms. Integrating data makes it possible to run sophisticated data mining queries that span domains of biological knowledge. This R package provides interfaces with these databases through webservices. It makes most from the correspondence of the data frame object in R and the table object in databases\, while hiding the details of data exchange through XML or JSON.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/InterMineR.html
   :license: LGPL
   :recipe: /`bioconductor-interminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer/meta.yaml>`_

   


.. conda:package:: bioconductor-interminer

   |downloads_bioconductor-interminer| |docker_bioconductor-interminer|

   :versions: 1.4.1-0, 1.2.1-0, 1.0.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-sqldf: 
   :depends r-xml: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interminer

   and update with::

      conda update bioconductor-interminer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interminer:<tag>

   (see `bioconductor-interminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interminer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-interminer| image:: https://quay.io/repository/biocontainers/bioconductor-interminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interminer
.. _`bioconductor-interminer/tags`: https://quay.io/repository/biocontainers/bioconductor-interminer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interminer/README.html