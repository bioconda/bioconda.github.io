:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prada'
.. highlight: bash

bioconductor-prada
==================

.. conda:recipe:: bioconductor-prada
   :replaces_section_title:

   Data analysis for cell\-based functional assays

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/prada.html
   :license: LGPL
   :recipe: /`bioconductor-prada <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prada>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prada/meta.yaml>`_
   :links: biotools: :biotools:`prada`, doi: :doi:`10.1038/nmeth.3252`

   Tools for analysing and navigating data from high\-throughput phenotyping experiments based on cellular assays and fluorescent detection \(flow cytometry \(FACS\)\, high\-content screening microscopy\).


.. conda:package:: bioconductor-prada

   |downloads_bioconductor-prada| |docker_bioconductor-prada|

   :versions: 1.63.0-0, 1.62.0-0, 1.60.0-1, 1.58.1-0, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prada

   and update with::

      conda update bioconductor-prada

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prada:<tag>

   (see `bioconductor-prada/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prada| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prada.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prada
   :alt:   (downloads)
.. |docker_bioconductor-prada| image:: https://quay.io/repository/biocontainers/bioconductor-prada/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prada
.. _`bioconductor-prada/tags`: https://quay.io/repository/biocontainers/bioconductor-prada?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prada/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prada/README.html