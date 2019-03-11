:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-help'
.. highlight: bash

bioconductor-help
=================

.. conda:recipe:: bioconductor-help
   :replaces_section_title:

   The package contains a modular pipeline for analysis of HELP microarray data\, and includes graphical and mathematical tools with more general applications.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HELP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-help <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-help>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-help/meta.yaml>`_
   :links: biotools: :biotools:`help`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-help

   |downloads_bioconductor-help| |docker_bioconductor-help|

   :versions: 1.40.0-1, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-help

   and update with::

      conda update bioconductor-help

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-help:<tag>

   (see `bioconductor-help/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-help| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-help.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-help| image:: https://quay.io/repository/biocontainers/bioconductor-help/status
   :target: https://quay.io/repository/biocontainers/bioconductor-help
.. _`bioconductor-help/tags`: https://quay.io/repository/biocontainers/bioconductor-help?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-help/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-help/README.html