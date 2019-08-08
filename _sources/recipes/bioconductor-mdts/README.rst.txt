:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdts'
.. highlight: bash

bioconductor-mdts
=================

.. conda:recipe:: bioconductor-mdts
   :replaces_section_title:

   A package for the detection of de novo copy number deletions in targeted sequencing of trios with high sensitivity and positive predictive value.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MDTS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mdts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdts/meta.yaml>`_

   


.. conda:package:: bioconductor-mdts

   |downloads_bioconductor-mdts| |docker_bioconductor-mdts|

   :versions: 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-dnacopy: >=1.58.0,<1.59.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdts

   and update with::

      conda update bioconductor-mdts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mdts:<tag>

   (see `bioconductor-mdts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mdts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mdts
   :alt:   (downloads)
.. |docker_bioconductor-mdts| image:: https://quay.io/repository/biocontainers/bioconductor-mdts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdts
.. _`bioconductor-mdts/tags`: https://quay.io/repository/biocontainers/bioconductor-mdts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdts/README.html