:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vega'
.. highlight: bash

bioconductor-vega
=================

.. conda:recipe:: bioconductor-vega
   :replaces_section_title:
   :noindex:

   An R package for copy number data segmentation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Vega.html
   :license: GPL-2
   :recipe: /`bioconductor-vega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vega/meta.yaml>`_
   :links: biotools: :biotools:`vega`, doi: :doi:`10.1093/bioinformatics/btq586`

   Vega \(Variational Estimator for Genomic Aberrations\) is an algorithm that adapts a very popular variational model \(Mumford and Shah\) used in image segmentation so that chromosomal aberrant regions can be efficiently detected.


.. conda:package:: bioconductor-vega

   |downloads_bioconductor-vega| |docker_bioconductor-vega|

   :versions:
      
      

      ``1.35.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vega

   and update with::

      conda update bioconductor-vega

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vega:<tag>

   (see `bioconductor-vega/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vega| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vega.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vega
   :alt:   (downloads)
.. |docker_bioconductor-vega| image:: https://quay.io/repository/biocontainers/bioconductor-vega/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vega
.. _`bioconductor-vega/tags`: https://quay.io/repository/biocontainers/bioconductor-vega?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vega/README.html