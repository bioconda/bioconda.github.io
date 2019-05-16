:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hem'
.. highlight: bash

bioconductor-hem
================

.. conda:recipe:: bioconductor-hem
   :replaces_section_title:

   This package fits heterogeneous error models for analysis of microarray data

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/HEM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hem/meta.yaml>`_
   :links: biotools: :biotools:`hem`, doi: :doi:`10.1093/bioinformatics/bth192`

   


.. conda:package:: bioconductor-hem

   |downloads_bioconductor-hem| |docker_bioconductor-hem|

   :versions: 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hem

   and update with::

      conda update bioconductor-hem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hem:<tag>

   (see `bioconductor-hem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hem
   :alt:   (downloads)
.. |docker_bioconductor-hem| image:: https://quay.io/repository/biocontainers/bioconductor-hem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hem
.. _`bioconductor-hem/tags`: https://quay.io/repository/biocontainers/bioconductor-hem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hem/README.html