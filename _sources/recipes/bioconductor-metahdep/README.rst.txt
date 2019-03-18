:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metahdep'
.. highlight: bash

bioconductor-metahdep
=====================

.. conda:recipe:: bioconductor-metahdep
   :replaces_section_title:

   Tools for meta\-analysis in the presence of hierarchical \(and\/or sampling\) dependence\, including with gene expression studies

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/metahdep.html
   :license: GPL-3
   :recipe: /`bioconductor-metahdep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metahdep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metahdep/meta.yaml>`_
   :links: biotools: :biotools:`metahdep`, doi: :doi:`10.1093/bioinformatics/btp468`

   


.. conda:package:: bioconductor-metahdep

   |downloads_bioconductor-metahdep| |docker_bioconductor-metahdep|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-0, 1.34.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metahdep

   and update with::

      conda update bioconductor-metahdep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metahdep:<tag>

   (see `bioconductor-metahdep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metahdep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metahdep.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metahdep| image:: https://quay.io/repository/biocontainers/bioconductor-metahdep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metahdep
.. _`bioconductor-metahdep/tags`: https://quay.io/repository/biocontainers/bioconductor-metahdep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metahdep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metahdep/README.html