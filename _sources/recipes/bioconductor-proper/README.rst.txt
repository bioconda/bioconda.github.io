:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proper'
.. highlight: bash

bioconductor-proper
===================

.. conda:recipe:: bioconductor-proper
   :replaces_section_title:

   This package provide simulation based methods for evaluating the statistical power in differential expression analysis from RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PROPER.html
   :license: GPL
   :recipe: /`bioconductor-proper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proper/meta.yaml>`_
   :links: biotools: :biotools:`proper`

   


.. conda:package:: bioconductor-proper

   |downloads_bioconductor-proper| |docker_bioconductor-proper|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proper

   and update with::

      conda update bioconductor-proper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-proper:<tag>

   (see `bioconductor-proper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-proper| image:: https://quay.io/repository/biocontainers/bioconductor-proper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proper
.. _`bioconductor-proper/tags`: https://quay.io/repository/biocontainers/bioconductor-proper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proper/README.html