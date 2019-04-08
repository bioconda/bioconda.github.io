:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-padog'
.. highlight: bash

bioconductor-padog
==================

.. conda:recipe:: bioconductor-padog
   :replaces_section_title:

   This package implements a general purpose gene set analysis method called PADOG that downplays the importance of genes that apear often accross the sets of genes to be analyzed. The package provides also a benchmark for gene set analysis methods in terms of sensitivity and ranking using 24 public datasets from KEGGdzPathwaysGEO package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PADOG.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-padog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padog/meta.yaml>`_
   :links: biotools: :biotools:`padog`, doi: :doi:`10.1186/1471-2105-13-136`

   


.. conda:package:: bioconductor-padog

   |downloads_bioconductor-padog| |docker_bioconductor-padog|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-hgu133a.db: >=3.2.0,<3.3.0
   :depends bioconductor-hgu133plus2.db: >=3.2.0,<3.3.0
   :depends bioconductor-kegg.db: >=3.2.0,<3.3.0
   :depends bioconductor-keggdzpathwaysgeo: >=1.20.0,<1.21.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-gsa: 
   :depends r-nlme: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-padog

   and update with::

      conda update bioconductor-padog

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-padog:<tag>

   (see `bioconductor-padog/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-padog| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-padog.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-padog| image:: https://quay.io/repository/biocontainers/bioconductor-padog/status
   :target: https://quay.io/repository/biocontainers/bioconductor-padog
.. _`bioconductor-padog/tags`: https://quay.io/repository/biocontainers/bioconductor-padog?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-padog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-padog/README.html