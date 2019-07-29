:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-covrna'
.. highlight: bash

bioconductor-covrna
===================

.. conda:recipe:: bioconductor-covrna
   :replaces_section_title:

   This package provides the analysis methods fourthcorner and RLQ analysis for large\-scale transcriptomic data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/covRNA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-covrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-covrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-covrna/meta.yaml>`_
   :links: biotools: :biotools:`covrna`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-covrna

   |downloads_bioconductor-covrna| |docker_bioconductor-covrna|

   :versions: 1.10.0-1, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-genefilter: >=1.66.0,<1.67.0
   :depends r-ade4: 
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-covrna

   and update with::

      conda update bioconductor-covrna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-covrna:<tag>

   (see `bioconductor-covrna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-covrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-covrna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-covrna
   :alt:   (downloads)
.. |docker_bioconductor-covrna| image:: https://quay.io/repository/biocontainers/bioconductor-covrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-covrna
.. _`bioconductor-covrna/tags`: https://quay.io/repository/biocontainers/bioconductor-covrna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-covrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-covrna/README.html