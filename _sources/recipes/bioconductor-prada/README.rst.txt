:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prada'
.. highlight: bash

bioconductor-prada
==================

.. conda:recipe:: bioconductor-prada
   :replaces_section_title:

   Tools for analysing and navigating data from high\-throughput phenotyping experiments based on cellular assays and fluorescent detection \(flow cytometry \(FACS\)\, high\-content screening microscopy\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/prada.html
   :license: LGPL
   :recipe: /`bioconductor-prada <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prada>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prada/meta.yaml>`_
   :links: biotools: :biotools:`prada`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-prada

   |downloads_bioconductor-prada| |docker_bioconductor-prada|

   :versions: 1.58.1-0, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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