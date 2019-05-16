:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reqon'
.. highlight: bash

bioconductor-reqon
==================

.. conda:recipe:: bioconductor-reqon
   :replaces_section_title:

   Algorithm for recalibrating the base quality scores for aligned sequencing data in BAM format.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ReQON.html
   :license: GPL-2
   :recipe: /`bioconductor-reqon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reqon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reqon/meta.yaml>`_

   


.. conda:package:: bioconductor-reqon

   |downloads_bioconductor-reqon| |docker_bioconductor-reqon|

   :versions: 1.28.0-0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-seqbias: >=1.30.0,<1.31.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reqon

   and update with::

      conda update bioconductor-reqon

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reqon:<tag>

   (see `bioconductor-reqon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reqon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reqon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reqon
   :alt:   (downloads)
.. |docker_bioconductor-reqon| image:: https://quay.io/repository/biocontainers/bioconductor-reqon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reqon
.. _`bioconductor-reqon/tags`: https://quay.io/repository/biocontainers/bioconductor-reqon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reqon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reqon/README.html