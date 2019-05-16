:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tnt'
.. highlight: bash

bioconductor-tnt
================

.. conda:recipe:: bioconductor-tnt
   :replaces_section_title:

   A R interface to the TnT javascript library \(https\:\/\/github.com\/ tntvis\) to provide interactive and flexible visualization of track\-based genomic data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/TnT.html
   :license: AGPL-3
   :recipe: /`bioconductor-tnt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnt/meta.yaml>`_

   


.. conda:package:: bioconductor-tnt

   |downloads_bioconductor-tnt| |docker_bioconductor-tnt|

   :versions: 1.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-htmlwidgets: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tnt

   and update with::

      conda update bioconductor-tnt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tnt:<tag>

   (see `bioconductor-tnt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tnt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tnt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tnt
   :alt:   (downloads)
.. |docker_bioconductor-tnt| image:: https://quay.io/repository/biocontainers/bioconductor-tnt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tnt
.. _`bioconductor-tnt/tags`: https://quay.io/repository/biocontainers/bioconductor-tnt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tnt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tnt/README.html