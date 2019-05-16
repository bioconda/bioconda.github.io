:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intansv'
.. highlight: bash

bioconductor-intansv
====================

.. conda:recipe:: bioconductor-intansv
   :replaces_section_title:

   This package provides efficient tools to read and integrate structural variations predicted by popular softwares. Annotation and visulation of structural variations are also implemented in the package.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/intansv.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-intansv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intansv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intansv/meta.yaml>`_

   


.. conda:package:: bioconductor-intansv

   |downloads_bioconductor-intansv| |docker_bioconductor-intansv|

   :versions: 1.22.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-ggbio: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-intansv

   and update with::

      conda update bioconductor-intansv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intansv:<tag>

   (see `bioconductor-intansv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intansv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intansv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intansv
   :alt:   (downloads)
.. |docker_bioconductor-intansv| image:: https://quay.io/repository/biocontainers/bioconductor-intansv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intansv
.. _`bioconductor-intansv/tags`: https://quay.io/repository/biocontainers/bioconductor-intansv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intansv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intansv/README.html